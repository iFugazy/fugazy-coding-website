# design-sync notes — fugazy-coding-site

This repo is a **Next.js App-Router site**, not a packaged component library, so
the sync runs "off the happy path." Read this before re-syncing.

## How this sync is wired

- **Scope:** only the 7 reusable primitives in `src/components/ui/`
  (Button, Card, Container, Section, Heading, Eyebrow, Tag). Pages, `Nav`,
  `Footer`, and `three/ModelViewer` are intentionally excluded.
- **No dist / no Storybook.** There is no library build. We feed the converter
  an explicit **barrel entry** `.design-sync/entry.ts` (re-exports the 7) via
  `--entry`, and pin the components with `componentSrcMap`.
  - `--entry` is **required**: without it PKG_DIR resolves to the non-existent
    `node_modules/fugazy-coding-site` and the build crashes in `dts.mjs`.
- **Props** are hand-written in `cfg.dtsPropsFor` (synth mode has no `.d.ts` to
  extract from). Keep them in sync with the component source if props change.
- **`next/link` shim** (`.design-sync/shims/next-link.tsx`): Button imports
  `next/link`. It's aliased to a plain `<a>` via `cfg.tsconfig`
  (`.design-sync/tsconfig.build.json` paths). **If the shim stops resolving the
  real `next/link` gets inlined** — bundle balloons from ~4 KB to ~137 KB,
  pulls in `next` + `@swc/helpers`, and every preview throws
  `ReferenceError: process is not defined` at eval (so `[BUNDLE_EXPORT] not a
  component` + all renders empty). Check `inlinedExternals` in the bundle header
  is `[]`.
  - **Do NOT add a `"//"` comment key to `tsconfig.build.json`.** The converter's
    comment-stripping regex mangles `"//": "..."` and the whole tsconfig fails to
    parse, silently disabling the paths plugin → the shim doesn't apply. (This
    cost a debug cycle.)

## CSS / fonts

- Styling is **Tailwind v4 utility classes + CSS custom-property tokens**. The
  converter can't compile Tailwind, so we compile it ourselves into
  `.design-sync/compiled-styles.css` (fed via `cfg.cssEntry`). Input:
  `.design-sync/tailwind-input.css` (mirrors `src/app/globals.css` `@theme` plus
  the font wiring).
- **Recompile CSS before every build** (it's not automatic):
  ```sh
  .ds-sync/node_modules/.bin/tailwindcss -i .design-sync/tailwind-input.css -o .design-sync/compiled-styles.css
  ```
  Tailwind `@source` scans `src/components/ui` and `.design-sync/previews`, so
  any class used in a preview must be present at compile time — recompile after
  editing previews.
- Fonts (Inter Tight, JetBrains Mono) load via a **remote Google Fonts
  `@import`** in the compiled CSS → `[FONT_REMOTE]` (expected, non-blocking).

## Previews

- The DS is **dark-themed**; the preview card chrome forces a white `body`
  background, which swallows light-on-dark text and outlined variants. Every
  authored preview in `.design-sync/previews/` wraps content in a
  `bg-[var(--color-paper)]` frame so cards are self-contained. Keep that wrapper
  when editing previews.
- `Container` and `Section` are full-width → `cfg.overrides.*.cardMode:
  "column"`.

## Known render warns

- None. Validate exits clean (`✓ bundle is complete`), 7/7 render, all cells
  graded `good`.

## Re-sync risks (watch-list)

- **Tokens are duplicated** between `src/app/globals.css` (`@theme`) and
  `.design-sync/tailwind-input.css`. If the palette/fonts change in globals.css,
  mirror the change into `tailwind-input.css` or the bundle drifts from the site.
- **Adding/removing a UI primitive** means editing THREE places:
  `.design-sync/entry.ts`, `cfg.componentSrcMap`, and `cfg.dtsPropsFor`.
- **Remote font dependency:** designs render in a fallback font if the Google
  Fonts host is unreachable at render time. To harden, self-host woff2s via
  `cfg.extraFonts`.
- **Manual CSS compile** is a required pre-step (above) — easy to forget; the
  resync command block below includes it.
- Props in `cfg.dtsPropsFor` are hand-maintained and can silently lag the source
  component signatures.

## Re-sync command

```sh
# from repo root, after re-copying staged scripts (.ds-sync) per the skill
.ds-sync/node_modules/.bin/tailwindcss -i .design-sync/tailwind-input.css -o .design-sync/compiled-styles.css
node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules \
  --entry .design-sync/entry.ts --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json
```
