import { Container } from "@/components/ui/Container";
import { ModelViewer } from "@/components/three/ModelViewer";

export const metadata = { title: "Capabilities" };

// Placeholder gallery items — swap each with a real render or GLB.
const gallery = [
  { n: "01", title: "Curtain wall system", tags: ["LOD 400", "Revit"] },
  { n: "02", title: "MEP riser detail", tags: ["LOD 350", "Revit"] },
  { n: "03", title: "Custom door family", tags: ["Parametric", "Revit"] },
  { n: "04", title: "Facade panel study", tags: ["Rhino", "Grasshopper"] },
  { n: "05", title: "Mechanical assembly", tags: ["LOD 500", "Inventor"] },
  { n: "06", title: "Site context model", tags: ["GIS", "Cesium"] },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Capabilities
          </div>
          <h1 className="mt-10 max-w-[18ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            What we can put
            <br />
            <span className="text-[var(--color-accent)]">in front of you.</span>
          </h1>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Not every project becomes a public case study. This page is the
            honest version — a mix of in-house work, R&amp;D, and pieces from
            engagements that aren&rsquo;t ready to talk about yet.
          </p>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Featured
              </div>
            </div>
            <div className="md:col-span-10">
              <h2 className="max-w-[14ch] font-sans text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-7xl">
                Live in the browser.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7 md:col-start-3">
              <ModelViewer />
            </div>
            <div className="flex flex-col justify-end md:col-span-3">
              <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                We compress and serve high-LOD models straight to a Three.js
                viewer — useful for client review, embedded product
                configurators, and submittal portals.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {["three.js", "R3F", "Draco", "Meshopt"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GALLERY */}
      <section>
        <Container>
          <div className="border-b border-[var(--color-rule)] py-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Gallery
            </div>
          </div>
          {gallery.map((g) => (
            <article
              key={g.n}
              className="grid gap-10 border-b border-[var(--color-rule)] py-12 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {g.n}
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="aspect-[16/10] w-full border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
                  <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    [ render placeholder ]
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end md:col-span-3">
                <h3 className="font-sans text-2xl font-medium leading-[1.1] tracking-[-0.01em] md:text-3xl">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {g.tags.map((t) => (
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
    </>
  );
}
