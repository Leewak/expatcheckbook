"use client";
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 bg-paper">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] mb-4 text-brass">Get in Touch</p>
      <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-ink">Contact Expat Checkbook</h1>
      <p className="mb-10 text-sm leading-relaxed text-muted">
        We are an independent editorial publication covering banking, finance, and money management for expats and digital nomads. Reach out for corrections, partnership inquiries, or editorial questions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { title: "Editorial", desc: "Factual corrections or guide updates" },
          { title: "Finance Partners", desc: "Banking or transfer service partnerships" },
          { title: "General", desc: "Reader questions or feedback" },
        ].map(({ title, desc }) => (
          <div key={title} className="p-4 bg-surface border border-rule">
            <p className="font-semibold text-sm mb-1 text-ink">{title}</p>
            <p className="text-xs leading-snug text-muted">{desc}</p>
          </div>
        ))}
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold mb-2 text-muted">Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 text-sm outline-none bg-surface border border-rule text-ink" /></div>
          <div><label className="block text-xs font-semibold mb-2 text-muted">Email</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 text-sm outline-none bg-surface border border-rule text-ink" /></div>
        </div>
        <div><label className="block text-xs font-semibold mb-2 text-muted">Subject</label><input type="text" placeholder="How can we help?" className="w-full px-4 py-3 text-sm outline-none bg-surface border border-rule text-ink" /></div>
        <div><label className="block text-xs font-semibold mb-2 text-muted">Message</label><textarea rows={6} placeholder="Your message..." className="w-full px-4 py-3 text-sm outline-none resize-none bg-surface border border-rule text-ink" /></div>
        <button type="submit" className="w-full py-3 text-sm font-semibold text-white bg-ink hover:bg-slate">Send Message</button>
      </form>
      <div className="mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-rule">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] mb-2 text-brass">Email</p>
          <p className="text-sm text-ink">hello@expatcheckbook.info</p>
        </div>
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] mb-2 text-brass">Response Time</p>
          <p className="text-sm text-ink">Within 2–3 business days</p>
        </div>
      </div>
    </div>
  );
}
