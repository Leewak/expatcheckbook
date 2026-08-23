"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="m-0 text-sm text-brass-light">You&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-1.5">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="you@example.com"
        className="font-sans text-sm px-[13px] py-[11px] bg-ink-raised border border-slate text-white outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-sans text-sm font-semibold p-3 bg-brass-light text-ink border-none cursor-pointer hover:bg-white disabled:opacity-60"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="m-0 text-xs text-on-ink-meta">Signup isn&apos;t wired up yet — check back soon.</p>
      )}
    </form>
  );
}
