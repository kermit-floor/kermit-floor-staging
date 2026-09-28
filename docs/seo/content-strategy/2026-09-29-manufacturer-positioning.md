# Manufacturer positioning — September 29, 2026 release

Status: **approved for publication; deployment pending**. The owner requested chatbot buyer experiments,
source analysis and stronger manufacturer positioning. [Audit and evidence](../investigations/2026-09-29-ai-manufacturer-audit.md).

## Scope and claim provenance

EN `/about`, TR `/tr/hakkimizda`, their descriptions and visible/matching FAQ answers, plus
`/llms.txt`. No new route, blog post, product specification, site-wide schema framework,
navigation change, contact record or analytics change.

Owner confirmation in this task: **annual capacity of 8 million m² across flooring and wall
panels combined**; operating countries **Türkiye, Moldova, Romania and USA**. This supersedes
the September 13 decision to leave numerical capacity unpublished. It does not mean 8 million
m² per product line, actual annual output, available order allocation, or four factory countries.
Factory roles in Türkiye/Moldova and the Romania store come from existing Contact/llms content.
U.S. presence is described without an invented factory/address. Existing Germany representation
remains a Contact fact, separate from the owner's four-country operating footprint.

The change adds explicit scale facts where the chatbot's answer lacked them. It retains the
OEM, one-container MOQ and four-week standard lead time that the answers already retrieved.
Two new visible FAQs per locale reuse the existing FAQ emitter, giving seven About answers
per locale. No new certification, comparative market rank, warranty or performance claim.

## Hypothesis and measurement

Hypothesis: a clear, bilingual company profile with capacity scope and country roles will
improve the accuracy and completeness of manufacturer recommendations and help buyers
qualify Kermit for larger supply programmes.

Primary metric: supplier recommendation with a direct Kermit citation for the four fixed
audit prompts, alongside correct capacity/country extraction. Pilot baseline: **3/4 recommended
and cited; 0/4 capacity; 0/4 complete four-country footprint**. Report prompt-level answers;
do not treat 75% as a population estimate. Post-ship checks at T+14 and T+28 days use repeated
fresh first answers. No recurring automation has been scheduled.

Secondary metrics: original manufacturer query/page impressions and position; AI source/medium
sessions and contact-intent/download events. The [fresh matched-window snapshot](../baselines/2026-09-29-manufacturer-positioning.md)
covers August 30–September 26 versus August 2–29, captured before deployment. Preserve the September 21 consent measurement break,
historical baselines and the distinction between contact intent and qualified enquiries.

## Every-entry interference review

This assessment was refreshed against remote `main` (`47b8251`) after approval. The release
includes the September 25 comparison/water/terminology publication. Its latest combined
AI/content date was November 6; the narrower unchanged search cohorts retain their dates.
An isolated release checkout preserves pre-existing uncommitted September 25 review work.

| Open or operational entry | Scope and required ship-time treatment |
|---|---|
| Sep 25 comparison/water/terminology | No article, metadata, link, tag, redirect or primary-query edit. Keep October 9/23 and November 6 primary search/link dates; aggregate AI secondary outcome joins November 10. |
| Sep 21 Turkish wall-panel product links | No affected article/product URL, anchor or primary query; preserve November 2 scope. |
| Sep 21 consent repair | Event code untouched. Aggregate AI/contact exposure overlaps; annotate content change, keep correctness/desktop dates and consent break. |
| Sep 21 Germany representative | Existing Contact record/click handler untouched. Keep office-specific October 21 metric; annotate incoming manufacturer enquiries as an aggregate confound. |
| Aug 14 lead instrumentation | Keep WORKED instrumentation verdict and weekly operations. New copy may alter enquiry exposure, so annotate aggregate leads/downloads at shipment. |
| Aug 15 AI crawler unblock | Aggregate AI overlap. Re-baseline the combined AI/content outcome at shipment, preserve the old baseline and consent break, review T+42 days. Do not attribute the outcome to crawler settings alone. |
| Aug 15 site-wide JSON-LD | Organization/Product/Breadcrumb implementation untouched; changed About FAQ content overlaps entity/citation interpretation. Mark that narrow content cohort; original product/schema correctness remains separate. |
| Aug 15 collection H1s | No collection H1, body, link or primary query change; preserve original cohort and historical dates. |
| Aug 15 alternate-locale redirects | No route/redirect edit; preserve original cohort and dates. Verify the two existing About canonicals during QA. |
| Aug 15 llms.txt | Direct overlap. Re-baseline the combined AI/content outcome at shipment and review T+42 days; do not claim isolated llms.txt efficacy. |
| Aug 15 user-review pair | No body, metadata, tags, links or review-intent changes; preserve existing verdict and monitoring. |
| Aug 15 pricing pair | No pricing content/query change; retain existing primary cohort. Aggregate contacts remain a confounded secondary measure. |
| Aug 16 three-topic CTR refresh | No tested article/title/description/related cohort edit; preserve the existing topic comparisons. |
| Aug 16 skirting hub | No hub, navigation, product data or primary-query edit; preserve original cohort. |
| Sep 3 skirting image repair | No image/card/manifest logic edit; preserve correctness verdict. |
| Sep 13 manufacturer purchasing/documents | Direct About/page/query overlap. Re-baseline affected original eight-query and About/Resources/purchasing-page scope at shipment; preserve old snapshots. New combined content review T+42 days; treat earlier interim reads as descriptive with the new intervention marked. |
| Sep 14 purchasing author | Byline/photo/article unchanged. Keep attribution correctness; parent content secondary effects follow the new manufacturer cohort. |
| Sep 14 FAQ/photo | Direct overlap for About FAQs only. Verify visible/schema parity at deployment; use a fresh About citation baseline and T+42-day observational review. Unchanged blog FAQs/portrait remain separate. |
| Sep 14 technical guides | No article or query change. Preserve primary technical cohort; annotate aggregate AI/contact readings and use the new combined AI/content baseline where that metric overlaps. |
| Sep 15 distributor/project/design guides | OEM/manufacturer discovery and aggregate secondary metrics overlap. Preserve unchanged article/query baselines; re-baseline combined discovery/AI outcome at shipment, T+42 days. |
| Sep 22 care/room/underlay guides | Primary content/query scope unchanged. Aggregate AI/contact interpretation overlaps; record the new cohort and T+42-day combined outcome without rewriting its original primary baseline. |

Approved treatment: **ship with the September 29 baseline and a cohort marker** for
manufacturer discovery, About FAQs, llms.txt and aggregate AI/content effects. Review those
combined outcomes **November 10**; this supersedes November 6 for those overlapping metrics
only. Preserve September 21 consent/office operations and all unaffected search baselines.
The four fixed consumer prompts will be re-read **October 13** and **October 27**; those are
recorded review dates, not scheduled automations. Copy/snippet review is October 27.
Keep manufacturer interim October 11 reads descriptive and marked with this intervention.
Technical/care/comparison primary search/link dates stay November 6, project/Elite November 3,
and wall-panel November 2. About FAQ observation moves to November 10; unchanged blog FAQs
and portrait keep October 26. Matching treatment is recorded in the affected logbook entries.

## Local validation

[Validation evidence](2026-09-29-manufacturer-positioning-validation.json): text/blog checks,
typecheck, Next production build and OpenNext Cloudflare build passed. Parsed initial HTML
contains all six fact cards, correct descriptions/canonicals/hreflang and **seven matching
visible/structured FAQ answers per locale**. English and Turkish hero/cards were inspected
at desktop and mobile widths in the Cloudflare local preview; no horizontal overflow or
browser-console error was observed. Analytics was rejected during local browser checks.
The server logged `unenv fs.readFile` errors for unchanged skirting loaders during navigation
prefetches; the two About pages returned 200 and passed the visible checks.

Plain `next start` produced a local redirect loop; the intended OpenNext Cloudflare runtime
rendered both public paths correctly. No routing code was modified. Read-only HEAD requests
to the existing production About URLs returned 200; they are not verification of this
release. The owner subsequently approved commit, push and publication. The integrated
OpenNext release build on `47b8251` also passed with 24 topics/48 articles; both built About
pages again passed six-fact, seven-FAQ, canonical/hreflang and description checks. Production
verification and the same-day ship record will be completed after the connected deployment.
