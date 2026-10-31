import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getPostsByCategory, formatDate } from "@/lib/posts";
import { Container } from "@/components/Container";
import type { Metadata } from "next";
import { AdsterraInline, AdsterraNative } from "@/components/Adsterra";

export async function generateStaticParams() { return categories.map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  return cat ? { title: `${cat.label} Guides`, alternates: { canonical: `/category/${slug}` } } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const catPosts = getPostsByCategory(slug);

  return (
    <>
      <div className="bg-ink px-[5%] py-14 md:py-18">
        <Container className="flex flex-col gap-3">
          <div className="flex gap-2 items-center font-mono text-[11px] tracking-[0.08em] uppercase text-on-ink-meta">
            <Link href="/blog" className="text-on-ink-meta hover:text-brass-light">Topics</Link>
            <span>/</span>
            <span className="text-brass-light">{cat.label}</span>
          </div>
          <h1 className="m-0 font-serif font-semibold text-[clamp(34px,5vw,52px)] leading-[1.05] tracking-[-0.025em] text-white">{cat.label}</h1>
          <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.62] text-on-ink-body max-w-[62ch]">{cat.description}</p>
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-brass-light mt-1">{catPosts.length} guide{catPosts.length === 1 ? "" : "s"}</span>
        </Container>
      </div>

      <div className="bg-paper px-[5%] pt-10 pb-16">
        <AdsterraInline className="mb-8" />
        <Container className="flex flex-col">
          {catPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-5 border-b border-rule hover:bg-white flex-wrap">
              <span className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 min-w-[76px] uppercase">{formatDate(post.date)}</span>
              {post.heroImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.heroImage.src} alt={post.heroImage.alt} loading="lazy" className="w-24 h-20 sm:w-32 sm:h-24 shrink-0 object-cover border border-rule" />
              )}
              <div className="flex-1 min-w-[240px]">
                <h3 className="m-0 font-serif text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-1.5 mb-0 text-sm leading-[1.55] text-muted line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
          {catPosts.length === 0 && <p className="text-sm text-muted">No guides in this topic yet.</p>}
          <AdsterraNative className="mt-12" />
        </Container>
      </div>
    </>
  );
}
