import { Eyebrow, Heading, Section } from "fugazy-coding-site";

export function Default() {
  return (
    <div className="bg-[var(--color-paper)]">
      <Section>
        <Eyebrow>Capabilities</Eyebrow>
        <div className="mt-4 max-w-2xl">
          <Heading level={2}>Software, modeling, and applied AI for BIM</Heading>
        </div>
        <p className="mt-4 max-w-xl text-[var(--color-muted)]">
          We build the tooling AEC teams reach for every day — from Revit
          automation to high-LOD 3D modeling and AI workflows.
        </p>
      </Section>
    </div>
  );
}
