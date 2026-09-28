# Manufacturer positioning baseline — September 29, 2026

Captured before the approved About/FAQ/llms.txt publication. [Raw requests and responses](2026-09-29-manufacturer-positioning.json)
include 23 GA4/GSC reports and the final-data availability probe. GSC's latest returned final
date was **September 26**; matched periods are **August 30–September 26** and **August 2–29**.
The same dates are used for GA4. Property timezone is Europe/Istanbul; GSC uses Pacific dates.

## Search baseline

| Fixed cohort | Latest clicks / impressions / position | Previous clicks / impressions / position |
|---|---:|---:|
| Original eight exact manufacturer queries | 2 / 81 / 13.83 | 2 / 48 / 12.96 |
| About/Resources, EN/TR, four URLs | 28 / 985 / 8.19 | 29 / 843 / 11.70 |
| About, EN/TR, two changed URLs | 26 / 932 / 8.29 | 27 / 812 / 11.38 |
| Six purchasing articles | 5 / 81 / 8.14 | 0 / 0 / — |

Cohort filters are frozen in the JSON requests. Query totals and query/page allocation totals
are different GSC aggregations and must not be substituted for each other. Query rows omit
anonymized searches. Purchasing articles were first published September 13; the previous
window predates publication. These are descriptive baselines, not evidence of an isolated effect.

## AI-attributed visits and intent

| Measurement | Latest sessions / engaged / key events | Previous |
|---|---:|---:|
| GA4 AI Assistant channel | 14 / 10 / 3 | No returned rows |
| `chatgpt.com / ai-assistant` | 14 / 10 / 3 | No returned rows |
| `gemini / (not set)` | 2 / 2 / 2 | No returned rows |

The source-regex cohort therefore contains 16 measured sessions; the GA4 AI Assistant channel
contains 14. Do not add those two overlapping measurements. Gemini is outside that channel.
ChatGPT records four raw `generate_lead` events and three lead key events; Gemini records two
`file_download` events/key events. There are no Claude/Perplexity/Copilot/OpenAI source rows
in the fixed regex report. That is absence of measured attribution, not proof of no visits.

Across all traffic, latest `generate_lead` is **15 raw / 14 key**, versus **46 / 15** previously;
`file_download` is **44 raw / 44 key**, versus **28 / 5**. Earlier raw/key counting bursts and
the **September 21 consent repair** prevent a clean before/after growth inference. Keys are
contact intent/downloads, not qualified enquiries or sales. The JSON also preserves AI landing
pages, source-by-event rows, organic manufacturer landings and a post-consent daily slice.

## Consumer recommendation baseline

The [four-question pilot](../investigations/2026-09-29-ai-manufacturer-audit.md) was run before
publication on signed-out consumer ChatGPT, with each prompt's first answer retained:
**3/4 recommended and directly cited Kermit; 0/4 gave the correct annual capacity; 0/4 gave
the complete four-country footprint**. The exact prompts, source URLs and evidence are frozen
in the audit JSON. This small selected pilot is not a population estimate. Prompt-induced bot
fetches must be marked separately from unsolicited crawler demand; no result links were clicked.

## Treatment and dates

Re-baseline overlapping manufacturer discovery, About FAQ observations, llms.txt and aggregate
AI/content outcomes to this snapshot; keep original snapshots and correctness verdicts.
**October 13** is the first repeated buyer-question/recrawl check, **October 27** the second
buyer-question and metadata/snippet check, and **November 10** the combined six-week outcome.
The repeated audit follows the same four prompts, fresh first answers on three separate dates
per round, and separately records recommendation, direct citation, capacity and country accuracy.
No automation is scheduled by recording these dates.

November 10 supersedes November 6 for the overlapping combined AI/manufacturer metrics only.
Unchanged technical/care/comparison search/link effects remain November 6, project/Elite
November 3, wall-panel November 2, and unchanged blog FAQ/portrait maintenance October 26.
Keep consent/desktop/office operational schedules and the September 21 measurement break.
This release is local September 29; record the actual UTC deployment time in the ship entry
and exclude its partial day in each property's timezone from post-release comparisons.

[All-entry scope review](../content-strategy/2026-09-29-manufacturer-positioning.md).
