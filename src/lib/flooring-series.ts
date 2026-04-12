import type { FlooringCollectionKey } from './product-collections';

export const FLOORING_SERIES_IDS = ['premier', 'natural'] as const;
export type FlooringSeriesId = (typeof FLOORING_SERIES_IDS)[number];

type FlooringCollectionTitleKey =
  | 'spcFlooringEleganceCollectionTitle'
  | 'spcFlooringSkyCollectionTitle'
  | 'spcFlooringMosaicCollectionTitle'
  | 'spcFlooringEliteCollectionTitle'
  | 'spcFlooringTravertineCollectionTitle'
  | 'spcParquetNaturalCollectionTitle'
  | 'spcParquetStoneCollectionTitle'
  | 'fullNaturalCollectionTitle';

export type FlooringCollectionNavItem = {
  collectionKey: FlooringCollectionKey;
  href: string;
  imageHint: string;
  imageUrl: string;
  seriesId: FlooringSeriesId;
  titleKey: FlooringCollectionTitleKey;
};

export const FLOORING_COLLECTION_NAV_ITEMS = [
  {
    collectionKey: 'spc-flooring-elegance-collection',
    href: '/spc-flooring-elegance-collection',
    imageHint: 'light oak flooring sample',
    imageUrl: '/images/spc-flooring-elegance-collection/P-301/product.jpg',
    seriesId: 'premier',
    titleKey: 'spcFlooringEleganceCollectionTitle',
  },
  {
    collectionKey: 'spc-flooring-sky-collection',
    href: '/spc-flooring-sky-collection',
    imageHint: 'grey flooring sample',
    imageUrl: '/images/spc-flooring-sky-collection/P-101/product.jpg',
    seriesId: 'premier',
    titleKey: 'spcFlooringSkyCollectionTitle',
  },
  {
    collectionKey: 'spc-flooring-mosaic-collection',
    href: '/spc-flooring-mosaic-collection',
    imageHint: 'mosaic flooring sample',
    imageUrl: '/images/spc-flooring-mosaic-collection/P-501/product.jpg',
    seriesId: 'premier',
    titleKey: 'spcFlooringMosaicCollectionTitle',
  },
  {
    collectionKey: 'spc-flooring-elite-collection',
    href: '/spc-flooring-elite-collection',
    imageHint: 'dark oak flooring sample',
    imageUrl: '/images/spc-flooring-elite-collection/P-201/product.jpg',
    seriesId: 'premier',
    titleKey: 'spcFlooringEliteCollectionTitle',
  },
  {
    collectionKey: 'spc-flooring-travertine-collection',
    href: '/spc-flooring-travertine-collection',
    imageHint: 'travertine flooring sample',
    imageUrl: '/images/spc-flooring-travertine-collection/P-401/product.jpg',
    seriesId: 'premier',
    titleKey: 'spcFlooringTravertineCollectionTitle',
  },
  {
    collectionKey: 'spc-parquet-natural-collection',
    href: '/spc-parquet-natural-collection',
    imageHint: 'natural oak flooring sample',
    imageUrl: '/images/spc-parquet-natural-collection/N-215/product.jpg',
    seriesId: 'natural',
    titleKey: 'spcParquetNaturalCollectionTitle',
  },
  {
    collectionKey: 'spc-parquet-stone-collection',
    href: '/spc-parquet-stone-collection',
    imageHint: 'stone flooring sample',
    imageUrl: '/images/spc-parquet-stone-collection/N-604/product.jpg',
    seriesId: 'natural',
    titleKey: 'spcParquetStoneCollectionTitle',
  },
  {
    collectionKey: 'full-natural-collection',
    href: '/full-natural-collection',
    imageHint: 'wide plank flooring sample',
    imageUrl: '/images/full-natural-collection/N-742/product.jpg',
    seriesId: 'natural',
    titleKey: 'fullNaturalCollectionTitle',
  },
] as const satisfies readonly FlooringCollectionNavItem[];

export const FLOORING_SERIES_HERO = {
  premier: {
    imageHint: 'modern living room with wood look flooring',
    imageUrl: '/images/spc-parquet-natural-collection/N-215/application.jpg',
    titleKey: 'heroTitleFlooringPremierSeries',
  },
  natural: {
    imageHint: 'modern living room with wood look flooring',
    imageUrl: '/images/spc-parquet-natural-collection/N-215/application.jpg',
    titleKey: 'heroTitleFlooringNaturalSeries',
  },
} as const;

const FLOORING_COLLECTION_NAV_BY_KEY = Object.fromEntries(
  FLOORING_COLLECTION_NAV_ITEMS.map((item) => [item.collectionKey, item]),
) as Record<FlooringCollectionKey, FlooringCollectionNavItem>;

export const DEFAULT_FLOORING_ROUTE = FLOORING_COLLECTION_NAV_ITEMS[0].href;

export function getFlooringCollectionsBySeries(seriesId: FlooringSeriesId) {
  return FLOORING_COLLECTION_NAV_ITEMS.filter((item) => item.seriesId === seriesId);
}

export function getFlooringNavItem(collectionKey: FlooringCollectionKey) {
  return FLOORING_COLLECTION_NAV_BY_KEY[collectionKey];
}

export function getFlooringSeriesId(collectionKey: FlooringCollectionKey): FlooringSeriesId {
  return getFlooringNavItem(collectionKey).seriesId;
}

export function getFlooringSeriesHref(seriesId: FlooringSeriesId) {
  const firstCollection = getFlooringCollectionsBySeries(seriesId)[0];

  if (!firstCollection) {
    throw new Error(`Unknown flooring series '${seriesId}'`);
  }

  return firstCollection.href;
}

export function isFlooringSeriesRoute(pathname: string) {
  return (
    pathname.startsWith('/spc-flooring-') ||
    pathname.startsWith('/spc-parquet-') ||
    pathname.startsWith('/full-natural-collection')
  );
}
