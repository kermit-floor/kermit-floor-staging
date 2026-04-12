import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

export const PRODUCT_DETAILS_NAMESPACE = 'ProductDetails';

export const COLLECTION_DEFINITIONS = [
  {
    collectionKey: 'spc-wall-panels',
    family: 'wall_panels',
    routeKey: '/spc-wall-panels',
    localizedPaths: { en: '/spc-wall-panels', tr: '/spc-duvar-panelleri' },
    panelNameNamespace: 'PanelNames',
    specProfileId: 'wall-standard',
    productDir: 'public/images/spc-wall-panels',
    publicDataPath: 'public/data/spc-wall-panels.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'spc-3d-wall-panels-model-a',
    family: 'wall_panels',
    routeKey: '/spc-3d-wall-panels-model-a',
    localizedPaths: { en: '/spc-3d-wall-panels-model-a', tr: '/spc-3d-duvar-panelleri-model-a' },
    panelNameNamespace: '3DModelAPanelNames',
    specProfileId: 'wall-3d-model-a',
    productDir: 'public/images/spc-3d-panels-model-a',
    publicDataPath: 'public/data/spc-3d-wall-panels-model-a.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'spc-3d-wall-panels-model-b',
    family: 'wall_panels',
    routeKey: '/spc-3d-wall-panels-model-b',
    localizedPaths: { en: '/spc-3d-wall-panels-model-b', tr: '/spc-3d-duvar-panelleri-model-b' },
    panelNameNamespace: '3DModelBPanelNames',
    specProfileId: 'wall-3d-model-b',
    productDir: 'public/images/spc-3d-panels-model-b',
    publicDataPath: 'public/data/spc-3d-wall-panels-model-b.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'spc-parquet-natural-collection',
    family: 'flooring',
    routeKey: '/spc-parquet-natural-collection',
    localizedPaths: { en: '/spc-parquet-natural-collection', tr: '/spc-parke-natural-koleksiyonu' },
    panelNameNamespace: 'SpcParquetNaturalCollectionPanelNames',
    specProfileId: 'floor-natural',
    productDir: 'public/images/spc-parquet-natural-collection',
    publicDataPath: 'public/data/spc-parquet-natural-collection.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'spc-parquet-stone-collection',
    family: 'flooring',
    routeKey: '/spc-parquet-stone-collection',
    localizedPaths: { en: '/spc-parquet-stone-collection', tr: '/spc-parke-tas-koleksiyonu' },
    panelNameNamespace: 'SpcParquetStoneCollectionPanelNames',
    specProfileId: 'floor-stone',
    productDir: 'public/images/spc-parquet-stone-collection',
    publicDataPath: 'public/data/spc-parquet-stone-collection.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'full-natural-collection',
    family: 'flooring',
    routeKey: '/full-natural-collection',
    localizedPaths: { en: '/full-natural-collection', tr: '/tam-dogal-koleksiyon' },
    panelNameNamespace: 'FullNaturalCollectionPanelNames',
    specProfileId: 'floor-natural',
    productDir: 'public/images/full-natural-collection',
    publicDataPath: 'public/data/full-natural-collection.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-alpha-140-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/alpha-140-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/alpha-140-mm-skirting-board', tr: '/spc-supurgelikler/alpha-140-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-alpha-140-mm',
    productDir: 'public/images/skirting-boards/alpha-140-mm-skirting-board',
    publicDataPath: 'public/data/skirting-alpha-140-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-berlin-100-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/berlin-100-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/berlin-100-mm-skirting-board', tr: '/spc-supurgelikler/berlin-100-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-berlin-100-mm',
    productDir: 'public/images/skirting-boards/berlin-100-mm-skirting-board',
    publicDataPath: 'public/data/skirting-berlin-100-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-elite-100-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/elite-100-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/elite-100-mm-skirting-board', tr: '/spc-supurgelikler/elite-100-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-elite-100-mm',
    productDir: 'public/images/skirting-boards/elite-100-mm-skirting-board',
    publicDataPath: 'public/data/skirting-elite-100-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-moderna-100-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/moderna-100-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/moderna-100-mm-skirting-board', tr: '/spc-supurgelikler/moderna-100-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-moderna-100-mm',
    productDir: 'public/images/skirting-boards/moderna-100-mm-skirting-board',
    publicDataPath: 'public/data/skirting-moderna-100-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-optima-60-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/optima-60-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/optima-60-mm-skirting-board', tr: '/spc-supurgelikler/optima-60-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-optima-60-mm',
    productDir: 'public/images/skirting-boards/optima-60-mm-skirting-board',
    publicDataPath: 'public/data/skirting-optima-60-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-optima-90-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/optima-90-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/optima-90-mm-skirting-board', tr: '/spc-supurgelikler/optima-90-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-optima-90-mm',
    productDir: 'public/images/skirting-boards/optima-90-mm-skirting-board',
    publicDataPath: 'public/data/skirting-optima-90-mm.json',
    specialFlags: { embossedBadge: true, embossedBadgeLabelKey: 'specEmbossed' },
  },
  {
    collectionKey: 'skirting-solid-80-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/solid-80-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/solid-80-mm-skirting-board', tr: '/spc-supurgelikler/solid-80-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-solid-80-mm',
    productDir: 'public/images/skirting-boards/solid-80-mm-skirting-board',
    publicDataPath: 'public/data/skirting-solid-80-mm.json',
    specialFlags: { embossedBadge: false },
  },
  {
    collectionKey: 'skirting-x-line-100-mm',
    family: 'skirting',
    routeKey: '/spc-skirting-boards/x-line-100-mm-skirting-board',
    localizedPaths: { en: '/spc-skirting-boards/x-line-100-mm-skirting-board', tr: '/spc-supurgelikler/x-line-100-mm-supurgelik' },
    panelNameNamespace: 'SkirtingPanelNames',
    specProfileId: 'skirting-x-line-100-mm',
    productDir: 'public/images/skirting-boards/x-line-100-mm-skirting-board',
    publicDataPath: 'public/data/skirting-x-line-100-mm.json',
    specialFlags: { embossedBadge: false },
  },
];

export const SPEC_PROFILES = {
  'wall-standard': [
    { labelKey: 'specThickness', value: '4 mm' },
    { labelKey: 'specWearLayer', value: '0,30 mm' },
    { labelKey: 'specDimensions', value: ['960mm X 2800mm', '960mm X 1400mm'] },
    { labelKey: 'specEdge', value: { type: 'translation', key: 'specEdgeValue' } },
    { labelKey: 'specInstallation', value: { type: 'translation', key: 'specInstallationValue' } },
    { labelKey: 'specUtilityClass', value: '23 / 31' },
    { labelKey: 'specUsageArea', value: { type: 'translation', key: 'specUsageAreaValue' } },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'wall-3d-model-a': [
    { labelKey: 'specThickness', value: '24 mm' },
    { labelKey: 'specDimensions', value: '160 X 2750 mm' },
    { labelKey: 'specUsageArea', value: 'Interior' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'wall-3d-model-b': [
    { labelKey: 'specThickness', value: '14 mm' },
    { labelKey: 'specDimensions', value: '186 X 2750 mm' },
    { labelKey: 'specUsageArea', value: 'Interior' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'floor-natural': [
    { labelKey: 'specThickness', value: '5 mm / 7 mm' },
    { labelKey: 'specWearLayer', value: '0,30 mm / 0,55 mm' },
    { labelKey: 'specIxpeUnderlay', value: '1 mm / 1,5 mm Included' },
    { labelKey: 'specDimensions', value: ['181,1 X 1219,2 mm', '228,6 X 1219,2 mm', '228,6 X 1493 mm'] },
    { labelKey: 'specEdge', value: { type: 'translation', key: 'specEdgeValue' } },
    { labelKey: 'specLockingSystem', value: 'UniClic / I4F' },
    { labelKey: 'specUtilityClass', value: '23 / 33' },
    { labelKey: 'specUsageArea', value: 'Interior' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'floor-stone': [
    { labelKey: 'specThickness', value: '5 mm / 7 mm' },
    { labelKey: 'specWearLayer', value: '0,30 mm / 0,55 mm' },
    { labelKey: 'specIxpeUnderlay', value: '1 mm / 1,5 mm Included' },
    { labelKey: 'specDimensions', value: '305 X 915 mm' },
    { labelKey: 'specEdge', value: { type: 'translation', key: 'specEdgeValue' } },
    { labelKey: 'specLockingSystem', value: 'I4F' },
    { labelKey: 'specUtilityClass', value: '23 / 33' },
    { labelKey: 'specUsageArea', value: 'Interior' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-alpha-140-mm': [
    { labelKey: 'specHeight', value: '140 mm' },
    { labelKey: 'specDepth', value: '18 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-berlin-100-mm': [
    { labelKey: 'specHeight', value: '100 mm' },
    { labelKey: 'specDepth', value: '22 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-elite-100-mm': [
    { labelKey: 'specHeight', value: '100 mm' },
    { labelKey: 'specDepth', value: '20 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-moderna-100-mm': [
    { labelKey: 'specHeight', value: '100 mm' },
    { labelKey: 'specDepth', value: '22 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-optima-60-mm': [
    { labelKey: 'specHeight', value: '60 mm' },
    { labelKey: 'specDepth', value: '14 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-optima-90-mm': [
    { labelKey: 'specHeight', value: '90 mm' },
    { labelKey: 'specDepth', value: '18 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-solid-80-mm': [
    { labelKey: 'specHeight', value: '80 mm' },
    { labelKey: 'specDepth', value: '22 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
  'skirting-x-line-100-mm': [
    { labelKey: 'specHeight', value: '100 mm' },
    { labelKey: 'specDepth', value: '20 mm' },
    { labelKey: 'specLength', value: '2400 mm' },
    { labelKey: 'specMaterial', value: { type: 'translation', key: 'specMaterialValue' } },
  ],
};

export const DEFAULT_FEATURE_KEYS = [
  'featureWaterProof',
  'featureAntiBacterial',
  'featureQuickInstallation',
  'featureImpactResistant',
  'featureSoundAbsorbtion',
  'featurePhthalateFree',
];

export const SKIRTING_FEATURE_KEYS = [
  'featureWaterProof',
  'featureImpactResistant',
  'featureFlexibleEdges',
  'featureSmartInstallation',
  'featureMattSurface',
  'featureCableChannel',
];

export const EXPECTED_ROUTE_COUNT = COLLECTION_DEFINITIONS.length * 2;

export async function readJson(repoRoot, relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  return JSON.parse(await fs.readFile(absolutePath, 'utf8'));
}

export function getMessagesValue(messages, pathKey) {
  return pathKey.split('.').reduce((value, key) => {
    if (value && typeof value === 'object' && key in value) {
      return value[key];
    }
    throw new Error(`Missing translation for '${pathKey}'`);
  }, messages);
}

export function resolveValue(messages, value) {
  if (Array.isArray(value)) {
    return value.slice();
  }
  if (value && typeof value === 'object' && value.type === 'translation') {
    return getMessagesValue(messages[PRODUCT_DETAILS_NAMESPACE], value.key);
  }
  return value;
}

export function resolveSpecRows(messages, specProfileId) {
  const specProfile = SPEC_PROFILES[specProfileId];
  if (!specProfile) {
    throw new Error(`Unknown spec profile '${specProfileId}'`);
  }

  return specProfile.map((row) => ({
    label: getMessagesValue(messages[PRODUCT_DETAILS_NAMESPACE], row.labelKey),
    value: resolveValue(messages, row.value),
  }));
}

export function resolveFeatureLabels(messages, family) {
  const keys = family === 'skirting' ? SKIRTING_FEATURE_KEYS : DEFAULT_FEATURE_KEYS;
  return keys.map((key) => getMessagesValue(messages[PRODUCT_DETAILS_NAMESPACE], key));
}

export function resolvePanelName(messages, namespace, key) {
  try {
    return getMessagesValue(messages[namespace], key);
  } catch {
    return key;
  }
}

export function resolveSpecialFlags(messages, specialFlags) {
  if (!specialFlags.embossedBadge) {
    return { embossedBadge: false, embossedBadgeLabel: null };
  }

  return {
    embossedBadge: true,
    embossedBadgeLabel: getMessagesValue(messages[PRODUCT_DETAILS_NAMESPACE], specialFlags.embossedBadgeLabelKey),
  };
}

export async function collectAssetInventory(repoRoot) {
  const assetEntries = [];
  const queue = [path.join(repoRoot, 'public', 'images')];

  while (queue.length > 0) {
    const currentPath = queue.pop();
    const items = await fs.readdir(currentPath, { withFileTypes: true });

    for (const item of items) {
      const absolutePath = path.join(currentPath, item.name);
      if (item.isDirectory()) {
        queue.push(absolutePath);
        continue;
      }

      const matches =
        item.name === 'products.json' ||
        item.name === 'product.jpg' ||
        item.name === 'application.jpg';

      if (!matches) {
        continue;
      }

      const fileBuffer = await fs.readFile(absolutePath);
      assetEntries.push({
        path: path.relative(repoRoot, absolutePath).replace(/\\/g, '/'),
        size: fileBuffer.length,
        sha256: createHash('sha256').update(fileBuffer).digest('hex'),
      });
    }
  }

  const publicDataDir = path.join(repoRoot, 'public', 'data');
  const dataFiles = await fs.readdir(publicDataDir, { withFileTypes: true });
  for (const item of dataFiles) {
    if (!item.isFile()) {
      continue;
    }

    const absolutePath = path.join(publicDataDir, item.name);
    const fileBuffer = await fs.readFile(absolutePath);
    assetEntries.push({
      path: path.relative(repoRoot, absolutePath).replace(/\\/g, '/'),
      size: fileBuffer.length,
      sha256: createHash('sha256').update(fileBuffer).digest('hex'),
    });
  }

  assetEntries.sort((left, right) => left.path.localeCompare(right.path));
  return assetEntries;
}

