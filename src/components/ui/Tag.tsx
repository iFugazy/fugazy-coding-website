import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-[var(--color-rule)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
      {children}
    </span>
  );
}
