import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy | Expat Checkbook", description: "How Expat Checkbook uses cookies." };
export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <p className="text-xs mb-4" style={{ color: "#8A8272" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Cookie Policy</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B7360" }}>This policy explains how Expat Checkbook uses cookies on expatcheckbook.info.</p>
      {[
        { h: "What Are Cookies?", body: "Cookies are small text files placed on your device to help websites remember your actions and preferences." },
        { h: "Cookies We Use", body: "Essential (site functionality), Google Analytics (_ga, _gid, _gat — anonymized traffic data), Google AdSense (personalized advertising), and affiliate tracking cookies (when you click our referral links)." },
        { h: "Opt-Outs", body: "Google Analytics: tools.google.com/dlpage/gaoptout. Google Ads: google.com/settings/ads." },
        { h: "Control Cookies", body: "Manage in your browser settings. Disabling certain cookies may affect site functionality." },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#0F2244" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7360" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
