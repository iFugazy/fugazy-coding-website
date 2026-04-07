import { Container } from "@/components/ui/Container";

export const metadata = { title: "Services" };

const services = [
  {
    id: "bim",
    n: "01",
    title: "BIM software development",
    blurb:
      "We write the plugins, services, and pipelines your design team keeps asking IT for. Most of our work lives inside Revit, but we ship for Navisworks, Rhino + Grasshopper, ArchiCAD, and the browser as well.",
    bullets: [
      "Revit add-ins (C# / .NET, WPF panels, Revit API 2022–2026)",
      "Forge / APS services and viewers",
      "IFC pipelines, validators, and converters",
      "Speckle integrations and custom connectors",
      "Internal tooling for BIM managers — schedules, audits, family libraries",
    ],
    tags: ["Revit API", "C#", "WPF", "IFC4 / IFC4x3", "Forge / APS", "Speckle", "Postgres"],
  },
  {
    id: "modeling",
    n: "02",
    title: "High-LOD 3D modeling",
    blurb:
      "Our in-house modeling team produces detail-accurate assets for AEC, manufacturing, and product visualization. We work to whatever LOD your downstream pipeline needs and we deliver in the format your team actually opens.",
    bullets: [
      "LOD 350–500 BIM families and assemblies",
      "Facade, MEP, and structural detailing",
      "Product and manufacturing visualization",
      "Conversion between RVT, IFC, FBX, GLB, and USD",
      "Optimization for web (Draco, Meshopt) without losing fidelity",
    ],
    tags: ["Revit", "Rhino", "Blender", "3ds Max", "Substance", "USD"],
  },
  {
    id: "ai",
    n: "03",
    title: "Applied AI for BIM and 3D",
    blurb:
      "We bolt AI onto BIM workflows where it pays for itself in the first month. Less generative theatrics, more retrieval, classification, and extraction against the messy data your firm already has.",
    bullets: [
      "Family and asset search with embeddings",
      "Drawing and spec extraction (vision + LLM)",
      "Generative layout aids inside Revit and Rhino",
      "Retrieval over project archives, RFIs, and submittals",
      "Self-hosted and API-backed deployments",
    ],
    tags: ["LLMs", "RAG", "CV", "Vector DBs", "Python", "TypeScript"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Services
          </div>
          <h1 className="mt-10 max-w-[16ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            Three practices.
            <br />
            <span className="text-[var(--color-accent)]">One team.</span>
          </h1>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Software, modeling, and applied AI — built and shared inside one
            studio so each practice draws on the others when a project needs
            it.
          </p>
        </Container>
      </section>

      {/* PRACTICES */}
      <section>
        <Container>
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="border-b border-[var(--color-rule)] py-20 md:py-32"
            >
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {s.n}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-sans text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-7xl">
                    {s.title}
                  </h2>
                </div>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-2 md:col-start-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Overview
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-[var(--color-muted)] md:col-span-7">
                  {s.blurb}
                </p>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-2 md:col-start-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    What we ship
                  </div>
                </div>
                <ul className="md:col-span-7">
                  {s.bullets.map((b, i) => (
                    <li
                      key={b}
                      className="flex gap-6 border-b border-[var(--color-rule)] py-5 text-[15px] md:text-base"
                    >
                      <span className="font-mono text-[11px] text-[var(--color-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-2 md:col-start-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Stack
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-wrap gap-x-5 gap-y-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
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
    </>
  );
}
