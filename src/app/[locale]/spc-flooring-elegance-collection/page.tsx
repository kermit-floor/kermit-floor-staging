import { FlooringCollectionPageFrame } from '@/components/showcase/FlooringCollectionPageFrame';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { getFloorElegance } from '@/lib/floor-elegance-data';
import { getTranslations } from 'next-intl/server';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import { CollectionJsonLd } from '@/components/seo/CollectionJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringEleganceCollectionPage' });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/spc-flooring-elegance-collection', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/spc-flooring-elegance-collection', locale),
    },
  };
}

export default async function SpcFlooringEleganceCollectionPage({params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringEleganceCollectionPage' });
  const panels = await getFloorElegance();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <FlooringCollectionPageFrame
        collectionType="spc-flooring-elegance-collection"
        initialPanels={panels}
      />
      <Footer />
      <Chatbox />
      <CollectionJsonLd
        locale={locale}
        collectionKey="spc-flooring-elegance-collection"
        kind="itemList"
        description={t('seo.description')}
        panels={panels}
      />
    </main>
  );
}
