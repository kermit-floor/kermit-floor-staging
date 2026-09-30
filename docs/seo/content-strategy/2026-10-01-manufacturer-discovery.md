# Turkish SPC manufacturer discovery — prepared October 1, 2026

Status: **owner-approved for commit, push and publication on October 1; deployment in progress**. Prepared on
`codex/ai-manufacturer-discovery` from published `main` at `5ae975e` in the managed
manufacturer release worktree. The owner's earlier publication approval covered the
September 29 capacity release; this candidate adds pages, metadata and incoming links.

## Fresh findings before history interpretation

[API baseline](../baselines/2026-10-01-manufacturer-discovery.json) and
[consumer prompt evidence](../baselines/2026-10-01-manufacturer-discovery-audit.json)
were captured before publication of this candidate. Existing September releases are
already part of the site; these observations do not isolate their effects.

GSC finalized data ends September 28. Compare **September 1–28** with **August 4–31**:

- `spc flooring manufacturers in turkey`: **0 clicks / 7 impressions / position 7.29**,
  versus **0 / 8 / 9.63**. The latest seven impressions all belong to `/about`.
- Expanded manufacturer regex cohort: **6 / 97 / 13.97**, versus **2 / 56 / 14.88**.
  All six latest clicks are for `spc parke üreticileri`, on Turkish About. This expanded
  regex is separate from the older experiment's fixed eight-query cohort, retained in
  the supporting reports; do not silently replace that original denominator.
- About receives nearly all manufacturer-query page exposure. English About has
  **9 clicks / 632 impressions** across all queries; Turkish About **27 / 351**.
- These low counts justify watching impressions, position and query-to-page allocation;
  they do not establish a successful broad-discovery campaign or a CTR trend.

All scored chatbot tests used signed-out consumer interfaces, fresh conversations and
one unbranded question with a citation request. No Kermit result link was clicked.
Signed out is not an incognito or controlled-geography claim. This is one date's
selected sample, not a market recommendation-share estimate.

| Provider / language | Completed first answers | Kermit recommended | Direct Kermit citation | Correct combined annual capacity |
|---|---:|---:|---:|---:|
| ChatGPT / English | 3 | 3 | 2 | 1 |
| ChatGPT / Turkish | 2 | 2 | 2 | 2 |
| ChatGPT / Romanian | 2 | 2 | 1 | 1 |
| ChatGPT / German | 1 | 0 | 0 | 0 |
| Gemini / English, Flash-Lite | 3 | 3 | 3 | 0 |

One clean German wall-panel attempt hit a message limit and produced no answer. It is
**unavailable**, not an omission. One accidentally concatenated draft was excluded and
replaced before scoring. All completed first answers, including the German flooring
omission, are recorded. No answer lists all four operating countries.

The three English questions are fixed separately:

1. Which SPC flooring manufacturers in Turkey should I consider? Please recommend manufacturers and cite sources.
2. Which SPC manufacturers in Turkey should I consider? Please recommend manufacturers and cite sources.
3. Which SPC wall panel manufacturers in Turkey should I consider? Please recommend manufacturers and cite sources.

The audit JSON preserves the exact Turkish, German and Romanian questions, session URLs,
source destinations, model labels and factual-risk notes. General SPC was interpreted as
flooring. This new prompt set differs from the September 29 four-question pilot; do not
pool them or treat the English result as uplift over a different earlier broad prompt.

## What the citations suggest

English flooring cites our [manufacturer buyer checklist](https://kermitfloor.com/blog/spc-flooring-manufacturer-turkey-buyers-checklist).
English wall panels and both Turkish answers cite [Turkish About](https://kermitfloor.com/tr/hakkimizda);
Romanian wall panels cite [English About](https://kermitfloor.com/about).
General English SPC and Romanian flooring recommend Kermit using Volza shipment data,
without a direct Kermit website citation. A recommendation and an owned-site citation are
different measurements.

Gemini cites English About in all three answers, but its visible citation excerpts contain
the earlier company-location/description wording. It misses the annual capacity and USA.
That is evidence of older source snippets; it does not prove whether the complete page
was fetched during each answer. Allow recrawl time and inspect snippets in later audits.

Competitor citations repeatedly include company profiles and focused manufacturing pages:
[ADOFLOOR About](https://www.adofloor.com/tr/hakkimizda/),
[Porfloor About](https://porfloor.com/en/about),
[MILAT manufacturer](https://milatfloor.com/manufacturer), and
[Panastone About](https://www.panastone.com.tr/en/about-us/).
ADOFLOOR and Porfloor's profiles were inspected directly; they make company identity,
factory location, product scope and company-stated capacity easy to extract. This supports
making those facts clear on Kermit's cited pages. It does **not** show that repeating a
keyword causes citations. Competitor capacities, dates and superiority claims are not
independently verified and are not used to rank Kermit.

## Prepared page changes and exact wording

Eight canonical pages, four paired EN/TR page types:

| Page type | Prepared change | Reason |
|---|---|---|
| About / Hakkımızda | Broader floor-and-wall manufacturer H1/title; direct Turkish identity; two useful manufacturing/supply sections; contextual buyer-checklist and wall-product links; two FAQ revisions | Strongest manufacturer-query allocation and most useful owned source in this audit |
| Homepage | Manufacturer-focused title/description; visible company introduction and wholesale/OEM card beside the existing About link | Reinforce the company identity and capacity on a central entry page, including mobile |
| Manufacturer buyer checklist | Natural exact-intent opening; factory, combined capacity and precise country roles | Directly cited for the English flooring question; fixes an older incomplete country paragraph |
| OEM/private-label guide | Turkish manufacturing identity, factory location, combined capacity and country roles in the opening | Already cited in the preceding same-day/September buyer audits; commercially relevant support |

Core English sentence:

> Kermit Floor is an SPC flooring and wall panel manufacturer in Turkey, with its headquarters and main factory in Çayırova, Kocaeli.

About includes these natural discovery phrases in useful buyer guidance:

> Distributors comparing SPC flooring manufacturers in Turkey can evaluate Kermit’s collections, samples and product documents before ordering.

> Project teams comparing SPC wall panel manufacturers in Turkey can review Kermit’s interior panels alongside our flooring and skirting range.

The company paragraph also says **“an SPC manufacturer in Turkey”**. Turkish uses natural
variants including **“Türkiye’deki SPC parke üreticileri”**, **“SPC duvar paneli üreticisi”**
and **“Türkiye’de SPC üreticisi”**. English uses both Turkey and Türkiye where natural.

The scale claim remains **8 million m² annual combined SPC flooring and wall-panel capacity**.
The four operating countries remain Türkiye, Moldova, Romania and USA; manufacturing
sites are Türkiye and Moldova. Romania is a store and US enquiries are handled by the team.
No four-factory, all-orders-Turkish-origin, flooring-only capacity or US factory claim is added.
Sources: [owner-confirmed September 29 decisions](2026-09-29-manufacturer-positioning.md)
and [original commercial terms](2026-09-13-manufacturer-launch.md).

“Most experienced” is omitted because no comparative industry evidence or confirmed SPC
production start date supports it. Long-term polymer/mould experience is retained without
turning it into a ranking. No invented certifications or competitor comparison table is added.

Some chatbot wall-panel answers generalize flooring MOQ/lead time. New wall copy asks for
product-specific supply confirmation; About's lead-time label/FAQ and the OEM opening now
explicitly scope four weeks and one container to wholesale SPC **flooring**. The actual
schedule remains quotation-dependent. The manufacturer checklist and OEM guide retain
their authors, slugs, publication dates, status, cover assets and unrelated body content;
updated dates and claim-source references change with the revised text.

Contact is not selected for this release: the cited company/profile and buyer-guide pages
are better supported by the evidence. Office records and lead handlers stay outside scope.

German and Romanian were tested as separate buyer-language cohorts, informed by our
German representative and Romanian operations. These answers already cite EN/TR pages;
the German flooring omission is only one observation. Dedicated DE/RO manufacturer
profiles are a possible next experiment after repeated evidence and native-language copy
review, not an unrecorded locale expansion in this candidate.

## Hypothesis and measurement protocol

Hypothesis: clear Turkey + product + manufacturer wording on the pages already used as
sources will improve broad supplier discovery and the accuracy of extracted company facts.

Primary metric: positive recommendation **with a direct Kermit citation**, recorded per
provider, language and exact prompt. Current one-date pilot: ChatGPT **5/8 completed cells**,
Gemini **3/3 English cells**. Also score correct combined annual capacity, complete country
roles, and factual errors; stronger but incorrect answers are not a successful outcome.

Repeat the exact questions as fresh first answers on **three separate dates per review
round**, preserving provider surface, default/search mode, visible model label, sign-in
state and available location information. Keep every valid answer. Record quota/login/
retrieval failures separately; do not turn them into zero recommendations. Compare only
matching completed provider/prompt cells; German wall panels need their first completed
baseline. Report consistency across dates rather than the most favorable answer. Retain
the original September 29 pilot as a separate cohort.

Secondary metrics: original manufacturer query cohort and the expanded discovery regex;
About/home/purchasing-page allocation; Turkish wall query allocation; fixed 16-collection
cohort and broad `spc parke`/`spc flooring` allocation guards; GA4 AI source sessions and
contact-intent/download actions. API recipes, exact dates and original matched scopes are
saved in the baseline. Source/medium totals are separate from GA4's AI Assistant channel.
The same-day GA4 supporting read covers September 3–30: ChatGPT **15 sessions**, Gemini
**2**; contact actions are intent, not qualified sales leads. Preserve the September 21
consent break, known concentration in one earlier desktop user, and publication partial days.
Prompt-triggered crawler requests on this audit date are deliberate research activity.

## Every-entry interference check and proposed shipping treatment

All 22 entries in the published logbook's open/operational section were checked after the
initial findings. This is a prepared treatment, **not yet a logbook re-baseline or ship entry**.

| Existing entry | Proposed treatment when this candidate ships |
|---|---|
| Sep 29 manufacturer capacity/countries | Direct About/FAQ/manufacturer overlap. Preserve the original pilot and September 29 baseline; re-baseline combined manufacturer/citation outcome at actual shipment, T+42. Mark Oct 13/27 as descriptive checks with the new intervention. |
| Sep 21 Turkish wall-product links | New About-to-product link and wall manufacturing copy can affect the same product/query allocation. Re-baseline the overlapping wall outcome at shipment, T+42; preserve original link correctness and pre-change readings. |
| Sep 21 consent repair | No instrumentation change. Preserve consent correctness, Oct 5 desktop and Oct 21 conversion checks. Re-baseline aggregate AI/content secondary outcome and annotate the existing consent break. |
| Sep 21 Germany representative | Office card/phone handler untouched. Preserve office-specific Oct 21 baseline/date; annotate aggregate incoming enquiries with this content cohort. |
| Aug 14 lead instrumentation | Preserve WORKED instrumentation and operational readings. Re-baseline combined AI/content secondary measures and distinguish intent/downloads from qualified enquiries. |
| Aug 15 AI crawlers allowed | No crawler-setting change; combined AI/referral overlap. New dated combined baseline and T+42 outcome; record deliberate audit fetches, no isolated crawler-efficacy claim. |
| Aug 15 site-wide JSON-LD | No Product/Organization/Breadcrumb code change. About FAQ text overlaps; verify parity. Re-baseline affected wall/broad-floor allocation/CTR subsets at shipment; preserve enhancement/correctness checks and unchanged cohorts. |
| Aug 15 localized collection H1s | Collection H1s unchanged, but homepage titles can affect broad floor-query allocation and collection CTR. Re-baseline the fixed 16-URL/query allocation outcome at shipment, T+42, using the captured guards; retain pre-change historical checks. |
| Aug 15 alternate-locale redirects | No route/redirect change. About/home titles and incoming product link may affect overlapping URL/query allocation; re-baseline those wall/broad-floor subsets at shipment, T+42. Preserve redirect correctness and disjoint historical subsets. |
| Aug 15 llms.txt | File unchanged; aggregate AI metric overlaps. Re-baseline combined AI/content outcome at shipment, T+42; retain historical snapshots, no isolated llms.txt effect claim. |
| Aug 15 user-review pair | No page/query/related-link edit. Preserve WORKED primary ranking outcome and passive monitoring; annotate aggregate AI/contact secondary readings. |
| Aug 15 pricing pair | No pricing-intent copy or links changed. Preserve primary price-query scope; aggregate contact/AI secondary measures carry the new cohort. |
| Aug 16 three-topic CTR refresh | Original article metadata untouched. Wall product allocation can overlap new About link/copy: re-baseline the wall-related combined subset at shipment, T+42; preserve bathroom/skirting exact-topic historical checks where disjoint. |
| Aug 16 skirting hub | Hub, product data, navigation and skirting-intent copy untouched. Keep primary hub/query scope and historical dates; annotate aggregate AI/contact measures. |
| Sep 3 skirting image repair | No image/card loader change. Preserve WORKED correctness verdict. |
| Sep 13 manufacturer purchasing/documents | Direct About + four article edits and manufacturer-query overlap. Re-baseline original fixed query/About/Resources/six-article cohort at shipment, T+42; retain snapshots and mark earlier interim reads as descriptive. |
| Sep 14 named purchasing author | Byline/photo/job title unchanged. Preserve WORKED attribution; parent discovery/AI secondary outcome joins the new combined cohort. |
| Sep 14 FAQ/photo | Two About answers changed through the existing single content/schema source; seven answers remain. Verify parity and re-baseline About citation observation, T+42. Unchanged blog FAQs/portrait keep Oct 26. |
| Sep 14 technical guides | No technical article, query or direct new incoming link. Primary cohort remains Nov 6; aggregate manufacturer/AI secondary outcome re-baselines at shipment. |
| Sep 15 distributor/project/design guides | No original article/query edit. Primary project/design scope remains Nov 3; shared manufacturer/AI secondary measures use the new shipment baseline. |
| Sep 22 underlay/care/rooms | Primary article/query/link scope unchanged, retaining Nov 6. Combined AI/content secondary measures re-baseline at shipment. |
| Sep 25 comparison/water/terminology | Article/query/link/redirect scope unchanged; retain Oct 9/23 and Nov 6 primary scope. Shared aggregate AI/content secondary outcome re-baselines at shipment. |

Owner-approved treatment: **ship and re-baseline the affected scopes**, preserving old records.
The [October 1 dated baseline](../baselines/2026-10-01-manufacturer-discovery.md) records the chosen
cohorts and dates before publication.
At shipment, add a dated baseline/cohort note and matching treatment in each affected parent
entry plus the new entry. This is limited-page work, not a shared navigation/template/schema
overhaul. If the owner chooses to wait, preserve the pending scopes instead of applying these
future dates now. Refresh the baseline if publication happens later or intervening work ships.

If shipped October 1: **October 15** recrawl/first repeated questions, **October 29**
metadata/questions, **November 12** combined manufacturer, affected wall/broad-floor and
aggregate AI/content outcome. Those dates supersede Nov 10 only for overlapping metrics;
affected wall/H1 allocation moves from its earlier date to Nov 12. Other dates above remain.
No automation has been created.

## Validation and publication boundary

[Validation evidence](2026-10-01-manufacturer-discovery-validation.json) records the completed
checks and runtime/visual qualifications. Text/blog validation, production Next build,
Cloudflare bundle and final typecheck pass. All eight generated initial-HTML artifacts have
the intended text, titles/descriptions, canonical/hreflang, contextual links and bylines;
About has seven exactly matching visible/schema answers per locale. All eight routes also
return HTTP 200 with the same checks through the local Cloudflare Worker. The new EN/TR
About sections and homepage introductions were inspected at desktop/mobile widths, with
no horizontal overflow. The generated manifest changes only the four edited article records.

An initial local Worker startup error occurred with dependencies symlinked from the original
checkout. An environment override did not fix it. Installing the exact lockfile dependencies
inside this managed worktree and rebuilding resolved the error without source, version,
configuration or environment-file edits. Saved preview images are listed in the validation
JSON; production verification still belongs to publication.

The owner authorized commit, push and publication of this expanded change set on October 1.
Publication includes production verification of all eight pages, same-day ship recording,
and the actual dated interference treatment. A locally published-status MDX file is not
evidence that this candidate is live.
