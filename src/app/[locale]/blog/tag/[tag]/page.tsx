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
import {getTranslations} from 'next-intl/server';
import {locales, isAppLocale} from '@/i18n/locales';
import {getBlogTagAlternates} from '@/lib/blog/content';

export const dynamic = 'force-static';
export const revalidate = false;

function toBlogLocale(locale: string): BlogLocale | null {
  return isAppLocale(locale) ? locale : null;
}

function decodeTagValue(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export async function generateStaticParams() {
  const tagsByLocale = await Promise.all(locales.map(async (locale) => {
    const tags = await getPublishedBlogTagSlugs(locale);
    return tags.map((tag) => ({locale, tag}));
  }));
  return tagsByLocale.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; tag: string}>;
}): Promise<Metadata> {
  const {locale: localeParam, tag: rawTag} = await params;
  const tag = decodeTagValue(rawTag);
  const locale = toBlogLocale(localeParam) ?? 'en';
  const t = await getTranslations({locale, namespace: 'Blog'});
  const title = t('tagSeoTitle', {tag});
  const description = t('tagSeoDescription', {tag});

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

  const t = await getTranslations({locale, namespace: 'Blog'});
  const alternateTags = await getBlogTagAlternates(locale, tag);
  const copy = {
    title: t('tagTitle', {tag}), subtitle: t('tagSubtitle'),
    emptyTitle: t('tagEmptyTitle'), emptyDescription: t('tagEmptyDescription'), backLabel: t('allTags'),
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header languageSwitcherHrefs={Object.fromEntries(locales.map((language) => [language, alternateTags[language] ? getBlogTagPath(alternateTags[language]!) : '/blog']))} />
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
