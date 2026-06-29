"use client";

import { useState } from "react";
import { SHead } from "./sections";
import { faqs } from "./data";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="ed-section">
      <div className="ed-wrap">
        <SHead
          num="04 — FAQ"
          title="Questions, answered"
          desc="Don't see yours? Book a call and we'll talk specifics."
        />
        <div style={{ marginTop: 40 }}>
          {faqs.map((f, i) => (
            <div key={f.q} className={`ed-faq ${open === i ? "open" : ""}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <span className="pl">+</span>
              </button>
              <div className="ans">
                <div className="ans-in">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
