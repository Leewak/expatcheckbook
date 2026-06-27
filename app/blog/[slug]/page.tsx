import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="py-14" style={{ background: "#FDFCF8" }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "#B8B5AD" }}>
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-green-700">Guides</Link>
          <span>/</span>
          <span>{getCategoryLabel(post.category)}</span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <span className="tag-pill">{getCategoryLabel(post.category)}</span>
          <span className="text-xs" style={{ color: "#B8B5AD" }}>{post.readTime} min · {formatDate(post.date)}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-[1.2] mb-5" style={{ fontFamily: "var(--font-playfair)", color: "#18160F", letterSpacing: "-0.02em" }}>{post.title}</h1>
        <div className="p-4 rounded-lg mb-8" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
          <p className="text-sm font-medium" style={{ color: "#0D7C4A" }}>Affiliate disclosure: Some links on this page may be affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
        <p className="text-lg mb-8 pb-8" style={{ color: "#706D62", borderBottom: "1px solid #EAE8E1" }}>{post.excerpt}</p>
        <div className="prose-ec">
          <p>This guide is coming soon. We&apos;re researching and will publish our full findings shortly. Subscribe to our newsletter to be notified.</p>
          <h2>What we&apos;ll cover</h2>
          <p>In this guide, we cover everything in plain language — no financial jargon, just practical steps you can take today.</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #EAE8E1" }}>
          {post.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
