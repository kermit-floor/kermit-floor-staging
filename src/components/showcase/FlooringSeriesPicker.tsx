'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import {
  FLOORING_SERIES_IDS,
  type FlooringSeriesId,
} from '@/lib/flooring-series';

type FlooringSeriesPickerProps = {
  activeSeriesId: FlooringSeriesId;
  className?: string;
  onSelectSeriesId?: (seriesId: FlooringSeriesId) => void;
};

export function FlooringSeriesPicker({
  activeSeriesId,
  className,
  onSelectSeriesId,
}: FlooringSeriesPickerProps) {
  const t = useTranslations('HomePage');
  const seriesLabelKeyById = {
    premier: 'premierSeriesTitle',
    natural: 'naturalSeriesTitle',
  } as const;

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border-2 border-[#d6d2c4] bg-white p-1 shadow-[0_16px_28px_-20px_rgba(38,64,42,0.85)]',
        className,
      )}
    >
      {FLOORING_SERIES_IDS.map((seriesId) => {
        const isActive = seriesId === activeSeriesId;

        return (
          <button
            type="button"
            key={seriesId}
            aria-pressed={isActive}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all md:px-4 md:text-[15px]',
              isActive
                ? 'border-2 border-primary bg-white text-primary'
                : 'text-[#b2aea4] hover:text-primary',
            )}
            onClick={() => onSelectSeriesId?.(seriesId)}
          >
            <span
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-full border transition-colors',
                isActive
                  ? 'border-primary bg-primary text-white'
                  : 'border-[#d6d2c4] bg-[#d9d7cf] text-transparent',
              )}
            >
              {isActive ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9d7cf]" />
              )}
            </span>
            <span className="whitespace-nowrap">{t(seriesLabelKeyById[seriesId])}</span>
          </button>
        );
      })}
    </div>
  );
}
