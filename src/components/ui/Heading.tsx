import { ReactNode } from "react";

type Level = 1 | 2 | 3;

const sizes: Record<Level, string> = {
  1: "text-4xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[1.02]",
  2: "text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05]",
  3: "text-xl md:text-2xl tracking-[-0.01em] leading-[1.15]",
};

export function Heading({
  level = 2,
  children,
  className = "",
}: {
  level?: Level;
  children: ReactNode;
  className?: string;
}) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`font-sans font-medium ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}
