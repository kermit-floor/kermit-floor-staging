import type {Metadata} from 'next';
import {pathnames} from '@/navigation';
import {toAbsoluteUrl} from '@/lib/blog/seo';
import {locales, isAppLocale, type AppLocale} from '@/i18n/locales';

type AppRouteKey = keyof typeof pathnames;

export function normalizeAppLocale(locale: string): AppLocale {
  return isAppLocale(locale) ? locale : 'en';
}

function getLocalizedPath(routeKey: AppRouteKey, locale: AppLocale): string {
  const route = pathnames[routeKey];
  return route[locale];
}

export function getCanonicalForRoute(routeKey: AppRouteKey, locale: string): string {
  const normalizedLocale = normalizeAppLocale(locale);
  return toAbsoluteUrl(normalizedLocale, getLocalizedPath(routeKey, normalizedLocale));
}

export function getAlternatesForRoute(routeKey: AppRouteKey, locale: string): Metadata['alternates'] {
  const normalizedLocale = normalizeAppLocale(locale);

  return {
    canonical: toAbsoluteUrl(normalizedLocale, getLocalizedPath(routeKey, normalizedLocale)),
    languages: Object.fromEntries(
      locales.map((language) => [language, toAbsoluteUrl(language, getLocalizedPath(routeKey, language))]),
    ),
  };
}
