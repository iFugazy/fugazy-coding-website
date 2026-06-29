import { Container } from "fugazy-coding-site";

export function Default() {
  return (
    <div className="bg-[var(--color-paper)] py-8">
      <Container className="border border-dashed border-[var(--color-rule)] py-8">
        <div className="text-sm text-[var(--color-muted)]">
          Centered content with a max width of 72rem and responsive gutters.
          Container wraps page sections so content never runs edge-to-edge on
          wide displays.
        </div>
      </Container>
    </div>
  );
}
