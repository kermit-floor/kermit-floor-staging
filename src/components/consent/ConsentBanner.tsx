'use client';

import {Button} from '@/components/ui/button';
import {Link} from '@/navigation';
import {useTranslations} from 'next-intl';

type ConsentBannerProps = {
  open: boolean;
  onAccept: () => void;
  onReject: () => void;
  onManage: () => void;
};

export function ConsentBanner({open, onAccept, onReject, onManage}: ConsentBannerProps) {
  const t = useTranslations('ConsentBanner');

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-card/90">
      <div className="mx-auto w-full max-w-6xl px-3 py-3 md:px-4 md:py-3.5">
        <div className="space-y-2">
          <p className="font-headline text-base font-semibold text-foreground">{t('title')}</p>
          <p className="text-xs leading-5 text-muted-foreground md:text-sm">{t('description')}</p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button size="sm" onClick={onAccept}>
              {t('accept')}
            </Button>
            <Button size="sm" variant="outline" onClick={onReject}>
              {t('reject')}
            </Button>
            <Button size="sm" variant="ghost" onClick={onManage}>
              {t('manage')}
            </Button>
            <Button asChild size="sm" variant="link" className="px-0">
              <Link href="/privacy-policy">{t('privacyLink')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

