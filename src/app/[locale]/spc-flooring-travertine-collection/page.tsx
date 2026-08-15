import { FlooringCollectionPageFrame } from '@/components/showcase/FlooringCollectionPageFrame';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { getFloorTravertine } from '@/lib/floor-travertine-data';
import { getTranslations } from 'next-intl/server';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import { CollectionJsonLd } from '@/components/seo/CollectionJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringTravertineCollectionPage' });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/spc-flooring-travertine-collection', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/spc-flooring-travertine-collection', locale),
    },
  };
}

export default async function SpcFlooringTravertineCollectionPage({params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringTravertineCollectionPage' });
  const panels = await getFloorTravertine();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <FlooringCollectionPageFrame
        collectionType="spc-flooring-travertine-collection"
        initialPanels={panels}
      />
      <Footer />
      <Chatbox />
      <CollectionJsonLd
        locale={locale}
        collectionKey="spc-flooring-travertine-collection"
        kind="itemList"
        description={t('seo.description')}
        panels={panels}
      />
    </main>
  );
}
