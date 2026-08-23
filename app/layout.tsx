import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const plexSerif = IBM_Plex_Serif({ variable: "--font-plex-serif", weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", weight: ["400", "500", "600"], subsets: ["latin"] });
const publicSans = Public_Sans({ variable: "--font-public-sans", weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Expat Checkbook — Smart Money Moves for Life Abroad", template: "%s | Expat Checkbook" },
  description: "Smart money moves for life abroad",
  metadataBase: new URL("https://expatcheckbook.info"),
  manifest: "/manifest.json",
};

const navLinks = [
  { label: "Banking", href: "/category/banking" },
  { label: "Taxes", href: "/category/taxes" },
  { label: "Insurance", href: "/category/insurance" },
  { label: "Digital Nomad", href: "/category/digital-nomad" },
];

const aboutLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

function Mark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" fill="#F1F1EE" />
      <path d="M14 22h36M14 32h36M14 42h36" stroke="#8E9AAC" strokeWidth="2" />
      <path d="M16 33.5l10 10L52 16" stroke="#0F1B2D" strokeWidth="6" strokeLinecap="square" />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSerif.variable} ${plexMono.variable} ${publicSans.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394532963824272" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-body font-sans antialiased">
        <header className="flex items-center justify-between gap-5 flex-wrap px-[5%] py-[18px] bg-ink">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <Mark />
            <span className="font-serif text-[22px] font-semibold tracking-[-0.02em] text-white">
              Expat<span className="text-brass-light">Checkbook</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 flex-wrap">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-[15px] text-on-ink-nav transition-colors hover:text-brass-light">
                {label}
              </a>
            ))}
            <a
              href="/blog"
              className="font-mono text-xs tracking-[0.08em] uppercase font-semibold text-ink bg-brass-light px-[15px] py-[9px] hover:bg-paper"
            >
              All Guides
            </a>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="flex flex-col gap-[34px] px-[5%] pt-[clamp(40px,5cqi,64px)] pb-8 bg-ink">
          <div className="flex gap-10 flex-wrap justify-between">
            <div className="flex-1 basis-[280px] flex flex-col gap-3.5 max-w-[36ch]">
              <div className="flex items-center gap-2.5">
                <Mark size={26} />
                <span className="font-serif text-[19px] font-semibold text-white">
                  Expat<span className="text-brass-light">Checkbook</span>
                </span>
              </div>
              <p className="m-0 text-sm leading-[1.6] text-on-ink-meta">
                Independent guides for people moving money and paperwork across borders. No sponsored placements, ever.
              </p>
            </div>
            <div className="flex flex-col gap-[11px]">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-brass-light">Topics</span>
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="text-[14.5px] text-on-ink-nav hover:text-brass-light">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-[11px]">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-brass-light">About</span>
              {aboutLinks.map(({ label, href }) => (
                <a key={label} href={href} className="text-[14.5px] text-on-ink-nav hover:text-brass-light">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-between pt-5 border-t border-slate">
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
              &copy; {new Date().getFullYear()} ExpatCheckbook
            </span>
            <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
              Nothing here is legal, tax or financial advice
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
