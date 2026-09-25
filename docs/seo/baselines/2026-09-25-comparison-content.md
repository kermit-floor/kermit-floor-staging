# Comparison and water-resistance content baseline — 2026-09-25

This is the fifth approved content release's publishing baseline, not a periodic-review
verdict. [Raw evidence](2026-09-25-comparison-content.json) contains **61 direct GSC/GA4
requests and responses**, plus availability and pre-launch HTTP checks. Queries use fresh
impersonated ADC after credential recovery; no credentials are included in the evidence.

Fetched **2026-09-25T12:57:33.968559+00:00**, with the redirect/collection supplement recorded separately.
The final-data availability probe returns **September 23** as the latest date. Matched
windows: **August 27–September 23** versus **July 30–August 26**. Pre-launch no-cache requests
returned **200 for the four existing URLs** and **404 for the two new terminology URLs**.
The JSON preserves paths, statuses and existing HTML hashes.

## Fixed query and page cohorts

- **comparison**: `spc flooring vs laminate`, `laminate vs spc flooring`, `spc vs laminate`, `spc parke mi laminat mı`, `spc parke mi laminat mi`, `spc parke laminat farkı`.
- **water**: `is spc flooring waterproof`, `spc flooring water resistance`, `spc parke suya dayanıklı mı`, `suya dayanıklı parke`.
- **types**: `spc vs lvt`, `spc vs wpc`, `lvt vs spc`, `spc vs vinyl`, `spc lvt farkı`, `spc wpc farkı`.

Six canonical paths are fixed in `release_paths`: four revised comparison/water pages and
the new terminology pair. Preserve existing URLs and publication dates. Query discoveries
outside these 16 targets are exploratory, not additions to the fixed metric.

| Query/page cohort | Latest clicks / impressions / position | Previous clicks / impressions / position |
|---|---|---|
| Six comparison queries | 0 / 137 / 38.61 | 0 / 173 / 34.94 |
| Four water queries | 1 / 114 / 9.04 | 1 / 156 / 10.24 |
| Six terminology queries | No rows | No rows |
| Six release URLs (four currently exist) | 10 / 1,200 / 12.79 | 8 / 1,329 / 14.88 |
| Existing SPC definition pair | 103 / 4,229 / 6.80 | 21 / 684 / 7.70 |
| Stone and Natural collection EN/TR control snapshot | 35 / 1,264 / 7.59 | 37 / 1,492 / 9.78 |

The specific `laminate vs spc flooring` query has **126 impressions at 39.15**, all allocated
to the existing English comparison. `is spc flooring waterproof` has **72 impressions at
7.32** on the English water guide. These are queries, not total page exposure: that water
page has **5 clicks / 691 impressions / 5.02** across all reported page queries. The new
terminology group has no rows in either window; this does not establish zero market demand.

The query/page supplement shows one `spc vs laminate` impression on the old definition
article. Keep that definition page as the established introduction and link to it; monitor
allocation rather than creating a second general SPC definition. `suya dayanıklı parke`
also appears on the unprefixed Turkish water alias (13 impressions), its canonical Turkish
URL (25) and the existing tag page (4). Do not combine those rows as deduplicated property
exposure or infer that a redirect repair alone caused the distribution.

## Existing redirect subset

The two Turkish articles being rewritten are in the older permanent-redirect experiment.
Their content and metadata changes confound later canonical/alias search results even though
redirect code is unchanged. The six-path supplement includes both English articles, both
Turkish canonical URLs and both unprefixed Turkish aliases.

| Turkish path | Latest clicks / impressions | Previous clicks / impressions |
|---|---|---|
| Water canonical | 5 / 200 | 0 / 7 |
| Water alias | 1 / 75 | 2 / 257 |
| Comparison canonical | 0 / 10 | 0 / 1 |
| Comparison alias | 1 / 18 | 2 / 52 |

Four fresh URL Inspection requests supplement the performance baseline. Both Turkish
canonical URLs are submitted/indexed with matching Google canonicals; both unprefixed
aliases are “Page with redirect,” with Google choosing the corresponding `/tr/` canonical.
Last crawls range from September 5–8. These are Google's stored index results, not live
fetches, and the historical alias impressions do not mean those aliases remain indexed.

Retain the September 27 pre-release read through September 24 for this subset; subsequent
search effects use this September 25 cohort and **November 6 combined review**. Unaffected
redirect subsets keep their dates, including November 2 for the wall-panel subset. Verify
the two existing and one new Turkish aliases still return 308 after publication.

## Other overlapping content and collection measures

| Cohort | Latest clicks / impressions / position | Previous clicks / impressions / position |
|---|---|---|
| Original 13 technical queries | 0 / 1 / 1.00 | No rows |
| Original 16 care/use queries | 0 / 1 / 7.00 | 0 / 1 / 98.00 |
| Original 14 project queries | No rows | No rows |
| Original eight purchasing queries | 2 / 84 / 13.77 | 2 / 40 / 13.75 |
| Six technical article URLs | 6 / 236 / 4.46 | No rows |
| Six care/use article URLs | 0 / 36 / 6.17 | No rows |
| Six project article URLs | 2 / 94 / 5.78 | No rows |
| Six purchasing article URLs | 3 / 63 / 7.65 | No rows |
| About/Resources EN/TR | 28 / 942 / 8.78 | 28 / 854 / 11.61 |
| English Elite control | 2 / 117 / 8.95 | 3 / 140 / 11.86 |

New incoming links affect technical and care/use articles. Resources/document/contact links
overlap the purchasing release's secondary exposure. Re-baseline these combined content/link
outcomes to **November 6**, preserving original indexing and interim-ranking checkpoints.
The project/design pages receive no new direct links or fixed target queries: retain their
**November 3 primary GSC check**, with aggregate AI/content measures annotated at November 6.

The water article retains its English Stone link and replaces the Turkish article's English
destination with the correct Turkish Stone collection. Re-baseline the Stone EN/TR incoming-
link/all-query subset of the collection H1/schema experiments to November 6. Latest Stone
EN/TR values are **3/151/3.53** and **13/457/8.21**, respectively; previous values are
**3/212/6.86** and **15/491/8.67**. Natural is a control snapshot, with no incoming-link change
from these articles. Preserve unaffected September 27 collections, November 3 Elite and
November 2 wall-panel subsets. No collection data, title, H1 or schema code changes.

## GA4 and the consent measurement break

The latest matched 28 days cross the **September 21 consent-order repair**. They are
context, not a clean growth comparison with the previous window:

| Measure | Latest | Previous |
|---|---|---|
| Organic Search sessions / engaged / key events | 192 / 123 / 36 | 295 / 186 / 15 |
| AI Assistant sessions / engaged / key events | 14 / 10 / 3 | 1 / 0 / 0 |
| generate_lead raw events / key events | 46 / 15 | 14 / 13 |
| file_download raw events / key events | 40 / 40 | 45 / 4 |
| Release URLs, organic landing sessions / engaged / keys | 1 / 1 / 0 | 1 / 1 / 0 |

The fixed AI Assistant channel consists of ChatGPT in this read. The supplementary AI-source
regex also returns one Gemini session outside that channel; do not silently add it to the
fixed measure. Referrals do not measure chatbot citations or prove competitor superiority.
Raw event counts, key events and qualified leads remain different quantities.

A separate daily report covers **September 22–24**, excluding the partial consent-release
day. Its Organic Search rows are 13/6/0, 13/9/3 and 2/1/1 (sessions/engaged/keys). Three days
are too short for an outcome verdict. Retain September 28 consent correctness, October 5
desktop and October 21 conversion/Germany checks. New content and links change opportunity
counts, not tracking implementation. Aggregate content/AI effects use November 6.

## Planned reads

- **October 9:** indexing of the new pair and recrawl of four revised pages.
- **October 23:** query allocation, impressions, positions and recrawled titles/descriptions;
  assess CTR only with adequate exposure.
- **November 6:** combined comparison/water/terminology, overlapping technical/care/Resources
  links, Stone collection subset, revised redirect subset and aggregate AI/content effects.

All historical baselines remain intact. Page-row impressions and their weighted positions
are not property-deduplicated totals. The [release record](../content-strategy/2026-09-25-comparison-content-launch.md)
records the every-entry interference treatment, validation and actual deployment boundary.
