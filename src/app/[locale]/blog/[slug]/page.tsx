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
import {getTranslations} from 'next-intl/server';
import {locales, isAppLocale} from '@/i18n/locales';

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return isAppLocale(locale) ? locale : null;
}

export async function generateStaticParams() {
  const pairs = await getPublishedBlogPostPairs();
  return pairs.flatMap((pair) => locales.map((locale) => ({locale, slug: pair[locale].slug})));
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
    const t = await getTranslations({locale, namespace: 'Blog'});
    return {title: t('notFoundTitle'), description: t('notFoundDescription')};
  }

  const {post, pair} = postEntry;
  const localePath = getBlogPostPath(post.slug);
  const canonical = toAbsoluteUrl(locale, localePath);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((language) => [language, toAbsoluteUrl(language, getBlogPostPath(pair[language].slug))])),
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
          url: toAbsoluteUrl('en', post.coverImage),
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [toAbsoluteUrl('en', post.coverImage)],
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

  const postEntry = await getPublishedBlogPostBySlug(locale, slug);
  if (!postEntry) {
    for (const alternateLocale of locales.filter((language) => language !== locale)) {
      const alternateMatch = await getPublishedBlogPostBySlug(alternateLocale, slug);
      if (alternateMatch) {
        permanentRedirect(toLocalePath(locale, getBlogPostPath(alternateMatch.pair[locale].slug)));
      }
    }
  }

  if (!postEntry) {
    notFound();
  }

  const {post, pair} = postEntry;
  const pageUrl = toAbsoluteUrl(locale, getBlogPostPath(post.slug));
  const articleJsonLd = getArticleJsonLd(post, pageUrl);

  const t = await getTranslations({locale, namespace: 'Blog'});

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header
        languageSwitcherHrefs={Object.fromEntries(locales.map((language) => [language, getBlogPostPath(pair[language].slug)]))}
      />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <BlogPostContent post={post} locale={locale} backLabel={t('allPosts')} />
        </section>
      </main>
      <Footer />
      <Chatbox />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}} />
      <FaqJsonLd url={pageUrl} locale={locale} items={post.faqItems ?? []} />
    </div>
  );
}
