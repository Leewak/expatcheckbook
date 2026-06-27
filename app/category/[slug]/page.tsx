import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getPostsByCategory, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  return cat ? { title: `${cat.label} Guides — Expat Checkbook` } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const catPosts = getPostsByCategory(slug);

  return (
    <div className="py-14" style={{ background: "#FDFCF8" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Link href="/blog" className="text-xs mb-6 block" style={{ color: "#706D62" }}>← All Guides</Link>
        <div className="tag-pill mb-3 inline-flex">{cat.label}</div>
        <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>{cat.label}</h1>
        <p className="text-sm mb-10" style={{ color: "#B8B5AD" }}>{catPosts.length} guides</p>
        <div className="divide-y" style={{ borderColor: "#EAE8E1" }}>
          {catPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
              <div className="flex-1">
                <h3 className="font-semibold leading-snug group-hover:text-green-700 transition-colors" style={{ color: "#18160F" }}>{post.title}</h3>
                <p className="text-sm mt-1 line-clamp-2" style={{ color: "#706D62" }}>{post.excerpt}</p>
              </div>
              <span className="text-xs shrink-0 mt-1" style={{ color: "#B8B5AD" }}>{formatDate(post.date)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
