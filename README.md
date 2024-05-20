# Astro

This directory is a brief example of an [Astro](https://astro.build/) site that can be deployed to Vercel with zero configuration. This demo showcases:

- `/` - A static page (pre-rendered)
- `/ssr` - A page that uses server-side rendering (through [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions))
- `/ssr-with-swr-caching` - Similar to the previous page, but also caches the response on the [Vercel Edge Network](https://vercel.com/docs/edge-network/overview) using `cache-control` headers
- `/image` - Astro [Asset](https://docs.astro.build/en/guides/assets/) using Vercel [Image Optimization](https://vercel.com/docs/image-optimization)
- `/edge.json` - An Astro API Endpoint that returns JSON data using [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)

Learn more about [Astro on Vercel](https://vercel.com/docs/frameworks/astro).

## Deploy Your Own

Deploy your own Astro project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/astro&template=astro)

_Live Example: https://astro-template.vercel.app_

## Project Structure

Astro looks for `.astro`, `.md`, or `.js` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run start`       | Starts a production dev server at  `localhost:3000`     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

```
presence
├─ .astro
│  └─ types.d.ts
├─ .git
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-79f872e0ee84a28571739569e35b3e90819901a6.idx
│  │     └─ pack-79f872e0ee84a28571739569e35b3e90819901a6.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ README.md
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ COLLINS_MEDIUM_00.gif
│  ├─ COLLINS_MEDIUM_19.jpg
│  ├─ JHA_Times_Now_SemiBold.otf
│  ├─ JHA_Times_Now_SemiBold_Italic.otf
│  ├─ JHA_Times_Now_SemiLight.otf
│  ├─ JHA_Times_Now_SemiLight_Italic.otf
│  ├─ favicon.ico
│  ├─ medium-10.jpg
│  └─ work
│     ├─ bonside-1.png
│     ├─ bonside-2.jpg
│     ├─ bonside-3.png
│     ├─ lockchain-1.png
│     ├─ lockchain-2.jpg
│     ├─ lockchain-3.png
│     ├─ lore-1.png
│     ├─ lore-2.png
│     ├─ lore-3.png
│     ├─ lore-4.png
│     ├─ nation-1.png
│     ├─ optimism-1.png
│     ├─ optimism-2.png
│     ├─ optimism-3.png
│     ├─ optimism-4.png
│     ├─ optimism-5.png
│     ├─ optimism-6.png
│     ├─ scope3-1.png
│     ├─ scope3-2.png
│     ├─ scope3-3.png
│     ├─ vellum-1.jpg
│     ├─ vellum-1.png
│     ├─ vellum-2.png
│     └─ vellum-3.png
├─ src
│  ├─ assets
│  │  └─ logo.png
│  ├─ components
│  │  ├─ FormattedDate.astro
│  │  ├─ Nav.astro
│  │  ├─ Prose.astro
│  │  ├─ Redaction.astro
│  │  ├─ WorkImage.astro
│  │  ├─ WorkListing.astro
│  │  └─ WorkVimeo.astro
│  ├─ content
│  │  ├─ config.ts
│  │  └─ posts
│  │     └─ 2023-12-31.mdx
│  ├─ env.d.ts
│  ├─ layouts
│  │  ├─ Base.astro
│  │  ├─ Layout.astro
│  │  └─ MarkdownPostLayout.astro
│  ├─ lib
│  │  └─ vitals.js
│  └─ pages
│     ├─ design.astro
│     ├─ index.astro
│     ├─ posts
│     │  └─ [...slug].astro
│     └─ writing.astro
├─ tailwind.config.js
└─ tsconfig.json

```