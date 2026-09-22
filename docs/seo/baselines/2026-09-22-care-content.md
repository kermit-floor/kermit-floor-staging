# Underlay, care and room-selection baseline — 2026-09-22

Fresh direct GSC and GA4 API calls use the existing impersonated ADC identity. The
[36 requests and responses](2026-09-22-care-content.json) preserve the exact filters,
including the English Elite page supplement fetched after identifying query overlap.
This is a publishing baseline, not a new periodic-review verdict.

Fetched **2026-09-22T00:32:55.277025+00:00**. The availability probe requests final data through September 21;
the latest returned date is **September 19**. Matched windows are **August 23–September 19**
and **July 26–August 22**. All six new URLs returned **404**, using no-cache request headers,
at **2026-09-22T00:32:55.277048+00:00** before publication.

## Fixed new cohort

The six exact paths are in the JSON under `new_paths`. The fixed 16-query group is:

- `spc flooring underlay`
- `does spc flooring need underlay`
- `spc flooring acoustic`
- `how to clean spc flooring`
- `spc flooring maintenance`
- `spc flooring repair`
- `spc flooring kitchen`
- `spc flooring bedroom`
- `spc flooring living room`
- `spc parke şilte`
- `spc parke altına şilte`
- `spc parke temizliği`
- `spc parke bakımı`
- `spc parke tamiri`
- `mutfakta spc parke`
- `spc parke yatak odası`

The latest window has no rows for the new exact-query group. The previous window has
one impression, zero clicks and position 98 for `spc flooring kitchen`, allocated to the
English Elite collection page. The six new URLs have no rows in either window.
No rows do not establish zero demand. Use indexing, first query allocation,
impression and position trends first; CTR needs enough observations. Label later query
discoveries exploratory rather than silently changing this cohort.

Review **October 6 indexing**, **October 20 rankings/query allocation**, and
**November 3 full content/link effects**. Watch the new underlay guide against the earlier
technical pages for `spc flooring underlay` and `spc parke şilte`, which occur in both fixed
query groups. No keyword-volume or chatbot-citation result is inferred from this snapshot.

## Overlap snapshot

| GSC cohort | Latest 28 days | Previous 28 days |
|---|---|---|
| New 16 care/use/underlay queries | No rows | 0 clicks / 1 impressions / 98.00 |
| Original 13 technical queries | 0 clicks / 1 impressions / 1.00 | No rows |
| Original 14 project/distributor/design queries | No rows | No rows |
| Original eight manufacturer queries | 2 clicks / 87 impressions / 14.01 | 3 clicks / 28 impressions / 11.11 |
| Six technical article URLs | 5 clicks / 120 impressions / 4.52 | No rows |
| Six project/distributor/design URLs | 2 clicks / 44 impressions / 5.34 | No rows |
| Six purchasing article URLs | 1 clicks / 47 impressions / 7.66 | No rows |
| About/Resources EN/TR | 24 clicks / 877 impressions / 9.86 | 30 clicks / 819 impressions / 10.92 |
| English Elite collection, all queries | 2 clicks / 109 impressions / 10.58 | 3 clicks / 136 impressions / 10.66 |

Positions are impression-weighted across the returned rows. Page-row impressions are not
property-deduplicated totals. Early article exposure is descriptive, not a verdict. The
raw technical query/page report preserves the one returned query's destination.

| GA4 measure | Latest 28 days | Previous 28 days |
|---|---|---|
| AI Assistant: sessions / engaged / keys | 13 / 10 / 3 | 1 / 0 / 0 |
| Organic Search: sessions / engaged / keys | 174 / 112 / 16 | 286 / 177 / 9 |
| generate_lead: raw events / keys | 48 / 16 | 10 / 10 |
| file_download: raw events / keys | 15 / 15 | 42 / 1 |
| About/Resources organic landings: sessions / engaged / keys | 7 / 6 / 2 | 10 / 7 / 0 |
| 24 article organic landings: sessions / engaged / keys | 0 / 0 / 0 | 0 / 0 / 0 |

The last landing cohort contains the 18 earlier September URLs plus today's six planned
URLs (24 paths in total); none has a reported organic landing in these windows. Both
AI-source reports identify ChatGPT; the fixed AI Assistant channel remains the metric,
with the source-regex report supplementary. Referrals do not measure chatbot citations.

**Measurement break:** both windows precede the September 21 consent-order repair. Any
comparison with later GA4 data crosses that break. Preserve the
[consent/contact baseline](2026-09-21-consent-contact.md), exclude its partial release day,
and inspect post-repair channels/device behaviour before drawing growth conclusions.
The earlier window also spans the introduction of lead key events. Raw events and key
events are different series; lead-intent actions are not qualified leads or sales.

## Treatment chosen before shipping

- Re-baseline the technical and project/design content/link effects to this snapshot:
  new incoming links overlap those page cohorts; the underlay query scope also overlaps.
  Their combined content/link review is **November 3**, superseding October 27.
- Resources links and document/enquiry opportunities overlap the manufacturer release's
  secondary and combined content/link outcomes. Use **November 3** for those combined
  effects, retaining its exact original purchasing-query baseline and early checkpoints.
- Re-baseline the crawler/llms.txt aggregate AI outcome and content-related secondary
  GA4 outcomes to this release cohort, with **November 3** combined review. This supersedes
  November 2 for aggregate AI/content effects only. September 21's measurement break remains.
- Preserve September 27/28/29 indexing and October 11/12/13 interim ranking reads for
  earlier batches. Retain all original snapshots; later effects are combined, not isolated
  effects of the first publication day.
- Preserve September 24 operational leads, September 28 consent correctness, October 5
  desktop comparison and October 21 Germany/consent conversion checks. The new contact
  links change exposure opportunities, so record this cohort in their aggregate readings.
- Preserve the November 2 Turkish wall-panel query/product experiment and unaffected
  September 27 product/H1/redirect/CTR/pricing/skirting scopes. No tested article, product,
  metadata, shared renderer, event handler or original related-post cohort is altered.
  Exclude the six new articles and their new tag pages from original page cohorts.
- The historical `spc flooring kitchen` impression on English Elite is a narrow query
  overlap with the collection/H1 and Product-schema page cohorts. Re-baseline this
  query-to-page allocation and the affected Elite all-query secondary reading here, with
  **November 3** combined follow-up. Its all-query CTR is 1.83% vs 2.21% in these windows.
  Preserve original H1 target queries, technical schema correctness and unaffected
  September 27 cohorts; later Elite all-query changes cannot be isolated to the old change.

The [release record](../content-strategy/2026-09-22-care-content-launch.md) checks every
open/operational entry. Matching notes are added to affected parent logbook entries.
Deployment timestamps and first full post-launch dates will be recorded after verification.
