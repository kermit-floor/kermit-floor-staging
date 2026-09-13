# Manufacturer content release - 2026-09-13

Owner-approved first release of the competitor-informed content strategy. The owner approved execution and supplied product documents, then explicitly approved correcting the originals. This release uses original Kermit copy; competitor prose, capacity figures and competitor-specific performance claims are not transplanted.

## Shipped scope

- Expand the existing `/about` and `/tr/hakkimizda` manufacturer destinations; keep those established URLs. Add wholesale terms, OEM scope, practical questions and links to the new guides.
- Publish three EN/TR article pairs through the existing blog manifest, sitemap, canonical/hreflang and Article system. No new routing or schema framework. QA found that the shared Article helper incorrectly prefixed Turkish image assets with `/tr`; asset URLs now use the shared image path. The existing team author is typed as Organization, while named authors remain Person. This accuracy repair is included in the interference notes.
- Make the Resources hero, featured downloads, document request section and guide links render in initial server HTML, outside the client search-parameter boundary.
- Replace the missing flooring installation download with the corrected English manual. Add EN/TR heating guides and a specifically labelled Romanian technical sheet for 6 mm SPC without IXPE. File languages are visible in both locales.
- Make unavailable documents requestable, and label starter-pack actions as requests. Existing consent-aware lead events are unchanged; no event fires merely for navigating to Contact. Mobile QA also found the floating chat covering the privacy rejection control; the consent banner now shares the dialog stacking level and appears above the chat while open. This visual repair changes no consent or event logic.

| Topic | English URL | Turkish URL |
|---|---|---|
| Manufacturer selection | `/blog/spc-flooring-manufacturer-turkey-buyers-checklist` | `/tr/blog/spc-parke-ureticisi-secimi` |
| Samples and quotation | `/blog/spc-flooring-samples-wholesale-quote` | `/tr/blog/spc-parke-numune-toptan-teklif` |
| OEM/private label | `/blog/oem-private-label-spc-flooring` | `/tr/blog/oem-ozel-marka-spc-parke` |

## Facts and publication decisions

Owner confirmation on 2026-09-13: OEM/private label is available; wholesale SPC flooring MOQ is **one container**; standard lead time is **four weeks**. The quotation determines product configuration, packing, branding scope, destination delivery timing and payment terms. Do not infer container size, square metres per container, mixed-container capability, sample price, a deposit percentage or exclusive territories.

The company is listed in Çayırova, Kocaeli, with the existing Moldova and Romania locations. New copy describes company locations without claiming that a certificate applies to a particular factory. Numerical production capacity remains unspecified. Named certification/CE badges and certificate-download claims are deferred pending accurate product, holder and site scope; the supplied certificates are not included in public assets. Technical sheets are identified as manufacturer documents, not independent certifications.

The new OEM article cites [SCS FloorScore guidance](https://www.scsglobalservices.com/services/floorscore), fetched 2026-09-13, for the separate private-label assessment. This is an explanation of the certification process, not a claim that Kermit or a customer's proposed label has received that approval.

Owner explicitly confirmed **27°C maximum floor-surface temperature** and **2,000 kg/m³ (2 g/cm³) density** and authorized correcting original documents. Revisions:

- EN/TR/SR heating guides use a single maximum of 27°C for the finished floor surface. Removed 28-29°C ambiguity and distinguished the floor surface from heating water.
- Removed universal integrated-IXPE wording because the supplied 6 mm configuration has no attached IXPE. Require compatibility of any additional layer with the selected flooring and heating system.
- Removed an undefined universal screed-moisture percentage; require the installer to use the applicable method/limit for the screed and follow drying/commissioning instructions. Preserved the source gradual 3-5°C daily start-up while making the 27°C ceiling explicit.
- The newly located English flooring manual now matches existing Kermit guidance: indoor use, no bathroom floors/outdoor/hose cleaning, at least 10 mm movement gaps, and no unsupported 60°C/extreme-room permission. Joining methods are conditional on the selected lock. The original incorrect 1.5-6 mm gap table was replaced.
- Both Romanian 6 mm technical-sheet designs have the corrected density unit. The published sheet is the searchable three-page version, specifically for 6 mm SPC / 0.50 mm wear layer / no IXPE; acoustic performance remains undeclared.
- The six originals and their four source generators were updated with backups in the supplied document workspace. Declarations, signatures and third-party certificates were not rewritten.

The applicable warranty terms are still request-only. A heating supplement is not presented as the complete flooring manual. The English installation manual and Romanian technical sheet are clearly labelled by language on the Turkish page too.

## Evidence and deferred phases

The live competitor investigation fetched and inspected 146 English guides plus 20 English and 70 localized supporting pages (236 editorial pages, all HTTP 200). The separate crawl inventory retains content extracts, link graphs and SHA-256 checksums. Those pages inform the topic map, not copied wording. The [28-destination content map](2026-09-13-content-targets.json) includes existing pages and conditional future topics; it is not a commitment to publish 146 overlapping posts.

The first release is the existing manufacturer hub, the three new purchasing topics and resource improvements. Remaining installation, logistics, glossary, comparison and application pieces are phased according to the approved map, actual Kermit evidence and search demand. Manufacturing-process photography/interviews, order-specific test evidence, warranty terms and carton/loading data remain dependencies for the respective future articles. Do not publish an annual capacity number without a Kermit-specific figure.

Broad navigation, blog-hub, glossary and schema changes wait for the scheduled structural review on 2026-09-27. Keep the existing six CTR-test article URLs, titles and descriptions and existing product schemas. The new guides use distinct procurement tags so existing related-article cohorts do not change.

## Measurement and verification

Use the [fresh launch baseline](../baselines/2026-09-13-manufacturer-content.md). Record the actual deployment commit and production checks in the [logbook](../logbook.md) at ship time. New-page indexing check: 2026-09-27; ranking/snippet check: 2026-10-11; full structural effect: 2026-10-25. Existing experiment dates remain unchanged.

Required release checks: text/blog validation, generated manifest, typecheck, production build, EN/TR canonical/hreflang and sitemap membership, initial HTML discovery links, mobile/desktop rendering, real PDF downloads and unchanged consent-aware lead handlers. PDF corrections are checked by fresh text extraction and visual inspection of all 21 pages.

Article author and image repair follows [Google’s Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article), checked 2026-09-13: author type matches the named author, and image URLs identify accessible representative images.

## Production outcome

Code commit **d10e888** deployed successfully on 2026-09-13. [Recorded live checks](2026-09-13-production-verification.json) passed for all ten affected pages, 35 internal destinations, four PDF checksums and 20 desktop/mobile page checks. Search Console accepted the sitemap at 20:13 UTC; processing was pending, so the six new URLs are not yet claimed indexed. The technical source originals are corrected with backups. Warranty terms and accurately scoped certificate publication remain unresolved dependencies.
