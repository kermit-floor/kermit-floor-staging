# Technical content baseline — 2026-09-14

Fresh GSC and GA4 direct API reports were fetched before publication on September 14.
The [raw requests/responses](2026-09-14-technical-content.json) include the finalized GSC
date-availability probe. The latest available final date is **September 11**: latest 28 days
**August 15–September 11**, previous 28 days **July 18–August 14**. Reusing those dates after
a fresh availability check does not make yesterday's launch measurable already.

## New article cohort

Six new paths and a fixed 13-query technical group are listed in the JSON. The group covers
thickness, wear layer, installation, underlay, heating and sunlight in EN/TR. GSC returns
**no rows for the group, its query/page allocation or the six new URLs in either window**.
This is an unobserved/new-page baseline, not proof of zero search demand. Initial success
is indexation and first query allocation; then inspect impressions and positions before CTR.

The new content is SPEC, INSTALL and HEAT in the approved map. Existing comparison,
definition, pricing, reviews, wall-panel and skirting page cohorts remain unchanged.

Review **September 28** for indexing, **October 12** for rankings/query allocation and
**October 26** for full content/link effects. Use finalized matched 28-day periods and keep
the exact query group fixed; add discovered queries as a separately labelled exploratory group.

## Overlapping secondary and whole-site measures

| GA4 measure | Latest 28 days | Previous 28 days |
|---|---|---|
| AI Assistant sessions / engaged sessions / all key events | 1 / 1 / 1 | 1 / 0 / 0 |
| Organic Search sessions / engaged sessions / all key events | 213 / 138 / 23 | 272 / 166 / 0 |
| generate_lead raw events / key events | 51 / 20 | No row |
| file_download raw events / key events | 8 / 8 | 56 / 0 |

The AI source report identifies `chatgpt.com / ai-assistant` in both periods. The named-source
regex is a supplementary observation; the configured AI Assistant channel is the fixed metric.
There is no direct chatbot-citation baseline. Small counts cannot isolate the effect of
crawler settings, llms.txt, content, FAQ data or author imagery.

The previous period predates key-event instrumentation, so its zero key-event values are
not a conversion-growth comparison. Keep the WORKED tracking verdict and weekly operational
lead reads. Counts represent lead-intent/download actions, not qualified leads. Retain the
known desktop GA4/GSC discrepancy as a confounder.

Manufacturer secondary Organic Search landing metrics:

| Landing page | Latest sessions / engaged / all key events | Previous sessions / engaged / all key events |
|---|---|---|
| /resources | 3 / 2 / 1 | 1 / 1 / 0 |
| /tr/hakkimizda | 3 / 2 / 1 | 2 / 1 / 0 |
| /about | No row | 1 / 1 / 0 |
| /tr/kaynaklar | No row | 6 / 4 / 0 |

For continuity, the JSON also re-queries the original manufacturer exact group and
About/Resources GSC cohort. English manufacturer queries remain **55 impressions / 0 clicks**
versus **11 / 0**; `spc parke üreticileri` remains **18 impressions / 3 clicks / position 2.17**
versus **10 / 2 / 1.80**. These are the same final reporting dates as the first launch,
not an observed response to it.

## Re-baselining decision and dates

Ship the new batch and re-baseline the overlapping **whole-site AI-referral** outcome for
the crawler and llms.txt experiments, plus the manufacturer release's **secondary resource,
organic-landing, lead/download and AI** readings, to this September 14 dated baseline.
The new combined-effect review is **October 26**. Keep the original baselines and their
scheduled pre-batch/primary checks for historical continuity. Attribute later aggregate
movement to the combined interventions unless the data can separate the cohorts.

The manufacturer's six original new URLs and exact-query primary measures retain their
September 27 / October 11 / October 25 dates. Other old article/product/CTR scopes retain
their original baselines because no target record, related cohort or query treatment changes.
The release's logbook entry and the affected older entries carry matching confound notes.

## Share-image accuracy repair

Pre-release source inspection shows that all 14 existing Turkish blog pages use
`https://kermitfloor.com/tr/images/...` in Open Graph and Twitter metadata; the new articles
would inherit the same error. A live representative request for
`/tr/images/spc-flooring-sky-collection/P-104/application.jpg` returned **404** at 07:10 UTC.
The Article schema already uses the correct shared `/images/...` path.

The repair uses the shared image URL in both metadata fields. Validate every published
article's Open Graph, Twitter and Article image identity/accessibility after deployment.
This is an immediate technical correctness check, not a search-impact verdict. Titles,
descriptions, Article data, existing bodies and the six-page CTR comparison window ending
September 13 Pacific are unchanged. Mark all later blog/aggregate reads with this repair.

Record the actual UTC and Pacific deployment dates after shipping. GSC uses Pacific dates;
GA4 property reporting uses Europe/Istanbul. Exclude the partial deployment day in each
system when forming a full post-launch comparison.
