import Link from "next/link";
import { posts, categories, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "All Guides — Expat Banking, Taxes & Money", description: "Browse all expat finance guides." };

export default function BlogPage() {
  return (
    <div className="py-14" style={{ background: "#FDFCF8" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <div className="tag-pill mb-3 inline-flex">All Guides</div>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#18160F" }}>Expat Finance Guides</h1>
          <p className="mt-2 text-sm" style={{ color: "#B8B5AD" }}>{posts.length} guides</p>
        </div>
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="tag-pill">{cat.label}</Link>
          ))}
        </div>
        <div className="divide-y" style={{ borderColor: "#EAE8E1" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="tag-pill">{getCategoryLabel(post.category)}</span>
                  <span className="text-xs" style={{ color: "#B8B5AD" }}>{post.readTime} min</span>
                </div>
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
