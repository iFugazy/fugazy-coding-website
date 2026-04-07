import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const services = [
  {
    n: "01",
    title: "BIM software",
    line: "Revit add-ins, Forge / APS services, IFC pipelines, Navisworks tooling — written by people who actually use these platforms.",
    tags: ["Revit API", "C# / .NET", "IFC", "Forge / APS", "Speckle"],
  },
  {
    n: "02",
    title: "High-LOD modeling",
    line: "An in-house team that delivers detail-accurate geometry — facades, MEP, custom families, product visualization — in the formats your pipeline expects.",
    tags: ["LOD 350–500", "RVT", "IFC", "GLB", "USD"],
  },
  {
    n: "03",
    title: "Applied AI",
    line: "Practical AI inside the model. Family search and tagging, drawing extraction, retrieval over project archives. Less demo, more deliverable.",
    tags: ["LLMs", "RAG", "CV", "Vector search"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — typographic, owns the first viewport */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Fugazy Coding · Software for the BIM industry
          </div>
          <h1 className="mt-10 max-w-[14ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[88px] lg:text-[112px]">
            Tools the
            <br />
            <span className="text-[var(--color-accent)]">BIM workflow</span>
            <br />
            forgot.
          </h1>

          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <p className="text-lg leading-relaxed text-[var(--color-muted)] md:col-span-5 md:col-start-1">
              We&rsquo;re a small studio that builds plugins, models geometry,
              and folds AI into the parts of the workflow where it pays off.
              Inside Revit, in Rhino, in the browser — wherever the model
              lives.
            </p>
            <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:col-start-8 md:justify-end">
              <Button href="/work">See selected work</Button>
              <Button href="/contact" variant="ghost">
                Start a project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO — editorial rows, not cards */}
      <section>
        <Container>
          <div className="border-b border-[var(--color-rule)] py-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              What we do
            </div>
          </div>
          {services.map((s) => (
            <article
              key={s.n}
              className="grid gap-8 border-b border-[var(--color-rule)] py-16 md:grid-cols-12 md:gap-10 md:py-24"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {s.n}
                </div>
              </div>
              <div className="md:col-span-6">
                <h2 className="font-sans text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-4">
                <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {s.line}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      {/* SELECTED WORK — single editorial spread */}
      <section>
        <Container>
          <div className="py-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Selected work · 001
            </div>
          </div>
          <Link href="/work/quest-windows" className="group block">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="aspect-[4/3] w-full border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
                  <div className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    [ quest windows screenshot — placeholder ]
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end md:col-span-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Quest Windows
                </div>
                <h2 className="mt-6 font-sans text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                  A Revit plugin suite for a window manufacturer.
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  Parametric family generation, schedule sync, and shop-drawing
                  output — built directly into the Revit ribbon the design
                  team already uses every day.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 group-hover:text-[var(--color-accent)]">
                  Read the case study <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* CONTACT STRIP */}
      <section className="mt-32 border-t border-[var(--color-rule)]">
        <Container>
          <div className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Get in touch
              </div>
              <h2 className="mt-6 max-w-[18ch] font-sans text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Have a Revit problem nobody else wants to touch?
              </h2>
            </div>
            <div className="flex md:col-span-5 md:items-end md:justify-end">
              <Button href="/contact">Tell us about it</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
