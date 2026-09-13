# Agent Rules for This Repo

## Read when relevant

- Deployment preparation: `DEPLOY.md`.
- Blog creation or editing: `docs/blog-authoring.md` and
  `.agents/skills/blog-post-generator/SKILL.md`.
- Product loading or technical specifications: `docs/product-loading-logic.md`.
- SEO data access, measurement, or shipping: `docs/seo/README.md`.

## SEO growth loop

Use `.agents/skills/seo-general-review/SKILL.md` for periodic reviews or explicit experiment
verdicts, and `.agents/skills/seo-investigate/SKILL.md` for a specific analytics question.
Follow the selected workflow's order for reading experiment history and selecting baselines.
A requested review includes its same-day local record unless the owner explicitly requests
a read-only review.

Before shipping any change that could affect search/AI visibility or lead measurement, check
experiment interference per `docs/seo/README.md`. At ship time, add a `docs/seo/logbook.md`
entry with the hypothesis, primary metric and relevant baseline, and review-due date.

## Delivery boundaries

Complete requested local work and appropriate validation before presenting it for approval.
Commit and push only when the owner has authorized those actions for the current change set.
Reuse authorization already given; ask again if the scope, destination, or intended effect
materially changes. Shipping includes production verification and any required SEO record.
