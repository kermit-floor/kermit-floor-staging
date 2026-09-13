
import { Header } from '@/components/showcase/Header';
import { Footer } from '@/components/showcase/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/navigation';
import { Factory, DraftingCompass, Layers } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Chatbox } from '@/components/showcase/Chatbox';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import ManufacturerGuides from '@/components/manufacturer/ManufacturerGuides';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
 
  return {
    title: t('seo.metaTitle'),
    description: t('seo.metaDescription'),
    alternates: getAlternatesForRoute('/about', locale),
    openGraph: {
      title: t('seo.metaTitle'),
      description: t('seo.metaDescription'),
      url: getCanonicalForRoute('/about', locale),
    },
  };
}


const WhyKermitCard = ({ icon: Icon, title, text }: { icon: React.ElementType, title: string, text: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-lg h-full">
    <div className="bg-background p-3 rounded-full mb-4 border">
        <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="font-headline text-lg font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm mt-2">{text}</p>
  </div>
);

const WhatWeMakeCard = ({ title, text, image, imageHint }: { title: string, text: string, image: string, imageHint: string }) => (
    <Card className="flex flex-col overflow-hidden text-center">
        <div className="relative aspect-video w-full">
            <Image src={image} alt={title} fill className="object-cover" data-ai-hint={imageHint} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <CardHeader>
            <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground">{text}</p>
        </CardContent>
    </Card>
);

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');
  const faqItems = ['factory', 'moq', 'leadTime', 'oem', 'enquiry'].map((key) => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  const whyKermitItems = [
    { icon: Factory, title: t('whyKermit.manufacturer.title'), text: t('whyKermit.manufacturer.text') },
    { icon: DraftingCompass, title: t('whyKermit.design.title'), text: t('whyKermit.design.text') },
    { icon: Layers, title: t('whyKermit.system.title'), text: t('whyKermit.system.text') },
  ];
  
  const whatWeMakeItems = [
      { title: t('whatWeMake.flooring.title'), text: t('whatWeMake.flooring.text'), image: '/images/spc-parquet-natural-collection/N-215/application.jpg', imageHint: 'elegant room flooring' },
      { title: t('whatWeMake.skirting.title'), text: t('whatWeMake.skirting.text'), image: '/images/skirting-boards/elite-100-mm-skirting-board/E1004031/application.jpg', imageHint: 'decorative skirting' },
      { title: t('whatWeMake.wallPanels.title'), text: t('whatWeMake.wallPanels.text'), image: '/images/spc-wall-panels/613/application.jpg', imageHint: 'modern kitchen panels' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Hero */}
        <section className="relative isolate w-full overflow-hidden">
          <Image
            src="/images/hero-images/about-us-hero-image.jpg"
            alt={t('hero.title')}
            fill
            className="object-cover"
            data-ai-hint="company values mission"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center md:py-24">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal py-3">
                <Link href="/contact">{t('hero.ctaPrimary')}</Link>
              </Button>
              <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal bg-background py-3 text-primary hover:bg-background/80">
                <Link href="/resources">{t('hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container px-4 mx-auto space-y-16 md:space-y-24 py-16 md:py-24">
            <section aria-labelledby="supply-title" className="max-w-5xl mx-auto">
                <h2 id="supply-title" className="font-headline text-3xl font-bold text-center">{t('supply.title')}</h2>
                <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                    {['moq', 'leadTime', 'branding'].map((key) => (
                        <div key={key} className="rounded-xl border bg-card p-6 text-center">
                            <dt className="text-sm font-medium text-muted-foreground">{t(`supply.${key}.label`)}</dt>
                            <dd className="mt-2 font-headline text-2xl font-bold text-primary">{t(`supply.${key}.value`)}</dd>
                        </div>
                    ))}
                </dl>
                <p className="mt-5 text-center text-sm text-muted-foreground">{t('supply.note')}</p>
            </section>

            {/* 2. Who We Are */}
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground">{t('whoWeAre.title')}</h2>
                <div className="mt-6 space-y-4 text-muted-foreground text-lg">
                    <p>{t('whoWeAre.p1')}</p>
                    <p>{t('whoWeAre.p2')}</p>
                </div>
            </section>

            <Separator />

            {/* 3. What We Make */}
            <section className="max-w-6xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-foreground text-center">{t('whatWeMake.title')}</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whatWeMakeItems.map(item => (
                        <WhatWeMakeCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            <Separator />

            {/* 4. Why Kermit Floor */}
            <section>
                <h2 className="font-headline text-3xl font-bold text-foreground text-center">{t('whyKermit.title')}</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {whyKermitItems.map(item => (
                        <WhyKermitCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
                    ))}
                </div>
            </section>
            
            <Separator />

            {/* 5. Manufacturing & Supply Footprint */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden">
                    <Image src="/images/about-us/factory.jpg" alt={t('footprint.imageAlt')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div>
                    <h2 className="font-headline text-3xl font-bold text-foreground">{t('footprint.title')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{t('footprint.p1')}</p>
                    <dl className="mt-6 space-y-4">
                        {['turkey', 'moldova', 'romania'].map((key) => (
                            <div key={key}>
                                <dt className="font-semibold">{t(`footprint.locations.${key}.title`)}</dt>
                                <dd className="mt-1 text-muted-foreground">{t(`footprint.locations.${key}.address`)}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-4 text-sm text-muted-foreground">{t('footprint.originNote')}</p>
                    <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                        <h3 className="font-headline text-xl font-semibold">{t('footprint.ctaTitle')}</h3>
                        <p className="mt-2 text-muted-foreground">{t('footprint.ctaText')}</p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Button asChild>
                                <Link href="/contact">{t('footprint.ctaButton1')}</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/resources">{t('footprint.ctaButton2')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            
            <Separator />

            <section className="grid gap-10 lg:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold">{t('documentation.title')}</h2>
                    <p className="mt-4 text-muted-foreground">{t('documentation.description')}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                        {['catalogues', 'instructions', 'projectEvidence'].map((key) => (
                            <li key={key} className="rounded-md border px-3 py-2 text-sm">{t(`documentation.types.${key}`)}</li>
                        ))}
                    </ul>
                    <p className="mt-5 text-sm text-muted-foreground">{t('documentation.scope')}</p>
                    <Button asChild variant="outline" className="mt-6 h-auto whitespace-normal">
                        <Link href={{pathname: '/resources', hash: 'certificates'}}>{t('documentation.action')}</Link>
                    </Button>
                </div>
                <div className="rounded-xl bg-muted/50 p-6 md:p-8">
                    <h2 className="font-headline text-3xl font-bold">{t('oem.title')}</h2>
                    <p className="mt-4 text-muted-foreground">{t('oem.description')}</p>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
                        {['specification', 'branding', 'schedule'].map((key) => <li key={key}>{t(`oem.items.${key}`)}</li>)}
                    </ul>
                    <Button asChild className="mt-6 h-auto whitespace-normal">
                        <Link href="/contact">{t('oem.action')}</Link>
                    </Button>
                </div>
            </section>

            <ManufacturerGuides locale={locale === 'tr' ? 'tr' : 'en'} />

            <section className="max-w-4xl mx-auto" aria-labelledby="manufacturer-questions-title">
                <h2 id="manufacturer-questions-title" className="font-headline text-3xl font-bold">{t('questions.title')}</h2>
                <dl className="mt-8 divide-y">
                    {faqItems.map(({question, answer}) => (
                        <div key={question} className="py-5">
                            <dt className="font-headline text-lg font-semibold">{question}</dt>
                            <dd className="mt-2 leading-7 text-muted-foreground">{answer}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <Separator />

            {/* 6. Sustainability & Responsibility */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden">
                    <Image src="/images/about-us/sustainability.jpg" alt={t('sustainability.imageAlt')} fill className="object-cover" data-ai-hint="sustainability responsibility" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="lg:order-1">
                    <h2 className="font-headline text-3xl font-bold text-foreground">{t('sustainability.title')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{t('sustainability.p1')}</p>
                </div>
            </section>
        </div>

        {/* 7. Final CTA Band */}
        <section className="bg-muted">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="font-headline text-3xl font-bold text-primary max-w-3xl mx-auto">{t('finalCta.title')}</h2>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg">
                        <Link href="/contact">{t('finalCta.ctaPrimary')}</Link>
                    </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/resources">{t('finalCta.ctaSecondary')}</Link>
                            </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
      <Chatbox />
      <FaqJsonLd url={getCanonicalForRoute('/about', locale)} locale={locale} items={faqItems} />
    </div>
  );
}
 
    
