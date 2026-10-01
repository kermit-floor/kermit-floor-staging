# Content completion baseline — October 1, 2026

Fresh direct GSC and GA4 requests were captured before publishing this release. Full requests,
responses, timestamps, the final-data cutoff probe and no-cache HTTP results are preserved in
[the JSON record](2026-10-01-content-completion.json). This is a shipping baseline, not a new
experiment verdict or an AI recommendation audit.

## Scope and windows

Four new article pairs (quantity, import orders, materials and document evidence), four
revised pairs (SPC definition, mistakes, pricing and reviews), a bilingual glossary and the
existing bilingual blog hub: **20 affected pages**, including **10 new URLs**. Factory/QC is
deferred at the owner's request. Counts below use fixed canonical destinations unless labelled
otherwise. Historic alternate-locale aliases are retained as a separate guard against apparent
performance gains caused by URL consolidation.

Latest finalized window: **September 1–28**. Previous: **August 4–31**. The October 1
manufacturer and sitemap releases precede this release but occur after the performance cutoff;
their early results cannot be separated by this snapshot. Their release records remain intact.

| Page cohort | Latest clicks / impressions / position | Previous clicks / impressions / position |
| --- | --- | --- |
| SPC definition pair | 97 / 4259 / 6.74 | 40 / 1354 / 7.35 |
| Mistakes pair | 33 / 1816 / 5.00 | 10 / 441 / 5.69 |
| Pricing pair | 7 / 797 / 4.53 | 8 / 733 / 6.09 |
| Reviews pair | 35 / 1898 / 6.68 | 15 / 1042 / 7.95 |
| Blog hub pair | 1 / 267 / 7.30 | 0 / 311 / 7.56 |
| Eight rewritten pages plus historical aliases | 172 / 8770 / 6.17 | 171 / 6522 / 7.22 |

The eight rewritten canonical pages together have **172 clicks / 8,770 impressions / position
6.17**, compared with **73 / 3,570 / 7.06**. This is not evidence of the new treatment working.
Use the alias-inclusive guard and the older experiment records when interpreting history.
The new article and glossary URLs have no returned GSC page rows in either window. The four
new fixed query groups also have no returned rows; absence of rows does not prove zero demand.

## Measurement recipes

The record freezes eight separate exact query-to-page groups: quantity, export, materials,
documents, definition, mistakes, prices and reviews. It also refreshes the original manufacturer,
technical, project, care, comparison, water, terminology, CTR, collection and broad allocation
recipes from the same-day sitemap checkpoint, without replacing their original baselines.

GA4 includes total, channel, country/device, lead/download and AI source reports, plus landing
page/channel reports for both windows. Latest tracked AI sources show **14 ChatGPT sessions**
and **2 Gemini sessions**. Referral sessions do not measure the frequency or quality of LLM
citations. The prior fixed manufacturer prompt audits remain separate; this release does not
claim to repeat them or demonstrate an AI visibility improvement.

## Before-release HTTP and correctness baseline

All ten existing affected destinations returned **200**. The eight new article URLs and two
glossary URLs returned **404**. A default urllib user agent initially received 403 for all
requests; those observations are retained separately. A no-cache curl retry with a normal
browser user agent produced the stated page statuses. Neither HTTP status nor sitemap
submission proves Google indexing.

Before release: **24 topic pairs / 48 articles**, no glossary, chronological blog and tag hub,
**210 sitemap entries**. Existing tags, publication dates, authors, covers and related-post
lists are frozen for regression checks. The candidate adds four unique tag pairs, so the
expected sitemap is **228 entries**, including both locales for all new canonical pages.

## Interference and review dates

Ship the combined content/link treatment under the owner's continuing approval. Re-baseline
the affected search, query allocation, referral and discovery cohorts to this record; do not
claim individual article, hub or glossary causality. Mark all **24** prior open/operational
entries because the hub/glossary changes discovery across product families. The launch record
maps each parent scope. Preserve implementation correctness verdicts and historical reviews.

- **October 15:** new indexing and rewritten-page recrawl/metadata check.
- **October 29:** descriptive rankings, query allocation and snippets.
- **November 12:** combined content/link/search and aggregate AI-referral outcome.

Keep October 5 desktop checks, October 8 weekly lead reading, October 21 consent/office
operational checks and October 26 FAQ/portrait maintenance. Earlier article-cohort interim
checks remain descriptive; no monitoring automation is created by this release.

## Recorded release boundary

Code commit `781581e` deployed **October 1 at 02:18:38 UTC**. GSC's Pacific reporting day
September 30 contains the partial release; the first full post-release GSC day is **October 1**.
GA4 uses Europe/Istanbul, so October 1 is partial and **October 2** is its first full day.
Do not compare same-labelled daily rows as if these measurement boundaries were identical.

[Production verification](2026-10-01-content-completion-production.json) records 40 successful
live desktop/mobile page checks, 181 valid internal destinations, 228 unique sitemap entries
with no original entry removed, and Google sitemap acknowledgement **HTTP 204** at
02:20:40 UTC. The immediate GSC GET is pending and still describes the prior 210-entry
processing state; it is not an indexing verdict for this release.
