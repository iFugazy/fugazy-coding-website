import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where messages are delivered, and the verified sender they come from.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "darren@fugazycoding.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Fugazy Coding <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  project?: string;
  // Honeypot — real users never fill this; bots do.
  website?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept-and-drop honeypot hits so bots don't learn to adapt.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const project = payload.project?.trim() ?? "";

  if (!name || !email || !project) {
    return NextResponse.json(
      { error: "Name, email, and project are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New project inquiry — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        "",
        "Project:",
        project,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
