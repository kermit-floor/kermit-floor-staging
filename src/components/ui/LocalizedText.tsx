'use client';

import {useLocale} from 'next-intl';

export function LocalizedText({ro, en}: {ro: string; en: string}) {
  return useLocale() === 'ro' ? ro : en;
}
