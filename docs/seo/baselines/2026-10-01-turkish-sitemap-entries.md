# Turkish sitemap entries — pre-release baseline, October 1

**Deployed and verified October 1, 2026, at 01:05:56 UTC**, code commit `2b08ba0`.
This frozen pre-release snapshot now supports the active discovery treatment.
[Release and interference treatment](../content-strategy/2026-10-01-turkish-sitemap-entries.md) ·
[Production evidence](2026-10-01-turkish-sitemap-entries-production.json).

Before release, the live sitemap had **159 URL entries**. Its **27 Turkish static URLs
and 24 Turkish article URLs** appeared as alternates but had **zero separate `<loc>`
entries**. The verified production sitemap now has **210 unique entries**, including
all 51 of those URLs. All existing entries remain present; each bilingual page pair
has identical self-inclusive EN/TR
alternates on both entries. Existing tag entries and article modification dates retain
their behavior.

[Evidence](2026-10-01-turkish-sitemap-entries.json) freezes the exact 51 URLs and reuses
the fresh same-day review's direct API responses. GSC WEB/final ends **September 28**;
GA4 uses the same lagged cutoff in Europe/Istanbul. GSC reporting dates are Pacific.

| Exact added-URL cohort | August 4–31 | September 1–28 |
|---|---:|---:|
| Clicks | 312 | 435 |
| Impressions | 6,306 | 10,336 |
| CTR | 4.95% | 4.21% |
| Impression-weighted position | 7.46 | 6.58 |
| Turkish articles alone, clicks / impressions | 69 / 2,217 | 216 / 7,126 |

Page totals are separate from property/query totals and include historical changes in
canonical allocation. These are pre-change descriptive measurements, not evidence that
the sitemap change caused growth. Of the 51 URLs, **28 have fresh URL inspections, all
indexed**, including all 24 articles. The remaining 23 static URLs were not inspected
in the periodic review; no indexing conclusion is assigned to them. The existing
indexed pages also mean that a future indexing-count increase is not required to prove
the sitemap implementation correct.

Primary correctness metric: 51/51 affected URLs have their own unique, canonical
sitemap entry with reciprocal/self EN/TR alternates; no old entry is removed. Follow
GSC sitemap processing and canonical indexing separately. Search exposure is a secondary
combined outcome, using the frozen page and original parent query cohorts in the JSON.

Production verification passed for the sitemap and all 102 paired page destinations.
GSC accepted submission with HTTP 204 at **01:06:43 UTC October 1**; processing is pending.
Its last downloaded snapshot is still September 30 at 22:49:19 UTC (159 submitted URLs),
so its immediate contents counters do not describe the newly published sitemap or establish indexing.

Review **October 15** processing/indexing, **October 29** descriptive exposure, and
**November 12** combined structural outcome. Exclude **September 30 Pacific** as the
partial GSC day; the first full GSC day is **October 1**. Exclude **October 1 Europe/Istanbul**
as the partial GA4 day; the first full GA4 day is **October 2**. These are release boundaries,
not evidence that Google has recrawled the URLs. Preserve every original experiment
baseline and the separate manufacturer prompt cohorts.
