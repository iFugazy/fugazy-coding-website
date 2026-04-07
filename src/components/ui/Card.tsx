import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
