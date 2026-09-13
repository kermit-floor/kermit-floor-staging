# Claim Verification Sources

Read this when adding or changing Kermit product, specification, or manufacturer claims.
Use the source that supports the particular collection, configuration, and claim.

## Product specifications

Follow `docs/product-loading-logic.md` when the loading model is unfamiliar:

- `src/lib/specs/data/collection-spec-registry.json` maps a collection to its spec profile.
- `src/lib/specs/data/*-spec-profiles.json` contains the shared technical values; read the
  applicable profile rather than assuming one collection's values apply to another.
- `src/lib/specs/index.ts` resolves those profiles, including translation-backed values.
- `messages/en.json` and `messages/tr.json` provide localized labels and names, plus values
  explicitly referenced by a profile. General marketing wording alone does not establish a
  technical specification.

`src/components/showcase/ProductDetails.tsx` renders resolved data; it is not the primary
specification source. Collection `products.json` files define membership and order.

## Manufacturer terms and supporting documents

- `src/lib/resources.json` locates product documents. Verify against the actual applicable
  document and its revision; a download title or metadata entry alone is not claim evidence.
- For manufacturer/OEM, ordering, installation, or heating claims introduced by the September
  2026 release, read the relevant facts and publication decisions in
  `docs/seo/content-strategy/2026-09-13-manufacturer-launch.md`. Check for later owner decisions
  or document revisions before treating those dated facts as current.

Preserve configuration limits, units, and document scope. Manufacturer technical sheets do
not establish independent certification; warranty or compliance statements require evidence
for the product and scope claimed.

## Use evidence precisely

Record the supporting repo paths and any external research actually used in `sourceUrls`.
If sources conflict, resolve the applicable revision and scope or surface the unresolved claim.
Without support, omit the Kermit-specific assertion or use accurate generic guidance.
Do not soften an unsupported number into an equally unsupported qualitative performance claim.
