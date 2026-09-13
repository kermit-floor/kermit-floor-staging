import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import {getPublishedBlogPostsByLocale} from '@/lib/blog/content';
import type {BlogLocale} from '@/lib/blog/types';
import {manufacturerGuideTopicIds} from '@/lib/manufacturer';

export default async function ManufacturerGuides({locale}: {locale: BlogLocale}) {
  const [t, posts] = await Promise.all([
    getTranslations({locale, namespace: 'ManufacturerGuides'}),
    getPublishedBlogPostsByLocale(locale),
  ]);
  const guides = manufacturerGuideTopicIds.flatMap((topicId) => {
    const post = posts.find((entry) => entry.topicId === topicId);
    return post ? [post] : [];
  });

  if (guides.length === 0) return null;

  return (
    <section aria-labelledby="manufacturer-guides-title">
      <div className="max-w-3xl">
        <h2 id="manufacturer-guides-title" className="font-headline text-3xl font-bold">
          {t('title')}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t('description')}</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {guides.map((post) => (
          <Link
            key={post.topicId}
            href={{pathname: '/blog/[slug]', params: {slug: post.slug}}}
            className="group flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <h3 className="font-headline text-xl font-semibold group-hover:text-primary">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {t('read')} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
