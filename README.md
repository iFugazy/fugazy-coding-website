# Fugazy Coding — site

Marketing site for Fugazy Coding. Next.js 15 (App Router) + TypeScript + Tailwind v4 + React Three Fiber.

## Run it

```bash
pnpm install        # or npm install / yarn / bun
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
```

Node 20+.

## Structure

```
src/
  app/
    layout.tsx              root layout, fonts, Nav + Footer
    page.tsx                home
    services/page.tsx       services (anchored sections)
    work/page.tsx           selected work index
    work/quest-windows/     flagship case study
    capabilities/page.tsx   gallery + live 3D viewer
    about/page.tsx
    contact/page.tsx
    globals.css             tailwind v4 + theme tokens
  components/
    Nav.tsx / Footer.tsx
    ui/                     hand-rolled primitives — no shadcn, no UI kit
    three/ModelViewer.tsx   placeholder R3F viewer (rotating wireframe)
public/
    (drop logo.svg, og.png, models/*.glb here)
```

## Where to put things

| You have | Drop it at | Then update |
|---|---|---|
| Logo SVG | `public/logo.svg` | `src/components/Nav.tsx` — replace the text mark with `next/image` |
| OG image | `public/og.png` | `src/app/layout.tsx` metadata.openGraph.images |
| A real GLB | `public/models/your.glb` | `src/components/three/ModelViewer.tsx` — swap `PlaceholderBlock` for `useGLTF` (see comment in file) |
| Real Quest Windows screenshots | `public/work/quest-windows/*.png` | `src/app/work/quest-windows/page.tsx` — replace placeholder cards with `<Image>` |
| Real case study copy | — | search for `PLACEHOLDER` in `src/app/work/quest-windows/page.tsx` |

## Design tokens

All colors and fonts live in `src/app/globals.css` under `@theme`. To re-skin the site to match the logo, change `--color-accent` (and optionally `--color-paper` / `--color-ink`) in one place.

Fonts are Inter Tight + JetBrains Mono via `next/font/google`. Swap in `src/app/layout.tsx` if you want a paid foundry face.

## Anti-AI-tell checklist

Before launch, grep the repo and delete any hits:

```
leverage|empower|cutting-edge|seamless|innovative|unleash|unlock|revolutioniz|game-chang|synerg|robust solution|tailored solution
```

Read every page out loud. Anything that could have been written for any other software studio gets cut or rewritten with a specific.

## Deploy

DNS lives on Cloudflare; hosting on Vercel.

1. Push the repo to GitHub.
2. Import to Vercel — it auto-detects Next.js, no build config needed.
3. Add the apex domain in Vercel project settings, copy the records into Cloudflare DNS, set the Cloudflare records to **DNS only** (grey cloud) to avoid double-proxying with Vercel's edge.
4. Vercel handles HTTPS.

## TODO before launch

- [ ] Drop real `logo.svg` into `public/`
- [ ] Replace placeholder block with at least one real GLB
- [ ] Real Quest Windows screenshots + numbers
- [ ] Real "About" copy (in your own voice, not the placeholder)
- [ ] Real contact email + wire up the form (Formspree, Resend, or a Vercel route handler)
- [ ] OG image
- [ ] favicon set
- [ ] sitemap.xml + robots.txt (Next has built-in support — `app/sitemap.ts`)
- [ ] Plausible or Cloudflare Web Analytics snippet
- [ ] Run Lighthouse, target ≥ 95 across the board
