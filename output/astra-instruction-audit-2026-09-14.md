**Kermit Floor repository instruction audit — GPT-6 Astra — 14 September 2026**

This corrected report supersedes the broader first version. Its audit scope is **only files owned by `/home/barbaros/projects/kermit-floor-staging`**.

**Implementation update — 14 September 2026:** The nine recommendations below have been applied locally in this repository. The blog skill now lives in [`.agents/skills/blog-post-generator/`](/home/barbaros/projects/kermit-floor-staging/.agents/skills/blog-post-generator/SKILL.md); `npm run blog:skill:check` replaces the personal-install scripts. All three skills pass metadata validation, the 14 existing topic pairs pass blog/text validation, and temporary fixtures verified setup failure handling and scaffold metadata. The findings and line references below describe the pre-change audit snapshot. No live analytics review or deployment was performed as part of this implementation.

The first audit incorrectly included personal Codex skills and managed plugins. Those findings have been removed. The repository-only scan also found the bundled blog generator under `tools/`, which the first version missed.

Provencher’s post recommends precise activation, conditional reading, less rigid procedure, and completion boundaries that fit the task. The findings below apply those principles to this repository’s actual instructions. [Read the post](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra).

**Scope and overall assessment**

The repository contains three `SKILL.md` files:

- [seo-general-review](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-general-review/SKILL.md)
- [seo-investigate](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-investigate/SKILL.md)
- [blog-post-generator](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/SKILL.md), stored as an installable snapshot under `tools/`, rather than alongside the two discoverable project skills.

I also examined [AGENTS.md](/home/barbaros/projects/kermit-floor-staging/AGENTS.md), the skill references and blog installation/check scripts, README, blog-authoring and product-loading documentation, deployment guidance, and relevant SEO policy/baseline records. This is an instruction audit, not an audit of the entire application or a fresh analytics review.

Your `AGENTS.md` is already compact: 21 lines, 159 words. The most valuable changes are resolving contradictory instructions, moving approval to the actual decision point, updating stale references, and separating article creation from small edits.

At the audit stage, only this report was changed. The subsequent repository implementation is recorded above; global configuration was not modified.

**1. High priority: simplify blog intake and separate drafts from publication**

The blog generator has several cumulative gates:

- [Lines 12–14](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/SKILL.md:12) require an exact skill invocation or another confirmation.
- [Lines 16–45](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/SKILL.md:16) prescribe a sequential intake, always ask for high-level details, require confirmation of all inputs, and stop immediately when an input is missing. High-level details are nevertheless listed as optional later.
- [Lines 118–123](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/SKILL.md:118) require media approval before writing either local MDX file.

These rules can make a complete brief trigger another interview, or leave an otherwise finished draft waiting for permission to save locally.

Recommended behavior:

> Use the supplied brief, existing article, and repository conventions to fill inputs. Ask only for missing editorial decisions that materially change the result. For a new draft, derive the topic identifier and propose locale keywords when they were not supplied. For an edit, preserve existing author, status, and metadata unless the requested change requires otherwise. Complete and validate the requested local draft before presenting it for review. Publication follows the owner’s authorization and shipping procedure.

Keep any deliberate media selection checkpoint, but make it a checkpoint on the concrete draft. If the user specifically requested approval before local file changes, honor that request.

The README intentionally documents explicit invocation. If retaining that behavior, make it consistent with invocation metadata: the [repo-owned `agents/openai.yaml`](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/agents/openai.yaml) currently contains UI metadata without an explicit-only policy. Alternatively, allow an unambiguous natural-language request to start the workflow. Choose one behavior consistently.

**2. High priority: route small blog edits separately**

The [description](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/SKILL.md:3) covers both creating and updating posts, but the body prescribes full bilingual generation, keyword intake, research, media sourcing, and a minimum 1,200 words per locale.

A request to correct a sentence or update a product specification should not reopen that entire workflow.

Use two branches:

- **New article or substantial rewrite:** shared topic plan, locale adaptation, verified claims, media where useful, paired output.
- **Targeted edit:** change the requested content, maintain relevant EN/TR consistency, preserve unrelated content/media, and run the affected validation.

Make length, heading density, and image counts editorial defaults selected for the article’s purpose. The same prescriptions are repeated in the root skill, [writing templates](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/references/writing-templates.md:5), and [media workflow](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/references/media-workflow.md:5). Keep each rule in one place and load the applicable reference.

Retain paired locales, valid frontmatter, proper Turkish characters, factual claim verification, and blog validation. Those are useful project requirements.

**3. High priority: resolve the SEO reading-order contradiction**

[AGENTS.md, line 9](/home/barbaros/projects/kermit-floor-staging/AGENTS.md:9) requires the README, logbook, and newest baseline before SEO work. [seo-investigate, line 24](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-investigate/SKILL.md:24) requires fresh findings before reading experiment history.

Both cannot be followed as written. The investigation’s ordering has a clear purpose: form an initial assessment before considering existing hypotheses.

Replace the blanket ordering in `AGENTS.md` with contextual routing:

> Use the SEO README for data access and measurement rules. Use the review skill for periodic reviews or explicit experiment verdicts, and the investigation skill for a specific analytics question. Follow the selected workflow’s order for reading experiment history.

Keep the requirement to check interference and record SEO-affecting changes when shipping.

**4. High priority: read the question from the conversation**

[seo-investigate, line 9](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-investigate/SKILL.md:9) stops when `$ARGUMENTS` is empty. When Codex reads this file directly, the actual question may be in the user’s message while that placeholder remains literal.

Replace with:

> Identify the investigation question from the current request and relevant conversation context. Use explicit skill arguments when supplied. Ask only if the question is missing or materially ambiguous.

Also change [seo-general-review, line 84](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-general-review/SKILL.md:84), which says fixed steps dominate conflicting arguments. Preserve the user’s requested scope and run the requirements relevant to it.

Both skills place useful distinctions in `whenToUse`. Put the deciding trigger in `description`, which is exposed in this session’s skill catalog. Suggested descriptions:

- **seo-general-review:** Review kermitfloor.com SEO experiments, record due verdicts, and recommend next actions. Use for periodic reviews or explicit experiment verdicts.
- **seo-investigate:** Answer a specific kermitfloor.com SEO or analytics question from fresh data, then cross-check relevant experiment history.
- **blog-post-generator:** Create or revise paired EN/TR Kermit Floor blog posts with verified product claims and valid MDX.

**5. High priority: finish review records before waiting on proposed changes**

[seo-general-review, line 22](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-general-review/SKILL.md:22) says to perform “Step 2’s passive checks” and stop when nothing is due. Passive checks are actually Step 3, and the stop bypasses the mandatory Step 6 record.

The same recording step follows the approval branch for implementing recommendations. That structure can encourage an incomplete review when the owner defers a site change.

Reorder completion as:

1. Identify due experiment verdicts and scheduled operational reads.
2. Run the relevant checks, including passive checks when no verdict is due.
3. Write verdicts where appropriate and complete the same-day review record.
4. Present recommendations.
5. Implement newly proposed changes only when authorized.

Keep operational monitoring distinct from experiment verdicts: the logbook can schedule a weekly lead read even after the instrumentation experiment has a WORKED verdict.

The request to run a review already covers its required local review record. A decision about implementing a recommendation should not block recording what the review established.

**6. High priority: select the relevant baseline**

Both SEO skills describe the newest baseline as the comparison point. The current newest file is [the FAQ/photo checkpoint](/home/barbaros/projects/kermit-floor-staging/docs/seo/baselines/2026-09-14-faq-schema.md:31), which explicitly preserves older experiment baselines.

Use:

> For an experiment verdict, use that experiment’s recorded baseline and comparison window. For a new investigation, select a baseline matching the metric, scope, and period. Use the latest overview snapshot only when it is relevant.

This prevents an unrelated recent technical baseline from replacing traffic, ranking, or lead history.

**7. Medium priority: recognize existing approval without weakening production control**

[seo-general-review, line 56](/home/barbaros/projects/kermit-floor-staging/.agents/skills/seo-general-review/SKILL.md:56) requires commit/push approval “each time.” Clarify that authorization applies to the specified actions and change set:

> Commit and push only when the owner has authorized those actions for the current change set. Reuse authorization already given; ask again if the scope, destination, or intended effect materially changes.

Keep the distinction between:

| Request | Completion within scope | Additional decision |
|---|---|---|
| Investigate a question | Findings, dates, limitations, and experiment context. | A new recording or implementation action unless requested. |
| Run the SEO review | Checks, due verdicts, and the required local record. | Implementing newly recommended site changes. |
| Draft or edit an article | Requested paired content and appropriate validation. | Publication when not already authorized. |
| Ship an approved change | Covered shipping actions, production verification, and same-day experiment record. | Material changes to the approved scope or destination. |

The existing production approval, interference check, confound markers, and honest INCONCLUSIVE verdict are worth preserving.

**8. Medium priority: update the blog’s source-of-truth pointers**

[claim-sources.md](/home/barbaros/projects/kermit-floor-staging/tools/blog-post-generator-skill/references/claim-sources.md:7) names `ProductDetails.tsx` as a primary product source. However, [the current product-loading documentation](/home/barbaros/projects/kermit-floor-staging/docs/product-loading-logic.md:87) explains that shared technical specs now live in `src/lib/specs/data/*-spec-profiles.json`, with collection mappings in the registry. `ProductDetails.tsx` renders resolved data.

Update claim verification to follow the relevant collection mapping and spec profile, using translations for labels and the appropriate approved documents for manufacturer claims. Preserve the requirement for evidence; make the pointer reach the actual evidence.

Also refresh [blog-authoring’s starter-placeholder note](/home/barbaros/projects/kermit-floor-staging/docs/blog-authoring.md:29): it still describes only two starter topic pairs, while the repository now contains 14 EN topic files with their paired structure.

**9. Medium priority: keep the blog workflow discoverable within this repository**

The README describes installing the frozen blog skill through [a script](/home/barbaros/projects/kermit-floor-staging/scripts/install-blog-post-generator-skill.ps1:48) that copies it into a personal skill directory. The bundled source is not among this session’s two discoverable project skills.

For a repository-specific workflow, prefer a maintained entry under `.agents/skills/blog-post-generator/`. If the `tools/` snapshot must remain for packaging, use one maintained source with an explicit pointer or supported link rather than independently edited copies. Update the repo README and setup checks to match.

This recommendation concerns repository packaging only. No personal installation was inspected or changed for this corrected audit.

**Suggested AGENTS.md direction**

Keep it short. Remove the obsolete “No repo-specific Codex instructions…” sentence. Use contextual pointers for:

- Deployment preparation → `DEPLOY.md`.
- Blog creation or editing → `docs/blog-authoring.md` and the maintained blog skill, when applicable.
- Product-loading or technical-spec changes → `docs/product-loading-logic.md`.
- SEO investigation or review → the appropriate SEO skill, with that skill controlling reading order.

Retain the ship-time logbook obligation and clarify scoped authorization. Do not require every referenced document before every edit.

**Verification prompts for a later revision**

| Prompt | Expected behavior |
|---|---|
| “Investigate why traffic from Turkey changed.” | Uses the conversation’s question; follows the investigation reading order. |
| “Run the SEO review; no experiment verdicts are due.” | Performs applicable passive/operational checks and records the run. |
| “Review the lead experiment.” | Uses its own metric and baseline, not the latest FAQ checkpoint. |
| “Draft EN/TR articles from this complete brief.” | Reuses supplied details; completes a validated draft without repeating intake. |
| “Fix this one factual sentence in the existing article.” | Makes the targeted correction and maintains relevant locale consistency. |
| “Ship these approved changes.” | Completes covered shipping, verification, and recording without repeated approval. |

These are proposed behavioral checks. No live analytics queries, article generation, deployments, or behavioral evaluations were run during this audit.
