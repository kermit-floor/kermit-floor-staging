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
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {isAppLocale} from '@/i18n/locales';
import {getAlternatesForRoute} from '@/lib/seo/canonical';


const guideSections = [
  {
    id: 'buying',
    topics: ['spc-manufacturer-buyers-checklist', 'spc-samples-wholesale-quote', 'spc-oem-private-label', 'kermit-floor-distributor-guide', 'import-spc-flooring-from-kermit'],
  },
  {
    id: 'choosing',
    topics: ['spc-flooring-what-is-it-vs-laminate-benefits', 'spc-flooring-vs-laminate', 'spc-lvt-wpc-vinyl-types', 'spc-flooring-material-alternatives', 'spc-flooring-user-reviews', 'spc-flooring-room-suitability', 'spc-flooring-colour-format'],
  },
  {
    id: 'installation',
    topics: ['spc-flooring-quantity-layout', 'spc-flooring-installation-planning', 'spc-flooring-common-mistakes', 'spc-flooring-underlay-acoustics', 'spc-flooring-heating-sunlight', 'spc-flooring-care-repair'],
  },
  {
    id: 'specification',
    topics: ['spc-flooring-thickness-wear-layer', 'spc-flooring-waterproof-guide', 'kermit-spc-certificates-emissions', 'spc-interior-finishes-project-specification', 'spc-flooring-prices'],
  },
  {
    id: 'walls-skirting',
    topics: ['skirting-with-flexible-edges-what-is-it', 'kermit-spc-skirting-advantages', 'spc-wall-panel-usage-areas', 'spc-wall-panel-bathroom-usage', 'spc-wall-panel-bathroom-renovation-vs-ceramic'],
  },
];

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return isAppLocale(locale) ? locale : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const locale = toBlogLocale((await params).locale) ?? 'en';
  const t = await getTranslations({locale, namespace: 'Blog'});
  const title = t('seoTitle');
  const description = t('seoDescription');

  return {
    title,
    description,
    alternates: getAlternatesForRoute('/blog', locale),
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

  setRequestLocale(locale);
  const t = await getTranslations('Blog');
  const copy = {
    title: t('title'),
    subtitle: t('subtitle'),
    heroImageAlt: t('heroImageAlt'),
    emptyTitle: t('emptyTitle'),
    emptyDescription: t('emptyDescription'),
    tagsTitle: t('tagsTitle'),
    browseTitle: t('browseTitle'),
    allTitle: t('allTitle'),
    allDescription: t('allDescription'),
    glossary: t('glossary'),
    resources: t('resources'),
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
                  <h3 id={`guide-${section.id}`} className="text-xl font-semibold">{t(`sections.${section.id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`sections.${section.id}.description`)}</p>
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
