"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

// Adsterra ad units for expatcheckbook.info (blog-farm publisher account). Codes come from
// the Adsterra dashboard; keep them on article pages, apart from AdSense units.
const NATIVE_KEY = "4d27748117af76bcda4b978aa613aa8d";
const BANNERS = {
  "728x90": "c6bc13b3320e5b0e5b68a7a222b85535",
  "300x250": "324960fa466ce105d09bbba512debbd4",
  "320x50": "f1963521a980281dda943a7626e0d70a",
} as const;

type BannerSize = keyof typeof BANNERS;

// Each banner gets its own iframe document: Adsterra's snippet reads a global
// `atOptions`, so two banners on one page would otherwise overwrite each other.
function bannerDoc(key: string, width: number, height: number) {
  return `<!doctype html><html><body style="margin:0"><script>atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script src="https://bauval.org/22/${key}"></script></body></html>`;
}

function AdLabel() {
  return <p style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 4px", textAlign: "center" }}>Advertisement</p>;
}

export function AdsterraBanner({ size, className }: { size: BannerSize; className?: string }) {
  const [width, height] = size.split("x").map(Number);
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <AdLabel />
      <iframe title="Advertisement" srcDoc={bannerDoc(BANNERS[size], width, height)} width={width} height={height} scrolling="no" style={{ border: 0, display: "block", maxWidth: "100%" }} />
    </div>
  );
}

const desktopQuery = "(min-width: 768px)";
function subscribe(onChange: () => void) {
  const mq = window.matchMedia(desktopQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** In-article slot: 728x90 on desktop, 300x250 on phones. Chosen in the browser so only one unit loads. */
export function AdsterraInline({ className }: { className?: string }) {
  const desktop = useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => null);
  if (desktop === null) return <div className={className} style={{ minHeight: 90 }} />;
  return <AdsterraBanner key={desktop ? "d" : "m"} size={desktop ? "728x90" : "300x250"} className={className} />;
}

/** Native Banner: one per page (Adsterra targets a fixed container id). */
export function AdsterraNative({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = `https://bauval.org/21/${NATIVE_KEY}`;
    host.appendChild(script);
    return () => script.remove();
  }, []);
  return (
    <div ref={ref} className={className}>
      <AdLabel />
      <div id={`container-${NATIVE_KEY}`} />
    </div>
  );
}

// 160x600 skyscrapers fixed in the empty margins left and right of the page. Shown only when the
// window leaves room beside the widest content (1240px Container), so they never cover text.
const SKYSCRAPER_KEY = "b50e0c4a545e2e8fd288864948070145";
const railQuery = "(min-width: 1610px) and (min-height: 700px)";
function subscribeRails(onChange: () => void) {
  const mq = window.matchMedia(railQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function AdsterraSideRails() {
  const wide = useSyncExternalStore(subscribeRails, () => window.matchMedia(railQuery).matches, () => false);
  if (!wide) return null;
  const rail = (side: "left" | "right") => (
    <div style={{ position: "fixed", top: "50%", [side]: 12, transform: "translateY(-50%)", zIndex: 30 }}>
      <AdLabel />
      <iframe title="Advertisement" srcDoc={bannerDoc(SKYSCRAPER_KEY, 160, 600)} width={160} height={600} scrolling="no" style={{ border: 0, display: "block" }} />
    </div>
  );
  return <>{rail("left")}{rail("right")}</>;
}
