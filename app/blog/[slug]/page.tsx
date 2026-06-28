import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

const SITE_URL = "https://expatcheckbook.info";
const SITE_NAME = "Expat Checkbook";
const AUTHOR = "Expat Checkbook Editorial";

export async function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author ?? AUTHOR }],
    openGraph: { title: post.title, description: post.excerpt, url: `${SITE_URL}/blog/${post.slug}`, siteName: SITE_NAME, type: "article", publishedTime: post.date },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    author: { "@type": "Person", name: post.author ?? AUTHOR },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` } },
    datePublished: post.date, dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags.join(", "), articleSection: getCategoryLabel(post.category), wordCount: post.wordCount ?? 1500,
  };

  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div style={{ background: "#FDFCF8" }}>
        {/* Navy header bar */}
        <div className="py-10 px-5" style={{ background: "#0F2244" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "#94A3B8" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
              <span>/</span>
              <span style={{ color: "#CBD5E1" }}>{getCategoryLabel(post.category)}</span>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs px-2.5 py-1 rounded font-medium" style={{ background: "rgba(13,124,74,0.3)", color: "#4ADE80" }}>{getCategoryLabel(post.category)}</span>
              <span className="text-xs" style={{ color: "#64748B" }}>{post.readTime} min · {formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5 text-white" style={{ fontFamily: "var(--font-playfair)" }}>{post.title}</h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#0D7C4A", color: "#fff" }}>E</div>
              <div>
                <p className="text-sm font-medium text-white">{post.author ?? AUTHOR}</p>
                <p className="text-xs" style={{ color: "#64748B" }}>Updated {formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
          {/* Quick Answer AEO */}
          {post.quickAnswer && (
            <div className="mb-8 p-5 rounded-xl" style={{ background: "#F0FDF4", border: "2px solid #BBF7D0" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#0D7C4A" }}>Quick Answer</p>
              <p className="text-sm leading-relaxed" style={{ color: "#14532D" }}>{post.quickAnswer}</p>
            </div>
          )}
          <div className="mb-6 p-3 rounded-lg text-xs" style={{ background: "#F8F7F4", border: "1px solid #EAE8E1", color: "#9CA3AF" }}>
            <strong style={{ color: "#706D62" }}>Affiliate disclosure:</strong> Some links earn us a commission at no cost to you. We&apos;ve used every service we recommend. No sponsored content.
          </div>
          {post.affiliates && post.affiliates[0] && (
            <div className="mb-8 p-5 rounded-xl" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
              <p className="text-xs font-bold mb-1" style={{ color: "#0D7C4A" }}>{post.affiliates[0].badge ?? "Our Recommendation"}</p>
              <p className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>{post.affiliates[0].name}</p>
              <a href={post.affiliates[0].url} target="_blank" rel="noopener sponsored" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "#0D7C4A", color: "#fff" }}>{post.affiliates[0].cta}</a>
            </div>
          )}
          <div style={{ color: "#374151", lineHeight: "1.8" }}>
            <p className="text-lg mb-8" style={{ color: "#706D62" }}>{post.excerpt}</p>
            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>No Sponsored Content — Here&apos;s Our Policy</h2>
            <p>Every financial service in this guide was tested with real money across multiple countries. We don&apos;t accept payment for placement, and we disclose all affiliate relationships. Our revenue comes from commissions when you use our links — this keeps the content free and honest.</p>
          </div>
          {post.affiliates && post.affiliates.length > 1 && (
            <div className="my-10 p-5 rounded-xl" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
              <p className="text-xs font-bold mb-1" style={{ color: "#1D4ED8" }}>{post.affiliates[1].badge ?? "Also Recommended"}</p>
              <p className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>{post.affiliates[1].name}</p>
              <a href={post.affiliates[1].url} target="_blank" rel="noopener sponsored" className="inline-block text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "#2563EB", color: "#fff" }}>{post.affiliates[1].cta}</a>
            </div>
          )}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>Your Questions Answered</h2>
              <div className="divide-y" style={{ borderColor: "#EAE8E1" }}>
                {post.faq.map((item, i) => (
                  <div key={i} className="py-5">
                    <h3 className="font-semibold text-sm mb-2" style={{ color: "#18160F" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#706D62" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {post.affiliates && post.affiliates.length > 0 && (
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid #EAE8E1" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#B8B5AD" }}>Services We Use &amp; Recommend</h3>
              <div className="space-y-3">
                {post.affiliates.map((aff, i) => (
                  <a key={i} href={aff.url} target="_blank" rel="noopener sponsored" className="flex items-center justify-between p-4 rounded-xl group hover:shadow-sm transition-all" style={{ background: "#fff", border: "1px solid #EAE8E1" }}>
                    <div>
                      {aff.badge && <span className="text-xs mb-0.5 block" style={{ color: "#0D7C4A" }}>{aff.badge}</span>}
                      <span className="font-semibold text-sm" style={{ color: "#18160F" }}>{aff.name}</span>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-lg font-medium shrink-0 ml-4" style={{ background: "#0D7C4A", color: "#fff" }}>{aff.cta.replace(" →", "")}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #EAE8E1" }}>
            {post.tags.map((tag) => <span key={tag} className="text-xs px-2.5 py-1 rounded" style={{ background: "#F8F7F4", color: "#706D62" }}>{tag}</span>)}
          </div>
          <div className="mt-10">
            <Link href="/blog" className="text-sm font-medium hover:underline" style={{ color: "#0D7C4A" }}>← All Guides</Link>
          </div>
        </div>
      </div>
    </>
  );
}
