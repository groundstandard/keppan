import { NextResponse } from "next/server";

/**
 * Shared lead handler for the demo / founding-seat / landing-lead endpoints.
 * Validates the payload and forwards it to LEAD_WEBHOOK_URL (e.g. an n8n webhook
 * or CRM) when configured. Always succeeds for the visitor even if forwarding is
 * unset or fails, so the form never blocks a real lead.
 */
export async function handleLead(req: Request, source: string) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? body.fullName ?? "").trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  const lead = {
    source,
    name,
    email,
    school: String(body.school ?? "").trim() || null,
    phone: String(body.phone ?? "").trim() || null,
    discipline: String(body.discipline ?? "").trim() || null,
    message: String(body.message ?? "").trim() || null,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (e) {
      console.error(`[lead:${source}] forward failed`, e);
    }
  } else {
    console.log(`[lead:${source}]`, lead);
  }

  return NextResponse.json({ ok: true });
}
