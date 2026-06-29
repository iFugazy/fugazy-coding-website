// design-sync shim: Next.js is unavailable in the design bundle, so `next/link`
// is aliased here (via cfg.tsconfig paths) to a plain anchor. Button is the only
// scoped primitive that imports it.
import { ReactNode } from "react";

export default function Link({
  href,
  children,
  ...rest
}: {
  href?: string | { pathname?: string };
  children?: ReactNode;
  [key: string]: unknown;
}) {
  const url = typeof href === "string" ? href : href?.pathname ?? "#";
  return (
    <a href={url} {...rest}>
      {children}
    </a>
  );
}
