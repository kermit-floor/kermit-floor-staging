# Manufacturer content launch baseline - 2026-09-13

Fresh GSC and GA4 direct API reports fetched 2026-09-13T19:33:38.496238+00:00. GSC uses finalized web data. Latest 28 days: **2026-08-15 through 2026-09-11**; previous 28 days: **2026-07-18 through 2026-08-14**. Exact requests and complete aggregate responses are in [the evidence JSON](2026-09-13-manufacturer-content.json).

This is a separate baseline for the approved manufacturer content release. It does not replace the August baselines or change pending experiment review dates.

## Exact target queries

| Query | Latest clicks / impressions / position | Previous clicks / impressions / position |
|---|---|---|
| spc flooring manufacturer | 0 / 32 / 18.31 | 0 / 8 / 18.00 |
| spc flooring manufacturers | 0 / 13 / 25.00 | 0 / 3 / 39.33 |
| spc flooring manufacturers in turkey | 0 / 10 / 9.90 | No returned row |
| spc parke üreticileri | 3 / 18 / 2.17 | 2 / 10 / 1.80 |

The fixed query group also includes `private label spc flooring`, `oem spc flooring`, `spc flooring wholesale`, and `toptan spc parke`; none returned rows in either period. No returned row is not proof of zero demand. English manufacturer queries total **55 impressions / 0 clicks**, versus **11 / 0** previously. The Turkish query has **18 impressions / 3 clicks**, versus **10 / 2**.

## Existing page cohort

| Page | Latest clicks / impressions / position | Previous clicks / impressions / position |
|---|---|---|
| /about | 5 / 483 / 13.59 | 8 / 448 / 13.61 |
| /resources | 0 / 16 / 13.44 | 0 / 20 / 12.75 |
| /tr/hakkimizda | 22 / 276 / 7.36 | 16 / 309 / 4.71 |
| /tr/kaynaklar | 1 / 13 / 25.54 | 1 / 9 / 5.89 |

The six new article URLs did not exist before this release. Record their first indexed state and first impressions separately from existing About/Resources traffic.

## GA4 Organic Search landing pages

| Landing page | Latest sessions / engaged sessions / all key events | Previous sessions / engaged sessions / all key events |
|---|---|---|
| /about | No returned row | 1 / 1 / 0 |
| /resources | 3 / 2 / 1 | 1 / 1 / 0 |
| /tr/hakkimizda | 3 / 2 / 1 | 2 / 1 / 0 |
| /tr/kaynaklar | No returned row | 6 / 4 / 0 |

These are **all key events**, not a count of qualified leads or a separate `generate_lead` filter. Existing lead-event instrumentation remains unchanged. Use the weekly logbook read for operational lead counts. The 2026-09-13 monitoring snapshot flags a desktop GA4/GSC discrepancy, so do not attribute aggregate session changes to this launch alone.

## Measurement plan

- Indexing and fetch/canonical check: **2026-09-27** (six new EN/TR articles).
- Query impressions/positions and manufacturer metadata: **2026-10-11**; compare matched 28-day finalized periods and inspect query-to-page allocation.
- Internal-link/resource/full content effect: **2026-10-25**.
- Keep existing 09-15, 09-17 and 09-27 experiment checks. Mark this release as an overlapping content/discovery cohort when interpreting whole-site AI referrals, CTR and lead/download activity.
- Do not label early AI mentions a measured win: there is no direct chatbot citation baseline for this launch.
