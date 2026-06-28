import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | Expat Checkbook", description: "How Expat Checkbook collects, uses, and protects your personal information." };
const sections = [
  { h: "1. Information We Collect", body: "We collect information you provide (email for newsletter) and automatically collected data: IP address, browser type, pages viewed, time on site. This is collected via Google Analytics and standard server logs." },
  { h: "2. How We Use Your Information", body: "We use data to operate and improve the website, send newsletters, analyze traffic, and comply with legal obligations. We do not sell your personal information." },
  { h: "3. Google AdSense and Advertising", body: "We use Google AdSense which uses cookies to serve personalized ads. You can opt out at google.com/settings/ads. Third-party vendors including Google may use cookies based on your prior visits to our website." },
  { h: "4. Affiliate Links", body: "Some links are affiliate links. When you click and purchase, we may earn a commission at no extra cost to you. This does not affect our editorial opinions." },
  { h: "5. Cookies", body: "We use analytics, advertising, and functional cookies. You can control cookies through your browser settings. See our Cookie Policy for details." },
  { h: "6. Financial Information Disclaimer", body: "This site discusses financial products and services. We do not collect or store any financial account information. Any data entered into third-party financial tools is governed by those companies' own privacy policies." },
  { h: "7. Your Rights", body: "EU/UK residents: GDPR rights apply. California residents: CCPA rights apply. Contact us to access, correct, or delete your data." },
  { h: "8. Changes", body: "We may update this policy. Changes posted here with a revised date." },
  { h: "9. Contact", body: "Questions? Email: hello@expatcheckbook.info" },
];
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <p className="text-xs mb-4" style={{ color: "#8A8272" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Privacy Policy</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B7360" }}>This Privacy Policy explains how Expat Checkbook collects, uses, and shares information when you visit expatcheckbook.info.</p>
      {sections.map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#0F2244" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7360" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
