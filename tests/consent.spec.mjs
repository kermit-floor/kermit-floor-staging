import {readFileSync} from 'node:fs';
import {expect, test} from '@playwright/test';

// Exercise the actual Next/React lifecycle. Substitute only the remote GA script:
// its load event runs normally, while no test traffic reaches Google or other sites.
async function isolateAnalytics(context, baseURL, loaderReady = Promise.resolve()) {
  const state = {loads: 0, errors: []};
  const watchErrors = (page) => page.on('pageerror', (error) => state.errors.push(error.message));
  context.pages().forEach(watchErrors);
  context.on('page', watchErrors);
  await context.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (url.origin === baseURL) {
      await route.continue();
    } else if (url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js') {
      state.loads += 1;
      await loaderReady;
      await route.fulfill({contentType: 'application/javascript', body: '// Isolated analytics loader.'});
    } else {
      await route.abort();
    }
  });
  return state;
}

async function commands(page) {
  return page.evaluate(() => {
    let consent = 'unset';
    return (window.dataLayer ?? []).map((entry) => {
      const [command, name, params] = Array.from(entry);
      if (command === 'consent') consent = params.analytics_storage;
      return {command, name, params, consent};
    });
  });
}

async function events(page, name) {
  return (await commands(page)).filter((item) => item.command === 'event' && item.name === name);
}

async function assertPageViews(page, count) {
  await expect.poll(async () => (await events(page, 'page_view')).length).toBeGreaterThanOrEqual(count);
  for (const event of await events(page, 'page_view')) {
    expect(event.consent, 'page_view must follow granted consent').toBe('granted');
  }
  for (const command of (await commands(page)).filter((item) => item.command === 'config')) {
    expect(command.consent, 'configuration must follow the accepted choice').toBe('granted');
    expect(command.params.send_page_view).toBe(false);
  }
  expect(await events(page, 'page_view')).toHaveLength(count);
}

async function settle(page) {
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function clickPhoneWithoutOpeningAnApp(page) {
  const phone = page.locator('main a[href^="tel:"]').first();
  await phone.evaluate((element) => element.addEventListener('click', (event) => event.preventDefault(), {once: true}));
  await phone.click();
}

for (const locale of ['en', 'ro']) {
  const messages = JSON.parse(readFileSync(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8'));
  const labels = messages.ConsentBanner;
  const contact = locale === 'en' ? '/en/contact' : '/contact';
  const privacy = locale === 'en' ? '/en/privacy-policy' : '/politica-de-confidentialitate';

  async function preferences(page) {
    await page.getByRole('button', {name: messages.Footer.cookieSettings, exact: true}).click();
  }

  test.describe(locale, () => {
    test('acceptance, saved consent and client navigation grant before each page view', async ({page, context, baseURL}) => {
      const state = await isolateAnalytics(context, baseURL);
      await page.goto(contact);
      await page.getByRole('button', {name: labels.accept, exact: true}).waitFor();
      expect(state.loads).toBe(0);
      expect(await events(page, 'page_view')).toHaveLength(0);

      await page.getByRole('button', {name: labels.accept, exact: true}).click();
      await assertPageViews(page, 1);
      await page.reload();
      await assertPageViews(page, 1);
      await expect(page.getByRole('button', {name: labels.accept, exact: true})).toHaveCount(0);

      await page.evaluate(() => { window.__consentTestNavigationMarker = true; });
      await page.locator(`footer a[href="${privacy}"]`).click();
      await expect(page).toHaveURL(new URL(privacy, baseURL).href);
      expect(await page.evaluate(() => window.__consentTestNavigationMarker)).toBe(true);
      await assertPageViews(page, 2);
      expect((await events(page, 'page_view')).map((event) => new URL(event.params.page_location).pathname)).toEqual([contact, privacy]);
      expect(state.errors).toEqual([]);
    });

    test('rejection survives reload and later acceptance starts one page view', async ({page, context, baseURL}) => {
      const state = await isolateAnalytics(context, baseURL);
      await page.goto(contact);
      await page.getByRole('button', {name: labels.reject, exact: true}).click();
      await page.reload();
      await preferences(page);
      await expect(page.getByText(labels.statusRejected, {exact: true})).toBeVisible();
      expect(state.loads).toBe(0);
      expect(await events(page, 'page_view')).toHaveLength(0);

      await page.getByRole('button', {name: labels.accept, exact: true}).click();
      await assertPageViews(page, 1);
      expect(state.loads).toBe(1);
      expect(state.errors).toEqual([]);
    });

    test('withdrawal stops lead events and page views; accepting again resumes once', async ({page, context, baseURL}) => {
      const state = await isolateAnalytics(context, baseURL);
      await page.goto(contact);
      await page.getByRole('button', {name: labels.accept, exact: true}).click();
      await assertPageViews(page, 1);
      await clickPhoneWithoutOpeningAnApp(page);
      expect(await events(page, 'generate_lead')).toHaveLength(1);

      await preferences(page);
      await page.getByRole('button', {name: labels.reject, exact: true}).click();
      await clickPhoneWithoutOpeningAnApp(page);
      expect(await events(page, 'generate_lead')).toHaveLength(1);
      await page.locator(`footer a[href="${privacy}"]`).click();
      await expect(page).toHaveURL(new URL(privacy, baseURL).href);
      await settle(page);
      await assertPageViews(page, 1);

      await preferences(page);
      await page.getByRole('button', {name: labels.accept, exact: true}).click();
      await assertPageViews(page, 2);
      expect(state.loads).toBe(1);
      await page.goBack();
      await expect(page).toHaveURL(new URL(contact, baseURL).href);
      await assertPageViews(page, 3);
      await clickPhoneWithoutOpeningAnApp(page);
      const leads = await events(page, 'generate_lead');
      expect(leads).toHaveLength(2);
      expect(leads.every((event) => event.consent === 'granted')).toBe(true);
      expect(state.errors).toEqual([]);
    });

    test('a loader finishing after withdrawal cannot initialize tracking', async ({page, context, baseURL}) => {
      let releaseLoader;
      const loaderReady = new Promise((resolve) => { releaseLoader = resolve; });
      const state = await isolateAnalytics(context, baseURL, loaderReady);
      try {
        await page.goto(contact);
        await page.getByRole('button', {name: labels.accept, exact: true}).click();
        await expect.poll(() => state.loads).toBe(1);
        await page.locator('#kermit-ga-loader').evaluate((element) => element.addEventListener('load', () => {
          window.__consentTestLoaderFinished = true;
        }, {once: true}));
        await preferences(page);
        await page.getByRole('button', {name: labels.reject, exact: true}).click();
        releaseLoader();
        await expect.poll(() => page.evaluate(() => window.__consentTestLoaderFinished)).toBe(true);
        await settle(page);
        expect((await commands(page)).filter((item) => item.command === 'config')).toHaveLength(0);
        expect(await events(page, 'page_view')).toHaveLength(0);
        await clickPhoneWithoutOpeningAnApp(page);
        expect(await events(page, 'generate_lead')).toHaveLength(0);

        await preferences(page);
        await page.getByRole('button', {name: labels.accept, exact: true}).click();
        await assertPageViews(page, 1);
        expect(state.loads).toBe(1);
        expect(state.errors).toEqual([]);
      } finally {
        releaseLoader();
      }
    });
  });
}
