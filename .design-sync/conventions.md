# Fugazy Coding design system

A small, **dark-themed** set of primitives for the Fugazy Coding site (BIM
software, 3D modeling, applied AI for AEC). Seven components: `Button`, `Card`,
`Container`, `Section`, `Heading`, `Eyebrow`, `Tag`. The look is near-black cool
greys with one orange brand accent and a sans/mono type pairing.

## Setup — put designs on the dark canvas

There is **no provider to wrap**; components render standalone. The one thing
that matters: this DS is built for a **dark page**. `styles.css` sets
`html, body { background: var(--color-paper); color: var(--color-ink) }`, so a
full-page design is correct by default. If you render components inside a
lighter container, set that container's background to `var(--color-paper)` (or
`--color-paper-2` for a raised surface) yourself — the light-on-dark text and
the outlined `Button`/`Tag` variants disappear on a white background.

Fonts (Inter Tight for sans, JetBrains Mono for mono) load via a remote
`@import` in `styles.css` — no extra setup.

## Styling idiom — tokens via `var()`, not utility class names

The design language lives in **CSS custom-property tokens** defined in
`styles.css`. These are the stable vocabulary — reference them with `var(--…)`
(inline `style`, or your own CSS):

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#18181b` | page background |
| `--color-paper-2` | `#232328` | cards / raised surfaces (one step up) |
| `--color-rule` | `#34343a` | hairline borders / dividers |
| `--color-ink` | `#f3f3f5` | primary text |
| `--color-muted` | `#8c8c94` | secondary / muted text |
| `--color-accent` | `#ff5a00` | Fugazy orange — accents, hovers, emphasis |
| `--font-sans` | Inter Tight | headings + body |
| `--font-mono` | JetBrains Mono | eyebrows, tags, labels, buttons |

The components are Tailwind-built, but **only the utility classes they already
use ship in the CSS** — do **not** assume names like `bg-paper` or `text-ink`
resolve in your own markup. For layout glue, use plain inline styles / CSS that
reference the tokens above. Mono, uppercase, wide letter-spacing is the house
style for small labels (see `Eyebrow`, `Tag`, `Button`).

## Where the truth lives

- `styles.css` (and its `@import "./_ds_bundle.css"`) — the compiled tokens and
  component styles. Read it before styling.
- `components/<group>/<Name>/<Name>.d.ts` — the prop contract per component.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage notes.

`Heading` takes `level={1|2|3}` (element + type scale). `Button` needs an `href`
and renders an anchor, with `variant="primary" | "ghost"`. `Section` provides
vertical rhythm and centers content in a `Container`; pass `bleed` for
full-width. `Card` is a bordered `--color-paper-2` surface.

## Idiomatic example

```jsx
<div style={{ background: "var(--color-paper)", minHeight: "100vh" }}>
  <Section>
    <Eyebrow>Capabilities</Eyebrow>
    <Heading level={1}>Build better with BIM</Heading>
    <p style={{ marginTop: 16, maxWidth: "36rem", color: "var(--color-muted)" }}>
      Plugins, pipelines, and high-LOD 3D tooling for AEC teams.
    </p>
    <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
      <Button href="/contact">Start a project</Button>
      <Button href="/work" variant="ghost">View our work</Button>
    </div>
  </Section>
</div>
```
