import { Header } from '@/components/showcase/Header';
import { Showcase } from '@/components/showcase/Showcase';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { getFloorElite } from '@/lib/floor-elite-data';
import { getTranslations } from 'next-intl/server';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcFlooringEliteCollectionPage' });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/spc-flooring-elite-collection', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/spc-flooring-elite-collection', locale),
    },
  };
}

export default async function SpcFlooringEliteCollectionPage() {
  const panels = await getFloorElite();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header pageType="spc-flooring-elite-collection" />
      <div className="flex-grow">
        <Showcase initialPanels={panels} collectionType="spc-flooring-elite-collection" />
      </div>
      <Footer />
      <Chatbox />
    </main>
  );
}
