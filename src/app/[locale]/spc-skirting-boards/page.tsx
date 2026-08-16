
import { Header } from '@/components/showcase/Header';
import { Chatbox } from '@/components/showcase/Chatbox';
import { Footer } from '@/components/showcase/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JsonLd } from '@/components/seo/JsonLd';
import { Link } from '@/navigation';
import { getAlternatesForRoute, getCanonicalForRoute } from '@/lib/seo/canonical';
import { getBreadcrumbJsonLd, getItemListJsonLd } from '@/lib/seo/jsonld';
import { getSiteUrl } from '@/lib/blog/seo';
import { SKIRTING_SPEC_PROFILES } from '@/lib/specs/skirting';
import type { SkirtingSpecProfileId } from '@/lib/specs/types';
import type { Panel } from '@/lib/panel-types';
import { getSkirtingAlpha140mm } from '@/lib/skirting-alpha-140-mm-data';
import { getSkirtingBerlin100mm } from '@/lib/skirting-berlin-100-mm-data';
import { getSkirtingElite100mm } from '@/lib/skirting-elite-100-mm-data';
import { getSkirtingModerna100mm } from '@/lib/skirting-moderna-100-mm-data';
import { getSkirtingOptima60mm } from '@/lib/skirting-optima-60-mm-data';
import { getSkirtingOptima90mm } from '@/lib/skirting-optima-90-mm-data';
import { getSkirtingSolid80mm } from '@/lib/skirting-solid-80-mm-data';
import { getSkirtingXLine100mm } from '@/lib/skirting-x-line-100-mm-data';
import type { pathnames } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';

type AppRouteKey = keyof typeof pathnames;
// Localized <Link> only accepts static routes; dynamic keys like '/blog/[slug]' are excluded.
type StaticAppRouteKey = Exclude<AppRouteKey, '/blog/[slug]' | '/blog/tag/[tag]'>;

const SKIRTING_LINES: {
  key: string;
  routeKey: StaticAppRouteKey;
  specProfileId: SkirtingSpecProfileId;
  getPanels: () => Promise<Panel[]>;
  imageHint: string;
}[] = [
  {
    key: 'alpha-140-mm',
    routeKey: '/spc-skirting-boards/alpha-140-mm-skirting-board',
    specProfileId: 'skirting-alpha-140-mm',
    getPanels: getSkirtingAlpha140mm,
    imageHint: 'room with alpha 140mm skirting',
  },
  {
    key: 'berlin-100-mm',
    routeKey: '/spc-skirting-boards/berlin-100-mm-skirting-board',
    specProfileId: 'skirting-berlin-100-mm',
    getPanels: getSkirtingBerlin100mm,
    imageHint: 'interior with berlin 100mm skirting',
  },
  {
    key: 'elite-100-mm',
    routeKey: '/spc-skirting-boards/elite-100-mm-skirting-board',
    specProfileId: 'skirting-elite-100-mm',
    getPanels: getSkirtingElite100mm,
    imageHint: 'room with elite 100mm skirting',
  },
  {
    key: 'moderna-100-mm',
    routeKey: '/spc-skirting-boards/moderna-100-mm-skirting-board',
    specProfileId: 'skirting-moderna-100-mm',
    getPanels: getSkirtingModerna100mm,
    imageHint: 'hallway with moderna 100mm skirting',
  },
  {
    key: 'optima-60-mm',
    routeKey: '/spc-skirting-boards/optima-60-mm-skirting-board',
    specProfileId: 'skirting-optima-60-mm',
    getPanels: getSkirtingOptima60mm,
    imageHint: 'room with optima 60mm skirting',
  },
  {
    key: 'optima-90-mm',
    routeKey: '/spc-skirting-boards/optima-90-mm-skirting-board',
    specProfileId: 'skirting-optima-90-mm',
    getPanels: getSkirtingOptima90mm,
    imageHint: 'bedroom with optima 90mm skirting',
  },
  {
    key: 'solid-80-mm',
    routeKey: '/spc-skirting-boards/solid-80-mm-skirting-board',
    specProfileId: 'skirting-solid-80-mm',
    getPanels: getSkirtingSolid80mm,
    imageHint: 'office with solid 80mm skirting',
  },
  {
    key: 'x-line-100-mm',
    routeKey: '/spc-skirting-boards/x-line-100-mm-skirting-board',
    specProfileId: 'skirting-x-line-100-mm',
    getPanels: getSkirtingXLine100mm,
    imageHint: 'modern room with x-line 100mm skirting',
  },
];

function getSkirtingSpecValue(specProfileId: SkirtingSpecProfileId, labelKey: string): string {
  const row = SKIRTING_SPEC_PROFILES[specProfileId].find((spec) => spec.labelKey === labelKey);
  return row && typeof row.value === 'string' ? row.value : '';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcSkirtingBoardsPage' });

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: getAlternatesForRoute('/spc-skirting-boards', locale),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: getCanonicalForRoute('/spc-skirting-boards', locale),
    },
  };
}

export default async function SpcSkirtingBoardsPage({params}: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SpcSkirtingBoardsPage' });
  const tHeader = await getTranslations({ locale, namespace: 'Header' });

  // Images are locale-independent static assets; never locale-prefix them.
  const siteUrl = getSiteUrl();
  const hubUrl = getCanonicalForRoute('/spc-skirting-boards', locale);

  // Card photos: one application view per line, picked at random from that line's
  // manifest codes. This page is SSG, so the pick is computed once per build.
  const panelPools = await Promise.all(SKIRTING_LINES.map((line) => line.getPanels()));

  const lines = SKIRTING_LINES.map((line, index) => {
    const pool = panelPools[index];
    const pick = pool[Math.floor(Math.random() * pool.length)];

    return {
      ...line,
      name: t(`lines.${line.key}.name`),
      height: getSkirtingSpecValue(line.specProfileId, 'specHeight'),
      depth: getSkirtingSpecValue(line.specProfileId, 'specDepth'),
      length: getSkirtingSpecValue(line.specProfileId, 'specLength'),
      url: getCanonicalForRoute(line.routeKey, locale),
      image: pick?.applicationImageUrl ?? '',
    };
  });

  const jsonLd = [
    getItemListJsonLd({
      name: t('hero.title'),
      url: hubUrl,
      items: lines.map((line) => ({
        name: line.name,
        url: line.url,
        image: `${siteUrl}${line.image}`,
      })),
    }),
    getBreadcrumbJsonLd([
      { name: tHeader('navHome'), url: getCanonicalForRoute('/', locale) },
      { name: t('hero.title'), url: hubUrl },
    ]),
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-grow">

        {/* Hero */}
        <section className="relative h-48 lg:h-64 w-full">
          <Image
            src="/images/skirting-boards/alpha-140-mm-skirting-board/1404031/application.jpg"
            alt={t('hero.title')}
            fill
            className="object-cover"
            data-ai-hint="living room with tall skirting"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-white text-center">
              {t('hero.title')}
            </h1>
          </div>
        </section>

        {/* Product lines */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {lines.map((line) => (
              <Link key={line.key} href={line.routeKey} className="group">
                <Card className="flex flex-col overflow-hidden h-full transition-shadow group-hover:shadow-lg">
                  <div className="relative aspect-[4/3] w-full bg-muted">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      className="object-cover"
                      data-ai-hint={line.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                      {line.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      {[
                        { label: t('specLabels.height'), value: line.height },
                        { label: t('specLabels.width'), value: line.depth },
                        { label: t('specLabels.length'), value: line.length },
                        { label: t('specLabels.material'), value: 'SPC' },
                      ].map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-muted-foreground">{spec.label}</dt>
                          <dd className="font-medium text-foreground/80">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-muted">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary max-w-3xl mx-auto">{t('cta.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('cta.text')}</p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">{t('cta.button')}</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <Chatbox />
      <JsonLd data={jsonLd} />
    </main>
  );
}
