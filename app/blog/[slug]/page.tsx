import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts, formatDate, getCategoryLabel, normalizeCategorySlug } from "@/lib/posts";
import { LogoImage } from "@/components/LogoImage";
import { VerifiedStamp } from "@/components/VerifiedStamp";
import { ComparisonTable } from "@/components/ComparisonTable";
import { NumberedSteps } from "@/components/NumberedSteps";
import { ArticleTOC } from "@/components/ArticleTOC";
import { AdSlot } from "@/components/AdSlot";
import { AD_SLOTS } from "@/lib/adSlots";
import type { Metadata } from "next";

const SITE_URL = "https://expatcheckbook.info";
const SITE_NAME = "Expat Checkbook";
const AUTHOR = "Expat Checkbook Editorial";

const slugifyHeading = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export async function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
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
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    datePublished: post.date, dateModified: post.lastVerifiedAt ?? post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags.join(", "), articleSection: getCategoryLabel(post.category), wordCount: post.wordCount ?? 1500,
  };

  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  const tocItems = [
    ...(post.sections?.map((s) => ({ id: slugifyHeading(s.h2), label: s.h2 })) ?? []),
    ...(post.faq?.length ? [{ id: "questions-we-get-asked", label: "Questions we get asked" }] : []),
    ...(post.sources?.length ? [{ id: "sources", label: "Sources" }] : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="flex gap-2 items-center px-[5%] pt-[22px] font-mono text-[11px] tracking-[0.08em] uppercase text-muted flex-wrap">
        <Link href="/" className="text-muted hover:text-brass">Guides</Link>
        <span>/</span>
        <Link href={`/category/${normalizeCategorySlug(post.category)}`} className="text-muted hover:text-brass">{getCategoryLabel(post.category)}</Link>
        <span>/</span>
        <span className="text-brass">{post.title.split(":")[0]}</span>
      </div>

      <article className="flex gap-8 md:gap-14 flex-wrap items-start px-[5%] pt-6 pb-16 md:pb-20">
        <div className="flex-1 basis-[520px] flex flex-col gap-6 max-w-[74ch]">
          <h1 className="m-0 font-serif font-semibold text-[clamp(32px,4vw,50px)] leading-[1.08] tracking-[-0.025em] text-ink text-balance">
            {post.title}
          </h1>
          <p className="m-0 text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-slate">{post.excerpt}</p>

          <div className="flex items-center gap-4 flex-wrap py-4 border-t border-b border-rule">
            <span className="text-sm text-muted">
              By <span className="text-ink font-semibold">{post.author ?? AUTHOR}</span> · {post.readTime} min read
            </span>
            <span className="ml-auto">
              <VerifiedStamp date={post.lastVerifiedAt} sources={post.sources} />
            </span>
          </div>

          {post.quickAnswer && (
            <div className="border border-rule bg-surface-alt p-5">
              <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-brass mb-2">Quick answer</p>
              <p className="m-0 text-[15px] leading-[1.65] text-body">{post.quickAnswer}</p>
            </div>
          )}

          <p className="m-0 text-xs leading-[1.6] text-muted border border-rule bg-surface-alt px-3.5 py-3">
            <strong className="text-slate">Affiliate disclosure:</strong> Some links earn us a commission at no cost to you. We&apos;ve used every service we recommend. No sponsored content.
          </p>

          {post.affiliates && post.affiliates[0] && (
            <div className="border border-rule bg-surface p-5 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <LogoImage
                  src={`https://logo.clearbit.com/${new URL(post.affiliates[0].url).hostname}`}
                  alt={post.affiliates[0].name}
                  className="object-contain bg-white"
                  style={{ width: 48, height: 48, border: "1px solid #DCDCD6" }}
                />
                <div>
                  <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-brass">{post.affiliates[0].badge ?? "Our Recommendation"}</p>
                  <p className="m-0 font-serif text-xl font-semibold text-ink">{post.affiliates[0].name}</p>
                </div>
              </div>
              <a href={post.affiliates[0].url} target="_blank" rel="noopener sponsored" className="inline-block w-fit text-sm font-semibold text-white bg-ink px-5 py-2.5 hover:bg-slate">
                {post.affiliates[0].cta}
              </a>
            </div>
          )}

          {post.comparisonTable && (
            <ComparisonTable {...post.comparisonTable} />
          )}

          {post.sections?.map((section, i) => (
            <div key={i} id={slugifyHeading(section.h2)} className="flex flex-col gap-4 scroll-mt-24">
              <h2 className="m-0 font-serif font-semibold text-[clamp(24px,2.5vw,30px)] tracking-[-0.02em] text-ink">{section.h2}</h2>
              {section.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={section.image.src} alt={section.image.alt} className="w-full object-cover border border-rule" style={{ maxHeight: 380 }} />
              )}
              {section.paras.map((para, j) => (
                <p key={j} className="m-0 text-[17px] leading-[1.72] text-body">{para}</p>
              ))}
              {section.steps ? (
                <NumberedSteps items={section.steps} />
              ) : (
                section.list && (
                  <ul className="m-0 flex flex-col gap-2 pl-5">
                    {section.list.map((item, k) => (
                      <li key={k} className="text-[15px] leading-[1.6] text-body">{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}

          <AdSlot slot={AD_SLOTS.articleInline} style={{ display: "block", minHeight: 90 }} />

          {post.affiliates && post.affiliates.length > 1 && (
            <div className="border border-rule bg-surface p-5 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <LogoImage
                  src={`https://logo.clearbit.com/${new URL(post.affiliates[1].url).hostname}`}
                  alt={post.affiliates[1].name}
                  className="object-contain bg-white"
                  style={{ width: 48, height: 48, border: "1px solid #DCDCD6" }}
                />
                <div>
                  <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.06em] text-brass">{post.affiliates[1].badge ?? "Also Recommended"}</p>
                  <p className="m-0 font-serif text-xl font-semibold text-ink">{post.affiliates[1].name}</p>
                </div>
              </div>
              <a href={post.affiliates[1].url} target="_blank" rel="noopener sponsored" className="inline-block w-fit text-sm font-semibold text-white bg-ink px-5 py-2.5 hover:bg-slate">
                {post.affiliates[1].cta}
              </a>
            </div>
          )}

          {post.faq && post.faq.length > 0 && (
            <div id="questions-we-get-asked" className="flex flex-col gap-0 scroll-mt-24">
              <h2 className="m-0 font-serif font-semibold text-[clamp(24px,2.5vw,30px)] tracking-[-0.02em] text-ink mb-2">Questions we get asked</h2>
              <div className="flex flex-col border-t border-rule">
                {post.faq.map((item, i) => (
                  <details key={i} className="border-b border-rule py-4">
                    <summary className="font-serif text-lg font-semibold text-ink cursor-pointer list-none">{item.q}</summary>
                    <p className="mt-3 mb-0 text-base leading-[1.68] text-body">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {post.sources && post.sources.length > 0 && (
            <div id="sources" className="border border-rule bg-surface p-6 flex flex-col gap-3.5 scroll-mt-24">
              <div className="flex items-center gap-2.5">
                <VerifiedStamp date={post.lastVerifiedAt} sources={post.sources} variant="compact" />
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-brass">Sources checked {post.lastVerifiedAt ? formatDate(post.lastVerifiedAt) : ""}</span>
              </div>
              <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
                {post.sources.map((s, i) => (
                  <li key={i} className="text-sm leading-[1.5] text-muted">
                    <span className="font-mono text-brass mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                    {s.label} — checked {formatDate(s.checkedAt)}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {post.affiliates && post.affiliates.length > 0 && (
            <div className="pt-6 border-t border-rule">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted mb-4">Services we use &amp; recommend</h3>
              <div className="flex flex-col gap-3">
                {post.affiliates.map((aff, i) => (
                  <a key={i} href={aff.url} target="_blank" rel="noopener sponsored" className="flex items-center justify-between p-4 border border-rule bg-surface hover:border-brass">
                    <div className="flex items-center gap-3">
                      <LogoImage
                        src={`https://logo.clearbit.com/${new URL(aff.url).hostname}`}
                        alt={aff.name}
                        className="object-contain bg-white shrink-0"
                        style={{ width: 36, height: 36, border: "1px solid #DCDCD6" }}
                      />
                      <div>
                        {aff.badge && <span className="text-xs mb-0.5 block text-brass">{aff.badge}</span>}
                        <span className="font-semibold text-sm text-ink">{aff.name}</span>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1.5 font-medium shrink-0 ml-4 text-white bg-ink">{aff.cta.replace(" →", "")}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-6 border-t border-rule">
            {post.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs px-2.5 py-1 bg-surface-alt text-muted">{tag}</span>
            ))}
          </div>
          <Link href="/blog" className="text-sm font-semibold text-brass hover:underline w-fit">← All Guides</Link>
        </div>

        <aside className="flex-0 basis-[280px] min-w-[260px] sticky top-[70px] flex flex-col gap-5">
          <ArticleTOC items={tocItems} />
          <AdSlot slot={AD_SLOTS.articleSidebar} style={{ display: "block", minHeight: 250 }} />
        </aside>
      </article>
    </>
  );
}
