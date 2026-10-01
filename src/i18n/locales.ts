import localeDetails from './locales.json';

export type AppLocale = keyof typeof localeDetails;
export const locales = Object.keys(localeDetails) as AppLocale[];
export const defaultLocale: AppLocale = 'en';
export {localeDetails};

export function isAppLocale(locale: string): locale is AppLocale {
  return Object.hasOwn(localeDetails, locale);
}

export function getLocaleDirection(locale: string): 'ltr' | 'rtl' {
  return isAppLocale(locale) && localeDetails[locale].direction === 'rtl' ? 'rtl' : 'ltr';
}
