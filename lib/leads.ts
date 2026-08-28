import { NextResponse } from "next/server";

/**
 * Resolve the GHL (or any) webhook for a given form. Checks a per-form env var
 * first, then falls back to a single shared one — so Bobby can use one GHL
 * inbound webhook for everything (routing by the `source` field) OR a separate
 * webhook per form.
 *   demo-request  -> LEAD_WEBHOOK_DEMO_REQUEST  | LEAD_WEBHOOK_URL
 *   founding-seat -> LEAD_WEBHOOK_FOUNDING_SEAT | LEAD_WEBHOOK_URL
 *   landing-lead  -> LEAD_WEBHOOK_LANDING_LEAD  | LEAD_WEBHOOK_URL
 */
function webhookFor(source: string): string | undefined {
  const key = "LEAD_WEBHOOK_" + source.toUpperCase().replace(/-/g, "_");
  return process.env[key] || process.env.LEAD_WEBHOOK_URL || undefined;
}

/**
 * Shared lead handler for the demo / founding-seat / landing-lead endpoints.
 * Validates the payload and forwards it to the configured GHL webhook. Always
 * succeeds for the visitor even if forwarding is unset or fails, so the form
 * never blocks a real lead.
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

  const webhook = webhookFor(source);
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
