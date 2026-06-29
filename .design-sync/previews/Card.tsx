import { Card, Eyebrow, Heading, Tag } from "fugazy-coding-site";

const frame = "bg-[var(--color-paper)] p-8";

export function ServiceCard() {
  return (
    <div className={frame}>
      <Card className="max-w-md">
        <Eyebrow>Service</Eyebrow>
        <div className="mt-4">
          <Heading level={3}>Revit add-ins &amp; IFC pipelines</Heading>
        </div>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Custom plugins and data pipelines that move models cleanly between
          Revit, IFC, and your downstream tooling.
        </p>
      </Card>
    </div>
  );
}

export function WithTags() {
  return (
    <div className={frame}>
      <Card className="max-w-md">
        <Heading level={3}>Quest Windows configurator</Heading>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          A browser-based 3D product configurator with live pricing, built on a
          high-LOD parametric model.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Tag>Three.js</Tag>
          <Tag>WebGL</Tag>
          <Tag>BIM</Tag>
        </div>
      </Card>
    </div>
  );
}
