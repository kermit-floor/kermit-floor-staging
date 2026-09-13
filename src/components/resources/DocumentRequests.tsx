import {getTranslations} from 'next-intl/server';
import {Link} from '@/navigation';
import {Button} from '@/components/ui/button';

export default async function DocumentRequests({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'ResourcesPage.documents'});

  return (
    <section id="certificates" aria-labelledby="document-requests-title" className="scroll-mt-24 rounded-xl border bg-muted/30 p-6 md:p-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 id="document-requests-title" className="font-headline text-3xl font-bold">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('description')}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={t('listLabel')}>
            {['technical', 'installation', 'projectEvidence'].map((key) => (
              <li key={key} className="rounded-md border bg-background px-3 py-2 text-sm font-medium">{t(`types.${key}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-xl font-semibold">{t('requestTitle')}</h3>
          <p className="mt-3 text-muted-foreground">{t('requestDescription')}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {['product', 'market', 'requirements'].map((key) => <li key={key}>{t(`include.${key}`)}</li>)}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">{t('manuals')}</p>
          <Button asChild className="mt-6 h-auto whitespace-normal text-center">
            <Link href="/contact">{t('requestAction')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
