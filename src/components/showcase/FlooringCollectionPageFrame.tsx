import type { Panel } from '@/lib/panel-types';
import type { FlooringCollectionKey } from '@/lib/product-collections';
import { getFlooringSeriesId } from '@/lib/flooring-series';
import { Header } from './Header';
import { Showcase } from './Showcase';
import { FlooringSeriesProvider } from './FlooringSeriesContext';

type FlooringCollectionPageFrameProps = {
  collectionType: FlooringCollectionKey;
  initialPanels: Panel[];
  languageSwitcherHrefs?: Partial<Record<'en' | 'tr', string>>;
};

export function FlooringCollectionPageFrame({
  collectionType,
  initialPanels,
  languageSwitcherHrefs,
}: FlooringCollectionPageFrameProps) {
  return (
    <FlooringSeriesProvider initialSeriesId={getFlooringSeriesId(collectionType)}>
      <Header pageType={collectionType} languageSwitcherHrefs={languageSwitcherHrefs} />
      <div className="flex-grow">
        <Showcase initialPanels={initialPanels} collectionType={collectionType} />
      </div>
    </FlooringSeriesProvider>
  );
}
