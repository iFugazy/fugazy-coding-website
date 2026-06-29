"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Public Web3Forms access key — safe to expose in the client. It only routes
// submissions to the email tied to the key; it cannot read or send anything.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New project inquiry — ${data.name || "website"}`,
          from_name: "Fugazy Coding website",
          ...data,
        }),
      });

      const body = await res.json().catch(() => null);
      if (!res.ok || !body?.success) {
        throw new Error(body?.message ?? "Could not send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-l-2 border-[var(--color-accent)] pl-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Sent
        </div>
        <p className="mt-4 font-sans text-2xl leading-[1.1] tracking-[-0.01em] md:text-3xl">
          Thanks — we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-12" noValidate>
      <Field label="01 / Your name" name="name" required />
      <Field label="02 / Email" name="email" type="email" required />
      <Field label="03 / Company" name="company" />
      <Field label="04 / Project" name="project" textarea required />

      {/* Honeypot — Web3Forms drops any submission where this is filled. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden
      />

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-3 bg-[var(--color-ink)] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-paper)] hover:bg-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Send"} <span aria-hidden>→</span>
        </button>

        {status === "error" && error && (
          <p
            role="alert"
            className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)]"
          >
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const inputCls =
    "mt-4 w-full border-b border-[var(--color-rule)] bg-transparent py-4 text-2xl tracking-[-0.01em] outline-none focus:border-[var(--color-ink)] md:text-3xl";
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          className={`${inputCls} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={inputCls}
        />
      )}
    </label>
  );
}
