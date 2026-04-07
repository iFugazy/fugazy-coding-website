import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Quest Windows — Revit plugin suite" };

const meta = [
  { k: "Client", v: "Quest Windows" },
  { k: "Sector", v: "Window manufacturing" },
  { k: "Engagement", v: "Multi-year, ongoing" },
  { k: "Stack", v: "Revit API · C# / .NET · WPF" },
];

const tags = [
  "Revit API",
  "C# / .NET",
  "WPF",
  "Parametric families",
  "Shop drawings",
];

const builtItems = [
  "Parametric family generator with manufacturer-accurate profiles",
  "Two-way schedule sync with model parameters",
  "Shop-drawing export to PDF and DWG, branded to spec",
  "Update channel for in-house deployment across the team",
];

export default function QuestWindowsCaseStudy() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <Link href="/work" className="hover:text-[var(--color-ink)]">
              Selected Work
            </Link>{" "}
            / Quest Windows · 001
          </div>
          <h1 className="mt-10 max-w-[20ch] font-sans text-[40px] font-medium leading-[0.98] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            A Revit plugin suite for a{" "}
            <span className="text-[var(--color-accent)]">window manufacturer.</span>
          </h1>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            {/* PLACEHOLDER */}
            Quest Windows came to us with a familiar problem: their design team
            was rebuilding the same window families by hand on every project,
            schedules drifted out of sync with geometry, and shop drawings took
            days to assemble. We built them a Revit add-in suite that lives on
            the ribbon and handles all of it in one place.
          </p>
        </Container>
      </section>

      {/* META STRIP */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-16">
          <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {m.k}
                </dt>
                <dd className="mt-3 text-[15px]">{m.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* HERO IMAGE — full bleed-ish */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 md:py-28">
          <div className="aspect-[16/9] w-full border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
            <div className="flex h-full items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              [ hero screenshot of plugin in Revit — placeholder ]
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                The problem
              </div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-2xl leading-[1.3] tracking-[-0.01em] md:text-3xl">
                {/* PLACEHOLDER */}
                Every Quest Windows project started with hours of manual family
                setup. Designers were copying parameters between projects, and
                changes to a single window type rarely propagated cleanly to
                schedules or shop drawings.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">
                {/* PLACEHOLDER */}
                Their existing tools were a folder of one-off Dynamo graphs and
                an Excel sheet that nobody trusted.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE BUILT */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                What we built
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-2xl leading-[1.3] tracking-[-0.01em] md:text-3xl">
                {/* PLACEHOLDER */}
                A C# / .NET add-in that surfaces three tools on the Revit
                ribbon: a parametric family generator, a schedule synchronizer,
                and a shop-drawing exporter — all reading from one shared
                source of truth.
              </p>
              <ul className="mt-12">
                {builtItems.map((b, i) => (
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
          </div>
        </Container>
      </section>

      {/* OUTCOME */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Outcome
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-2xl leading-[1.3] tracking-[-0.01em] md:text-3xl">
                {/* PLACEHOLDER — replace with real numbers */}
                The plugin suite is now part of the standard Quest Windows
                Revit setup. Family setup time on new projects dropped from a
                day to minutes, and shop drawings come out of the same model
                the designers are working in — no separate exports, no parallel
                spreadsheet.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Next
              </div>
              <h2 className="mt-6 max-w-[18ch] font-sans text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Need something similar inside Revit?
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
