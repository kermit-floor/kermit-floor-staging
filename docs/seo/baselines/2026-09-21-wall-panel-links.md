# Turkish wall-panel link correction — September 21, 2026 baseline

The owner authorized pushing all pending work on September 21, after the local
link corrections passed validation. This supersedes the proposed wait until the
September 27 structural review. Use **ship and re-baseline** for the overlapping
wall-panel portions of the Product-schema, blog-redirect and combined CTR experiments.
This is a link-destination correction, not a change to article copy, metadata,
English content, sitemap, navigation or shared rendering.

## Scope and hypothesis

Two contextual links change from `/spc-wall-panels` to `/tr/spc-duvar-panelleri` in:

- `/tr/blog/spc-duvar-paneli-kullanim-alanlari`
- `/tr/blog/banyo-tadilatinda-spc-panel-avantajlari-seramige-gore`

The literal destination now identifies the Turkish product independently of locale
cookies or language-based redirects. Hypothesis: clearer article-to-product links
support Turkish product discovery and preserve an appropriate route for readers.
The former links are not a proven explanation for the observed product click loss.

## Pre-release checkpoint

Fresh finalized GSC Web data was collected **September 21 at 14:23 UTC**, before this
release. Property: `sc-domain:kermitfloor.com`. Latest 28 days: **August 23–September 19**;
previous 28 days: **July 26–August 22**. This reuses the same-day review collection;
[exact requests and responses](../reviews/2026-09-21-evidence.json) are preserved.

| Page cohort, all countries/devices/queries | Previous clicks / impressions / position | Latest clicks / impressions / position |
|---|---|---|
| Turkish wall-panel product | 41 / 889 / 8.30 | **14 / 354 / 9.13** |
| English wall-panel product | 4 / 569 / 10.20 | **8 / 488 / 11.23** |
| Turkish usage guide, old + canonical paths | 21 / 758 / 8.55 | **32 / 930 / 8.58** |
| Turkish bathroom-renovation guide, old + canonical paths | 12 / 306 / 7.42 | **15 / 425 / 7.76** |

These are page-row aggregates with impression-weighted positions, not deduplicated
property impressions. Keep old bare Turkish article paths with their `/tr` counterparts.

| Exact query | Previous property clicks / impressions / position | Latest property clicks / impressions / position |
|---|---|---|
| `spc duvar paneli` | 24 / 498 / 7.79 | **27 / 554 / 8.60** |
| `spc panel` | 13 / 290 / 7.89 | **3 / 193 / 10.39** |
| `spc duvar kaplama` | 5 / 70 / 7.33 | **3 / 96 / 7.54** |

On `spc duvar paneli`, Turkish product clicks/impressions are **19/342→4/98**, while
the usage guide's old+canonical clicks are **5→23**. On `spc panel`, product clicks/
impressions are **8/178→0/5**. The exact-query/page reports retain the full allocation.
Country/device rows omit some totals; compare equivalent filtered reports rather
than treating them as a complete decomposition. The unchanged original CTR verdict
uses its own frozen pre/post windows, not these rolling dates.

## Primary measurement and interference

- **Implementation check:** both published article body links use the exact Turkish
  href and the destination returns 200/self-canonical. This is separate from SEO impact.
- **Primary SEO measures:** Turkish product impressions and position for the two exact
  queries `spc duvar paneli` and `spc panel`, alongside their product/guide allocation.
  Product clicks are secondary at this volume. Guard against simply transferring
  clicks away from useful guides by comparing whole-property query clicks and the
  fixed article/product cohorts above. `spc duvar kaplama` retains the overlapping
  CTR-topic checkpoint.
- **Affected old scopes:** Turkish usage-guide CTR/query allocation; both Turkish
  guides' redirect/allocation outcomes; Turkish and English wall-panel product
  visibility within the structured-data experiment. Later movement is a combined
  outcome, not an isolated schema, redirect, title or link effect.
- **Treatment:** retain historical baselines and verdicts. Re-baseline these wall-panel
  components here and review their combined effect on **November 2, 2026** (six weeks).
  September 27 can still read the old wall-panel cohort through September 20 only,
  with final-data availability checked then. Unaffected schema/product, redirect,
  H1, pricing, skirting, content-indexing and other CTR checks retain their dates.
- **GA4:** today's separately deployed consent repair already creates a measurement
  break. Add this link correction as another same-day navigation confound for
  aggregate lead/AI interpretation, preserving the October 21 conversion and November
  2 AI dates. No new event-code change or independent conversion uplift is claimed.
- **Comparison window:** exclude September 21 release day. At the November 2 review,
  use the latest fully finalized 28 days wholly after deployment against this fixed
  pre-release checkpoint, plus weekly trends and explicit recrawl dates. Insufficient
  volume or further overlapping changes can require INCONCLUSIVE/re-baselining.

Local validation passed: production build, text/blog validation, type checks, built
HTML link checks and manifest comparison (only the two Turkish content/contentHtml
fields changed). Production deployment and verification are recorded in the logbook
once complete. The separately recommended sitemap correction is not part of this release.
