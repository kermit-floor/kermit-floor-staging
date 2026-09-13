---
name: blog-post-generator
description: Create or revise paired EN/TR Kermit Floor blog posts with verified product claims and valid MDX. Use for new articles, substantial rewrites, or targeted edits to repository blog content.
---

# Bilingual Blog Post Generator

Use the current request, supplied brief, and existing article to determine the work. A clear
natural-language request or explicit `$blog-post-generator` invocation starts this workflow.

## Choose the scope

- **New article or substantial rewrite:** create a shared topic plan, adapt it to each locale,
  verify claims, and complete both `content/blog/topics/<topicId>/en.mdx` and `tr.mdx`.
- **Targeted edit:** change the requested content and maintain relevant EN/TR consistency.
  A factual correction may need both locales; a locale-specific typo may need only one.
  Preserve unrelated metadata, author, status, media, and text. Do not expand a small edit into
  research, a rewrite, or new media unless the correction requires it.

Reuse supplied topics, keywords, editorial points, references, style preferences, and assets.
For new articles, derive the topic identifier, locale keywords, search intent, audience, and
funnel stage when the brief supports them. Default to `draft` and the default author in
`content/blog/authors.json` (or its first entry, matching the scaffolder). Resolve an explicitly
selected author by registry id or name; do not invent an attribution. State material inferred
choices in the handoff.

Ask only for missing decisions that materially affect the result, such as an unidentified
topic, conflicting editorial direction, or an author absent from the registry. A complete
brief does not need another intake or confirmation. Honor any explicit request to review a
plan before local edits.

## Load the guidance needed

Paths under `references/` are relative to this skill; other paths are repository-relative.

- New posts or frontmatter changes: `references/schema.md` and the author registry.
- Kermit product/specification or manufacturer claims: `references/claim-sources.md`.
- New articles or substantial rewrites: `references/writing-templates.md` and
  `references/seo-rules.md`.
- Adding or changing images/videos: `references/media-workflow.md`.
- Repository format and FAQ conventions: `docs/blog-authoring.md`.

## Create or revise the content

For a new topic, `npm run blog:new -- --topic <topic-id>` can scaffold the locale pair. Replace
its placeholders before considering the draft complete. For existing topics, work from their
current files.

For substantial writing, use the supplied points to shape the outline and examples. Research
where needed to establish factual support or current context; reuse adequate supplied evidence.
Verify Kermit claims using the applicable source, and keep actual research/verification
references in `sourceUrls`. Unsupported claims should be removed or replaced with accurate
generic guidance that does not imply an unverified Kermit capability.

Adapt EN and TR from the same intent and facts, with natural local phrasing and proper Turkish
characters. Choose length and structure for the reader's decision; keep planning and prompt
details out of article copy. Add media and internal links where they help explain or act on
the topic, using the relevant reference.

## Complete the local result

Save the requested files and assets, then run `npm run blog:validate`. For Turkish text
changes, also run `npm run text:validate`; when adding or changing FAQ blocks, run
`npm run blog:build-manifest` to check their parsing. Fix failures caused by the work and
report any unrelated blockers.

Present the files, validation results, material assumptions, and any omitted unsupported
claims. When media changed, include its paths and placement with viewable previews where
available so the owner can review the actual draft. Local saving and validation do not need
a separate media approval unless the owner requested that checkpoint.

Publication is a separate action from preparing a local file, including one with
`status: published`. Follow `AGENTS.md` for commit/push authorization and
`docs/seo/README.md` for interference checks, production verification, and ship-time recording.
