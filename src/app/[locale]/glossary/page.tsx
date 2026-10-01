import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Header} from '@/components/showcase/Header';
import {Footer} from '@/components/showcase/Footer';
import {Chatbox} from '@/components/showcase/Chatbox';
import {Link} from '@/navigation';
import {getPublishedBlogPostsByLocale} from '@/lib/blog/content';
import {getAlternatesForRoute, getCanonicalForRoute} from '@/lib/seo/canonical';
import sections from '@/lib/glossary.json';
import {isAppLocale, defaultLocale} from '@/i18n/locales';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: isAppLocale(locale) ? locale : defaultLocale, namespace: 'Glossary'});
  const text = {title: t('title'), description: t('description')};
  const title = `${text.title} | Kermit Floor`;
  return {
    title,
    description: text.description,
    alternates: getAlternatesForRoute('/glossary', locale),
    openGraph: {title, description: text.description, type: 'website', url: getCanonicalForRoute('/glossary', locale)},
  };
}

export default async function GlossaryPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('Glossary');
  const text = {title: t('title'), description: t('description'), intro: t('intro'), jump: t('jump'), guide: t('guide'), guides: t('guides'), resources: t('resources')};
  const posts = await getPublishedBlogPostsByLocale(locale);
  const url = getCanonicalForRoute('/glossary', locale);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${url}#terms`,
    name: text.title,
    description: text.description,
    inLanguage: locale,
    url,
    hasDefinedTerm: sections.flatMap((section) => section.terms.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `${url}#${term.id}`,
      name: term[locale].name,
      description: term[locale].definition,
      inDefinedTermSet: `${url}#terms`,
      url: `${url}#${term.id}`,
    }))),
  };
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\\u003c')}} />
        <div className="border-b border-border bg-muted/40">
          <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
            <Link href="/blog" className="text-sm font-semibold underline underline-offset-4">{text.guides}</Link>
            <h1 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">{text.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.intro}</p>
            <Link href="/resources" className="mt-5 inline-block font-semibold underline underline-offset-4">{text.resources}</Link>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
          <nav aria-label={text.jump} className="mb-12 flex flex-wrap gap-3">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent">{section[locale]}</a>
            ))}
          </nav>
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="mb-6 scroll-mt-28 text-2xl font-semibold tracking-tight">{section[locale]}</h2>
                <dl className="grid gap-5 md:grid-cols-2">
                  {section.terms.map((term) => {
                    const post = posts.find((candidate) => candidate.topicId === term.topicId);
                    return (
                      <div key={term.id} id={term.id} className="scroll-mt-28 rounded-xl border border-border bg-card p-5 md:p-6">
                        <dt className="text-lg font-semibold">
                          <a href={`#${term.id}`} className="underline-offset-4 hover:underline">{term[locale].name}</a>
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          <p>{term[locale].definition}</p>
                          {post ? <Link href={{pathname: '/blog/[slug]', params: {slug: post.slug}}} className="mt-4 inline-block font-medium text-foreground underline underline-offset-4" aria-label={`${text.guide}: ${post.title}`}>{text.guide} <span aria-hidden="true" className="inline-block rtl:rotate-180">→</span></Link> : null}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}
