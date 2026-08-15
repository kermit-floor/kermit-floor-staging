export const COLLECTION_KEYS = [
  'spc-wall-panels',
  'spc-3d-wall-panels-model-a',
  'spc-3d-wall-panels-model-b',
  'spc-flooring-elegance-collection',
  'spc-flooring-sky-collection',
  'spc-flooring-mosaic-collection',
  'spc-flooring-elite-collection',
  'spc-flooring-travertine-collection',
  'spc-parquet-natural-collection',
  'spc-parquet-stone-collection',
  'full-natural-collection',
  'skirting-alpha-140-mm',
  'skirting-berlin-100-mm',
  'skirting-elite-100-mm',
  'skirting-moderna-100-mm',
  'skirting-optima-60-mm',
  'skirting-optima-90-mm',
  'skirting-solid-80-mm',
  'skirting-x-line-100-mm',
] as const;

export type CollectionKey = (typeof COLLECTION_KEYS)[number];

export const COLLECTION_FAMILIES = ['flooring', 'wall_panels', 'skirting'] as const;
export type CollectionFamily = (typeof COLLECTION_FAMILIES)[number];

export const FLOORING_COLLECTION_KEYS = [
  'spc-flooring-elegance-collection',
  'spc-flooring-sky-collection',
  'spc-flooring-mosaic-collection',
  'spc-flooring-elite-collection',
  'spc-flooring-travertine-collection',
  'spc-parquet-natural-collection',
  'spc-parquet-stone-collection',
  'full-natural-collection',
] as const satisfies readonly CollectionKey[];

export const WALL_PANEL_COLLECTION_KEYS = [
  'spc-wall-panels',
  'spc-3d-wall-panels-model-a',
  'spc-3d-wall-panels-model-b',
] as const satisfies readonly CollectionKey[];

export const SKIRTING_COLLECTION_KEYS = [
  'skirting-alpha-140-mm',
  'skirting-berlin-100-mm',
  'skirting-elite-100-mm',
  'skirting-moderna-100-mm',
  'skirting-optima-60-mm',
  'skirting-optima-90-mm',
  'skirting-solid-80-mm',
  'skirting-x-line-100-mm',
] as const satisfies readonly CollectionKey[];

export type FlooringCollectionKey = (typeof FLOORING_COLLECTION_KEYS)[number];
export type WallPanelCollectionKey = (typeof WALL_PANEL_COLLECTION_KEYS)[number];
export type SkirtingCollectionKey = (typeof SKIRTING_COLLECTION_KEYS)[number];

const FLOORING_COLLECTION_KEY_SET = new Set<CollectionKey>(FLOORING_COLLECTION_KEYS);
const WALL_PANEL_COLLECTION_KEY_SET = new Set<CollectionKey>(WALL_PANEL_COLLECTION_KEYS);
const SKIRTING_COLLECTION_KEY_SET = new Set<CollectionKey>(SKIRTING_COLLECTION_KEYS);
const COLLECTION_KEY_SET = new Set<string>(COLLECTION_KEYS);

export function isCollectionKey(value: string): value is CollectionKey {
  return COLLECTION_KEY_SET.has(value);
}

export function isSkirtingCollectionKey(value: CollectionKey): value is SkirtingCollectionKey {
  return SKIRTING_COLLECTION_KEY_SET.has(value);
}

export function isFlooringCollectionKey(value: CollectionKey): value is FlooringCollectionKey {
  return FLOORING_COLLECTION_KEY_SET.has(value);
}

export function getCollectionFamily(collectionKey: CollectionKey): CollectionFamily {
  if (FLOORING_COLLECTION_KEY_SET.has(collectionKey)) {
    return 'flooring';
  }

  if (WALL_PANEL_COLLECTION_KEY_SET.has(collectionKey)) {
    return 'wall_panels';
  }

  if (SKIRTING_COLLECTION_KEY_SET.has(collectionKey)) {
    return 'skirting';
  }

  throw new Error(`Unknown collection key '${collectionKey}'`);
}

// 'Header' message keys holding the localized, H1-grade name of each collection.
export const COLLECTION_HERO_TITLE_KEYS = {
  'spc-wall-panels': 'heroTitleSpc',
  'spc-3d-wall-panels-model-a': 'heroTitle3dModelA',
  'spc-3d-wall-panels-model-b': 'heroTitle3dModelB',
  'spc-flooring-elegance-collection': 'heroH1SpcFlooringEleganceCollection',
  'spc-flooring-sky-collection': 'heroH1SpcFlooringSkyCollection',
  'spc-flooring-mosaic-collection': 'heroH1SpcFlooringMosaicCollection',
  'spc-flooring-elite-collection': 'heroH1SpcFlooringEliteCollection',
  'spc-flooring-travertine-collection': 'heroH1SpcFlooringTravertineCollection',
  'spc-parquet-natural-collection': 'heroH1SpcParquetNaturalCollection',
  'spc-parquet-stone-collection': 'heroH1SpcParquetStoneCollection',
  'full-natural-collection': 'heroH1FullNaturalCollection',
  'skirting-alpha-140-mm': 'heroTitleSkirtingAlpha140mm',
  'skirting-berlin-100-mm': 'heroTitleSkirtingBerlin100mm',
  'skirting-elite-100-mm': 'heroTitleSkirtingElite100mm',
  'skirting-moderna-100-mm': 'heroTitleSkirtingModerna100mm',
  'skirting-optima-60-mm': 'heroTitleSkirtingOptima60mm',
  'skirting-optima-90-mm': 'heroTitleSkirtingOptima90mm',
  'skirting-solid-80-mm': 'heroTitleSkirtingSolid80mm',
  'skirting-x-line-100-mm': 'heroTitleSkirtingXLine100mm',
} as const satisfies Record<CollectionKey, string>;
