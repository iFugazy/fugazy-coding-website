"use client";

import { useState } from "react";
import { contact, services } from "./data";

export function Contact() {
  const [intent, setIntent] = useState<"call" | "quote">("call");
  const [sent, setSent] = useState(false);

  const details: [string, string][] = [
    ["Email", contact.email],
    ["Phone", contact.phone],
    ["Studio", contact.studio],
  ];

  return (
    <section id="contact" className="ed-section">
      <div className="ed-wrap">
        <div
          className="ed-contact"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
          }}
        >
          <div>
            <div
              className="num ed-mono-label"
              style={{ color: "var(--color-accent)" }}
            >
              05 — GET STARTED
            </div>
            <h2
              style={{
                fontSize: "clamp(40px,6vw,84px)",
                lineHeight: 0.96,
                letterSpacing: "-0.04em",
                margin: "16px 0 0",
                fontWeight: 600,
              }}
            >
              Let&apos;s
              <br />
              talk.
            </h2>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: 18,
                lineHeight: 1.6,
                marginTop: 28,
                maxWidth: "38ch",
              }}
            >
              Tell us what you&apos;re trying to build or automate. We reply
              within one business day — with a clear quote.
            </p>
            <div style={{ marginTop: 36, display: "grid", gap: 14 }}>
              {details.map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 18 }}>
                  <span className="ed-mono-label" style={{ width: 60 }}>
                    {k}
                  </span>
                  <span style={{ fontSize: 16 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div
                style={{
                  borderTop: "1px solid var(--color-ink)",
                  paddingTop: 40,
                }}
              >
                <div
                  className="ed-mono-label"
                  style={{ color: "var(--color-accent)" }}
                >
                  ✓ Message sent
                </div>
                <p
                  style={{
                    fontSize: 24,
                    marginTop: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "grid", gap: 24 }}
              >
                <div style={{ display: "flex", gap: 28 }}>
                  {(["call", "quote"] as const).map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setIntent(v)}
                      className="ed-link"
                      style={{
                        border: "none",
                        borderBottom:
                          intent === v
                            ? "1px solid var(--color-accent)"
                            : "1px solid var(--color-rule)",
                        color:
                          intent === v
                            ? "var(--color-accent)"
                            : "var(--color-muted)",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      {v === "call" ? "Book a call" : "Get a quote"}
                    </button>
                  ))}
                </div>
                <div className="ed-field">
                  <label>Name</label>
                  <input required placeholder="Jane Architect" />
                </div>
                <div className="ed-field">
                  <label>Work email</label>
                  <input required type="email" placeholder="jane@firm.com" />
                </div>
                <div className="ed-field">
                  <label>Service</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="ed-field">
                  <label>
                    {intent === "quote"
                      ? "Project scope"
                      : "What would you like to discuss?"}
                  </label>
                  <textarea rows={3} placeholder="A few lines…" />
                </div>
                <button
                  type="submit"
                  className="ed-cta-primary"
                  style={{ justifyContent: "center" }}
                >
                  {intent === "quote" ? "Request a quote" : "Book a call"} →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
