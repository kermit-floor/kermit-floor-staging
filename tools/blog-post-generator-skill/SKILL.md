---
name: blog-post-generator
description: Generate bilingual (EN + TR) SEO blog posts for Kermit Floor with shared topic planning, locale-specific keywords, claim checks against repo product sources, auto-planned inline media, and paired MDX output under content/blog/topics. Use when creating or updating SEO blog content that must keep EN/TR parity and pass blog validation.
---

# Bilingual SEO Blog Post Generator

Generate paired EN/TR blog posts for a single topic and write both locale files in one run.

## Conversational Intake (Default UX)

Start this workflow only when the user explicitly invokes the skill with `$blog-post-generator`.
`$blog-post-generator` alone is sufficient to start; do not require any extra starter phrase.
If the skill is not explicitly invoked, ask for confirmation before starting blog generation.

Run a short guided intake and collect missing inputs step-by-step in chat:

1. Topic name (natural language)
2. High-level details to include (author-provided points/examples/angles to plan around)
3. EN primary keyword
4. EN secondary keywords
5. TR primary keyword
6. TR secondary keywords
7. Status (`draft` or `published`)
8. Author (pick from the repo-defined author registry in `content/blog/authors.json`)
9. Optional videos to include (repo path + what video is about + locale)

Always ask for high-level details (the user can answer with bullets, short notes, or "none").
Use those details as planning constraints for the article outline and section emphasis.

After collecting these answers, normalize into the required input model and continue generation workflow.

## Required Inputs

Collect and confirm all required inputs before drafting:

1. `topic_id`
2. `en_primary_keyword`
3. `en_secondary_keywords[]`
4. `tr_primary_keyword`
5. `tr_secondary_keywords[]`
6. `post_status` (`draft` or `published`)
7. `author_name` (resolved from `content/blog/authors.json`)

Stop immediately with a clear input error if any required input is missing.

## Optional Inputs

- `high_level_details[]`: author-provided high-level points that must be included and planned around.
  - Examples:
    - key differentiators to emphasize
    - project scenarios/use cases
    - buyer objections to address
    - claims to include only if verified
    - examples/comparisons the author wants covered
- `video_assets[]`: user-provided repo videos to place inside the post body.
  - Each item includes:
    - `repoPath`: repository-relative video path (for example `public/videos/blog/spc-installation-demo.mp4`)
    - `about`: what the video demonstrates
    - `locale`: optional (`en`, `tr`, or `both`; default `both`)
- `image_assets[]`: user-provided repo images to use in post body and/or cover.
  - Each item may include:
    - `repoPath`: repository-relative image path (for example `public/images/blog/custom/spc-kitchen.jpg`)
    - `about`: what the image shows
    - `locale`: optional (`en`, `tr`, or `both`; default `both`)
    - `preferredPlacement`: optional section hint
- `brief_context`: optional short description of what the article should focus on.
- `reference_sources[]`: optional URLs or notes the user wants considered for factual direction.
- `style_reference_articles[]`: optional URLs/articles to emulate for structure/tone (without copying).

## Output Contract

Write both files:

- `content/blog/topics/<topicId>/en.mdx`
- `content/blog/topics/<topicId>/tr.mdx`

Use the frontmatter contract in `references/schema.md`.

## Workflow

1. Validate required inputs.
2. Load `content/blog/authors.json`, present available authors when needed, and resolve the user-selected author (id or name) to a valid `authorName`.
   - Stop with a clear error if the selected author is not defined in the repo author registry.
3. Infer `searchIntent`, `targetAudience`, and `funnelStage` from keywords/topic.
4. Build an article plan (outline + media plan) before drafting:
   - Normalize `high_level_details[]` (and `brief_context` if provided) into must-cover sections, examples, objections, and priority emphasis.
   - Plan section order and subtitles around those author-provided details before drafting copy.
   - Decide inline image count autonomously from content depth and section count.
   - Default guidance:
     - 1200-1500 words: 3-5 inline images
     - 1500-1900 words: 4-6 inline images
     - 1900-2200 words (usually comparison/checklist topics): 5-7 inline images
   - Assign each planned image to a specific section purpose (context, process step, comparison visual, detail shot).
5. Run web research for topical context and image candidate discovery.
6. If `image_assets[]` are provided, prioritize those for media planning.
7. For missing slots, select web images and file them under `public/images/blog/<topicId>/`.
   - Use deterministic filenames (for example `<locale>-section-01.webp`).
   - Track selected image source URLs in an internal trace file (do not expose them in post frontmatter/body).
   - Default internal trace path: `.codex/blog-media-sources/<topicId>.json`.
8. Build claim candidates and verify product/spec claims using `references/claim-sources.md`.
9. Use `brief_context`, `reference_sources[]`, and `style_reference_articles[]` if provided to guide angle/structure.
10. Draft EN post using the template and SEO rules in `references/writing-templates.md` and `references/seo-rules.md`.
11. Draft TR post from the same topic plan, optimized for TR keywords and search behavior (not a literal translation).
12. Insert inline image markdown in both locale bodies using the chosen media plan.
13. If `video_assets[]` are provided:
   - Verify each `repoPath` exists.
   - Place each video in the most relevant section described by `about`.
   - Insert playable video markdown using the repo path (for example `![Installation demo](<video-path>.mp4)`).
14. Set `authorName` in both EN/TR frontmatter using the resolved repo-defined author.
15. Add internal links/CTAs only when they are genuinely helpful for the reader's next step.
   - Avoid generic bottom "related page" blocks.
   - Use lively, context-specific CTA phrasing tied to the section topic.
16. Populate `sourceUrls` with:
   - product/spec verification repo paths
   - external research URLs
   - (exclude raw external image source URLs; keep those only in the internal media trace file)
17. Present a final draft media confirmation summary to the user before finalizing:
   - image count selected and rationale
   - each image path + placement section
   - internal media trace file path (contains raw external image source URLs)
   - each video repo path + placement section
18. After user confirmation, write/update both MDX files.
19. Run `npm run blog:validate`.
20. Return a report with:
   - files created/updated
   - status used
   - author used
   - high-level details incorporated (summary)
   - research URLs captured
   - image files created
   - internal media trace file path (if web images were used)
   - videos inserted
   - contextual internal links/CTAs added (if any)
   - claims dropped or softened due to missing verification

## Claim Safety Rules

For Kermit product/spec claims, verify against repo sources before inclusion.

- If verified: keep the claim factual.
- If not verified: remove it or rewrite as non-quantified generic guidance.

Do not publish unsupported quantified claims.

## Writing Constraints

- Keep tone neutral, practical, and B2B useful.
- Default to long-form structure:
  - Minimum target per locale: 1200 words
  - Standard target per locale: 1400-1800 words
  - Comparison/evaluation topics may extend to 1600-2200 words when the extra length adds real decision value
- Use many subtitles to maintain reader focus in long articles:
  - Aim for frequent H2/H3 sectioning (typically 6-10 subheadings)
  - Add a new subheading roughly every 120-220 words when natural
  - Prefer short sections, bullets, and checklists over long text walls
- Keep EN/TR intent-aligned while allowing localized phrasing and examples.
- Prioritize author-provided high-level details in the outline and examples; do not bury them in filler sections.
- Final article copy must be reader-facing only.
- Do not reference the user/author prompt, "your high-level details/list", or the drafting process inside the published article body.
- Convert all prompt/planning inputs into neutral editorial prose (no prompt-leak language like "you mentioned", "your list", "in this article we will cover your points").
- Use internal links/CTAs selectively when they improve utility.
- Keep CTA presentation lively and contextual, not boilerplate.
- Use comparison framing only when the topic/keywords indicate comparison intent.
- Place media naturally inside the flow; avoid decorative image stuffing.
- Use selective markdown bold (`**...**`) for key terms, warnings, or decision-critical points when emphasis improves readability.
- Avoid bold overuse; keep emphasis meaningful and sparse.

## References

- `references/schema.md`
- `references/claim-sources.md`
- `references/writing-templates.md`
- `references/seo-rules.md`
- `references/media-workflow.md`
- Repo author registry: `content/blog/authors.json`
