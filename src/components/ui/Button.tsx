import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] px-5 py-3 transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)]",
  ghost:
    "border border-[var(--color-rule)] text-[var(--color-ink)] hover:border-[var(--color-ink)]",
};

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
