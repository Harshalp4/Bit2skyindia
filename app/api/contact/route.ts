import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 * Wire this to your email/CRM provider (Resend, SendGrid, HubSpot, etc.).
 * Currently validates input and returns success — replace the TODO block.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // TODO: send email / push to CRM. Example with Resend:
    // await resend.emails.send({ from, to, subject, html });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
