// design-sync bundle entry — the 7 scoped UI primitives, re-exported so esbuild
// produces a single IIFE at window.FugazyDS. (The repo is a Next.js app with no
// library dist/, so this barrel stands in for one.)
export { Button } from "../src/components/ui/Button";
export { Card } from "../src/components/ui/Card";
export { Container } from "../src/components/ui/Container";
export { Section } from "../src/components/ui/Section";
export { Heading } from "../src/components/ui/Heading";
export { Eyebrow } from "../src/components/ui/Eyebrow";
export { Tag } from "../src/components/ui/Tag";
