import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Expat Checkbook — Smart Money Moves for Life Abroad", template: "%s | Expat Checkbook" },
  description: "Banking, taxes, and money guides for expats and digital nomads. Unbiased, practical, and updated regularly.",
  metadataBase: new URL("https://expatcheckbook.info"),
};

const navLinks = [
  { label: "Banking", href: "/category/banking" },
  { label: "Taxes", href: "/category/taxes" },
  { label: "Insurance", href: "/category/insurance" },
  { label: "Digital Nomad", href: "/category/digital-nomad" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable}`}>
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394532963824272" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: "#FDFCF8", color: "#18160F" }}>
        <header style={{ background: "#0F2244", color: "#fff" }}>
          <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-lg" style={{ fontFamily: "var(--font-playfair)", color: "#fff", letterSpacing: "-0.01em" }}>
              Expat<span style={{ color: "#34D399" }}>Checkbook</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</a>
              ))}
            </div>
            <a href="/blog" className="text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: "#0D7C4A", color: "#fff" }}>All Guides</a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer style={{ background: "#0F2244", color: "#fff" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}>
                Expat<span style={{ color: "#34D399" }}>Checkbook</span>
              </span>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                &copy; {new Date().getFullYear()} ExpatCheckbook. Not financial advice. Some links are affiliate links.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
