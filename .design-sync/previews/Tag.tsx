import { Tag } from "fugazy-coding-site";

const frame = "bg-[var(--color-paper)] p-8";

export function Single() {
  return (
    <div className={frame}>
      <Tag>Revit</Tag>
    </div>
  );
}

export function Group() {
  return (
    <div className={`${frame} flex flex-wrap gap-2`}>
      <Tag>Revit API</Tag>
      <Tag>IFC</Tag>
      <Tag>Three.js</Tag>
      <Tag>Applied AI</Tag>
    </div>
  );
}
