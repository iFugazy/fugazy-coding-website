import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-rule)]">
        <Container className="py-24 md:py-40">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Contact
          </div>
          <h1 className="mt-10 max-w-[16ch] font-sans text-[44px] font-medium leading-[0.95] tracking-[-0.03em] md:text-[80px] lg:text-[96px]">
            Tell us what
            <br />
            you&rsquo;re trying to{" "}
            <span className="text-[var(--color-accent)]">build.</span>
          </h1>
        </Container>
      </section>

      {/* DETAILS + FORM */}
      <section>
        <Container className="py-20 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            {/* LEFT — meta */}
            <div className="space-y-12 md:col-span-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Email
                </div>
                <a
                  href="mailto:darren@fugazycoding.com"
                  className="mt-4 block font-sans text-2xl leading-[1.1] tracking-[-0.01em] underline underline-offset-4 hover:text-[var(--color-accent)] md:text-3xl"
                >
                  darren@fugazycoding.com
                </a>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  What to include
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  A sentence about your team, the BIM platforms you live in,
                  and the workflow you&rsquo;d like to make less painful.
                  Screenshots welcome.
                </p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="md:col-span-7 md:col-start-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
