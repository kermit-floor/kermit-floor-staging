# Consent ordering repair — local preparation, September 18, 2026

Status: prepared September 18; shipped September 21 in `0e7cbf5`. Cloudflare and
GitHub checks passed; live English/Turkish desktop/mobile verification confirms the
repair. [Production evidence](baselines/2026-09-21-production-verification.json).
The September 17 review and its observations remain historical records.

## Problem and change

The provider activated its child page tracker as soon as the GA script loaded.
React could run that child's effect before the provider's consent-update effect,
so the initial page view used denied consent even after acceptance. This matched
the [September 15 production diagnosis](reviews/2026-09-15.md). A local browser
regression reproduced `Expected: "granted" / Received: "denied"` before the repair.

The provider now queues the accepted consent and GA configuration before making
the tracker ready. This covers fresh acceptance and saved consent. A script that
finishes loading after rejection cannot initialize tracking. Withdrawal immediately
blocks the site's manual page-view and lead events; accepting again resumes tracking
without relying on a second script-load event. Existing consent storage is unchanged.

Hypothesis: applying the actual consent choice before initialization and events
removes a source of incomplete session/attribution measurement. It does not establish
the cause of the desktop decline, which also requires post-deployment observation.

## Validation

`npm run build` passed, including type checking and generation of 194 pages.
All **16 browser checks passed** against that production build (42.8 seconds).
`git diff --check` passed. Existing review files and the logbook were not edited.

Run against the production build to avoid React development effect replay:

```sh
npx playwright install chromium  # Once, if the browser is not installed.
npm run build
npm run test:consent
```

The browser suite uses the actual Next/React pages in English and Turkish, desktop
and mobile Chromium. It intercepts the remote GA loader and blocks all other external
requests, so tests do not send analytics events or contact messages. It checks command
ordering, one page view per accepted navigation, restored choices, rejection,
withdrawal/reacceptance, manual leads, and a loader completing after withdrawal.
Google's server-side processing and production collection payloads still require
verification at deployment.

## Prepared measurement and interference treatment

- Primary correctness metric: every tested page view and configuration follows
  granted consent; no manual events while rejected; one page view per accepted
  page transition. Baseline: the pre-repair regression and the September 15 live
  capture show an initial page view with denied consent.
- Secondary monitoring: country/device/browser Google-organic sessions and users,
  compared alongside matching GSC trends; lead/download key events and AI referrals.
  The [September 17 review](reviews/2026-09-17.md) is a historical reference, not a
  newly collected deployment baseline.
- This is a site-wide GA4 measurement change. At deployment, capture a fresh dated
  GA4 baseline and add a ship-date marker to every open experiment. Mark affected
  lead, AI-referral, pricing-conversion and content engagement comparisons with
  the measurement break. Preserve earlier snapshots and the original WORKED
  instrumentation verdict; do not describe a recording change as lead growth.
- Preserve GSC indexing, position, impression, CTR and structured-data baselines
  and their existing dates. This repair changes no search content or metadata.
- Verify production ordering at ship time with collection intercepted. Record the
  actual release and verification in the logbook. First operational review is
  seven days after deployment, followed by a 14-day desktop comparison. If shipped
  September 18, these dates are September 25 and October 2; otherwise move them
  with the actual release date. No experiment is re-baselined before shipping.

## September 21 release preparation

Build and all 16 browser tests pass with the Germany contact addition. Fresh
[GA4 baseline and interference treatment](baselines/2026-09-21-consent-contact.md)
replace the illustrative September 18 dates: first operations September 28, desktop
comparison October 5. The logbook records the actual release and live verification.
