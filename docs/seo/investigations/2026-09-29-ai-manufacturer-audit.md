# Chatbot manufacturer recommendations — September 28–29, 2026

Four fresh, signed-out ChatGPT buyer questions recommended Kermit **three times**, with
clickable Kermit citations in those same three answers. The broad English question omitted
Kermit. This is a useful first audit baseline, not an estimated share of all chatbot answers.
The [evidence JSON](2026-09-29-ai-manufacturer-audit.json) retains exact prompts, session
URLs, source links, short excerpts, scoring and limitations. Sessions may be accessible only
in the guest browser; they are not public share links. The record preserves selected evidence
and summaries, not full verbatim transcripts.

The audit ran September 28 UTC and crossed midnight into September 29 in Europe/Athens.
All answers were generated against the existing public website, before these local edits
were deployed. No after-change recommendation result has been measured.

## What happened

| Fresh buyer question | Kermit recommended / cited? | Position in list | What the answer conveyed |
|---|---|---|---|
| EN: manufacturers for import/distribution, comparing capacity and commercial terms | Yes / yes | 4 of 5 | Commercial terms are a strength; annual capacity is unavailable. |
| TR: which Turkish SPC manufacturers to consider | Yes / yes | 4 of 4 | OEM, MOQ and lead time recognized; Kermit characterized as a boutique/specialist alternative. |
| EN: private-label SPC range for European distributors | Yes / yes | 1 of 3 | Recommends contacting Kermit and MILAT first; Kermit offers a clear commercial starting point. |
| EN: broad Turkish SPC manufacturer discovery | No / no | — | ADOFLOOR, MILAT and Porfloor only. |

By language, this is **2/3 English** and **1/1 Turkish**, too small and differently prompted
to compare languages. None of the four answers gave Kermit's confirmed annual capacity or
the four-country operating footprint. List position is descriptive, not a quality ranking.

The owner's [shared example](https://chatgpt.com/s/t_6abad38661dc8191b9569f628c07e2a7)
also names ADOFLOOR, MILAT and Porfloor, without Kermit. Its source panel points to the
companies' own About, manufacturer and product pages. The originating prompt and account
context are not visible, so it is excluded from the four-test denominator. Our broad English
question reproduces the same supplier set, but is not claimed to be an exact repeat.

## Which content the answers use

**Kermit's manufacturer and purchasing content is already being retrieved.** The first test's
commercial-terms citation opens [About](https://kermitfloor.com/about) and the
[OEM/private-label guide](https://kermitfloor.com/blog/oem-private-label-spc-flooring).
The Turkish answer cites [Hakkımızda](https://kermitfloor.com/tr/hakkimizda). These are
specific destinations from the September manufacturer release, rather than evidence inferred
from a referrer or crawler request. The answers extract one-container MOQ, four-week standard
lead time and OEM availability correctly. The OEM response also preserves the distinction
between production/supply timing and delivery timing, and between private label and exclusivity.

**The missing scale information affects how Kermit is described.** The import answer leaves
the capacity cell without a figure, while the Turkish answer suggests a smaller specialist.
Neither establishes Kermit's actual scale. The missing published number is a plausible
explanation for that positioning, not proof that adding it will cause inclusion in every answer.

**Competitor sources supply a compact supplier profile.** Direct inspection of the cited
[ADOFLOOR company page](https://www.adofloor.com/about-us/) found manufacturing identity,
location, capacity and export reach. [Porfloor's About page](https://porfloor.com/en/about)
places factory scale, capacity and export footprint in its opening profile, statistic blocks
and FAQs. [MILAT's manufacturer page](https://milatfloor.com/manufacturer) combines product
details, manufacturing scope, OEM services, ordering steps, documentation and specific buyer
questions. MILAT was fetched directly after the web tool timed out. These are supplier claims;
the audit did not independently certify their factories or product performance.

**Technical evidence matters alongside capacity.** The OEM answer gives MILAT a stronger
technical positioning based on its product details and listed documents. Kermit's appropriate
response is to make its own applicable specifications and documents easy to find. Competitor
certifications, click-system licences, acoustic values and application claims cannot become
Kermit claims. Existing Kermit catalogues and scoped technical documents remain the evidence.

**English answers can draw on Turkish pages.** The broad English answer's source panel uses
Turkish competitor pages. Consistent bilingual facts matter more than an English-only rewrite.
The answer also repeats a supplier's broad characterization of Gaziantep's importance; that
industry-wide claim was not established here. Citation presence alone is not an accuracy check.

The experiment provides no evidence that `llms.txt` caused these recommendations. Its update
keeps the company map consistent with the visible page; the observed citations point to
normal website content. It also does not show that more crawler requests cause more referrals.

## Implementation and subsequent publication

The owner confirmed **8,000,000 m²/year combined for flooring and wall panels**, and operations
in **Türkiye, Moldova, Romania and the USA**. The existing public Contact information identifies
factories in Türkiye and Moldova and a Romanian store. The U.S. country presence is confirmed;
no U.S. factory, city, address or legal entity has been supplied. Germany remains an existing
representative contact and is not one of the four owner-designated operating countries.

The EN/TR manufacturer pages now have:

- A direct manufacturer introduction with annual capacity, product scope and operating countries.
- Six readable fact cards: capacity, country footprint, headquarters, MOQ, lead time and OEM.
- Distinct factory/store/U.S. enquiry descriptions, avoiding a claim of factories in four countries.
- Visible capacity and country questions, emitted through the existing matching FAQPage data.
- Updated descriptions and a matching manufacturer/purchasing section in `llms.txt`.

Existing URLs, H1s, product specifications, purchasing articles, contact details and lead-event
handlers are preserved. This is original Kermit copy using owner-confirmed facts and the
observed information structure. It does not quote chatbot praise on the public site or present
an AI recommendation as independent accreditation.

See the [release preparation and interference check](../content-strategy/2026-09-29-manufacturer-positioning.md).
After this pre-release audit, the owner approved publication. Commit `5ac3836` deployed
September 28 at 21:28:45 UTC (local September 29); both languages and llms.txt were verified.
The audit remains a before-change observation; [separate release baseline and dates](../baselines/2026-09-29-manufacturer-positioning.md).

## Repeatable measurement

Freeze the four exact prompts in the JSON, including language and citation request. Repeat
each in a fresh conversation on three separate dates per audit round; retain every first
answer, including omissions. Expand the prompt set for wall panels or new markets as a new
cohort, rather than mixing new questions into a historical denominator. The four-question
pilot is the starting observation, not a statistically stable pre-change average.

For each answer, record correct-entity mention, positive supplier recommendation, direct
Kermit link, capacity accuracy, operating-country accuracy and any factual errors separately.
Capture the complete first answer and citation panel in future rounds where export is
available; never count a result merely listed under additional search results as a recommendation.
Keep branded knowledge questions separate from unprompted discovery. Save account state,
model label/version when exposed, search setting, date, network region when known, and language.

The current environment was the signed-out ChatGPT consumer site in the in-app browser,
not Chrome incognito. Its model selector only exposed the generic ChatGPT label. Browser
session and network were shared; geographic influence is uncontrolled. Claude redirected
to login. Gemini exposed an existing signed-in account, so no test was submitted there.
Neither unavailable platform counts as a negative recommendation. APIs would form separate
cohorts, not substitute measurements of these consumer websites.

Use the first post-deployment audit around **T+14 days**, then **T+28 days**, with the same
prompts and settings. An immediate content-fetch check can verify the published text but
cannot establish recommendation uplift. Three repeated dates improve visibility into answer
variation; they do not remove platform/model changes or establish causation.

Keep the three measurement layers separate: crawler fetches, observed chatbot recommendations,
and GA4-attributed human visits/contact intent. We did not open our own result links in a
browser. These deliberate prompts may themselves generate bot fetches, so audit-time crawler
traffic must not be interpreted as independent organic demand. No GA4 refresh or new traffic
growth verdict was performed as part of this content audit. A fresh read-only GSC/GA4
snapshot was subsequently captured for the approved release and is linked above.
