import type { Metadata } from "next";
export const metadata: Metadata = { title: "Disclaimer | Expat Checkbook", description: "Important disclaimers for Expat Checkbook." };
export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <p className="text-xs mb-4" style={{ color: "#8A8272" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Disclaimer</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B7360" }}>Please read before using expatcheckbook.info.</p>
      {[
        { h: "Not Financial Advice", body: "All content on Expat Checkbook is for general informational purposes only and does not constitute financial, legal, or tax advice. We are not licensed financial advisors. Always consult a qualified professional before making financial decisions, especially cross-border financial arrangements which can have significant tax and legal implications." },
        { h: "Information May Change", body: "Banking regulations, exchange rates, transfer fees, and product availability change frequently. Always verify current information directly with financial institutions before making decisions." },
        { h: "Country-Specific Regulations", body: "Tax obligations, banking rules, and legal requirements vary significantly by country. Content on this site is general in nature and may not apply to your specific country situation. Always research the rules for your specific countries of residence and citizenship." },
        { h: "Third-Party Services", body: "We review third-party financial services. We are not responsible for the actions, fees, or service quality of any financial institution or money transfer service mentioned on this site." },
        { h: "Limitation of Liability", body: "Expat Checkbook shall not be liable for any financial losses or damages arising from decisions made based on information on this site." },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#0F2244" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7360" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
