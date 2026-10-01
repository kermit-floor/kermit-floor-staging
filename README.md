# Kermit Floor

Next.js site for Kermit Floor (SPC floors, wall panels, skirting). Supports English, Turkish,
Bulgarian, Serbian (Cyrillic), and Arabic via next-intl. Arabic uses a right-to-left layout.

## Development

```bash
npm install
npm run dev
```

Runs at http://localhost:9002.

The supported languages are defined in `src/i18n/locales.json`. English URLs have no prefix;
the other languages use `/tr`, `/bg`, `/sr`, and `/ar`. Existing Turkish route slugs are
preserved; the additional languages use English route slugs under their locale prefix.
Product/decor names, identifiers, contact details, and original PDF files stay unchanged.
Download cards identify the actual document language independently of the website language.

`npm run i18n:validate` checks translation coverage, interpolation parameters, product names,
and article structure and links. After `npm run build`, run `npm run test:i18n` for route,
language-switching, download, and Arabic mobile checks.

## Deployment

See [DEPLOY.md](DEPLOY.md) for Cloudflare (OpenNext) build and deployment instructions.

## Internal Docs

- [docs/product-loading-logic.md](docs/product-loading-logic.md): current product loading, spec registry, and Worker fallback flow
- [docs/blueprint.md](docs/blueprint.md): high-level product and site blueprint

## Codex Blog Post Generator Skill

The repository skill lives in `.agents/skills/blog-post-generator/`, alongside the SEO skills.
Codex discovers it for this project; no personal skill installation is needed. If it is not yet
listed in an existing session, reload the session to refresh skill discovery.

Verify the repository files and skill metadata after `npm install`:

```bash
npm run blog:skill:check
```

Start with `$blog-post-generator` or a clear request to create or edit a Kermit Floor blog
article. Supply the topic and any editorial points, keywords, author, references, or assets you
already have. The skill reuses those details and asks only about material missing decisions.

New articles produce a file for each supported language with verified claims and valid frontmatter. Small edits
preserve unrelated content and maintain relevant locale consistency. Drafts default to `draft`
and the registry's default author; media is selected for its explanatory value. The result is
saved and validated locally for review. Publication follows the repository's authorization
and SEO shipping rules.

See [docs/blog-authoring.md](docs/blog-authoring.md) for format and publishing requirements.
