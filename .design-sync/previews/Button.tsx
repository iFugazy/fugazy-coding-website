import { Button } from "fugazy-coding-site";

// These components are built for the dark "paper" page; frame each card on it
// so the card chrome's white background doesn't swallow light-on-dark content.
const frame = "bg-[var(--color-paper)] p-8";

export function Primary() {
  return (
    <div className={frame}>
      <Button href="/contact">Start a project</Button>
    </div>
  );
}

export function Ghost() {
  return (
    <div className={frame}>
      <Button href="/work" variant="ghost">
        View our work
      </Button>
    </div>
  );
}

export function Pair() {
  return (
    <div className={`${frame} flex flex-wrap items-center gap-4`}>
      <Button href="/contact">Get in touch</Button>
      <Button href="/capabilities" variant="ghost">
        Capabilities
      </Button>
    </div>
  );
}
