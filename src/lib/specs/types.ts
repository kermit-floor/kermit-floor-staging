import type { CollectionFamily, CollectionKey } from '@/lib/product-collections';

export const SPEC_PROFILE_IDS = [
  'floor-natural',
  'floor-stone',
  'floor-premier-plank',
  'floor-premier-pattern',
  'wall-standard',
  'wall-3d-model-a',
  'wall-3d-model-b',
  'skirting-alpha-140-mm',
  'skirting-berlin-100-mm',
  'skirting-elite-100-mm',
  'skirting-moderna-100-mm',
  'skirting-optima-60-mm',
  'skirting-optima-90-mm',
  'skirting-solid-80-mm',
  'skirting-x-line-100-mm',
] as const;

export type SpecProfileId = (typeof SPEC_PROFILE_IDS)[number];
export type FlooringSpecProfileId = Extract<
  SpecProfileId,
  'floor-natural' | 'floor-stone' | 'floor-premier-plank' | 'floor-premier-pattern'
>;
export type WallPanelSpecProfileId = Extract<SpecProfileId, 'wall-standard' | 'wall-3d-model-a' | 'wall-3d-model-b'>;
export type SkirtingSpecProfileId = Extract<
  SpecProfileId,
  | 'skirting-alpha-140-mm'
  | 'skirting-berlin-100-mm'
  | 'skirting-elite-100-mm'
  | 'skirting-moderna-100-mm'
  | 'skirting-optima-60-mm'
  | 'skirting-optima-90-mm'
  | 'skirting-solid-80-mm'
  | 'skirting-x-line-100-mm'
>;

export type ProductDetailsMessageKey =
  | 'specThickness'
  | 'specDepth'
  | 'specWearLayer'
  | 'specDimensions'
  | 'specEdge'
  | 'specInstallation'
  | 'specUtilityClass'
  | 'specUsageArea'
  | 'specMaterial'
  | 'specEdgeValue'
  | 'specInstallationValue'
  | 'specUsageAreaValue'
  | 'specMaterialValue'
  | 'specIxpeUnderlay'
  | 'specLockingSystem'
  | 'specHeight'
  | 'specLength'
  | 'specEmbossed'
  | 'featureWaterProof'
  | 'featureAntiBacterial'
  | 'featureQuickInstallation'
  | 'featureImpactResistant'
  | 'featureSoundAbsorbtion'
  | 'featurePhthalateFree'
  | 'featureFlexibleEdges'
  | 'featureSmartInstallation'
  | 'featureMattSurface'
  | 'featureCableChannel';

export type PanelNameNamespace =
  | 'PanelNames'
  | '3DModelAPanelNames'
  | '3DModelBPanelNames'
  | 'SpcFlooringEleganceCollectionPanelNames'
  | 'SpcFlooringSkyCollectionPanelNames'
  | 'SpcFlooringMosaicCollectionPanelNames'
  | 'SpcFlooringEliteCollectionPanelNames'
  | 'SpcFlooringTravertineCollectionPanelNames'
  | 'SpcParquetNaturalCollectionPanelNames'
  | 'SpcParquetStoneCollectionPanelNames'
  | 'FullNaturalCollectionPanelNames'
  | 'SkirtingPanelNames';

export type SpecValueTranslation = {
  type: 'translation';
  key: ProductDetailsMessageKey;
};

export type SpecValue = string | string[] | SpecValueTranslation;

export type SpecRow = {
  labelKey: ProductDetailsMessageKey;
  value: SpecValue;
};

export type ResolvedSpecRow = {
  label: string;
  value: string | string[];
};

export type ResolvedCollectionSpecs = {
  family: CollectionFamily;
  specProfileId: SpecProfileId;
  rows: ResolvedSpecRow[];
  featureLabels: string[];
  specialFlags: {
    embossedBadge: boolean;
    embossedBadgeLabel: string | null;
  };
};

export type CollectionSpecProfileMap<TProfile extends SpecProfileId = SpecProfileId> = Record<TProfile, readonly SpecRow[]>;

export type CollectionSpecRegistryEntry = {
  family: CollectionFamily;
  panelNameNamespace: PanelNameNamespace;
  specProfileId: SpecProfileId;
  specialFlags: {
    embossedBadge: boolean;
    embossedBadgeLabelKey?: ProductDetailsMessageKey;
  };
};

export type CollectionSpecRegistry = Record<CollectionKey, CollectionSpecRegistryEntry>;
