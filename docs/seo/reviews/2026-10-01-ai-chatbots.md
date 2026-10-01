# Chatbot recommendations, referrals and crawling — October 1, 2026

Kermit is being recommended and directly cited. Today's repeat shows **better recognition
of the published company facts in ChatGPT, unchanged ChatGPT inclusion, and a positive first
Gemini baseline**. Referral volume is still small and concentrated; it does not show sustained
growth. This is an early descriptive investigation, not a verdict on the September 29 release.

[Evidence](2026-10-01-ai-chatbots-evidence.json) retains fresh GA4/GSC requests and responses,
the eight scored consumer answers' exact prompts, summaries, inspected citations, a separately
retained interrupted attempt, and Cloudflare UI observations. Review date uses Europe/Athens;
execution and capture were September 30 UTC, after local midnight on October 1.

## Consumer recommendations

The same four unbranded buyer questions were submitted in separate signed-out conversations,
retaining first answers and inspecting their citation destinations. No Kermit result links
were clicked. These are consumer website tests in the in-app browser, rather than Chrome
incognito or API simulations. ChatGPT exposed only its generic model label; Gemini exposed
**Flash-Lite**, without a specific version. Search/mode defaults and the shared network were
not independently controlled. Claude redirected to login; no Claude prompt was submitted.
Unavailable access is not a negative recommendation.

| Observed measure | ChatGPT pre-release pilot | ChatGPT October 1 | Gemini October 1 |
|---|---:|---:|---:|
| Recommends Kermit | 3/4 | 3/4 | 4/4 |
| Direct Kermit citation | 3/4 | 3/4 | 4/4 |
| Correct 8 million m²/year **combined flooring and wall-panel** capacity | 0/4 | 2/4 | 0/4 |
| Complete Türkiye/Moldova/Romania/USA operating footprint | 0/4 | 1/4 | 0/4 |

Gemini has no comparable earlier pilot. Do not pool platform denominators or call these
fractions an estimated market recommendation share. This is one date of observations;
the recorded repeat protocol calls for three separate dates per round.

| Fixed buyer question | ChatGPT answer | Gemini answer |
|---|---|---|
| EN: import/distribution shortlist, comparing capacity and commercial terms | Kermit second of four; correct combined annual capacity; Türkiye/Moldova factories; clear wholesale terms | Kermit first of two; MOQ/lead time/OEM recognized; numerical capacity and complete countries absent |
| TR: which SPC manufacturers to consider | Kermit fourth of four; OEM terms recognized; capacity/countries absent | Kermit third of four; describes high annual capacity without the number; complete countries absent |
| EN: private-label range for European distributors | Kermit and MILAT are the two main recommendations; correct capacity and all four countries | Kermit second of two; terms recognized; Romania/Moldova mentioned, USA and numerical capacity absent |
| EN: broad Turkish manufacturer discovery | Kermit absent again | Kermit second of three; directly cited; capacity/countries absent |

One initial Gemini broad-question attempt displayed “You stopped this response” following a
submission-control interaction. Its visible Kermit recommendation and source are retained
in the evidence but excluded from completed-answer counts. A fresh conversation produced the
completed answer above. No answer was regenerated or replaced because of its recommendation.

**Content actually cited:** ChatGPT's import answer uses [About](https://kermitfloor.com/about).
Its OEM answer uses About for the capacity/countries and the
[OEM/private-label guide](https://kermitfloor.com/blog/oem-private-label-spc-flooring) for
commercial terms. Turkish answers link [Hakkımızda](https://kermitfloor.com/tr/hakkimizda).
Gemini's inspected Kermit citations also point to these manufacturer pages. There is no
evidence here that `llms.txt` caused an inclusion or citation.

Commercial clarity remains a strength: one-container MOQ, four-week **standard** lead time,
OEM packaging/artwork and quotation confirmation are repeatedly recognized. ChatGPT's OEM
answer now reproduces the new capacity and operating-country facts together. Its import
answer explicitly avoids presenting the combined figure as flooring-only capacity.

Accuracy is uneven. ChatGPT's Turkish answer still suggests checking Kermit's capacity more
closely despite the published number. Gemini omits the exact new facts in every completed
answer and sometimes amplifies claims: its OEM table adds an uncited CE-compliance description
and its schedule wording adds a final-sign-off start condition. These were not verified and
must not become new manufacturer claims. One Turkish Gemini citation button beside Kermit
wording is labelled Porfloor, although the inspected Kermit heading citation and explicit
source link correctly point to Hakkımızda. A citation alone is not an accuracy check.

Competitor descriptions repeatedly emphasize technical documentation, certification scope,
design ranges and click-system details. This is a useful content gap to assess against Kermit's
own applicable documents; it does not independently verify competitor claims or justify
copying their certifications.

## Measured AI-attributed visits

GA4 property **523760978**, Europe/Istanbul. Latest 28 complete local calendar days:
**September 3–30**, compared with **August 6–September 2**. September 30 is recent and can
still revise. The case-insensitive source/medium filter is
`chatgpt|perplexity|claude|gemini|copilot|openai`.

| Source/medium label | Sessions | Engaged sessions | Contact-intent keys | Download keys | GA4 users |
|---|---:|---:|---:|---:|---:|
| `chatgpt.com / ai-assistant` | 15 | 11 | 3 | 2 | 5 |
| `gemini / (not set)` | 2 | 2 | 0 | 2 | 2 |

There are **17 source-attributed sessions** and seven keys, split into **three contact-intent
actions and four downloads**. Previous matched 28 days return no AI-source rows. No measured
Claude/Perplexity/Copilot/OpenAI source rows appear. Missing attribution, consent loss and
Direct visits remain unknown; source labels do not prove a visitor's identity. Do not sum
users across rows as unique people or add the overlapping AI Assistant channel to this cohort.

The latest week, **September 24–30**, has **two AI-attributed sessions**, versus **seven** in
September 17–23. There is no sustained weekly referral-growth signal. Ten ChatGPT sessions
on September 15–19 remain associated with one measured Türkiye desktop user. The owner's
earlier answer was that no team visits were known; the data do not establish internal traffic
or ten separate prospects.

Since the prior September 26 cutoff, the only new AI-attributed visit is **September 29:
ChatGPT, Switzerland, desktop, landing on Contact**. It has two download keys, **no new
contact-intent key**. Country attribution does not identify a company or buyer. The original
release baseline had 14 ChatGPT and two Gemini sessions in a different 28-day window; the
daily report is what establishes this additional visit.

Deployment was September 28 at 21:28:45 UTC, local September 29. September 29 is a partial
GA4 deployment day and September 30 the first full post-release day; September 30 returns
no AI-source rows. These data cannot establish the new copy's referral effect. Keys measure
contact clicks/downloads, not qualified enquiries or sales. Preserve the September 21
consent-repair measurement break.

## Crawler access and activity

Cloudflare AI Crawl Control was read for a fixed **September 24–30, GMT+3** window:
September 23 21:00 UTC inclusive to September 30 21:00 UTC exclusive. Today's intentional
buyer questions began after this cutoff. The earlier September 28 pilot is inside the window
and could have induced fetches.

| Dashboard crawler label | Successful HTTP 2xx requests |
|---|---:|
| OAI-SearchBot | 762 |
| ChatGPT-User | 123 |
| GPTBot | 65 |
| ClaudeBot | 81 |
| Claude-User | 1 |
| Claude-SearchBot | 0 |
| Googlebot | 469 |

These roles differ: OpenAI documents OAI-SearchBot for search, GPTBot for training and
ChatGPT-User for user-triggered fetches. Anthropic distinguishes training, search and
user-triggered bots similarly. Fetches are not recommendation counts or human referrals.
[OpenAI bot roles](https://developers.openai.com/api/docs/bots),
[Anthropic bot roles](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).

All named OpenAI/Anthropic block switches inspected were off. Live robots.txt is HTTP 200
with `User-agent: *` / `Allow: /`; both manufacturer pages and llms.txt are HTTP 200 and
contain the approved facts. These ordinary HTTP checks are not authenticated bot tests.

The status chart displays **3.42k 2xx**, **170 redirects**, **1.39k 4xx**, including **1.37k
404s** and **14 403s**; abbreviated counts remain rounded. About received **51 successful
fetches across the dashboard's crawler cohort**. The Security table's “Allowed” labels
differ from explicitly filtered Metrics 2xx totals; the evidence retains both without
substituting one for the other.

Claude-SearchBot's 94 requests comprise **93 HTTP 404s and one 403**. Its visible top paths
are predominantly configuration/debug probes, including `/.env` and `/key.json`, rather
than our manufacturer/product pages. The broad crawler cohort's failed paths show a similar
pattern. This does not establish a public-content crawl block. Raw IP/signature validation
and full request logs were not available, so these dashboard labels should not be treated
as independently verified bot identities, genuine training uptake or organic buyer demand.
No probing paths were requested by this review and no crawler/security settings changed.

Google-Extended has no separate HTTP request user agent; Googlebot activity therefore does
not isolate Gemini use. [Google's crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended).
Cloudflare's Free-plan referral column shows unavailable dashes, not measured zeros.
[Cloudflare analytics scope](https://developers.cloudflare.com/ai-crawl-control/features/analyze-ai-traffic/).

## Search context and experiment history

GSC's latest returned final date is **September 28**. Matched windows are **September 1–28**
and **August 4–31**, using the original fixed eight manufacturer queries and page cohorts.
They end before the first full post-release GSC day and cannot assess the new company copy.

| Fixed search cohort | Latest clicks / impressions / position | Previous |
|---|---:|---:|
| Eight manufacturer queries | 6 / 86 / 13.21 | 2 / 50 / 13.50 |
| Two About pages | 36 / 983 / 7.87 | 27 / 823 / 11.43 |
| Six purchasing articles | 5 / 94 / 7.96 | 0 / 0 / — |

All six query clicks come from `spc parke üreticileri`; English discovery remains sparse.
The previous purchasing-page window predates their publication. Both About URLs are indexed,
fetch-successful and correctly canonical. Google last crawled English About on **September
25**, before the new copy, and Turkish Hakkımızda on **September 29**, after it. Google recrawl
is a separate observation from a chatbot recommendation.

Fresh initial findings were formed before reading logbook interpretations. The published
release record was then checked in the isolated manufacturer release checkout at `5ae975e`,
because the original checkout's dirty logbook contains earlier local work. Its
[September 29 baseline](../baselines/2026-09-29-manufacturer-positioning.md) retains the
[original buyer pilot](../investigations/2026-09-29-ai-manufacturer-audit.md), the September
21 consent break and earlier content cohorts. The new observations are consistent with
better fact extraction, but do not establish broader inclusion or an isolated release effect.

Keep the published company facts. Preserve **October 13** and **October 27** for repeated
buyer-question/recrawl checks, and **November 10** for the combined manufacturer/AI outcome.
Use the same four prompts on three separate dates per round, track recommendation, citation,
capacity, country accuracy and errors separately, and retain omissions. Keep Gemini as its
own new cohort; Claude remains an access gap. If broad discovery and technical-evidence
gaps persist, assess an iteration against those open scopes before shipping it.

Completed the same-day local review and evidence record only. No formal verdict, baseline
reset, website change, commit, push, deployment or automation was made. Existing local
changes are preserved; unchanged search and operational experiment dates remain in force.
