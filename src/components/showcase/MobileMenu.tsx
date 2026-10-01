'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Logo, NavMenu } from './HeaderShared';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Separator } from '../ui/separator';
import {useLocale, useTranslations} from 'next-intl';
import {getLocaleDirection, type AppLocale} from '@/i18n/locales';

type MobileMenuProps = {
  languageSwitcherHrefs?: Partial<Record<AppLocale, string>>;
};

export function MobileMenu({ languageSwitcherHrefs }: MobileMenuProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('Common');
  const direction = getLocaleDirection(useLocale());

  return (
    <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 [&_svg]:size-9"
          aria-label={t('openMenu')}
        >
          <Menu />
        </Button>
      </SheetTrigger>
        <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-full max-w-sm p-0">
        <SheetTitle className="sr-only">{t('mobileMenu')}</SheetTitle>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <div onClick={() => setMenuOpen(false)}>
              <Logo />
            </div>
          </div>
          <div className="p-6 flex-grow">
            <NavMenu isMobile />
          </div>
          <Separator />
          <div className="p-6">
            <LanguageSwitcher alternateHrefs={languageSwitcherHrefs} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
