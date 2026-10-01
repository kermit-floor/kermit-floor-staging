# Turkish sitemap entries — prepared baseline, October 1

**Prepared locally; not deployed.** This snapshot does not activate a new experiment
or change any current review date. [Release preparation and interference treatment](../content-strategy/2026-10-01-turkish-sitemap-entries.md).

The live sitemap has **159 URL entries**. Its **27 Turkish static URLs and 24 Turkish
article URLs** appear as alternates but have **zero separate `<loc>` entries**. The
candidate has **210 unique entries**, including all 51 of those URLs. All existing
entries remain present; each bilingual page pair has identical self-inclusive EN/TR
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

If deployed October 1: immediate production verification, **October 15** processing/
indexing check, **October 29** descriptive exposure check, **November 12** combined
structural outcome. Record the actual UTC deployment and derive partial/first-full
GSC and GA4 days then; refresh the checkpoint if deployment is delayed. Preserve every
original experiment baseline and the separate manufacturer prompt cohorts.
