export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured?: boolean;
}

export const categories = [
  { slug: "banking", label: "Banking" },
  { slug: "taxes", label: "Taxes" },
  { slug: "insurance", label: "Insurance" },
  { slug: "digital-nomad", label: "Digital Nomad" },
  { slug: "money-transfers", label: "Money Transfers" },
];

export const posts: Post[] = [
  {
    slug: "wise-vs-revolut-expats-2026",
    title: "Wise vs Revolut for Expats in 2026: Which One Actually Saves You More?",
    excerpt: "After using both for 18 months across 7 countries, here's our honest breakdown of fees, limits, and hidden costs.",
    category: "money-transfers",
    tags: ["Wise", "Revolut", "money transfers", "expat banking"],
    date: "2026-06-21",
    readTime: 10,
    featured: true,
  },
  {
    slug: "best-bank-account-expats",
    title: "Best Bank Accounts for Expats in 2026: Compared Across 8 Options",
    excerpt: "From Charles Schwab to N26, we break down which accounts have zero foreign transaction fees and actually work abroad.",
    category: "banking",
    tags: ["expat banking", "Charles Schwab", "N26", "Monzo"],
    date: "2026-06-18",
    readTime: 9,
    featured: true,
  },
  {
    slug: "digital-nomad-taxes-usa",
    title: "Digital Nomad Taxes for Americans in 2026: The FEIE and What You Need to Know",
    excerpt: "Foreign Earned Income Exclusion, FATCA, FBAR — explained in plain English for Americans working remotely abroad.",
    category: "taxes",
    tags: ["digital nomad taxes", "FEIE", "expat taxes USA"],
    date: "2026-06-15",
    readTime: 12,
    featured: false,
  },
  {
    slug: "safetywing-review",
    title: "SafetyWing Review 2026: Is This Nomad Health Insurance Worth It?",
    excerpt: "We've been using SafetyWing for a year. Here's what it actually covers, what it misses, and who it's right for.",
    category: "insurance",
    tags: ["SafetyWing", "nomad insurance", "health insurance expat"],
    date: "2026-06-12",
    readTime: 8,
    featured: false,
  },
  {
    slug: "how-to-open-bank-account-abroad",
    title: "How to Open a Bank Account Abroad as a Foreigner: Country-by-Country Guide",
    excerpt: "Requirements, documents, and tricks for opening local bank accounts in Morocco, Spain, Portugal, Thailand, and more.",
    category: "banking",
    tags: ["expat banking", "bank account abroad"],
    date: "2026-06-09",
    readTime: 11,
    featured: false,
  },
  {
    slug: "best-budgeting-app-expat",
    title: "Best Budgeting Apps for Expats and Digital Nomads in 2026",
    excerpt: "Multi-currency tracking, automatic categorization, and no-frills budgeting — the apps that actually work when you move around.",
    category: "digital-nomad",
    tags: ["budgeting app", "YNAB", "Copilot", "digital nomad"],
    date: "2026-06-06",
    readTime: 7,
    featured: false,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: string) => posts.filter((p) => p.category === cat);
export const getFeaturedPosts = () => posts.filter((p) => p.featured);
export const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
export const getCategoryLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? slug;
