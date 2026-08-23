import { NextResponse } from "next/server";

// TODO: wire to a real email provider (Resend, Beehiiv, ConvertKit, etc.)
// before this ever returns success — it intentionally 503s so the client
// form shows its honest "not wired up yet" state instead of a fake success.
export async function POST() {
  return NextResponse.json({ error: "Newsletter signup is not yet connected to a provider." }, { status: 503 });
}
