import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Use", description: "Terms and conditions for Expat Checkbook.", alternates: { canonical: "/terms" } };
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 bg-paper">
      <p className="text-xs mb-4 text-muted font-mono uppercase tracking-[0.06em]">Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4 font-serif">Terms of Use</h1>
      <p className="mb-10 text-sm text-muted">By using expatcheckbook.info, you agree to these terms.</p>
      {[
        { h: "1. Acceptance", body: "Accessing this site means you agree to these terms." },
        { h: "2. Intellectual Property", body: "All content is property of Expat Checkbook. Excerpts with attribution are permitted." },
        { h: "3. Not Financial Advice", body: "Content is informational only. Not financial, legal, or tax advice. See our Disclaimer." },
        { h: "4. Permitted Use", body: "Personal, non-commercial use only. No bulk scraping or content redistribution." },
        { h: "5. Disclaimer of Warranties", body: "Site provided 'as is'. We disclaim all warranties to the fullest extent permitted by law." },
        { h: "6. Limitation of Liability", body: "We shall not be liable for any damages arising from use of this site." },
        { h: "7. Changes", body: "We may modify Terms at any time. Continued use constitutes acceptance." },
        { h: "8. Contact", body: "Email hello@expatcheckbook.info" },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2 text-ink">{h}</h2>
          <p className="text-sm leading-relaxed text-muted">{body}</p>
        </div>
      ))}
    </div>
  );
}
