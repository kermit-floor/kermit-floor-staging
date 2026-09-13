# Media Workflow

Read when adding or changing images or videos. Preserve existing media for unrelated edits.

## Select useful media

Choose visuals for a specific explanatory purpose: context, a process step, a material detail,
or a comparison. The article may need no new inline images. There is no count tied to word
length; the required cover image is defined in `schema.md`.

Use supplied assets and suitable repository media first. Inputs may include a repo path,
what the asset shows, a locale (`en`, `tr`, or both), and a preferred section. Use those details
from the brief without requiring a separate structured intake. When additional images are
needed, research candidates matching the section's purpose.

Keep raw external image source URLs in an internal trace file such as
`.codex/blog-media-sources/<topicId>.json`, mapped to the selected local files and placements.
Keep these provenance URLs separate from article research in frontmatter/body.

## Save and place images

Store new blog images under `public/images/blog/<topicId>/`, using deterministic filenames
such as `en-section-01.webp`. Preserve supplied repo paths unless conversion or optimization
is needed. Confirm the referenced file exists.

Files under `public/` use app paths without that prefix in MDX:

```md
![Localized description of the relevant detail](/images/blog/<topicId>/en-section-01.webp)
```

Place each image near the explanation it supports and use descriptive locale-specific alt
text. Reuse a shared visual across EN/TR when appropriate.

## Place supplied videos

Verify the file exists and place it near the section described by the user. The renderer
interprets video file image syntax as an HTML5 player:

```md
![Localized description of the demonstration](/videos/blog/installation-demo.mp4)
```

Use the app path for files under `public/`; a filesystem path such as `public/videos/...`
does not belong in the article URL.

## Make the result reviewable

Complete the local draft and validation, then show the media paths, placements, and previews
where available, including the trace file when external images were used. Ask for a media
decision only if one remains material to completion or the owner requested a checkpoint.
Publication follows the repository delivery rules in `AGENTS.md`; local draft preparation
does not create a separate approval gate.
