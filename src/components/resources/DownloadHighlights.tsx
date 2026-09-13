import {Download} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import type {Locale, Resource} from '@/lib/resources-data';

const featuredDocumentIds = [
  'flooring-catalogue-2026',
  'skirting-catalogue-2024',
  'wall-panel-catalogue-2026',
  'skirting-install-manual',
  'flooring-install-click',
  'flooring-underfloor-heating',
  'flooring-tds-6mm-no-ixpe',
];

export default async function DownloadHighlights({locale, documents}: {locale: Locale; documents: Resource[]}) {
  const t = await getTranslations({locale, namespace: 'ResourcesPage.downloads'});
  const featured = featuredDocumentIds.flatMap((id) => {
    const doc = documents.find((entry) => entry.id === id);
    return doc && doc.files[locale]?.url && doc.files[locale].url !== '#' ? [doc] : [];
  });

  return (
    <section aria-labelledby="available-downloads-title">
      <h2 id="available-downloads-title" className="font-headline text-3xl font-bold">{t('title')}</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">{t('description')}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {featured.map((doc) => (
          <a key={doc.id} href={doc.files[locale].url} download className="flex items-start gap-4 rounded-xl border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Download aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">{locale === 'tr' ? doc.title_tr : doc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`${doc.files[locale].language ?? locale}Pdf`)}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
