import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  bleed = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  bleed?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
