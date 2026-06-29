import { Container } from "@/components/ui/Container";

export const metadata = { title: "Services" };

const services = [
  {
    id: "bim",
    n: "01",
    title: "BIM software development",
    blurb:
      "We write the plugins, services, and pipelines your design team keeps asking IT for. Whether the model lives in Revit, Navisworks, Rhino + Grasshopper, ArchiCAD, or the browser — we ship where the work happens.",
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
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-6xl">
              Software, modeling, and applied AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
              Three practices, one studio — each drawing on the others when a
              project needs it.
            </p>
          </div>
        </Container>
      </section>

      {/* PRACTICES */}
      <section>
        <Container>
          {services.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="border-b border-[var(--color-rule)] py-16 md:py-20"
            >
              <div className="font-mono text-[12px] text-[var(--color-accent)]">
                {s.n}
              </div>
              <h2 className="mt-3 font-sans text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                {s.title}
              </h2>

              <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-7">
                  <p className="text-lg leading-relaxed text-[var(--color-muted)]">
                    {s.blurb}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-px text-[var(--color-muted)]">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 md:col-start-9">
                  <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    Stack
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">
                    {s.tags.join("  ·  ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
