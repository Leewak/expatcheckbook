import Link from "next/link";
import { posts, categories, formatDate, getCategoryLabel } from "@/lib/posts";
import { Container } from "@/components/Container";
import type { Metadata } from "next";
import { AdsterraInline, AdsterraNative } from "@/components/Adsterra";

export const metadata: Metadata = { title: "All Guides — Expat Banking, Taxes & Money", description: "Browse all expat finance guides.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  return (
    <div className="px-[5%] py-16 md:py-20">
      <Container>
      <div className="mb-10 flex flex-col gap-2 border-b border-rule pb-6">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brass">All guides</span>
        <h1 className="m-0 font-serif font-semibold text-[clamp(30px,4vw,46px)] tracking-[-0.02em] text-ink">Expat Finance Guides</h1>
        <p className="m-0 font-mono text-[11px] tracking-[0.1em] uppercase text-muted">{posts.length} guides</p>
      </div>
      <div className="flex gap-2.5 flex-wrap mb-10">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/category/${cat.slug}`} className="font-mono text-[11.5px] tracking-[0.06em] uppercase px-3.5 py-2 border border-rule text-slate hover:border-brass hover:text-brass">
            {cat.label}
          </Link>
        ))}
      </div>
      <AdsterraInline className="mb-8" />
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-5 border-b border-rule hover:bg-white flex-wrap">
            <span className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 min-w-[76px] uppercase">{formatDate(post.date)}</span>
            {post.heroImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.heroImage.src} alt={post.heroImage.alt} loading="lazy" className="w-24 h-20 sm:w-32 sm:h-24 shrink-0 object-cover border border-rule" />
            )}
            <div className="flex-1 min-w-[240px]">
              <h3 className="m-0 font-serif text-lg font-semibold leading-snug text-ink">{post.title}</h3>
              <p className="mt-1.5 mb-0 text-sm leading-[1.55] text-muted line-clamp-2">{post.excerpt}</p>
              <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-brass mt-1.5 inline-block">{getCategoryLabel(post.category)} · {post.readTime} min</span>
            </div>
          </Link>
        ))}
      </div>
      <AdsterraNative className="mt-12" />
      </Container>
    </div>
  );
}
