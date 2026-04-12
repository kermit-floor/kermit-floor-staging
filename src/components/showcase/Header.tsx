'use client';

import {
  FLOORING_SERIES_HERO,
  getFlooringSeriesId,
} from '@/lib/flooring-series';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  isFlooringCollectionKey,
  type CollectionKey,
} from '@/lib/product-collections';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Logo, NavMenu } from './HeaderShared';

type HeaderProps = {
  pageType?: CollectionKey;
  languageSwitcherHrefs?: Partial<Record<'en' | 'tr', string>>;
}

export function Header({ pageType, languageSwitcherHrefs }: HeaderProps) {
  const t = useTranslations('Header');
  
  let pageTitle;
  let heroImage;
  let heroImageHint;

  if (pageType && isFlooringCollectionKey(pageType)) {
    const flooringSeriesHero = FLOORING_SERIES_HERO[getFlooringSeriesId(pageType)];
    pageTitle = t(flooringSeriesHero.titleKey);
    heroImage = flooringSeriesHero.imageUrl;
    heroImageHint = flooringSeriesHero.imageHint;
  } else if (pageType === 'spc-3d-wall-panels-model-a') {
    pageTitle = t('heroTitle3dModelA');
    heroImage = '/images/spc-3d-panels-model-a/3D-205/application.jpg';
    heroImageHint = 'living room with geometric panels';
  } else if (pageType === 'spc-3d-wall-panels-model-b') {
    pageTitle = t('heroTitle3dModelB');
    heroImage = '/images/spc-3d-panels-model-b/3D-617/application.jpg';
    heroImageHint = 'modern interior with wavy panels';
  } else if (pageType === 'spc-wall-panels') {
    pageTitle = t('heroTitleSpc');
    heroImage = '/images/spc-wall-panels/613/application.jpg';
    heroImageHint = 'modern kitchen with marble panels';
  } else if (pageType === 'skirting-alpha-140-mm') {
    pageTitle = t('heroTitleSkirtingAlpha140mm');
    heroImage = '/images/skirting-boards/alpha-140-mm-skirting-board/1404031/application.jpg';
    heroImageHint = 'living room with tall skirting';
  } else if (pageType === 'skirting-berlin-100-mm') {
    pageTitle = t('heroTitleSkirtingBerlin100mm');
    heroImage = '/images/skirting-boards/berlin-100-mm-skirting-board/1110031/application.jpg';
    heroImageHint = 'interior with modern skirting';
  } else if (pageType === 'skirting-elite-100-mm') {
    pageTitle = t('heroTitleSkirtingElite100mm');
    heroImage = '/images/skirting-boards/elite-100-mm-skirting-board/E1004031/application.jpg';
    heroImageHint = 'room with decorative skirting';
  } else if (pageType === 'skirting-moderna-100-mm') {
    pageTitle = t('heroTitleSkirtingModerna100mm');
    heroImage = '/images/skirting-boards/moderna-100-mm-skirting-board/1004031/application.jpg';
    heroImageHint = 'hallway with stylish skirting';
  } else if (pageType === 'skirting-optima-60-mm') {
    pageTitle = t('heroTitleSkirtingOptima60mm');
    heroImage = '/images/skirting-boards/optima-60-mm-skirting-board/0604031/application.jpg';
    heroImageHint = 'room with minimal skirting';
  } else if (pageType === 'skirting-optima-90-mm') {
    pageTitle = t('heroTitleSkirtingOptima90mm');
    heroImage = '/images/skirting-boards/optima-90-mm-skirting-board/0704031/application.jpg';
    heroImageHint = 'bedroom with medium height skirting';
  } else if (pageType === 'skirting-solid-80-mm') {
    pageTitle = t('heroTitleSkirtingSolid80mm');
    heroImage = '/images/skirting-boards/solid-80-mm-skirting-board/0904031/application.jpg';
    heroImageHint = 'office with solid skirting';
  } else if (pageType === 'skirting-x-line-100-mm') {
    pageTitle = t('heroTitleSkirtingXLine100mm');
    heroImage = '/images/skirting-boards/x-line-100-mm-skirting-board/X1004031/application.jpg';
    heroImageHint = 'modern room with x-line skirting';
  }


  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-28 items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>
            
            <div className="flex-1 flex justify-end items-center gap-4">
                <NavMenu />
                <div className="hidden md:flex">
                    <LanguageSwitcher alternateHrefs={languageSwitcherHrefs} />
                </div>
            </div>

            <div className="md:hidden flex flex-1 justify-end">
              <MobileMenu languageSwitcherHrefs={languageSwitcherHrefs} />
            </div>
          </div>
        </div>
      </header>
      {pageTitle && heroImage && (
        <div className="relative h-48 lg:h-64 w-full">
          <Image
            src={heroImage}
            alt="Wall panel texture background"
            fill
            className="object-cover"
            data-ai-hint={heroImageHint}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-white text-center">
              {pageTitle}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
