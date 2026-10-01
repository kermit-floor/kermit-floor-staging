import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header} from '@/components/showcase/Header';
import {Footer} from '@/components/showcase/Footer';
import {Chatbox} from '@/components/showcase/Chatbox';
import {Link} from '@/navigation';
import BlogList from '@/components/blog/BlogList';
import Image from 'next/image';
import {getPublishedBlogPostsByLocale, getPublishedBlogTagIndex} from '@/lib/blog/content';
import {toAbsoluteUrl} from '@/lib/blog/seo';
import type {BlogLocale} from '@/lib/blog/types';


const guideSections = [
  {
    id: 'buying',
    en: {title: 'Buying from Kermit', description: 'Choose a supplier, prepare samples and quotes, and plan a first wholesale order.'},
    tr: {title: "Kermit'ten tedarik", description: 'Üretici seçimini, numuneyi, teklifi ve ilk toptan siparişi planlayın.'},
    topics: ['spc-manufacturer-buyers-checklist', 'spc-samples-wholesale-quote', 'spc-oem-private-label', 'kermit-floor-distributor-guide', 'import-spc-flooring-from-kermit'],
  },
  {
    id: 'choosing',
    en: {title: 'Choosing a floor', description: 'Understand the materials, compare suitable uses and see what to check in a sample.'},
    tr: {title: 'Zemin seçimi', description: 'Malzemeleri ve kullanım alanlarını karşılaştırın; numunede neye bakacağınızı belirleyin.'},
    topics: ['spc-flooring-what-is-it-vs-laminate-benefits', 'spc-flooring-vs-laminate', 'spc-lvt-wpc-vinyl-types', 'spc-flooring-material-alternatives', 'spc-flooring-user-reviews', 'spc-flooring-room-suitability', 'spc-flooring-colour-format'],
  },
  {
    id: 'installation',
    en: {title: 'Installation and care', description: 'Measure the order, prepare the base and plan movement, heating, cleaning and repairs.'},
    tr: {title: 'Montaj ve bakım', description: 'Metrajı hesaplayın; alt zemini, hareketi, ısıtmayı, temizliği ve onarımı planlayın.'},
    topics: ['spc-flooring-quantity-layout', 'spc-flooring-installation-planning', 'spc-flooring-common-mistakes', 'spc-flooring-underlay-acoustics', 'spc-flooring-heating-sunlight', 'spc-flooring-care-repair'],
  },
  {
    id: 'specification',
    en: {title: 'Specifications and project costs', description: 'Read technical evidence, define the complete finish schedule and compare a project budget.'},
    tr: {title: 'Teknik özellikler ve proje bütçesi', description: 'Belgeleri okuyun, kaplama çizelgesini oluşturun ve toplam proje maliyetini karşılaştırın.'},
    topics: ['spc-flooring-thickness-wear-layer', 'spc-flooring-waterproof-guide', 'kermit-spc-certificates-emissions', 'spc-interior-finishes-project-specification', 'spc-flooring-prices'],
  },
  {
    id: 'walls-skirting',
    en: {title: 'Skirting and wall panels', description: 'Plan the perimeter and wall finishes using the instructions for those product families.'},
    tr: {title: 'Süpürgelik ve duvar panelleri', description: 'Kenar ve duvar kaplamalarını kendi ürün ailelerinin koşullarıyla değerlendirin.'},
    topics: ['skirting-with-flexible-edges-what-is-it', 'kermit-spc-skirting-advantages', 'spc-wall-panel-usage-areas', 'spc-wall-panel-bathroom-usage', 'spc-wall-panel-bathroom-renovation-vs-ceramic'],
  },
];

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return locale === 'en' || locale === 'tr' ? locale : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const locale = toBlogLocale((await params).locale) ?? 'en';
  const title =
    locale === 'tr'
      ? 'Kermit Floor Rehberleri | SPC Parke, Duvar Paneli ve Süpürgelik'
      : 'Kermit Floor Guides | SPC Flooring, Wall Panels and Skirting';
  const description =
    locale === 'tr'
      ? 'Ürün seçimi, metraj, montaj, bakım ve toptan tedarik için Kermit rehberlerini konuya göre keşfedin; sözlüğe ve teknik belgelere ulaşın.'
      : 'Find Kermit guides for product selection, quantities, installation, care and wholesale buying, with a flooring glossary and technical documents.';

  return {
    title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(locale, '/blog'),
      languages: {
        en: toAbsoluteUrl('en', '/blog'),
        tr: toAbsoluteUrl('tr', '/blog'),
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: toAbsoluteUrl(locale, '/blog'),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const localeParam = (await params).locale;
  const locale = toBlogLocale(localeParam);
  if (!locale) {
    notFound();
  }

  const [posts, tags] = await Promise.all([
    getPublishedBlogPostsByLocale(locale),
    getPublishedBlogTagIndex(locale),
  ]);

  const copy =
    locale === 'tr'
      ? {
          title: 'Kermit rehberleri',
          subtitle: 'Ürün seçimini, uygulamayı ve siparişi adım adım planlayın.',
          heroImageAlt: 'Çizimler ve hesap makinesiyle proje planlama görseli',
          emptyTitle: 'Yayında blog yazısı bulunmuyor.',
          emptyDescription: 'İlk yayınlar hazırlandığında bu alanda listelenecek.',
          tagsTitle: 'Tüm konu etiketleri',
          browseTitle: 'İhtiyacınıza göre başlayın',
          allTitle: 'Tüm yazılar',
          allDescription: 'İlk yayın tarihine göre, en yeniden eskiye.',
          glossary: 'Terimler sözlüğü',
          resources: 'Teknik belgeler ve kılavuzlar',
        }
      : {
          title: 'Kermit guides',
          subtitle: 'Plan your product choice, installation and order, one decision at a time.',
          heroImageAlt: 'Project planning illustration with drawings and a calculator',
          emptyTitle: 'No blog posts are published yet.',
          emptyDescription: 'Published articles will appear here as they go live.',
          tagsTitle: 'All topic tags',
          browseTitle: 'Start with your next decision',
          allTitle: 'All articles',
          allDescription: 'Newest first, by original publication date.',
          glossary: 'Flooring glossary',
          resources: 'Technical documents and manuals',
        };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-56 w-full overflow-hidden md:h-72">
          <Image
            src="/images/hero-images/resources-download-hero-image.jpg"
            alt={copy.heroImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto flex h-full items-center px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">{copy.title}</h1>
                <p className="mt-3 text-base text-white/90 md:text-lg">{copy.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">

          <div className="mb-10 flex flex-wrap gap-3">
            <Link href="/glossary" className="rounded-lg border border-border px-5 py-3 font-semibold underline-offset-4 hover:underline">{copy.glossary}</Link>
            <Link href="/resources" className="rounded-lg border border-border px-5 py-3 font-semibold underline-offset-4 hover:underline">{copy.resources}</Link>
          </div>

          <h2 className="mb-6 text-2xl font-semibold tracking-tight">{copy.browseTitle}</h2>
          <div className="mb-14 grid gap-6 md:grid-cols-2">
            {guideSections.map((section) => {
              const selectedPosts = section.topics.flatMap((topicId) => {
                const post = posts.find((candidate) => candidate.topicId === topicId);
                return post ? [post] : [];
              });
              if (selectedPosts.length === 0) return null;
              return (
                <section key={section.id} aria-labelledby={`guide-${section.id}`} className="rounded-xl border border-border bg-card p-6">
                  <h3 id={`guide-${section.id}`} className="text-xl font-semibold">{section[locale].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section[locale].description}</p>
                  <ul className="mt-4 space-y-3">
                    {selectedPosts.map((post) => (
                      <li key={post.topicId}>
                        <Link href={{pathname: '/blog/[slug]', params: {slug: post.slug}}} className="block text-sm font-medium leading-relaxed underline decoration-border underline-offset-4 hover:decoration-current">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <h2 className="text-2xl font-semibold tracking-tight">{copy.allTitle}</h2>
          <p className="mb-6 mt-2 text-sm text-muted-foreground">{copy.allDescription}</p>
          {tags.length > 0 ? (
            <details className="mb-8 rounded-lg border border-border p-4">
              <summary className="cursor-pointer font-semibold">{copy.tagsTitle}</summary>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link key={tag.tag} href={{pathname: '/blog/tag/[tag]', params: {tag: tag.tag}}} className="rounded-full border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    #{tag.tag}
                  </Link>
                ))}
              </div>
            </details>
          ) : null}

          <BlogList posts={posts} locale={locale} emptyTitle={copy.emptyTitle} emptyDescription={copy.emptyDescription} />
        </section>
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}
