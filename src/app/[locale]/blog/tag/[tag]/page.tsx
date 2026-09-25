import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header} from '@/components/showcase/Header';
import {Footer} from '@/components/showcase/Footer';
import {Chatbox} from '@/components/showcase/Chatbox';
import BlogList from '@/components/blog/BlogList';
import {Link} from '@/navigation';
import {
  getPublishedBlogPostsByTag,
  getPublishedBlogTagSlugs,
} from '@/lib/blog/content';
import {getBlogTagPath, toAbsoluteUrl} from '@/lib/blog/seo';
import type {BlogLocale} from '@/lib/blog/types';

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return locale === 'en' || locale === 'ro' ? locale : null;
}

function decodeTagValue(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function generateStaticParams() {
  const [enTags, roTags] = await Promise.all([
    getPublishedBlogTagSlugs('en'),
    getPublishedBlogTagSlugs('ro'),
  ]);
  return [
    ...enTags.map((tag) => ({locale: 'en', tag})),
    ...roTags.map((tag) => ({locale: 'ro', tag})),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; tag: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, tag: rawTag} = await params;
  const tag = decodeTagValue(rawTag);
  const locale = toBlogLocale(localeParam) ?? 'en';
  const title =
    locale === 'ro' ? `Subiect pe blog: ${tag}` : `Blog tag: ${tag}`;
  const description =
    locale === 'ro'
      ? `Descoperă articolele despre ${tag}.`
      : `Browse blog articles under the ${tag} tag.`;

  return {
    title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(locale, getBlogTagPath(tag)),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: toAbsoluteUrl(locale, getBlogTagPath(tag)),
    },
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{locale: string; tag: string}>;
}) {
  const {locale: localeParam, tag: rawTag} = await params;
  const tag = decodeTagValue(rawTag);
  const locale = toBlogLocale(localeParam);
  if (!locale) {
    notFound();
  }

  const posts = await getPublishedBlogPostsByTag(locale, tag);
  if (posts.length === 0) {
    notFound();
  }

  const copy =
    locale === 'ro'
      ? {
          title: `Subiect: ${tag}`,
          subtitle: 'Articole despre acest subiect',
          emptyTitle: 'Nu există articole despre acest subiect.',
          emptyDescription: 'Încearcă un alt subiect.',
          backLabel: 'Toate subiectele',
        }
      : {
          title: `Tag: ${tag}`,
          subtitle: 'Articles under this topic tag',
          emptyTitle: 'No posts found for this tag.',
          emptyDescription: 'Try another tag.',
          backLabel: 'All tags',
        };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header languageSwitcherHrefs={{en: "/blog", ro: "/blog"}} />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-8 space-y-3">
            <Link href="/blog" className="inline-flex text-sm font-semibold text-primary hover:underline">
              {copy.backLabel}
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">{copy.title}</h1>
            <p className="text-base text-muted-foreground">{copy.subtitle}</p>
          </div>
          <BlogList posts={posts} locale={locale} emptyTitle={copy.emptyTitle} emptyDescription={copy.emptyDescription} />
        </section>
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}
