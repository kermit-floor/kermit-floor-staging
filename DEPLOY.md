# Deployment — Romania

## Branch and permanent worktrees

| Edition | Branch | Permanent checkout | Worker | Domains |
| --- | --- | --- | --- | --- |
| International | `main` | `/home/barbaros/projects/kermit-floor-staging` | `kermit-floor-staging` | `kermitfloor.com` |
| Romania | `romania` | `/home/barbaros/projects/kermit-floor-ro` | `kermit-floor-ro` | `kermitfloor.ro`, `www.kermitfloor.ro` |

Work on each edition in its own checkout. Push Romania changes with `git push origin romania`.
Shared fixes should be cherry-picked and reviewed in the receiving branch. Do not merge
Romania's deployment, language or contact configuration wholesale into `main`.
The Romania deployment guard verifies the branch, Worker/self-binding and domain targets.

Romanian pages use `/`; English pages use `/en`. The apex domain is canonical and
`www` redirects to it. Analytics uses the dedicated `G-9FMGLPBL5C` stream (property
`555914779`, Europe/Bucharest, RON); the international Analytics property is separate.

## Cloudflare Workers

This app is configured to build and deploy to Cloudflare using [OpenNext Cloudflare](https://opennext.js.org/cloudflare).

### Build

```bash
npx @opennextjs/cloudflare build
```

This runs the Next.js build and produces output in `.open-next/` (Worker + assets).

### Deploy

```bash
npm run cf:deploy
```

### NPM Scripts

- `npm run preview` builds and runs locally in the Cloudflare Workers runtime.
- `npm run deploy` builds and deploys to Cloudflare in one command.
- `npm run cf:build` builds the OpenNext worker/assets bundle for CI or Workers Builds.
- `npm run cf:deploy` deploys an already-built OpenNext bundle.

### Workers Builds Settings

If you are using Cloudflare Workers Builds with a connected Git repository, use:

- Worker: `kermit-floor-ro`
- Production branch: `romania`
- Preview branch builds: disabled
- Root directory: `/`
- Build command: `npm run cf:build`
- Deploy command: `npm run cf:deploy`

The Worker name in `wrangler.jsonc` must match the Cloudflare Workers Builds project name. The `WORKER_SELF_REFERENCE` service binding should point to that same Worker name.

Do not use `npm run build` followed by `npx wrangler deploy` for this app. `wrangler deploy` reads `wrangler.jsonc`, which points `main` at `.open-next/worker.js`. That file is produced by the OpenNext build step, not by `next build` alone.

### Building on Windows

OpenNext may hit permission or spawn errors on Windows. Prefer **WSL** or **Cloudflare's CI** (for example, a connected Cloudflare Workers Build) for reliable builds. To use Cloudflare bindings during `next dev`, add `initOpenNextCloudflareForDev()` from `@opennextjs/cloudflare` to `next.config.ts` (see OpenNext docs).

### Content Updates

Product and resource pages are **statically generated at build time**. Changes to product lists (for example, `public/images/*/products.json`) or to the resources library require a **new build and deploy** to appear on the site. There is no ISR or on-demand revalidation on Cloudflare for this app.

### Large Catalogue Downloads

Cloudflare Workers static assets have a 25 MiB per-file limit. Larger catalogue PDFs must not be committed under `public/`.

The July 2026 SPC flooring catalogues are stored in the `kermit-floor-downloads` R2 bucket and served through the same-origin `/downloads/catalogues/[filename]` route. The Worker receives access through the `CATALOGUE_FILES` binding in `wrangler.jsonc`.

Upload replacement files to these R2 object keys before deploying matching resource metadata:

```bash
npx wrangler r2 object put kermit-floor-downloads/catalogues/kermit-floor-spc-flooring-catalogue-2026-07.pdf --file /path/to/kermit-floor-spc-flooring-catalogue-2026-07.pdf --content-type application/pdf --content-disposition 'inline; filename="kermit-floor-spc-flooring-catalogue-2026-07.pdf"' --cache-control 'public, max-age=31536000, immutable' --remote

npx wrangler r2 object put kermit-floor-downloads/catalogues/kermit-floor-spc-parke-katalog-2026-07.pdf --file /path/to/kermit-floor-spc-parke-katalog-2026-07.pdf --content-type application/pdf --content-disposition 'inline; filename="kermit-floor-spc-parke-katalog-2026-07.pdf"' --cache-control 'public, max-age=31536000, immutable' --remote
```
