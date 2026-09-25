import type {MetadataRoute} from 'next';
import {locales, pathnames} from '@/navigation';
import {getPublishedBlogPostPairs, getPublishedBlogTagSlugs} from '@/lib/blog/content';
import {getBlogPostPath, getBlogTagPath, toAbsoluteUrl} from '@/lib/blog/seo';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  for (const [routeKey, route] of Object.entries(pathnames)) {
    if (routeKey.includes('[')) continue;
    const languages = {ro: toAbsoluteUrl('ro', route.ro), en: toAbsoluteUrl('en', route.en)};
    for (const locale of locales) entries.push({url: languages[locale], alternates: {languages}});
  }
  for (const pair of await getPublishedBlogPostPairs()) {
    const languages = {ro: toAbsoluteUrl('ro', getBlogPostPath(pair.ro.slug)), en: toAbsoluteUrl('en', getBlogPostPath(pair.en.slug))};
    for (const locale of locales) entries.push({url: languages[locale], lastModified: pair[locale].updatedAtDate, alternates: {languages}});
  }
  for (const locale of locales) {
    for (const tag of await getPublishedBlogTagSlugs(locale)) entries.push({url: toAbsoluteUrl(locale, getBlogTagPath(tag))});
  }
  return entries;
}
