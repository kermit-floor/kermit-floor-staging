import {getSiteUrl} from '@/lib/blog/seo';
import type {CollectionFamily, CollectionKey} from '@/lib/product-collections';
import type {pathnames} from '@/navigation';

type AppRouteKey = keyof typeof pathnames;

export const ORGANIZATION_ID = `${getSiteUrl()}/#organization`;

export const COLLECTION_ROUTE_KEYS = {
  'spc-wall-panels': '/spc-wall-panels',
  'spc-3d-wall-panels-model-a': '/spc-3d-wall-panels-model-a',
  'spc-3d-wall-panels-model-b': '/spc-3d-wall-panels-model-b',
  'spc-flooring-elegance-collection': '/spc-flooring-elegance-collection',
  'spc-flooring-sky-collection': '/spc-flooring-sky-collection',
  'spc-flooring-mosaic-collection': '/spc-flooring-mosaic-collection',
  'spc-flooring-elite-collection': '/spc-flooring-elite-collection',
  'spc-flooring-travertine-collection': '/spc-flooring-travertine-collection',
  'spc-parquet-natural-collection': '/spc-parquet-natural-collection',
  'spc-parquet-stone-collection': '/spc-parquet-stone-collection',
  'full-natural-collection': '/full-natural-collection',
  'skirting-alpha-140-mm': '/spc-skirting-boards/alpha-140-mm-skirting-board',
  'skirting-berlin-100-mm': '/spc-skirting-boards/berlin-100-mm-skirting-board',
  'skirting-elite-100-mm': '/spc-skirting-boards/elite-100-mm-skirting-board',
  'skirting-moderna-100-mm': '/spc-skirting-boards/moderna-100-mm-skirting-board',
  'skirting-optima-60-mm': '/spc-skirting-boards/optima-60-mm-skirting-board',
  'skirting-optima-90-mm': '/spc-skirting-boards/optima-90-mm-skirting-board',
  'skirting-solid-80-mm': '/spc-skirting-boards/solid-80-mm-skirting-board',
  'skirting-x-line-100-mm': '/spc-skirting-boards/x-line-100-mm-skirting-board',
} as const satisfies Record<CollectionKey, AppRouteKey>;

export const COLLECTION_FAMILY_HUBS = {
  flooring: {
    routeKey: '/spc-flooring-elite-collection',
    labelKey: 'flooringTitle',
  },
  wall_panels: {
    routeKey: '/spc-wall-panels',
    labelKey: 'wallsTitle',
  },
  skirting: {
    routeKey: '/spc-skirting-boards',
    labelKey: 'skirtingTitle',
  },
} as const satisfies Record<CollectionFamily, {routeKey: AppRouteKey; labelKey: string}>;

export function getOrganizationJsonLd({
  telephone,
  email,
}: {
  telephone: string;
  email: string;
}) {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Kermit Floor',
    url: siteUrl,
    logo: `${siteUrl}/images/kermit-floor-logo.png`,
    email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone,
      email,
      availableLanguage: ['en', 'tr'],
    },
    sameAs: ['https://www.instagram.com/kermitfloor'],
  };
}

export function getWebSiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Kermit Floor',
    url: siteUrl,
    publisher: {'@id': ORGANIZATION_ID},
    inLanguage: ['en', 'tr'],
  };
}

export function getProductJsonLd({
  name,
  url,
  description,
  images,
  material,
  specs,
}: {
  name: string;
  url: string;
  description?: string;
  images: string[];
  material?: string;
  specs: {label: string; value: string}[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    url,
    ...(description ? {description} : {}),
    ...(images.length > 0 ? {image: images} : {}),
    brand: {'@type': 'Brand', name: 'Kermit Floor'},
    manufacturer: {'@id': ORGANIZATION_ID},
    ...(material ? {material} : {}),
    ...(specs.length > 0
      ? {
          additionalProperty: specs.map((spec) => ({
            '@type': 'PropertyValue',
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };
}

export function getItemListJsonLd({
  name,
  url,
  items,
}: {
  name: string;
  url: string;
  items: {name: string; url: string; image?: string}[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.image ? {image: item.image} : {}),
    })),
  };
}

export function getBreadcrumbJsonLd(items: {name: string; url: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
