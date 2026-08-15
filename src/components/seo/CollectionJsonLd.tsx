import {getTranslations} from 'next-intl/server';
import {getSiteUrl} from '@/lib/blog/seo';
import type {Panel} from '@/lib/panel-types';
import {
  COLLECTION_HERO_TITLE_KEYS,
  getCollectionFamily,
  type CollectionKey,
} from '@/lib/product-collections';
import {getCanonicalForRoute} from '@/lib/seo/canonical';
import {
  COLLECTION_FAMILY_HUBS,
  COLLECTION_ROUTE_KEYS,
  getBreadcrumbJsonLd,
  getItemListJsonLd,
  getProductJsonLd,
} from '@/lib/seo/jsonld';
import {
  getCollectionPanelNameNamespace,
  getCollectionSpecRegistryEntry,
  resolvePanelName,
  resolveSpecValue,
  SPEC_PROFILES,
} from '@/lib/specs';
import {JsonLd} from './JsonLd';

type CollectionJsonLdProps = {
  locale: string;
  collectionKey: CollectionKey;
  kind: 'product' | 'itemList';
  description?: string;
  panels: Panel[];
};

export async function CollectionJsonLd({
  locale,
  collectionKey,
  kind,
  description,
  panels,
}: CollectionJsonLdProps) {
  const family = getCollectionFamily(collectionKey);
  const tHeader = await getTranslations({locale, namespace: 'Header'});
  const tHomePage = await getTranslations({locale, namespace: 'HomePage'});

  const name = tHeader(COLLECTION_HERO_TITLE_KEYS[collectionKey]);
  const pageUrl = getCanonicalForRoute(COLLECTION_ROUTE_KEYS[collectionKey], locale);
  const hub = COLLECTION_FAMILY_HUBS[family];
  const hubUrl = getCanonicalForRoute(hub.routeKey, locale);
  // Images are locale-independent static assets; never locale-prefix them.
  const siteUrl = getSiteUrl();
  const toImageUrl = (path: string) => `${siteUrl}${path}`;

  const breadcrumbItems = [
    {name: tHeader('navHome'), url: getCanonicalForRoute('/', locale)},
    // The hub page doubles as the current page for hub routes; skip the duplicate crumb.
    ...(hubUrl === pageUrl ? [] : [{name: tHomePage(hub.labelKey), url: hubUrl}]),
    {name, url: pageUrl},
  ];

  const entities: Record<string, unknown>[] = [];

  if (kind === 'product') {
    const tProductDetails = await getTranslations({locale, namespace: 'ProductDetails'});
    const registryEntry = getCollectionSpecRegistryEntry(collectionKey);
    const specRows = SPEC_PROFILES[registryEntry.specProfileId].map((row) => ({
      labelKey: row.labelKey,
      label: tProductDetails(row.labelKey),
      value: resolveSpecValue(row.value, (key) => tProductDetails(key)),
    }));
    const materialRow = specRows.find((row) => row.labelKey === 'specMaterial');

    entities.push(
      getProductJsonLd({
        name,
        url: pageUrl,
        description,
        images: panels.map((panel) => toImageUrl(panel.productImageUrl)),
        material:
          materialRow && !Array.isArray(materialRow.value) ? materialRow.value : undefined,
        specs: specRows.map((row) => ({
          label: row.label,
          value: Array.isArray(row.value) ? row.value.join(', ') : row.value,
        })),
      }),
    );
  } else {
    const tPanelNames = await getTranslations({
      locale,
      namespace: getCollectionPanelNameNamespace(collectionKey),
    });

    entities.push(
      getItemListJsonLd({
        name,
        url: pageUrl,
        items: panels.map((panel) => ({
          name: resolvePanelName(tPanelNames, panel.nameKey),
          url: pageUrl,
          image: toImageUrl(panel.productImageUrl),
        })),
      }),
    );
  }

  entities.push(getBreadcrumbJsonLd(breadcrumbItems));

  return <JsonLd data={entities} />;
}
