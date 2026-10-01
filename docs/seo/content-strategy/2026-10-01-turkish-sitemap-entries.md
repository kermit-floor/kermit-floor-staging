# Turkish sitemap entries — verified release

**Published and verified October 1, 2026, at 01:05:56 UTC — commit `2b08ba0`.**
The owner requested separate Turkish sitemap entries after the October 1 review and
approved commit, push and publication. Production verification and GSC submission are complete;
Google processing and search effects remain pending.

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
[Pre-release baseline](../baselines/2026-10-01-turkish-sitemap-entries.md).
This implements Google's [localized sitemap guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Active interference treatment

The sitemap changes discovery signals across Turkish static pages and articles. It
does not establish a ranking or AI-citation uplift. Treat it as a site-wide discovery
cohort; the logbook now carries a dated marker on **all 23 pre-existing open entries**.

For affected bilingual search/page-allocation effects, **ship and re-baseline** to the
frozen exact-URL and original-query checkpoint. The combined structural review is
**November 12** after the October 1 deployment. Earlier scheduled indexing, ranking and query
checks remain useful descriptive readings with the new intervention marked. November
3/6 affected bilingual primary outcomes become November 12 combined outcomes; do not
silently retain an isolated earlier-release interpretation. Existing closed correctness/
ranking verdicts and original historical snapshots remain intact.

| Open parent entry | Active treatment |
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

This treatment is active from the recorded production boundary. It follows
the repository's [interference and shipping rules](../README.md); the sitemap's causal
role in earlier traffic changes remains unproven.

## Publication completion

Commit `2b08ba0b6528135759ee2aebb5c596052bff54fd` was pushed to `main` after owner
approval. Cloudflare Workers Build `6ba6df10-2be9-49e4-99eb-077c0d643397` and the GitHub
blog check succeeded. Deployment `22de4383-2182-488f-9457-24b8468a5a97` sent Worker version
`3581315e-3549-4d31-9889-a183166bf140` to 100% at **2026-10-01T01:05:56.241541Z**.

Live XML contains **210 unique URLs**, exactly **51 new Turkish entries**, no removals
or duplicates, and **102 reciprocal/self alternate maps**. All 102 production page
checks pass HTTP 200, self-canonical, matching EN/TR alternates and absence of noindex.
Existing article modification dates remain unchanged.
[Production evidence](../baselines/2026-10-01-turkish-sitemap-entries-production.json).

GSC accepted the sitemap PUT with **HTTP 204** and records lastSubmitted
**2026-10-01T01:06:43.435Z**. Immediate status is **pending**, with zero errors/warnings
on the previous downloaded snapshot (159 URLs, September 30 at 22:49:19 UTC). Submission
acceptance does not establish new processing, recrawling or indexing.

Exclude the partial **September 30 Pacific GSC day** and **October 1 Europe/Istanbul GA4 day**;
first full post-release days are **October 1** and **October 2** respectively. All parent
markers and the shipped logbook entry are recorded the same day. Review October 15 processing/
indexing, October 29 descriptive exposure and November 12 combined effects. No automation created.
