import {getTranslations} from 'next-intl/server';
import {getOrganizationJsonLd, getWebSiteJsonLd} from '@/lib/seo/jsonld';
import {JsonLd} from './JsonLd';

export async function SiteJsonLd({locale}: {locale: string}) {
  const tLocations = await getTranslations({locale, namespace: 'ContactPage.locations'});

  return (
    <JsonLd
      data={[
        getOrganizationJsonLd({
          telephone: tLocations('turkeyPhone'),
          email: tLocations('turkeyEmail'),
        }),
        getWebSiteJsonLd(),
      ]}
    />
  );
}
