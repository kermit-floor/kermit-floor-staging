# September 21, 2026 — consent and Germany contact release baseline

Fresh GA4 property `523760978` reports captured before deployment after routine ADC
credential refresh. [Exact requests and responses](2026-09-21-consent-contact.json).
Latest 28 days: **August 23–September 19**; prior: **July 26–August 22**.
Latest seven days: **September 13–19**; prior: **September 6–12**.
These are pre-release measurements under the old consent ordering, not evidence of
repair success. Exclude the September 21 release day from before/after comparisons.

| Metric | Latest 28 days | Previous 28 days |
| --- | ---: | ---: |
| Sessions | 280 | 393 |
| Users | 146 | 160 |
| Page views | 1,608 | 1,719 |
| Engagement rate | 62.86% | 58.27% |
| Lead key events | 16 | 10 |
| Download key events | 15 | 1 |
| Google / organic sessions | 172 | 283 |
| Türkiye / desktop / Chrome organic sessions | 29 | 80 |
| Romania / desktop / Chrome organic sessions | 10 | 28 |
| English contact page views / key events | 16 / 0 | 30 / 2 |
| Turkish contact page views / key events | 24 / 1 | 38 / 0 |

Latest seven days have **5 lead / 8 download key events**, versus **4 / 3**.
Raw lead counts differ (6 latest week; 48 latest 28 days); retain key-event reporting.
The prior window partly predates August 14 key-event registration and is not an
unconfounded conversion comparison. ChatGPT (`chatgpt.com / ai-assistant`) has
**13 sessions / 4 users / 3 key events** in the latest 28 days. Exact source rows,
country/device/browser organic cohorts and page-level content metrics are in the JSON.
The Germany phone link has no pre-release exposure; its attributable baseline is zero.

## Interference decision

Ship and re-baseline GA4-dependent comparisons to this dated snapshot. Consent ordering
changes site-wide measurement; the Germany card also adds a new lead opportunity on
`/contact` and `/tr/iletisim`. Neither change establishes improved visitor demand.

- Preserve the original WORKED lead-instrumentation verdict and all historical snapshots.
- First repair operational read: **September 28**; desktop comparison: **October 5**.
- New Germany lead and pricing/content conversion comparisons: **October 21** at the
  earliest, after 30 days. Low volume may require an INCONCLUSIVE verdict.
- Combined AI-referral outcome: **November 2**, six weeks after this measurement change;
  this supersedes October 27 for GA4 AI outcomes only. Search/content indexing and
  ranking dates, GSC baselines and structured-data checks remain unchanged.
- Annotate all open entries with the September 21 site-wide measurement cohort.
  Do not attribute aggregate post-release increases to consent, content or the new
  representative independently. Review matching GSC cohorts alongside GA4 trends.

Local validation: production build, 16 consent browser tests, and English/Turkish
contact checks at desktop/mobile widths pass. Live verification is recorded in the
release entries after the connected Cloudflare deployment completes.
