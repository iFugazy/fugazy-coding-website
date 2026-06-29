import { Container } from "@/components/ui/Container";

export const metadata = { title: "About" };

const sections = [
  {
    n: "01",
    label: "The name",
    body: [
      "Fugazy — fugazi — is old slang for something fake. Counterfeit. Artificial. We took it on purpose.",
      "Because the only artificial thing we deal in is intelligence: AI built into real models, doing real work. Fake name, real results.",
    ],
  },
  {
    n: "02",
    label: "Who we are",
    body: [
      "Fugazy Coding is a software studio focused on the BIM industry. We build plugins, model the geometry that goes into them, and fold AI into the parts of the workflow where it actually pays off.",
      "We\u2019re small on purpose. Every project is touched by people who\u2019ve shipped production BIM tooling, opened IFC files in anger, and argued about LOD definitions over coffee.",
    ],
  },
  {
    n: "03",
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
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-6xl">
              A small studio for the BIM industry.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
              We build plugins, model the geometry that goes into them, and fold
              AI into the parts of the workflow where it actually pays off.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTIONS */}
      <section>
        <Container>
          {sections.map((s) => (
            <article
              key={s.n}
              className="border-b border-[var(--color-rule)] py-14 md:py-20"
            >
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="font-mono text-[12px] text-[var(--color-accent)]">
                    {s.n}
                  </div>
                  <h2 className="mt-3 font-sans text-xl font-medium tracking-[-0.01em] md:text-2xl">
                    {s.label}
                  </h2>
                </div>
                <div className="space-y-5 text-lg leading-relaxed md:col-span-7 md:col-start-6">
                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className={i === 0 ? "" : "text-[var(--color-muted)]"}
                    >
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
