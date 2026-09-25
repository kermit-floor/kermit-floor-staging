import type {Metadata} from 'next';
import {pathnames} from '@/navigation';
import {toAbsoluteUrl} from '@/lib/blog/seo';

type AppLocale = 'en' | 'ro';
type AppRouteKey = keyof typeof pathnames;

export function normalizeAppLocale(locale: string): AppLocale {
  return locale === 'ro' ? 'ro' : 'en';
}

function getLocalizedPath(routeKey: AppRouteKey, locale: AppLocale): string {
  const route = pathnames[routeKey] as {en: string; ro: string};
  return route[locale];
}

export function getCanonicalForRoute(routeKey: AppRouteKey, locale: string): string {
  const normalizedLocale = normalizeAppLocale(locale);
  return toAbsoluteUrl(normalizedLocale, getLocalizedPath(routeKey, normalizedLocale));
}

export function getAlternatesForRoute(routeKey: AppRouteKey, locale: string): Metadata['alternates'] {
  const normalizedLocale = normalizeAppLocale(locale);
  const enPath = getLocalizedPath(routeKey, 'en');
  const roPath = getLocalizedPath(routeKey, 'ro');

  return {
    canonical: toAbsoluteUrl(normalizedLocale, getLocalizedPath(routeKey, normalizedLocale)),
    languages: {
      en: toAbsoluteUrl('en', enPath),
      ro: toAbsoluteUrl('ro', roPath),
    },
  };
}
