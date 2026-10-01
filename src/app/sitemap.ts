import type {MetadataRoute} from 'next';
import {pathnames} from '@/navigation';
import {locales} from '@/i18n/locales';
import {
  getPublishedBlogPostPairs,
  getPublishedBlogTagSlugs,
} from '@/lib/blog/content';
import {
  getBlogPostPath,
  getBlogTagPath,
  toAbsoluteUrl,
} from '@/lib/blog/seo';

export const dynamic = 'force-static';
export const revalidate = false;

function buildStaticRouteEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const routeKeys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  for (const routeKey of routeKeys) {
    const route = pathnames[routeKey];
    const routeKeyString = String(routeKey);
    if (routeKeyString.includes('[')) {
      continue;
    }

    const languages = Object.fromEntries(locales.map((locale) => [locale, toAbsoluteUrl(locale, route[locale])]));

    const lastModified = new Date();

    for (const url of Object.values(languages)) {
      entries.push({
        url,
        lastModified,
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pairs, tagsByLocale] = await Promise.all([
    getPublishedBlogPostPairs(),
    Promise.all(locales.map(async (locale) => ({locale, tags: await getPublishedBlogTagSlugs(locale)}))),
  ]);

  const staticEntries = buildStaticRouteEntries();
  const postEntries: MetadataRoute.Sitemap = pairs.flatMap((pair) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, toAbsoluteUrl(locale, getBlogPostPath(pair[locale].slug))]));
    const lastModified = new Date(Math.max(...locales.map((locale) => pair[locale].updatedAtDate.getTime())));

    return Object.values(languages).map((url) => ({
      url,
      lastModified,
      alternates: {
        languages,
      },
    }));
  });

  const tagEntries: MetadataRoute.Sitemap = tagsByLocale.flatMap(({locale, tags}) =>
    tags.map((tag) => ({
      url: toAbsoluteUrl(locale, getBlogTagPath(tag)),
      lastModified: new Date(),
    })),
  );

  return [...staticEntries, ...postEntries, ...tagEntries];
}
