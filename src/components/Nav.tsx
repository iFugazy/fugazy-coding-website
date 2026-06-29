import Image from "next/image";
import { Container } from "./ui/Container";

// One-page site — nav links scroll to sections on the homepage.
const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[var(--color-paper)]/75 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-5">
          <a href="#top" aria-label="Fugazy Coding — top" className="block">
            <Image
              src="/logo.svg"
              alt="Fugazy Coding"
              width={170}
              height={35}
              priority
            />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
