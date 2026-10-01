import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {isAppLocale} from './locales';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  if (!locale || !isAppLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
