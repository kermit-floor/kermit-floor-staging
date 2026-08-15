
import { FlooringCollectionPageFrame } from '@/components/showcase/FlooringCollectionPageFrame';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { getFloorFullNatural } from '@/lib/floor-full-natural-data';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import { CollectionJsonLd } from '@/components/seo/CollectionJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FullNaturalCollectionPage' });
 
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/full-natural-collection', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/full-natural-collection', locale),
    },
  };
}

// This tells Next.js to re-validate the page (check for new data)
// at most once every 60 seconds.
export default async function FullNaturalCollectionPage({params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FullNaturalCollectionPage' });
  const panels = await getFloorFullNatural();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <FlooringCollectionPageFrame
        collectionType="full-natural-collection"
        initialPanels={panels}
      />
      <Footer />
      <Chatbox />
      <CollectionJsonLd
        locale={locale}
        collectionKey="full-natural-collection"
        kind="itemList"
        description={t('seo.description')}
        panels={panels}
      />
    </main>
  );
}

    
