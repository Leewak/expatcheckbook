"use client";

import { useState } from "react";

export interface Source {
  label: string;
  checkedAt: string;
}

const STALE_DAYS = 120;

function daysSince(dateStr: string): number {
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(/ /g, " ");
}

const CheckIcon = ({ stroke, size = 13 }: { stroke: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M8 33.5l14 14L58 8" stroke={stroke} strokeWidth="10" strokeLinecap="square" />
  </svg>
);

export function VerifiedStamp({
  date,
  sources = [],
  variant = "default",
}: {
  date?: string;
  sources?: Source[];
  variant?: "default" | "compact" | "onDark";
}) {
  const [open, setOpen] = useState(false);
  const isStale = !date || daysSince(date) > STALE_DAYS;

  if (isStale) {
    return (
      <div className="inline-flex items-center gap-2.5 border border-muted px-3 py-2 font-mono text-[11px] tracking-[0.08em] uppercase text-muted">
        <span aria-hidden="true">&mdash;</span>
        <span>RE-CHECK DUE</span>
      </div>
    );
  }

  const stroke = variant === "onDark" ? "#C9A05A" : "#B0803A";
  const textColor = variant === "onDark" ? "text-brass-light" : variant === "compact" ? "text-muted" : "text-brass";
  const borderColor = variant === "compact" ? "border-rule" : variant === "onDark" ? "border-brass-light" : "border-brass";

  const label =
    variant === "compact"
      ? `${sources.length} SOURCE${sources.length === 1 ? "" : "S"}`
      : `LAST VERIFIED ${formatDate(date!).toUpperCase()}${sources.length ? ` · ${sources.length} SOURCE${sources.length === 1 ? "" : "S"}` : ""}`;

  return (
    <div className="inline-flex flex-col gap-2">
      <button
        type="button"
        onClick={() => sources.length > 0 && setOpen((v) => !v)}
        className={`inline-flex items-center gap-[9px] border ${borderColor} px-3 py-2 bg-transparent transition-colors hover:border-brass ${sources.length > 0 ? "cursor-pointer" : "cursor-default"}`}
      >
        {variant !== "compact" && <CheckIcon stroke={stroke} />}
        <span className={`font-mono text-[11px] tracking-[0.08em] uppercase ${textColor}`}>{label}</span>
      </button>
      {open && sources.length > 0 && (
        <ol className="m-0 p-0 list-none flex flex-col gap-2 border border-rule bg-surface p-4">
          {sources.map((s, i) => (
            <li key={i} className="text-sm leading-[1.5] text-muted">
              <span className="font-mono text-brass mr-1.5">{String(i + 1).padStart(2, "0")}</span>
              {s.label} — checked {formatDate(s.checkedAt)}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
