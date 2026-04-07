import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/Container";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-[var(--color-rule)]">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link href="/" aria-label="Fugazy Coding — home" className="block">
            <Image
              src="/logo.svg"
              alt="Fugazy Coding"
              width={170}
              height={35}
              priority
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
