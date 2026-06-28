"use client";
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#0D7C4A" }}>Get in Touch</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Contact Expat Checkbook</h1>
      <p className="mb-10 text-sm leading-relaxed" style={{ color: "#6B7360" }}>
        We are an independent editorial publication covering banking, finance, and money management for expats and digital nomads. Reach out for corrections, partnership inquiries, or editorial questions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { title: "Editorial", desc: "Factual corrections or guide updates" },
          { title: "Finance Partners", desc: "Banking or transfer service partnerships" },
          { title: "General", desc: "Reader questions or feedback" },
        ].map(({ title, desc }) => (
          <div key={title} className="p-4 rounded-xl" style={{ background: "#fff", border: "1px solid #D8D5CE" }}>
            <p className="font-semibold text-sm mb-1" style={{ color: "#0F2244" }}>{title}</p>
            <p className="text-xs leading-snug" style={{ color: "#6B7360" }}>{desc}</p>
          </div>
        ))}
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Email</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        </div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Subject</label><input type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Message</label><textarea rows={6} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: "#0D7C4A", color: "#fff" }}>Send Message</button>
      </form>
      <div className="mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ borderTop: "1px solid #D8D5CE" }}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#0D7C4A" }}>Email</p>
          <p className="text-sm" style={{ color: "#0F2244" }}>hello@expatcheckbook.info</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#0D7C4A" }}>Response Time</p>
          <p className="text-sm" style={{ color: "#0F2244" }}>Within 2–3 business days</p>
        </div>
      </div>
    </div>
  );
}
