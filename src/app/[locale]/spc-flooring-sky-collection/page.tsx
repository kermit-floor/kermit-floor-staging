import { FlooringCollectionPageFrame } from '@/components/showcase/FlooringCollectionPageFrame';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { getFloorSky } from '@/lib/floor-sky-data';
import { getTranslations } from 'next-intl/server';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import { CollectionJsonLd } from '@/components/seo/CollectionJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringSkyCollectionPage' });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/spc-flooring-sky-collection', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/spc-flooring-sky-collection', locale),
    },
  };
}

export default async function SpcFlooringSkyCollectionPage({params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringSkyCollectionPage' });
  const panels = await getFloorSky();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <FlooringCollectionPageFrame
        collectionType="spc-flooring-sky-collection"
        initialPanels={panels}
      />
      <Footer />
      <Chatbox />
      <CollectionJsonLd
        locale={locale}
        collectionKey="spc-flooring-sky-collection"
        kind="itemList"
        description={t('seo.description')}
        panels={panels}
      />
    </main>
  );
}
