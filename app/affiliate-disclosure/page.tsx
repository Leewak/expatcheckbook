import type { Metadata } from "next";
export const metadata: Metadata = { title: "Affiliate Disclosure | Expat Checkbook", description: "Our affiliate disclosure." };
export default function AffiliatePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <p className="text-xs mb-4" style={{ color: "#8A8272" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Affiliate Disclosure</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B7360" }}>Expat Checkbook discloses affiliate relationships per FTC guidelines.</p>
      {[
        { h: "FTC Disclosure", body: "Some links on this site are affiliate links. When you click and make a purchase, we may earn a commission at no extra cost to you." },
        { h: "Same Price for You", body: "Affiliate commissions come from the company's marketing budget, not from you. You pay exactly the same price through our link as directly." },
        { h: "Our Standards", body: "We only recommend financial products and services we believe are genuinely useful for expats. Affiliate relationships do not affect our editorial opinions, ratings, or rankings. Financial products are evaluated on fees, availability, exchange rates, and customer service — not commission size." },
        { h: "Financial Product Note", body: "Expat Checkbook is not a licensed financial advisor. Affiliate links to banking, insurance, and money transfer services are editorial recommendations, not financial advice. Always compare options and read terms before choosing a financial product." },
        { h: "Contact", body: "Questions? Email hello@expatcheckbook.info" },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#0F2244" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7360" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
