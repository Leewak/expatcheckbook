import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy", description: "How Expat Checkbook uses cookies.", alternates: { canonical: "/cookie-policy" } };
export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 bg-paper">
      <p className="text-xs mb-4 text-muted font-mono uppercase tracking-[0.06em]">Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4 font-serif">Cookie Policy</h1>
      <p className="mb-10 text-sm text-muted">This policy explains how Expat Checkbook uses cookies on expatcheckbook.info.</p>
      {[
        { h: "What Are Cookies?", body: "Cookies are small text files placed on your device to help websites remember your actions and preferences." },
        { h: "Cookies We Use", body: "Essential (site functionality), Google Analytics (_ga, _gid, _gat — anonymized traffic data), Google AdSense (personalized advertising), and affiliate tracking cookies (when you click our referral links)." },
        { h: "Opt-Outs", body: "Google Analytics: tools.google.com/dlpage/gaoptout. Google Ads: google.com/settings/ads." },
        { h: "Control Cookies", body: "Manage in your browser settings. Disabling certain cookies may affect site functionality." },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2 text-ink">{h}</h2>
          <p className="text-sm leading-relaxed text-muted">{body}</p>
        </div>
      ))}
    </div>
  );
}
