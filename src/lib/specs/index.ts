import type { CollectionKey } from '@/lib/product-collections';
import collectionSpecRegistryData from './data/collection-spec-registry.json';
import { FLOORING_SPEC_PROFILES } from './flooring';
import { SKIRTING_SPEC_PROFILES } from './skirting';
import type {
  CollectionSpecProfileMap,
  CollectionSpecRegistry,
  ProductDetailsMessageKey,
  ResolvedCollectionSpecs,
  SpecValue,
} from './types';
import { WALL_PANEL_SPEC_PROFILES } from './wall-panels';

export const SPEC_PROFILES = {
  ...FLOORING_SPEC_PROFILES,
  ...WALL_PANEL_SPEC_PROFILES,
  ...SKIRTING_SPEC_PROFILES,
} as CollectionSpecProfileMap;

export const COLLECTION_SPEC_REGISTRY = collectionSpecRegistryData as CollectionSpecRegistry;

export const DEFAULT_FEATURE_KEYS = [
  'featureWaterProof',
  'featureAntiBacterial',
  'featureQuickInstallation',
  'featureImpactResistant',
  'featureSoundAbsorbtion',
  'featurePhthalateFree',
] as const satisfies readonly ProductDetailsMessageKey[];

export const SKIRTING_FEATURE_KEYS = [
  'featureWaterProof',
  'featureImpactResistant',
  'featureFlexibleEdges',
  'featureSmartInstallation',
  'featureMattSurface',
  'featureCableChannel',
] as const satisfies readonly ProductDetailsMessageKey[];

type ProductDetailsTranslator = (key: ProductDetailsMessageKey) => string;
type PanelNameTranslator = (key: string) => string;

export function getCollectionSpecRegistryEntry(collectionKey: CollectionKey) {
  return COLLECTION_SPEC_REGISTRY[collectionKey];
}

export function getCollectionPanelNameNamespace(collectionKey: CollectionKey) {
  return getCollectionSpecRegistryEntry(collectionKey).panelNameNamespace;
}

export function getCollectionFeatureKeys(collectionKey: CollectionKey) {
  return getCollectionSpecRegistryEntry(collectionKey).family === 'skirting'
    ? SKIRTING_FEATURE_KEYS
    : DEFAULT_FEATURE_KEYS;
}

export function resolveSpecValue(value: SpecValue, translate: ProductDetailsTranslator): string | string[] {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return value;
  }

  return translate(value.key);
}

export function resolveCollectionSpecs(
  collectionKey: CollectionKey,
  translate: ProductDetailsTranslator,
): ResolvedCollectionSpecs {
  const registryEntry = getCollectionSpecRegistryEntry(collectionKey);
  const rows = SPEC_PROFILES[registryEntry.specProfileId].map((row) => ({
    label: translate(row.labelKey),
    value: resolveSpecValue(row.value, translate),
  }));
  const featureLabels = getCollectionFeatureKeys(collectionKey).map((key) => translate(key));

  return {
    family: registryEntry.family,
    specProfileId: registryEntry.specProfileId,
    rows,
    featureLabels,
    specialFlags: {
      embossedBadge: registryEntry.specialFlags.embossedBadge,
      embossedBadgeLabel: registryEntry.specialFlags.embossedBadgeLabelKey
        ? translate(registryEntry.specialFlags.embossedBadgeLabelKey)
        : null,
    },
  };
}

export function resolvePanelName(translate: PanelNameTranslator, key: string) {
  try {
    return translate(key);
  } catch {
    return key;
  }
}
