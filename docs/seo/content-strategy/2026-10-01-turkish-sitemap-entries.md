# Turkish sitemap entries — release preparation

**Status: owner authorized commit, push and publication on October 1; deployment
and production verification are pending.** The owner requested separate Turkish sitemap entries after the
October 1 review. This document records the completed preparation, not a shipment.

`src/app/sitemap.ts` now emits an English and Turkish entry for every static route and
published article pair. Each entry includes the same EN/TR alternates, including itself,
and both members share the existing modification-date policy. Turkish tags already had
their own entries. No route, redirect, page content, metadata or analytics handler changes.

The candidate was built on published revision **722cd50329e347dc4bd798b7af4ae90657bb78cc**
in the attached `turkish-sitemap-entries` checkout. The identical source change is also
in the original workspace; its older checkout and unrelated local edits were preserved.

## Validation completed

- `npm run build` passed, including text/blog validation, generation and Next TypeScript
  checks, against all **24 current article pairs**.
- Served XML matches the compiled sitemap: **159 → 210 unique entries**, adding exactly
  the **27 static + 24 article Turkish URLs** previously present only as alternates.
- Every old URL remains; all **102 paired URL entries** have self-inclusive, reciprocal
  EN/TR alternate sets. No duplicate, dynamic placeholder or query-string URL was added.
- All **102 English/Turkish page destinations** return HTTP 200 in the production preview,
  are self-canonical, match the sitemap alternates and have no `noindex` directive.
- Existing article last-modification dates and tag URL/alternate behavior are preserved.
  GET-only validation executes no browser analytics and submits no enquiries.

[Machine-readable validation](2026-10-01-turkish-sitemap-entries-validation.json) ·
[Prepared baseline](../baselines/2026-10-01-turkish-sitemap-entries.md).
This implements Google's [localized sitemap guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Interference treatment to apply at shipment

The sitemap changes discovery signals across Turkish static pages and articles. It
does not establish a ranking or AI-citation uplift. Treat it as a site-wide discovery
cohort and add a dated marker to **all 23 open entries** on actual deployment.

For affected bilingual search/page-allocation effects, **ship and re-baseline** to the
prepared exact-URL and original-query checkpoint. If shipped October 1, the combined
structural review is **November 12**. Earlier scheduled indexing, ranking and query
checks remain useful descriptive readings with the new intervention marked. November
3/6 affected bilingual primary outcomes become November 12 combined outcomes; do not
silently retain an isolated earlier-release interpretation. Existing closed correctness/
ranking verdicts and original historical snapshots remain intact.

| Open parent entry | Treatment at shipment |
|---|---|
| October 1 manufacturer discovery | Mark additional discovery intervention; retain November 12 combined outcome and exact prompt cells. |
| September 29 capacity/four-country profile | Same manufacturer treatment; preserve its separate four-question pilot. |
| September 21 Turkish wall-product links | Added product/article sitemap coverage overlaps allocation; refresh checkpoint, November 12 combined. |
| September 21 consent ordering | Preserve WORKED command ordering and October 5/21 operations; annotate traffic composition. |
| September 21 Germany representative | Preserve office data/behavior and October 21 office read; annotate incoming search exposure, avoid isolated volume attribution. |
| August 14 lead tracking | Preserve WORKED instrumentation and weekly operations; annotate acquisition mix and consent boundary. |
| August 15 AI crawler access | Site-wide marker; preserve November 12 aggregate outcome and original verdict. |
| August 15 structured data | Preserve Breadcrumb/Product eligibility findings; affected search/CTR uses November 12 combined checkpoint. |
| August 15 localized H1s | Collection discovery overlaps; use the new checkpoint for November 12 combined all-query/CTR guard. |
| August 15 Turkish redirects | Preserve WORKED canonical consolidation; new canonical entries confound later allocation, including revised-water/comparison subsets, November 12 combined. |
| August 15 llms.txt | No file change; mark discovery intervention in November 12 aggregate AI outcome. |
| August 15 user-review articles | Preserve WORKED historical ranking verdict; later search readings carry the discovery marker. |
| August 15 pricing articles | Article/tag allocation overlaps; October 21 descriptive check, November 12 combined search outcome; insufficient visits still limit conversion inference. |
| August 16 CTR topics | Keep historical inconclusive verdict; October 15 descriptive check, November 12 combined bilingual outcome. |
| August 16 skirting hub | Preserve October 15 descriptive query read; hub/blog discovery overlaps, November 12 combined effect. |
| September 3 hub image repair | Preserve WORKED image correctness; annotate only parent search outcomes. |
| September 13 purchasing guides | Preserve WORKED indexing; mark October 11/15/29 readings and November 12 combined effects. |
| September 14 named author | Preserve WORKED attribution; mark parent discovery/AI interpretation. |
| September 14 FAQ/portrait | Preserve implementation correctness and October 26 maintenance; mark November 12 discovery/citation observations. |
| September 14 technical guides | Preserve indexed milestone and October 12 descriptive read; affected bilingual search outcome moves November 6 → November 12. |
| September 15 project guides | Preserve indexed milestone and October 13 descriptive read; affected bilingual search outcome moves November 3 → November 12. |
| September 22 care/room guides | Preserve October 6/20 descriptive milestones; affected bilingual search outcome moves November 6 → November 12. |
| September 25 comparison/water/types | Preserve October 9/23 descriptive milestones; affected bilingual search outcome moves November 6 → November 12. |

This treatment is prepared, **not active while the change remains local**. It follows
the repository's [interference and shipping rules](../README.md); the sitemap's causal
role in earlier traffic changes remains unproven.

## Publication completion

After authorization, commit/push the isolated change and necessary SEO records, verify
the successful production deployment and fetch the live XML. Confirm 210 unique entries
and the same 51 additions, reciprocal alternates and unchanged canonical destinations.
Submit the existing sitemap URL to GSC, record its actual processing/submission result,
and distinguish acceptance from indexing. Record the actual deployment boundary,
activate the parent markers/treatments and add the shipped logbook entry that day.
No new automation is implied by the dates in this document.
