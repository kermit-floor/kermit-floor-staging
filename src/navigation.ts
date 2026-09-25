import localizedPathnames from './i18n/pathnames.json';

import {createNavigation} from 'next-intl/navigation';
import type {Pathnames} from 'next-intl/routing';

export const locales = ['ro', 'en'] as const;
export const defaultLocale = 'ro';

export const pathnames = localizedPathnames satisfies Pathnames<typeof locales>;

// Romanian is unprefixed; English uses /en.
export const localePrefix = 'as-needed' as const;

const navigation = (() => {
  try {
    return createNavigation({locales, defaultLocale, localePrefix, pathnames});
  } catch (error) {
    throw error;
  }
})();

export const {Link, redirect, usePathname, useRouter, getPathname} = navigation;


export type AppPathnames = keyof typeof pathnames;
