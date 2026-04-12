# Product Loading Logic

This document describes the current product data-loading flow after the spec-registry refactor.

It covers the active product pages only. The 5 future flooring asset folders under `public/images/` are not wired into this flow yet.

## Source Of Truth

Product data is intentionally split across a few layers:

- `public/images/.../products.json`
- `public/images/.../<product-id>/product.jpg`
- `public/images/.../<product-id>/application.jpg`
- `messages/en.json` and `messages/tr.json`
- `src/lib/product-collections.ts`
- `src/lib/specs/data/*.json`

Those layers have different responsibilities:

- `products.json` decides which products exist in a collection and in what order they appear.
- image files supply the product and application visuals.
- translations decide how collection and product labels are shown to users.
- `product-collections.ts` is the canonical list of active collection keys and family grouping.
- the spec registry decides which shared technical spec block belongs to a collection.

## Runtime Flow

The runtime flow for an active collection page is:

1. A localized route page under `src/app/[locale]/.../page.tsx` calls a collection-specific loader from `src/lib/*-data.ts`.
2. That loader calls `loadPanelsFromManifest()` from `src/lib/panel-loader.ts`.
3. `loadPanelsFromManifest()` reads `products.json`, verifies that `product.jpg` and `application.jpg` exist for each id, and returns `Panel[]`.
4. The page passes `initialPanels` and a canonical `collectionType` into `src/components/showcase/Showcase.tsx`.
5. `Showcase` resolves:
   - collection family from `src/lib/product-collections.ts`
   - panel-name translation namespace from `src/lib/specs/index.ts`
   - shared spec rows, feature labels, and special flags from `src/lib/specs/index.ts`
6. `Showcase` passes the resolved spec rows into `src/components/showcase/ProductDetails.tsx`.
7. `ProductDetails` only renders the data it receives. It no longer contains collection-specific spec branching.

## Main Files

The main files in this flow are:

- `src/lib/panel-loader.ts`
  - low-level manifest reader that builds `Panel[]`
- `src/lib/panel-types.ts`
  - shared `Panel` shape
- `src/lib/floor-natural-data.ts`
- `src/lib/floor-stone-data.ts`
- `src/lib/floor-full-natural-data.ts`
- `src/lib/panel-data.ts`
- `src/lib/skirting-*.ts`
  - collection-specific server loaders that call the shared panel loader
- `src/lib/product-collections.ts`
  - canonical collection keys and family grouping
- `src/lib/specs/index.ts`
  - public API for resolving specs, feature labels, and panel-name namespaces
- `src/lib/specs/data/collection-spec-registry.json`
  - maps each active collection key to its family, panel namespace, spec profile, and special flags
- `src/lib/specs/data/flooring-spec-profiles.json`
- `src/lib/specs/data/wall-panel-spec-profiles.json`
- `src/lib/specs/data/skirting-spec-profiles.json`
  - shared technical spec blocks
- `src/components/showcase/Showcase.tsx`
  - orchestration layer between loaded panel data and rendered UI
- `src/components/showcase/ProductDetails.tsx`
  - presentational renderer for product specs and feature highlights

## Worker Fallback

Cloudflare Worker runtime cannot rely on server-side filesystem access in the same way as local Next.js dev/build.

To support that, the repo keeps a build-time fallback path:

- `scripts/generate-panel-manifests.mjs` reads every active collection `products.json`
- it writes static `public/data/<collection-key>.json` files
- if a route reaches `Showcase` with `initialPanels = []`, `Showcase` fetches `/data/<collection-key>.json` on the client and reconstructs the panel list

That means there are two panel-loading paths:

- server path: route loader -> `loadPanelsFromManifest()` -> `Panel[]`
- fallback path: `public/data/<collection-key>.json` -> client fetch in `Showcase`

Both paths should produce the same ordered panel list for active collections.

## Specs And Feature Logic

Shared product specs no longer live inside `ProductDetails.tsx`.

Current behavior:

- `src/lib/specs/data/collection-spec-registry.json`
  - chooses the spec profile and panel-name namespace for each collection
- `src/lib/specs/data/*-spec-profiles.json`
  - holds the reusable technical spec rows
- `resolveCollectionSpecs()` in `src/lib/specs/index.ts`
  - translates labels
  - resolves string or translation-backed values
  - returns feature labels and special flags

Important rule:

- `products.json` is for membership and order
- spec profile data is for shared technical values
- translations are for human-facing labels

Do not move shared technical values back into translations or UI components.

## Product Name Logic

Product card and detail names are resolved by namespace, not by folder introspection.

`Showcase.tsx` uses `getCollectionPanelNameNamespace(collectionType)` to choose the correct translation namespace, then resolves each product id through that namespace with a safe fallback to the raw key.

Examples:

- wall panels use `PanelNames`
- 3D panel collections use their own namespaces
- natural, stone, and full natural collections use collection-specific namespaces
- skirting family labels use `SkirtingCollectionNames`
- skirting SKU display values still come from `SkirtingPanelNames`

## What Was Removed

`details.json` files are no longer part of the active product-loading path.

Before the refactor, specs were effectively hardcoded in `ProductDetails.tsx` and `details.json` was not being used as a live source for those values. After the refactor:

- shared specs live in the spec registry
- `details.json` was removed from active collection folders
- the backup bundle created during the refactor remains the recovery path for historical reference

## How To Add A New Collection

To add a new active collection cleanly, update all of these layers:

1. Add the asset folder under `public/images/...`
2. Add `products.json` with the intended order
3. Add each product folder with `product.jpg` and `application.jpg`
4. Add or update the collection-specific server loader under `src/lib/`
5. Add the localized route page under `src/app/[locale]/`
6. Add the collection key and family mapping in `src/lib/product-collections.ts`
7. Add the collection entry in `src/lib/specs/data/collection-spec-registry.json`
8. Point that entry to an existing or new spec profile in `src/lib/specs/data/*.json`
9. Add the product-name translations in `messages/en.json` and `messages/tr.json`
10. Add the collection to `scripts/generate-panel-manifests.mjs`
11. Regenerate `public/data/*.json`
12. Verify the route works in both locales and that the generated `public/data/<collection-key>.json` matches the manifest order

## Guardrails

When changing product loading logic, keep these rules in place:

- keep `products.json` as the source of truth for membership and ordering
- keep collection keys centralized in `src/lib/product-collections.ts`
- keep shared specs in the spec registry, not in React components
- keep translations responsible for labels, not structural grouping
- keep `ProductDetails.tsx` presentational
- keep the Worker fallback in sync with the active collection registry

If one of those layers changes without the others, the most common breakages are:

- missing products in a route
- wrong translation namespace for product names
- stale or missing `public/data/<collection-key>.json`
- a collection with correct images but no spec profile
- future collection assets existing on disk but not being wired into the site
