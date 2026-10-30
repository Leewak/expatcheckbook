import Link from "next/link";
import type { Metadata } from "next";
import { posts, categories, getPostsByCategory, getCategoryLabel, formatDate, getPost } from "@/lib/posts";
import { VerifiedStamp } from "@/components/VerifiedStamp";
import { ComparisonTable } from "@/components/ComparisonTable";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AdSlot } from "@/components/AdSlot";
import { Container } from "@/components/Container";
import { AD_SLOTS } from "@/lib/adSlots";

export const metadata: Metadata = {
  title: "Expat Checkbook — Smart Money Moves for Life Abroad",
  description: "Banking, taxes, insurance, and money guides for expats and digital nomads. Practical, unbiased, and updated for 2026.",
  alternates: { canonical: "/" },
};

const CheckIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M8 33.5l14 14L58 8" stroke="#B0803A" strokeWidth="10" strokeLinecap="square" />
  </svg>
);

export default function HomePage() {
  const recent = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 4);
  const totalGuides = posts.length;
  // Homepage's "most-read comparison" only renders once a real post has
  // comparisonTable data attached — see components/ComparisonTable and the
  // Post.comparisonTable field. None of the seed posts have it populated yet.
  const featuredComparisonPost = getPost("wise-vs-revolut-expats-2026");
  const comparison = featuredComparisonPost?.comparisonTable;

  return (
    <>
      {/* Hero */}
      <section className="px-[5%] pt-12 md:pt-24 pb-14 md:pb-26 bg-ink">
        <Container className="flex gap-8 md:gap-16 flex-wrap items-start">
          <div className="flex-1 basis-[480px] flex flex-col gap-[22px]">
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-brass-light">
              Updated for 2026 — {totalGuides} guides, checked and dated
            </span>
            <h1 className="m-0 font-serif font-semibold text-[clamp(38px,5vw,68px)] leading-[1.04] tracking-[-0.025em] text-white text-balance">
              Every figure on this site carries the date we checked it.
            </h1>
            <p className="m-0 text-[clamp(16px,1.5vw,20px)] leading-[1.62] text-on-ink-body max-w-[56ch]">
              Practical guides on banking, taxes, insurance, and transfers for expats and digital nomads. Fees, thresholds and visa rules move
              constantly, so every regulatory claim here shows when it was last verified and against which source. No fluff, just what works.
            </p>
            <div className="flex gap-3 flex-wrap mt-1.5">
              <Link href="/blog" className="text-[15px] font-semibold text-ink bg-brass-light px-[26px] py-3.5 hover:bg-white">
                All Guides
              </Link>
              <Link href="/category/banking" className="text-[15px] font-semibold text-white border border-slate px-[25px] py-[13px] hover:border-brass-light hover:text-brass-light">
                Expat Banking
              </Link>
            </div>
          </div>
          <div className="flex-0 basis-[340px] min-w-[280px] bg-ink-raised border border-slate p-6">
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-on-ink-meta pb-4 border-b border-slate">How we verify</div>
            <div className="flex flex-col">
              {[
                ["01", "Every rate, fee and threshold is traced to a primary source — the bank, the tax authority, the consulate."],
                ["02", "The check date and source count sit at the top of the page, not buried in a footer."],
                ["03", "Anything past 120 days without a re-check is flagged as stale until we redo it."],
              ].map(([n, text], i, arr) => (
                <div key={n} className={`flex gap-3.5 py-4 ${i < arr.length - 1 ? "border-b border-slate" : "pb-1"}`}>
                  <span className="font-mono text-xs text-brass-light pt-0.5">{n}</span>
                  <span className="text-[14.5px] leading-[1.55] text-on-ink-nav">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="px-[5%] py-5 bg-paper border-b border-rule">
        <Container className="flex gap-7 flex-wrap justify-center">
          {["No sponsored content", "Updated monthly", "Written by actual expats"].map((label) => (
            <span key={label} className="flex items-center gap-2.5 text-[14.5px] text-slate">
              <CheckIcon />
              {label}
            </span>
          ))}
        </Container>
      </section>

      {/* Browse by topic */}
      <section className="px-[5%] py-16 md:py-20">
        <Container className="flex flex-col gap-7">
          <div className="flex items-baseline justify-between gap-4 flex-wrap border-b border-rule pb-3.5">
            <h2 className="m-0 font-serif font-semibold text-[clamp(26px,3vw,34px)] tracking-[-0.02em] text-ink">Browse by topic</h2>
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
              {categories.length} topics · {totalGuides} guides
            </span>
          </div>
          <div className="flex gap-5 flex-wrap">
            {categories.map((cat) => {
              const catPosts = getPostsByCategory(cat.slug);
              const mostRecent = [...catPosts].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex-1 basis-[240px] min-w-[230px] flex flex-col gap-2.5 bg-surface border border-rule p-[22px] hover:border-brass"
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-brass">
                    {catPosts.length} guide{catPosts.length === 1 ? "" : "s"}
                  </span>
                  <span className="font-serif text-[22px] font-semibold text-ink">{cat.label}</span>
                  <span className="text-[14.5px] leading-[1.55] text-muted">{cat.description}</span>
                  {mostRecent && (
                    <span className="font-mono text-[11px] text-muted mt-1.5 pt-3 border-t border-rule">
                      Updated {formatDate(mostRecent.date)}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Ad slot */}
      <section className="px-[5%] pb-16 md:pb-20">
        <Container>
          <AdSlot slot={AD_SLOTS.homeLeaderboard} style={{ display: "block", minHeight: 90 }} />
        </Container>
      </section>

      {/* Most-read comparison — only when a post has real comparisonTable data */}
      {comparison && featuredComparisonPost && (
        <section className="bg-surface border-t border-b border-rule px-[5%] py-16 md:py-20">
          <Container className="flex flex-col gap-6">
            <div className="flex items-end justify-between gap-5 flex-wrap">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brass">Most-read comparison</span>
                <h2 className="m-0 font-serif font-semibold text-[clamp(26px,3vw,34px)] tracking-[-0.02em] text-ink">{featuredComparisonPost.title}</h2>
              </div>
              <VerifiedStamp date={featuredComparisonPost.lastVerifiedAt} sources={featuredComparisonPost.sources} />
            </div>
            <ComparisonTable {...comparison} />
          </Container>
        </section>
      )}

      {/* Recently published + newsletter */}
      <section className="px-[5%] py-16 md:py-20">
        <Container className="flex gap-8 md:gap-14 flex-wrap items-start">
          <div className="flex-1 basis-[460px] flex flex-col">
            <div className="flex items-baseline justify-between gap-4 flex-wrap border-b border-rule pb-3.5 mb-1">
              <h2 className="m-0 font-serif font-semibold text-[clamp(26px,3vw,34px)] tracking-[-0.02em] text-ink">Recently published</h2>
              <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-brass">
                All guides →
              </Link>
            </div>
            {recent.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-5 py-5 border-b border-rule items-start hover:bg-white">
                <span className="font-mono text-[11px] text-muted whitespace-nowrap pt-1 min-w-[76px] uppercase">{formatDate(post.date)}</span>
                {post.heroImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.heroImage.src} alt={post.heroImage.alt} loading="lazy" className="w-24 h-20 sm:w-32 sm:h-24 shrink-0 object-cover border border-rule" />
                )}
                <span className="flex flex-col gap-1.5">
                  <span className="font-serif text-[19px] font-semibold leading-[1.3] text-ink">{post.title}</span>
                  <span className="text-sm leading-[1.55] text-muted">{post.excerpt}</span>
                  <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-brass">{getCategoryLabel(post.category)}</span>
                </span>
              </Link>
            ))}
          </div>
          <aside className="flex-0 basis-[300px] min-w-[280px] flex flex-col gap-5">
            <div className="bg-ink p-6 flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brass-light">Monthly re-check</span>
              <span className="font-serif text-[21px] font-semibold leading-[1.25] text-white">One email when the numbers change.</span>
              <span className="text-sm leading-[1.55] text-on-ink-body">We re-verify every guide monthly. You get the diff, not a newsletter.</span>
              <NewsletterForm />
            </div>
            <AdSlot slot={AD_SLOTS.homeSidebar} style={{ display: "block", minHeight: 250 }} />
          </aside>
        </Container>
      </section>
    </>
  );
}
