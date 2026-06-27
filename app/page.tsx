import Link from "next/link";
import { posts, getFeaturedPosts, categories, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expat Checkbook — Smart Money Moves for Life Abroad",
  description: "Banking, taxes, insurance, and money guides for expats and digital nomads. Practical, unbiased, and updated for 2026.",
};

export default function HomePage() {
  const featured = getFeaturedPosts();
  const latest = posts.filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "#0F2244", color: "#fff" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded text-xs font-mono" style={{ border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.1)", color: "#34D399" }}>
              Updated for 2026 — 200K+ expats read this
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5" style={{ fontFamily: "var(--font-playfair)", color: "#fff", letterSpacing: "-0.02em" }}>
              Smart money moves for life abroad.
            </h1>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Practical guides on banking, taxes, insurance, and transfers for expats and digital nomads. No fluff, just what works.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/blog" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "#0D7C4A", color: "#fff" }}>All Guides</Link>
              <Link href="/category/banking" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}>Expat Banking</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "#F5F4F0", borderBottom: "1px solid #EAE8E1" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex flex-wrap gap-6 items-center">
            {[["No sponsored content", ""], ["Updated monthly", ""], ["Written by actual expats", ""]].map(([label]) => (
              <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "#706D62" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D7C4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-14" style={{ background: "#FDFCF8" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="font-bold text-2xl mb-8" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-xl p-6" style={{ border: "1px solid #EAE8E1", background: "#fff" }}>
                <div className="tag-pill mb-4 inline-flex">{getCategoryLabel(post.category)}</div>
                <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-green-700 transition-colors" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>{post.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#706D62" }}>{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#B8B5AD" }}>{formatDate(post.date)}</span>
                  <span className="text-xs font-semibold" style={{ color: "#0D7C4A" }}>{post.readTime} min read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-10 pb-20" style={{ background: "#FDFCF8", borderTop: "1px solid #EAE8E1" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="font-bold text-xl mb-8" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>Latest</h2>
          <div className="divide-y" style={{ borderColor: "#EAE8E1" }}>
            {latest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="tag-pill">{getCategoryLabel(post.category)}</span>
                    <span className="text-xs" style={{ color: "#B8B5AD" }}>{post.readTime} min</span>
                  </div>
                  <h3 className="font-semibold leading-snug group-hover:text-green-700 transition-colors" style={{ color: "#18160F" }}>{post.title}</h3>
                </div>
                <span className="text-xs shrink-0 mt-1" style={{ color: "#B8B5AD" }}>{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: "#0D7C4A" }}>View all guides →</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12" style={{ background: "#F5F4F0", borderTop: "1px solid #EAE8E1" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="font-bold text-lg mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>Browse by Topic</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="rounded-lg p-4 text-center text-sm font-medium transition-all hover:border-green-300"
                style={{ border: "1px solid #EAE8E1", background: "#fff", color: "#18160F" }}>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
