# Distributor, project and design content baseline — 2026-09-15

Fresh GSC and GA4 direct API reports were fetched at 07:20 UTC on September 15 after
refreshing the existing impersonated ADC login. Additional overlapping article/query cohorts
were fetched at 07:29 UTC. The [24 raw reports](2026-09-15-project-content.json) retain their
requests and responses. The finalized GSC availability probe ends on **September 12**:
latest 28 days **August 16–September 12**, previous 28 days **July 19–August 15**.

## New cohort and primary measures

This release covers DEALER, PROJECT and DESIGN in the approved content map: three EN/TR
pairs and six new URLs. All six URLs returned **404 at 07:30:13 UTC** in direct pre-launch
requests with cache bypass headers. Their exact paths are recorded in the JSON.

The fixed 14-query group is:

- `spc flooring distributor`, `spc flooring distributors`, `spc flooring dealer`
- `spc flooring project specification`, `flooring finish schedule`
- `spc flooring colour`, `spc flooring color`, `spc flooring plank size`
- `spc parke bayilik`, `spc parke bayisi`, `spc parke şartnamesi`
- `spc parke renk seçimi`, `spc parke renkleri`, `spc parke ölçüleri`

GSC reports **no rows** for this group, its query/page allocation or the new URLs in either
window. This is a new-coverage baseline, not evidence of zero search demand. Start with
indexing and first query allocation, then impressions and positions; judge CTR only with
enough clicks. Keep this query list fixed and label newly discovered queries exploratory.

Review **September 29** for indexing, **October 13** for rankings/query allocation, and
**October 27** for full content/link effects. Use finalized matched periods and inspect
query allocation across the new and earlier guides if they begin competing for the same query.

## Overlapping cohorts

The new articles link to earlier purchasing and technical guides and to Resources. Their
inbound-link and discovery effects are an overlapping intervention even though all 34
existing article records and all 34 related-post cohorts remain unchanged.

| GSC cohort | Latest 28 days | Previous 28 days |
|---|---|---|
| Original eight manufacturer queries | 3 clicks / 76 impressions / position 14.49 | 2 / 21 / 13.33 |
| Original 13 technical queries | No rows | No rows |
| Original six purchasing article URLs | No rows | No rows |
| Original six technical article URLs | No rows | No rows |
| About/Resources EN/TR, all queries | 29 clicks / 804 impressions / position 11.47 | 26 / 783 / 10.06 |

Positions above are impression-weighted summaries of the returned cohort rows, not an
unweighted average of query positions. The manufacturer's reported English queries account
for 57 impressions and no clicks in the latest window; `spc parke üreticileri` supplies
19 impressions, three clicks and position 2.26. No reporting window here measures either
September 13 or September 14's content release; it ends before both deployments.

| GA4 measure | Latest 28 days | Previous 28 days |
|---|---|---|
| AI Assistant sessions / engaged sessions / all key events | 2 / 2 / 1 | 1 / 0 / 0 |
| Organic Search sessions / engaged sessions / all key events | 210 / 137 / 24 | 273 / 166 / 0 |
| generate_lead raw events / key events | 51 / 20 | 1 / 1 |
| file_download raw events / key events | 8 / 8 | 56 / 0 |
| Organic landings on About/Resources EN/TR: sessions / engaged / key events | 6 / 4 / 2 | 10 / 6 / 0 |

The AI-source report identifies `chatgpt.com / ai-assistant` in both windows. The configured
AI Assistant channel is the fixed metric; the source regex is supplementary. There is no
direct chatbot-citation baseline. A change from one to two sessions cannot establish an
AI-visibility gain or distinguish crawler settings, content, author imagery and FAQ effects.

The earlier window straddles the introduction of key-event instrumentation. It is not a
clean conversion-growth comparison. Lead-intent actions are not qualified leads or sales;
retain the known desktop GA4/GSC discrepancy and the August 28 raw-event burst in later
interpretation. The WORKED instrumentation verdict and September 17 operational read stand.

## Re-baselining treatment

Ship and re-baseline the overlapping **crawler/llms.txt AI-referral outcome**, and the
**manufacturer and technical content/link outcomes**, to this dated snapshot with a new
combined-effect review of **October 27**. This includes the original query/page cohorts
and secondary resource, organic, lead/download and observed AI measures. Notes in both
parent logbook entries and the new entry identify the added inbound links as a confound.

Retain the earlier snapshots. Manufacturer indexing on September 27 and its October 11
ranking checkpoint, and technical indexing on September 28 and its October 12 checkpoint,
remain useful interim reads. Their later content/link effects are assessed with the new
October 27 combined window, rather than attributed solely to their first publication day.
The September 15 crawler/llms.txt checkpoint is historical; this shipping task does not
issue a periodic-review verdict for it or for the other experiments due today.

Product/H1/schema, the original alternate-locale redirect cohort, reviews/pricing, six-page
CTR and skirting-hub tests keep their original exact cohorts and review dates. No body,
metadata, template, navigation, related-post membership or direct contextual link to those
test pages changes. Exclude the six new articles and their new tag pages from old page-level
comparisons and mark aggregate site summaries with this content release.

Record the actual deployment time after shipping. GSC uses Pacific dates; GA4 uses
Europe/Istanbul. Exclude the partial deployment day in each system from a full post-launch
window. Deployment and sitemap acceptance do not establish indexing or search impact.
