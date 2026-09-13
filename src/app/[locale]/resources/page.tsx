import { Suspense } from 'react';
import { Header } from '@/components/showcase/Header';
import { Footer } from '@/components/showcase/Footer';
import { Chatbox } from '@/components/showcase/Chatbox';
import { getStarterPacks, getLibraryDocuments } from '@/lib/resources-data';
import ResourcesPageClient from '@/components/resources/ResourcesPageClient';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import DocumentRequests from '@/components/resources/DocumentRequests';
import DownloadHighlights from '@/components/resources/DownloadHighlights';
import ManufacturerGuides from '@/components/manufacturer/ManufacturerGuides';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ResourcesPage' });
 
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/resources', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/resources', locale),
    },
  };
}

export default async function ResourcesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const resourceLocale = locale === 'tr' ? 'tr' : 'en';
  const [starterPacks, libraryDocs, t] = await Promise.all([
    getStarterPacks(),
    getLibraryDocuments(),
    getTranslations({locale, namespace: 'ResourcesPage'}),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative isolate w-full overflow-hidden">
          <Image src="/images/hero-images/resources-download-hero-image.jpg" alt={t('heroTitle')} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto max-w-6xl px-4 py-14 text-center md:py-20">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white lg:text-5xl">{t('heroTitle')}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">{t('heroSubtitle')}</p>
          </div>
        </section>
        <div className="container mx-auto space-y-12 px-4 py-12 md:space-y-16">
          <DownloadHighlights locale={resourceLocale} documents={libraryDocs} />
          <DocumentRequests locale={locale} />
          <ManufacturerGuides locale={resourceLocale} />
        </div>
        <Suspense fallback={<div className="container mx-auto px-4 py-8 animate-pulse bg-muted/30 min-h-[40vh] rounded-lg" />}>
          <ResourcesPageClient
            starterPacks={starterPacks}
            libraryDocs={libraryDocs}
          />
        </Suspense>
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}

    
