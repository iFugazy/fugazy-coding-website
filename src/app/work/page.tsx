import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Selected Work" };

const work = [
  {
    slug: "quest-windows",
    n: "001",
    client: "Quest Windows",
    title: "A Revit plugin suite for a window manufacturer.",
    blurb:
      "Parametric family generation, schedule sync, and shop-drawing output — built directly into the Revit ribbon the design team already uses every day.",
    tags: ["Revit API", "C# / .NET", "WPF"],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Selected Work
          </div>
          <h1 className="mt-10 max-w-[16ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            A short list of
            <br />
            <span className="text-[var(--color-accent)]">things we&rsquo;ve shipped.</span>
          </h1>
          <p className="mt-12 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            We&rsquo;d rather show one project in real depth than fifteen logos
            with no story attached. More case studies will land here as
            engagements wrap and clients give us the green light to talk about
            them.
          </p>
        </Container>
      </section>

      {/* WORK LIST — one editorial spread per case */}
      <section>
        <Container>
          {work.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group block border-b border-[var(--color-rule)] py-20 md:py-32"
            >
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-2">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {w.n}
                  </div>
                </div>
                <div className="md:col-span-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {w.client}
                  </div>
                  <h2 className="mt-6 max-w-[18ch] font-sans text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-7xl">
                    {w.title}
                  </h2>
                </div>
              </div>

              <div className="mt-16 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-7 md:col-start-3">
                  <div className="aspect-[16/10] w-full border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
                    <div className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      [ {w.client} screenshot — placeholder ]
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end md:col-span-3">
                  <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {w.blurb}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink)] underline underline-offset-4 group-hover:text-[var(--color-accent)]">
                    Read the case study <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
