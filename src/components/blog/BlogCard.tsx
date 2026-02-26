import Image from 'next/image';
import {Link} from '@/navigation';
import type {BlogLocale, BlogPost} from '@/lib/blog/types';
import {getBlogAuthorProfileByName} from '@/lib/blog/authors';
import BlogTagPills from './BlogTagPills';

type BlogCardProps = {
  post: BlogPost;
  locale: BlogLocale;
  showTags?: boolean;
  showAuthor?: boolean;
};

export default function BlogCard({post, locale, showTags = true, showAuthor = true}: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(post.publishedAtDate);
  const author = getBlogAuthorProfileByName(post.authorName, locale);
  const authorDisplayName = author?.name ?? post.authorName;
  const authorSubtitle = author?.subtitle?.trim() || undefined;
  const authorInitials = authorDisplayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <article className="overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link href={{pathname: '/blog/[slug]', params: {slug: post.slug}}} className="block">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{formattedDate}</p>
        {showAuthor ? (
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border bg-muted">
              {author?.photoPath ? (
                <Image
                  src={author.photoPath}
                  alt={authorDisplayName}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] font-semibold text-muted-foreground">
                  {authorInitials || 'KF'}
                </div>
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground/85">{authorDisplayName}</p>
              {authorSubtitle ? (
                <p className="truncate text-xs text-muted-foreground">{authorSubtitle}</p>
              ) : null}
            </div>
          </div>
        ) : null}
        <h3 className="text-xl font-semibold text-foreground">
          <Link href={{pathname: '/blog/[slug]', params: {slug: post.slug}}} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        {showTags ? <BlogTagPills tags={post.tags} /> : null}
      </div>
    </article>
  );
}
