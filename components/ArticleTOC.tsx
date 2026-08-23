"use client";

import { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  label: string;
}

export function ArticleTOC({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="border border-rule bg-surface p-5 flex flex-col gap-3">
      <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">On this page</span>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`text-[14.5px] pl-[11px] border-l-2 ${active === item.id ? "text-brass border-brass" : "text-slate border-rule hover:text-brass"}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
