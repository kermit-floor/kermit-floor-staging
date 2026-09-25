'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

const GBFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="!w-7 !h-auto rounded-sm" aria-hidden="true">
        <rect width="5" height="3" fill="#00247d" />
        <path d="M0,0L5,3M5,0L0,3" stroke="#fff" strokeWidth=".6" />
        <path d="M0,0L5,3M5,0L0,3" stroke="#cf142b" strokeWidth=".4" />
        <path d="M2.5,0V3M0,1.5H5" stroke="#fff" strokeWidth="1" />
        <path d="M2.5,0V3M0,1.5H5" stroke="#cf142b" strokeWidth=".6" />
    </svg>
);

const ROFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="!w-7 !h-auto rounded-sm" aria-hidden="true">
    <path fill="#002B7F" d="M0 0h1v2H0z" />
    <path fill="#FCD116" d="M1 0h1v2H1z" />
    <path fill="#CE1126" d="M2 0h1v2H2z" />
  </svg>
);
const languages = [
  {code: 'ro', name: 'Română', flag: <ROFlag />},
  {code: 'en', name: 'English', flag: <GBFlag />},
];

type LanguageSwitcherProps = {
  alternateHrefs?: Partial<Record<'en' | 'ro', string>>;
};

export function LanguageSwitcher({ alternateHrefs }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const overrideHref = alternateHrefs?.[newLocale as 'en' | 'ro'];
    if (overrideHref) {
      router.replace(overrideHref as any, { locale: newLocale });
      return;
    }
    router.replace(pathname as any, {locale: newLocale});
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-12 w-12">
          {currentLanguage?.flag}
          <span className="sr-only">{locale === 'ro' ? 'Schimbă limba, limba curentă:' : 'Change language, current:'} {currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between px-3 py-2 text-base"
            disabled={locale === lang.code}
          >
            <span className="flex items-center gap-3">
              {lang.flag}
              <span className="font-medium">{lang.name}</span>
            </span>
            {locale === lang.code && <Check className="!h-5 !w-5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
