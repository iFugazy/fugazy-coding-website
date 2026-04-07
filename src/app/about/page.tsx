import { Container } from "@/components/ui/Container";

export const metadata = { title: "About" };

const sections = [
  {
    n: "01",
    label: "Who we are",
    body: [
      "Fugazy Coding is a software studio focused on the BIM industry. We build plugins, model the geometry that goes into them, and fold AI into the parts of the workflow where it actually pays off.",
      "We\u2019re small on purpose. Every project is touched by people who\u2019ve shipped Revit add-ins, opened IFC files in anger, and argued about LOD definitions over coffee.",
    ],
  },
  {
    n: "02",
    label: "How we work",
    body: [
      "Most engagements start with a short discovery \u2014 usually a call and a screen-share of the workflow you want to fix. From there we scope a first deliverable that we can put in front of your team within a few weeks, and iterate from real use.",
      "We\u2019re happy to work as the only software vendor on a project, or alongside an existing in-house team.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            About
          </div>
          <h1 className="mt-10 max-w-[16ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            A small studio
            <br />
            for the{" "}
            <span className="text-[var(--color-accent)]">BIM industry.</span>
          </h1>
        </Container>
      </section>

      {/* SECTIONS */}
      <section>
        <Container>
          {sections.map((s) => (
            <article
              key={s.n}
              className="border-b border-[var(--color-rule)] py-20 md:py-32"
            >
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {s.n}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h2 className="font-sans text-2xl font-medium leading-[1.1] tracking-[-0.01em] md:text-3xl">
                    {s.label}
                  </h2>
                </div>
                <div className="md:col-span-7 space-y-6 text-2xl leading-[1.3] tracking-[-0.01em] md:text-3xl">
                  {s.body.map((p, i) => (
                    <p key={i} className={i === 0 ? "" : "text-[var(--color-muted)]"}>
                      {p}
                    </p>
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
