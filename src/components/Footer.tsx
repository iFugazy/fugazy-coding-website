import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-rule)] py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/logo.svg"
              alt="Fugazy Coding"
              width={200}
              height={41}
            />
            <div className="mt-4 max-w-sm text-sm text-[var(--color-muted)]">
              Software, modeling, and applied AI for the BIM industry.
            </div>
          </div>
          <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            <Link href="/contact" className="hover:text-[var(--color-ink)]">
              darren@fugazycoding.com
            </Link>
            <span>© {new Date().getFullYear()} Fugazy Coding</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
