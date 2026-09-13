# FAQPage and author-photo baseline — 2026-09-14

Owner-approved implementation: FAQPage data generated from visible FAQ content, plus the
owner-supplied portrait for Barbaros Ahmet Bayram. Code commit: `4d4b4e9`.

The release date is **September 14 in Europe/Athens**, but **September 13 in UTC and
Search Console's Pacific reporting timezone**. Use the Pacific date in GSC comparisons.

## Fresh technical baseline

Production fetched with cache revalidation requested at **2026-09-13 22:35:16 UTC**:
all **30 pages returned HTTP 200** (28 blog pages and two About pages). FAQPage count was
**0/6** on the intended FAQ pages; Barbaros's supplied portrait appeared on **0/6** of his
article bylines. These checks measure implementation correctness, not traffic or rankings.

| FAQ page pair | English path | Turkish path | Questions per language |
|---|---|---|---:|
| Manufacturer/About | `/about` | `/tr/hakkimizda` | 5 |
| Samples and quotations | `/blog/spc-flooring-samples-wholesale-quote` | `/tr/blog/spc-parke-numune-toptan-teklif` | 4 |
| Bathroom wall panels | `/blog/spc-wall-panels-for-bathrooms` | `/tr/blog/banyo-icin-spc-duvar-panelleri` | 4 |

Target: **one FAQPage per applicable page, 26 complete Question/Answer pairs overall**,
matching the visible content, canonical URL and language. The other 24 blog pages must
continue to emit no FAQPage. Existing Article and other structured data remain unchanged.

The portrait applies to both locales of the manufacturer checklist, samples/quotation and
OEM/private-label topics: six bylines. The original 400 × 400 PNG is published unchanged at
`/images/authors/barbaros-ahmet-bayram.png`; SHA-256:
`b5f3067192a0953b9b68b01d188381471c3a76bd6dddf8f7fdc86a7974427c76`.

## Measurement and interference

- Primary check: FAQPage/visible-answer parity **0/6 → 6/6**; portrait display **0/6 → 6/6**.
  Immediate deployment check on September 14; maintenance/full-effect review **October 26**.
- This is an explicit-structure implementation, not a promise of additional citations.
  Google retired FAQ rich results on May 7, 2026, so FAQ rich-result appearance is not an
  appropriate success metric. [Google's update](https://developers.google.com/search/updates).
- Keep the existing [manufacturer launch baseline](2026-09-13-manufacturer-content.md).
  About and samples pages now have an additional schema intervention; interpret later
  discovery/AI-referral results as the combined content release, not an isolated FAQ effect.
  Author imagery affects all six new purchasing articles. Parent review dates stay intact.
- The pending bathroom CTR experiment overlaps this change. Its original 28-day post window
  **August 17–September 13** includes the partial Pacific deployment day. Retain that original
  comparison for continuity, but on September 17 also report a clean matched **27-day
  sensitivity check: August 17–September 12 versus July 20–August 15**. Do not assign any
  September 13+ movement to the title alone. No title/description/URL/body text changed here.
- The original Product/Breadcrumb appearance checks retain their own schemas and metrics.
  Site-wide AI-referral and engagement reads should mark the September 13 Pacific cohort;
  no lead instrumentation changed. Preserve the desktop GA4/GSC discrepancy noted on
  September 13 and avoid inferring qualified leads from raw events.
- No fresh GSC/GA4 traffic verdict is required for this technical baseline. Keep the original
  metric history; this file records a separate markup/photo checkpoint and review date.

## Implementation checks

Local production build, text/blog validation and type checking passed. All 28 blog body HTML
strings and the About page bodies are unchanged. The four explicit blog FAQ blocks generate
both rendered answers and schema entries from the same Markdown tokens; translated About
questions share one array for the visible definition list and schema. JSON-LD escapes `<`.
Multiline answers, lists, emphasis, inline code, answer boundaries and invalid FAQ blocks
were exercised. All 24 non-FAQ controls retain their existing structured data. English and
Turkish photo bylines render on desktop/mobile without text truncation or page overflow.

Final deployment evidence is recorded in the [logbook](../logbook.md).
