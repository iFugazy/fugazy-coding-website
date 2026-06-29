import { Reveal } from "./Reveal";
import { cases, logos, services } from "./data";

export function SHead({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="ed-shead">
      <div>
        <div className="num">{num}</div>
        <h2>{title}</h2>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="ed-section ed-hero"
      style={{ paddingTop: 64, paddingBottom: 80 }}
    >
      <div className="ed-hero-bg" aria-hidden="true" />
      <div className="ed-hero-scrim" aria-hidden="true" />
      <div className="ed-wrap" style={{ position: "relative", zIndex: 2 }}>
        <Reveal
          className="ed-mono-label"
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          <span>◇ Remote-first studio</span>
          <span>BIM · AI · Software</span>
          <span>Est. 2025</span>
        </Reveal>
        <Reveal delay={80} as="h1">
          Precision BIM,
          <br />
          applied AI &amp;
          <br />
          custom <span className="accent">tooling.</span>
        </Reveal>
        <Reveal delay={160} style={{ marginTop: 44, maxWidth: "52ch" }}>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: 18,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We help architects, engineers, and contractors model faster,
            automate the repetitive, and put their data to work — one partner
            across the whole BIM-to-AI stack.
          </p>
          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 32,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#contact" className="ed-cta-primary">
              Book a call <span>→</span>
            </a>
            <a href="#contact" className="ed-link">
              Get a quote <span className="ar">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="ed-section">
      <div className="ed-wrap">
        <SHead
          num="01 — CAPABILITIES"
          title="What we do"
          desc="From the model to the software around it — one partner across the whole BIM-to-AI stack."
        />
        <div style={{ marginTop: 40 }}>
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 50}>
              <div className="ed-srow">
                <div className="snum">{s.n}</div>
                <h3>{s.title}</h3>
                <div>
                  <p>{s.body}</p>
                  <div className="ed-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="ed-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="plus">+</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <section className="ed-section" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="ed-wrap">
        <Reveal style={{ textAlign: "center" }}>
          <span
            className="ed-mono-label"
            style={{ color: "var(--color-accent)" }}
          >
            Trusted by leading AEC teams
          </span>
        </Reveal>
        <Reveal delay={80} className="logo-strip">
          {logos.map((l) => (
            <span key={l.src} className="logo-chip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.alt}
                style={{ height: l.h, width: "auto", display: "block" }}
              />
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="ed-section">
      <div className="ed-wrap">
        <SHead
          num="02 — SELECTED WORK"
          title="Outcomes, not deliverables"
          desc="A sample of recent BIM, AI, and software engagements."
        />
        <div style={{ marginTop: 40 }}>
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="ed-wrow">
                <div>
                  <span className="ed-mono-label">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p
                    style={{
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                      margin: "14px 0 0",
                      maxWidth: "60ch",
                    }}
                  >
                    {c.blurb}
                  </p>
                </div>
                <div className="metric">
                  <b>{c.metric}</b>
                  <span>{c.metricLabel}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="ed-section">
      <div className="ed-wrap">
        <div
          className="ed-about"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.9fr",
            gap: 52,
            alignItems: "start",
          }}
        >
          <Reveal>
            <div
              className="ed-mono-label"
              style={{ color: "var(--color-accent)" }}
            >
              03 — ABOUT
            </div>
            <h2
              style={{
                fontSize: "clamp(30px,4vw,52px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                fontWeight: 600,
                margin: "14px 0 0",
              }}
            >
              A one-person BIM software studio
            </h2>
            <p
              className="lede"
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                lineHeight: 1.6,
                marginTop: 18,
                maxWidth: "46ch",
              }}
            >
              No account managers, no handoffs — you work directly with the
              person writing the code and building the models.
            </p>
            <p
              style={{
                fontSize: "clamp(20px,2.2vw,26px)",
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
                margin: "34px 0 0",
              }}
            >
              I got tired of watching great firms lose hours to manual,
              repetitive work. So I build the models, the plugins, and the AI
              that give those hours back.
            </p>
            <p
              style={{
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginTop: 22,
                maxWidth: "56ch",
              }}
            >
              I&apos;m an independent BIM specialist and software engineer,
              fluent in both the Revit API and the jobsite. From a single add-in
              to a full estimating tool, I partner with architects, engineers,
              and contractors one-on-one — always encoding your standards, so the
              output looks like it came from your office.
            </p>
            <p
              style={{
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginTop: 18,
                maxWidth: "56ch",
              }}
            >
              Working solo means you get senior-level work on every line — and a
              single point of contact from first call to final delivery.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="ed-mono-label" style={{ marginBottom: 16 }}>
              Who you&apos;ll work with
            </div>
            <div style={{ border: "1px solid var(--color-rule)", padding: 24 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/darren-ackles.jpg"
                alt="Darren Ackles"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "1px solid var(--color-rule)",
                  marginBottom: 20,
                  display: "block",
                }}
              />
              <div
                style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em" }}
              >
                Darren Ackles
              </div>
              <div className="ed-mono-label" style={{ marginTop: 6 }}>
                BIM Specialist &amp; Software Engineer
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginTop: 18,
                }}
              >
                {["Revit API", "AI / ML", "BIM"].map((t) => (
                  <span key={t} className="ed-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/darrenackles/"
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link"
                style={{ marginTop: 20 }}
              >
                LinkedIn <span className="ar">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
