import { NextResponse } from "next/server";

type Enquiry = {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  website?: string;
};

function clean(value: unknown, max = 4000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Enquiry;

  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real people never fill this in.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    name: clean(body.name, 120),
    organisation: clean(body.organisation, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 60),
    interest: clean(body.interest, 80),
    message: clean(body.message, 5000),
    consent: body.consent === true,
    receivedAt: new Date().toISOString(),
  };

  if (
    !enquiry.name ||
    !enquiry.organisation ||
    !enquiry.email ||
    !enquiry.message ||
    !enquiry.consent
  ) {
    return NextResponse.json(
      { ok: false, error: "Required fields are missing." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  /*
   * Delivery is intentionally environment-driven so no enquiry is silently
   * dropped in production:
   *   - CONTACT_WEBHOOK_URL: POST the enquiry to your CRM, helpdesk or form service.
   *   - CONTACT_EMAIL: fallback address shown in the server log.
   * Add provider credentials (for example Resend or Postmark) here before launch.
   */
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const forwarded = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });

      if (!forwarded.ok) throw new Error(`Webhook returned ${forwarded.status}`);
    } catch (error) {
      console.error("[contact] Could not forward enquiry", error);
      return NextResponse.json(
        { ok: false, error: "Could not deliver the enquiry." },
        { status: 502 },
      );
    }
  } else {
    console.info(
      "[contact] New enquiry (set CONTACT_WEBHOOK_URL to deliver it):",
      enquiry,
    );
  }

  return NextResponse.json({ ok: true });
}
