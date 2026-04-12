import fs from 'node:fs/promises';
import path from 'node:path';

function extractCollectionKeys(source) {
  const match = source.match(/export const COLLECTION_KEYS = \[(.*?)\] as const;/s);
  if (!match) {
    throw new Error('Could not locate COLLECTION_KEYS in src/lib/product-collections.ts');
  }

  return Array.from(match[1].matchAll(/'([^']+)'/g), (item) => item[1]).sort();
}

async function readJson(repoRoot, relativePath) {
  return JSON.parse(await fs.readFile(path.join(repoRoot, relativePath), 'utf8'));
}

async function main() {
  const repoRoot = process.cwd();
  const productCollectionsSource = await fs.readFile(path.join(repoRoot, 'src/lib/product-collections.ts'), 'utf8');
  const collectionKeys = extractCollectionKeys(productCollectionsSource);
  const registry = await readJson(repoRoot, 'src/lib/specs/data/collection-spec-registry.json');
  const flooringProfiles = await readJson(repoRoot, 'src/lib/specs/data/flooring-spec-profiles.json');
  const wallPanelProfiles = await readJson(repoRoot, 'src/lib/specs/data/wall-panel-spec-profiles.json');
  const skirtingProfiles = await readJson(repoRoot, 'src/lib/specs/data/skirting-spec-profiles.json');
  const allProfileIds = new Set([
    ...Object.keys(flooringProfiles),
    ...Object.keys(wallPanelProfiles),
    ...Object.keys(skirtingProfiles),
  ]);

  const registryKeys = Object.keys(registry).sort();
  const missingRegistryKeys = collectionKeys.filter((key) => !(key in registry));
  const unknownRegistryKeys = registryKeys.filter((key) => !collectionKeys.includes(key));
  const invalidProfiles = registryKeys.filter((key) => !allProfileIds.has(registry[key].specProfileId));

  const sourcePaths = [
    'src/components/showcase/Showcase.tsx',
    'src/components/showcase/ProductDetails.tsx',
    'src/components/showcase/Header.tsx',
    'src/components/showcase/ColorPicker.tsx',
    'src/app/[locale]/spc-wall-panels/page.tsx',
    'src/app/[locale]/spc-3d-wall-panels-model-a/page.tsx',
    'src/app/[locale]/spc-3d-wall-panels-model-b/page.tsx',
    'src/app/[locale]/spc-parquet-natural-collection/page.tsx',
    'src/app/[locale]/spc-parquet-stone-collection/page.tsx',
    'src/app/[locale]/full-natural-collection/page.tsx',
    'src/app/[locale]/spc-skirting-boards/alpha-140-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/berlin-100-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/elite-100-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/moderna-100-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/optima-60-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/optima-90-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/solid-80-mm-skirting-board/page.tsx',
    'src/app/[locale]/spc-skirting-boards/x-line-100-mm-skirting-board/page.tsx',
  ];

  const sourceUsage = new Set();
  for (const relativePath of sourcePaths) {
    const content = await fs.readFile(path.join(repoRoot, relativePath), 'utf8');
    for (const collectionKey of collectionKeys) {
      if (content.includes(collectionKey)) {
        sourceUsage.add(collectionKey);
      }
    }
  }

  const missingSourceUsageKeys = Array.from(sourceUsage).filter((key) => !(key in registry)).sort();

  const report = {
    collectionKeyCount: collectionKeys.length,
    registryKeyCount: registryKeys.length,
    specProfileCount: allProfileIds.size,
    missingRegistryKeys,
    unknownRegistryKeys,
    invalidProfiles,
    missingSourceUsageKeys,
  };

  if (
    report.missingRegistryKeys.length > 0 ||
    report.unknownRegistryKeys.length > 0 ||
    report.invalidProfiles.length > 0 ||
    report.missingSourceUsageKeys.length > 0
  ) {
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
