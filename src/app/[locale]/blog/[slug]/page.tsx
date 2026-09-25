import type {Metadata} from 'next';
import {notFound, permanentRedirect} from 'next/navigation';
import {Header} from '@/components/showcase/Header';
import {Footer} from '@/components/showcase/Footer';
import {Chatbox} from '@/components/showcase/Chatbox';
import BlogPostContent from '@/components/blog/BlogPostContent';
import FaqJsonLd from '@/components/seo/FaqJsonLd';
import {
  getPublishedBlogPostBySlug,
  getPublishedBlogPostPairs,
} from '@/lib/blog/content';
import {
  getArticleJsonLd,
  getBlogPostPath,
  toLocalePath,
  toAbsoluteUrl,
} from '@/lib/blog/seo';
import type {BlogLocale} from '@/lib/blog/types';

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return locale === 'en' || locale === 'ro' ? locale : null;
}

export async function generateStaticParams() {
  const pairs = await getPublishedBlogPostPairs();
  return pairs.flatMap((pair) => [
    {locale: 'en', slug: pair.en.slug},
    {locale: 'ro', slug: pair.ro.slug},
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, slug} = await params;
  const locale = toBlogLocale(localeParam) ?? 'en';
  const postEntry = await getPublishedBlogPostBySlug(locale, slug);

  if (!postEntry) {
    return {
      title: locale === 'ro' ? 'Articolul nu a fost găsit' : 'Post not found',
      description: locale === 'ro' ? 'Articolul solicitat nu a fost găsit.' : 'The requested blog post could not be found.',
    };
  }

  const {post, pair} = postEntry;
  const localePath = getBlogPostPath(post.slug);
  const enPath = getBlogPostPath(pair.en.slug);
  const roPath = getBlogPostPath(pair.ro.slug);
  const canonical = toAbsoluteUrl(locale, localePath);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages: {
        en: toAbsoluteUrl('en', enPath),
        ro: toAbsoluteUrl('ro', roPath),
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonical,
      publishedTime: `${post.publishedAt}T00:00:00Z`,
      modifiedTime: `${post.updatedAt}T00:00:00Z`,
      images: [
        {
          url: toAbsoluteUrl('ro', post.coverImage),
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [toAbsoluteUrl('ro', post.coverImage)],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale: localeParam, slug} = await params;
  const locale = toBlogLocale(localeParam);
  if (!locale) {
    notFound();
  }

  let postEntry = await getPublishedBlogPostBySlug(locale, slug);
  if (!postEntry) {
    const alternateLocale: BlogLocale = locale === 'en' ? 'ro' : 'en';
    const alternateMatch = await getPublishedBlogPostBySlug(alternateLocale, slug);
    if (alternateMatch) {
      permanentRedirect(toLocalePath(alternateLocale, getBlogPostPath(alternateMatch.post.slug)));
    }
  }

  if (!postEntry) {
    notFound();
  }

  const {post, pair} = postEntry;
  const pageUrl = toAbsoluteUrl(locale, getBlogPostPath(post.slug));
  const articleJsonLd = getArticleJsonLd(post, pageUrl);

  const copy =
    locale === 'ro'
      ? {
          backLabel: 'Toate articolele',
        }
      : {
          backLabel: 'All posts',
        };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header
        languageSwitcherHrefs={{
          en: getBlogPostPath(pair.en.slug),
          ro: getBlogPostPath(pair.ro.slug),
        }}
      />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <BlogPostContent post={post} locale={locale} backLabel={copy.backLabel} />
        </section>
      </main>
      <Footer />
      <Chatbox />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}} />
      <FaqJsonLd url={pageUrl} locale={locale} items={post.faqItems ?? []} />
    </div>
  );
}
