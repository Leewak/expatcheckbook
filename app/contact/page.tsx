"use client";
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20" style={{ background: "#FDFCF8" }}>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#0F2244" }}>Contact Us</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B7360" }}>Questions about expat finance, corrections, or partnership inquiries? We reply within 2–3 business days.</p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Email</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        </div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Subject</label><input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B7360" }}>Message</label><textarea rows={6} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "#fff", border: "1px solid #D8D5CE", color: "#18160F" }} /></div>
        <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: "#0D7C4A", color: "#fff" }}>Send Message</button>
        <p className="text-center text-xs" style={{ color: "#8A8272" }}>Or email: <a href="mailto:guifrhi.khalid@gmail.com" style={{ color: "#0D7C4A" }}>guifrhi.khalid@gmail.com</a></p>
      </form>
    </div>
  );
}
