import { Heading } from "fugazy-coding-site";

const frame = "bg-[var(--color-paper)] p-8";

export function Level1() {
  return (
    <div className={frame}>
      <Heading level={1}>Build better with BIM</Heading>
    </div>
  );
}

export function Level2() {
  return (
    <div className={frame}>
      <Heading level={2}>Plugins, pipelines, and 3D tooling</Heading>
    </div>
  );
}

export function Level3() {
  return (
    <div className={frame}>
      <Heading level={3}>High-LOD modeling for AEC teams</Heading>
    </div>
  );
}

export function Scale() {
  return (
    <div className={`${frame} flex flex-col gap-4`}>
      <Heading level={1}>Display</Heading>
      <Heading level={2}>Section title</Heading>
      <Heading level={3}>Subsection</Heading>
    </div>
  );
}
