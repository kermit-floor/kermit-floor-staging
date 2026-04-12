import fs from 'node:fs/promises';
import path from 'node:path';
import {
  COLLECTION_DEFINITIONS,
  EXPECTED_ROUTE_COUNT,
  collectAssetInventory,
  readJson,
  resolveFeatureLabels,
  resolvePanelName,
  resolveSpecRows,
  resolveSpecialFlags,
} from './shared.mjs';

async function buildRoutes(repoRoot) {
  const routes = [];

  for (const locale of ['en', 'tr']) {
    const messages = await readJson(repoRoot, `messages/${locale}.json`);

    for (const definition of COLLECTION_DEFINITIONS) {
      const panels = await readJson(repoRoot, definition.publicDataPath);
      const orderedPanelIds = panels.map((panel) => panel.id);
      const defaultPanelId = orderedPanelIds[0] ?? null;
      const resolvedPanelNames = orderedPanelIds.map((panelId) => ({
        panelId,
        displayName: resolvePanelName(messages, definition.panelNameNamespace, panelId),
      }));

      routes.push({
        locale,
        routeKey: definition.routeKey,
        routePath: definition.localizedPaths[locale],
        collectionKey: definition.collectionKey,
        family: definition.family,
        defaultPanelId,
        orderedPanelIds,
        panelCount: orderedPanelIds.length,
        resolvedPanelNames,
        specRows: resolveSpecRows(messages, definition.specProfileId),
        featureLabels: resolveFeatureLabels(messages, definition.family),
        specialFlags: resolveSpecialFlags(messages, definition.specialFlags),
      });
    }
  }

  routes.sort((left, right) => {
    if (left.locale !== right.locale) {
      return left.locale.localeCompare(right.locale);
    }

    return left.collectionKey.localeCompare(right.collectionKey);
  });

  return routes;
}

async function main() {
  const repoRoot = process.cwd();
  const outputPath = process.argv[2];

  const routes = await buildRoutes(repoRoot);
  if (routes.length !== EXPECTED_ROUTE_COUNT) {
    throw new Error(`Expected ${EXPECTED_ROUTE_COUNT} route snapshots, found ${routes.length}`);
  }

  const snapshot = {
    version: 1,
    routeCount: routes.length,
    collectionCount: COLLECTION_DEFINITIONS.length,
    routes,
    assetInventory: await collectAssetInventory(repoRoot),
  };

  const serialized = `${JSON.stringify(snapshot, null, 2)}\n`;
  if (outputPath) {
    const absoluteOutput = path.isAbsolute(outputPath) ? outputPath : path.join(repoRoot, outputPath);
    await fs.mkdir(path.dirname(absoluteOutput), { recursive: true });
    await fs.writeFile(absoluteOutput, serialized, 'utf8');
    console.log(`Wrote showcase baseline snapshot to ${absoluteOutput}`);
    return;
  }

  process.stdout.write(serialized);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

