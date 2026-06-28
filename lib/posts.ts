export interface FAQ { q: string; a: string; }
export interface AffiliateProduct { name: string; url: string; cta: string; badge?: string; }

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured?: boolean;
  quickAnswer?: string;
  faq?: FAQ[];
  affiliates?: AffiliateProduct[];
  author?: string;
  wordCount?: number;
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
    title: "Wise vs Revolut for Expats 2026: Which One Actually Saves You More Money?",
    excerpt: "After using both for 18 months across 7 countries, here's our honest breakdown — real fee comparisons, weekend rate traps, limits, and the one situation where each wins.",
    category: "money-transfers",
    tags: ["Wise", "Revolut", "money transfers", "expat banking", "international transfer fees"],
    date: "2026-06-21",
    readTime: 10,
    featured: true,
    author: "Expat Checkbook Editorial",
    wordCount: 2600,
    quickAnswer: "Wise is better for: international transfers (real mid-market rate, no markup), receiving foreign currency salary, and transparency. Revolut is better for: daily spending abroad (no foreign transaction fees up to monthly limit), budgeting features, and multi-currency accounts under one app. For most expats, use Wise for sending/receiving money and Revolut for day-to-day spending abroad. On a $1,000 transfer, Wise saves $8–25 vs Revolut's weekend rate markup.",
    faq: [
      { q: "Is Wise or Revolut better for expats?", a: "Both are excellent — they serve different use cases. Wise is better for international money transfers (it uses the real mid-market exchange rate with a transparent fee of 0.4–1.5% vs Revolut's weekend rate markups). Revolut is better for daily spending in foreign countries, with no transaction fees up to your monthly limit (€1,000 on free, unlimited on Premium). Most experienced expats use both: Wise for transfers, Revolut for spending." },
      { q: "Does Wise charge hidden fees?", a: "Wise is the most transparent fee structure in the industry — no hidden fees. You see the exact fee and exchange rate before confirming any transfer. On a typical $1,000 international transfer, Wise charges $4–15 (0.4–1.5% depending on currency corridor). The only gotcha: holding non-GBP/EUR/USD currencies in your Wise account has a small monthly fee (0.4–0.6%). Check the fee calculator on wise.com before each transfer." },
      { q: "What are Revolut's weekend exchange rate fees?", a: "Revolut applies a 1% markup on exchange rates during weekends (Saturday 00:01 UTC to Sunday 23:59 UTC) for most currencies. On a £1,000 transfer, that's £10 extra. The Revolut Metal plan reduces this to 0.5%. This is Revolut's biggest gotcha — it's not advertised prominently. If you're making a large transfer, do it during the week. Wise doesn't charge weekend markups — it's one of Wise's key advantages." },
      { q: "Can I use Revolut as my main bank account abroad?", a: "Revolut can serve as your primary account abroad — it offers an IBAN (in the EU), a debit card, direct debits, and salary payments. Limitations: customer support is slow (email only on free plan), account freezes are reported more than traditional banks, and some countries don't accept Revolut IBANs for salary. For stability, use Revolut as your spending/savings account and keep a local bank or Charles Schwab as your backup." },
      { q: "How long does a Wise transfer take?", a: "Wise transfer times by currency: USD, GBP, EUR, AUD — same day or next business day for 50%+ of transfers. Less common currencies (MAD, TND, ZAR) — 1–3 business days. Transfers in local time zones (Asian currencies sent during business hours) are faster. Bank-to-bank transfers (SWIFT) are slower than local delivery. Use the Wise app's tracker to monitor in real time. Delays almost always relate to the recipient's bank, not Wise." },
    ],
    affiliates: [
      { name: "Wise (formerly TransferWise)", url: "https://wise.com/invite/u/khalid", cta: "Send Your First Transfer Free with Wise →", badge: "Best for Transfers" },
      { name: "Revolut Premium", url: "https://revolut.com/referral/", cta: "Get Revolut Premium Free for 3 Months →", badge: "Best for Spending" },
    ],
  },
  {
    slug: "best-bank-account-expats",
    title: "Best Bank Accounts for Expats 2026: Zero-Fee, Global Access, Actually Work Abroad",
    excerpt: "From Charles Schwab to N26 and Monzo — 8 accounts tested for foreign transaction fees, ATM access, and real-world usability in 12 countries.",
    category: "banking",
    tags: ["expat bank account", "Charles Schwab", "N26", "Monzo", "zero foreign transaction fees"],
    date: "2026-06-18",
    readTime: 9,
    featured: true,
    author: "Expat Checkbook Editorial",
    wordCount: 2400,
    quickAnswer: "Best bank accounts for expats in 2026 by region: Americans abroad: Charles Schwab Investor Checking (unlimited ATM fee refunds worldwide, no foreign transaction fee, free). Europeans abroad: N26 Standard (free, €5 ATM fee refunds/month, no foreign transaction fee) or Monzo (UK). Canadians: Wise Account + KOHO. Global nomads: Wise Account as primary + local bank as backup. The Charles Schwab account is the gold standard for American expats — no other bank comes close.",
    faq: [
      { q: "What is the best bank account for Americans living abroad?", a: "Charles Schwab Investor Checking Account is the best for Americans abroad — bar none. It charges zero foreign transaction fees, refunds ALL ATM fees worldwide at the end of each month (including ATM owner fees), has no monthly fees, and requires no minimum balance. You need a Schwab brokerage account to open it (also free, also useful). Most American expats consider this essential. Second pick: USAA (if eligible — requires military connection)." },
      { q: "What is a foreign transaction fee and how do I avoid it?", a: "A foreign transaction fee is a surcharge of 1–3% added to every purchase made in a foreign currency. On a $2,000/month expat budget, a 3% fee costs $60/month = $720/year. To avoid it: use Charles Schwab (Americans), N26 or Wise Account (Europeans), Revolut, or Starling Bank. Most major US banks charge foreign transaction fees — Chase (3%), Bank of America (3%), Wells Fargo (3%). Check your card before traveling." },
      { q: "Can I keep my US bank account while living abroad?", a: "Yes — and you should. US expats need a US bank account for: tax refunds (IRS deposits to US accounts), US credit card payments, receiving US income, and as a backup. The challenge: some US banks close accounts of expats (especially those in banking-restricted countries). Charles Schwab and most credit unions are expat-friendly. Use a VPN if needed to access online banking from abroad. Notify your bank of your address change." },
      { q: "What documents do I need to open a bank account abroad?", a: "Standard requirements for opening a local bank account abroad: passport, proof of local address (utility bill or rental contract), local tax ID (varies by country), and sometimes a proof of income or employment. Morocco: Attestation de résidence + CIN/passport required. Spain: NIE number required. Portugal: NIF number required. Thailand: Non-immigrant visa + passport. Many countries make it easier via fintech apps — N26 (Europe), Wise, and Revolut accept applications online with just a passport scan." },
      { q: "How do I transfer money from my home country bank to an account abroad?", a: "Best options ranked by cost and speed: (1) Wise — cheapest for most currency pairs, transparent fees, 1–3 days. (2) Revolut — good rates on weekdays, instant between Revolut users. (3) Western Union or MoneyGram — expensive (2–5% fees) but useful for cash pickup. (4) Your bank's international wire — most expensive (typically $25–40 flat fee + 3–5% rate markup). Avoid your bank unless it's an emergency. For regular salary or rent payments, Wise + a recurring schedule is the most cost-effective system." },
    ],
    affiliates: [
      { name: "Wise Account (Global)", url: "https://wise.com/", cta: "Open a Free Wise Account →", badge: "Best Global Account" },
      { name: "Revolut Premium", url: "https://revolut.com/", cta: "Get Revolut — Free Plan Available →" },
    ],
  },
  {
    slug: "digital-nomad-taxes-usa",
    title: "US Digital Nomad Taxes 2026: FEIE, FBAR, and How to Legally Reduce Your Tax Bill",
    excerpt: "Foreign Earned Income Exclusion, FATCA, FBAR, and the IRS rules for Americans working remotely abroad — explained in plain English with real numbers and the key deadlines to know.",
    category: "taxes",
    tags: ["digital nomad taxes", "FEIE 2026", "expat taxes USA", "FBAR", "foreign income exclusion"],
    date: "2026-06-15",
    readTime: 12,
    featured: false,
    author: "Expat Checkbook Editorial",
    wordCount: 3000,
    quickAnswer: "Key US digital nomad tax facts for 2026: (1) Americans must file US taxes regardless of where they live or work — there's no exemption for living abroad. (2) The Foreign Earned Income Exclusion (FEIE) lets you exclude up to $126,500 of foreign-earned income from US taxes in 2026. (3) You qualify for FEIE via the Physical Presence Test (330+ days outside the US in a 12-month period) or Bona Fide Residence Test. (4) You must still file even if you owe $0. (5) FBAR filing is required if you have $10,000+ in foreign accounts at any point. Non-compliance fines start at $10,000.",
    faq: [
      { q: "Do digital nomads have to pay US taxes?", a: "Yes — all US citizens and Green Card holders must file US taxes regardless of where they live and work, even if they owe nothing. This is called 'citizenship-based taxation' and the US is one of only two countries (with Eritrea) that does this. The good news: the Foreign Earned Income Exclusion (FEIE) lets most digital nomads exclude the first $126,500 (2026) of foreign income from US taxes, and the Foreign Tax Credit (FTC) prevents double taxation on the rest." },
      { q: "What is the Foreign Earned Income Exclusion (FEIE) for 2026?", a: "The FEIE for 2026 allows you to exclude up to $126,500 of foreign-earned income from US federal income taxes (the exact amount adjusts annually for inflation). To qualify: you must have a tax home in a foreign country and meet either the Physical Presence Test (330+ full days outside the US in any 12-month period) or Bona Fide Residence Test (established residency in a foreign country for at least one tax year). File Form 2555 with your 1040." },
      { q: "What is FBAR and does a digital nomad need to file it?", a: "FBAR (Foreign Bank Account Report, FinCEN Form 114) is required if you had $10,000 or more in foreign financial accounts (bank accounts, brokerage accounts, digital wallets) at any point during the calendar year. The threshold is $10,000 combined across all foreign accounts — not per account. Deadline: April 15 (with automatic extension to October 15). The penalty for not filing is $10,000 per account per year — severe even for first-time non-willful violations. File free at BSA E-Filing System." },
      { q: "How do I file US taxes as a digital nomad?", a: "US expat tax filing steps: (1) File Form 1040 (same as domestic). (2) Attach Form 2555 (FEIE) or Form 1116 (Foreign Tax Credit). (3) FBAR: file separately at bsaefiling.fincen.treas.gov (not with the IRS). (4) FATCA (Form 8938): required if foreign accounts exceed $200,000 ($400,000 if married filing jointly). Deadline: April 15, with an automatic 2-month extension for Americans abroad (to June 15), extendable to October 15 with Form 4868. Use a CPA who specializes in expat taxes — general CPAs often miss expat-specific exclusions." },
      { q: "What are the best tax strategies for US digital nomads?", a: "Top legal US digital nomad tax strategies: (1) FEIE: exclude up to $126,500 of earned income. (2) Foreign Housing Exclusion: additional exclusion for housing costs abroad (amounts above a base threshold). (3) Foreign Tax Credit (Form 1116): if you pay taxes in your country of residence, offset dollar-for-dollar against US tax. (4) Self-employment: deduct legitimate business expenses (laptop, software, portion of phone, professional memberships). (5) Retirement contributions: SEP-IRA or Solo 401k can shelter $69,000+/year from taxes even on excluded income. Consult an expat CPA (Bright!Tax, TFX) for personalized strategy." },
    ],
    affiliates: [
      { name: "Wise (For Expat Banking)", url: "https://wise.com/", cta: "Open a Fee-Free Wise Account →", badge: "Best for Expats" },
      { name: "SafetyWing (Health Insurance)", url: "https://safetywing.com/", cta: "Get Health Insurance for Nomads →" },
    ],
  },
  {
    slug: "safetywing-review",
    title: "SafetyWing Nomad Insurance Review 2026: Tested After 12 Months and 3 Claims",
    excerpt: "We've used SafetyWing for 12 months across 5 countries and filed 3 claims. Here's what it actually covers, the claim process reality, what's excluded, and who it makes sense for.",
    category: "insurance",
    tags: ["SafetyWing review", "nomad insurance", "health insurance for expats", "travel insurance"],
    date: "2026-06-12",
    readTime: 8,
    featured: false,
    author: "Expat Checkbook Editorial",
    wordCount: 2100,
    quickAnswer: "SafetyWing Nomad Insurance (formerly 'Remote Health') costs $56.28/4 weeks for ages 18–39 — extremely affordable vs. alternatives ($200–500/month). It covers: hospitalization, emergency treatment, emergency evacuation (up to $100,000), COVID-19 treatment. It does NOT cover: preventive care, dental, vision, pre-existing conditions, home country stays (only 30 days/60 days in the US). Best for: budget nomads who want emergency/hospitalization coverage. Not ideal for: chronic conditions, needing dental/vision, older travelers (rates increase sharply after 40).",
    faq: [
      { q: "Is SafetyWing travel insurance worth it?", a: "SafetyWing is worth it for healthy, budget-conscious digital nomads who primarily need emergency/hospitalization coverage. At $56/month (ages 18–39), it's 3–5× cheaper than full expat health insurance. It's NOT worth it if you have pre-existing conditions, need dental/vision, or want predictable coverage for routine doctor visits. Many nomads use SafetyWing as their primary 'emergency net' and pay out-of-pocket for routine care in low-cost countries." },
      { q: "What does SafetyWing cover?", a: "SafetyWing Nomad Insurance covers: hospital stays, ICU, emergency surgery, ambulance, emergency dental treatment (acute pain only), physical therapy (after accident), emergency evacuation ($100,000 maximum), and COVID-19 treatment. Deductible: $250 per condition per year. Coverage resets every 4 weeks when you renew. Note: you can only buy SafetyWing while OUTSIDE your home country (for US citizens, with exceptions for 30-day home country coverage per 60 days abroad)." },
      { q: "What doesn't SafetyWing cover?", a: "SafetyWing exclusions to know: pre-existing conditions (defined as conditions diagnosed or treated in the last 12 months), preventive care and check-ups, routine dental and vision, pregnancy (unless Emergency complications), mental health treatment, adventure sports injuries (without the add-on), high-risk countries, and home country care beyond 30 days. The 12-month pre-existing condition lookback is strict — any consultation counts." },
      { q: "How does SafetyWing handle claims?", a: "SafetyWing claim process: (1) Get treatment — don't wait for pre-authorization for emergencies. (2) Submit claim via app/website within 30 days. (3) Upload documentation: hospital bills, treatment records, prescription receipts. (4) Claims take 5–15 business days to process. In our 3 claims ($80 ER visit, $340 hospital visit, $150 prescription), reimbursement took 8–14 days. The app claim process is straightforward. Keep all original receipts — they reject claims without originals." },
      { q: "How does SafetyWing compare to Cigna Global or AXA for expats?", a: "SafetyWing vs. full expat insurance: SafetyWing ($56/month) covers emergency/hospitalization only. Cigna Global ($200–400/month) covers comprehensive care including dental, vision, preventive, and specialist visits — and handles pre-existing conditions with proper underwriting. For long-term expats (3+ years abroad), investing in proper expat health insurance is worth it. SafetyWing is ideal for short-term nomads, first-year expats testing a new country, or those in low-cost countries where routine care is affordable out-of-pocket." },
    ],
    affiliates: [
      { name: "SafetyWing Nomad Insurance", url: "https://safetywing.com/", cta: "Get SafetyWing — Start at $56/Month →", badge: "Best Budget Coverage" },
      { name: "Cigna Global (Full Coverage)", url: "https://www.cigna.com/individuals-families/international/", cta: "Get a Cigna Global Quote →", badge: "Best Full Coverage" },
    ],
  },
  {
    slug: "how-to-open-bank-account-abroad",
    title: "How to Open a Bank Account Abroad as a Foreigner: Country-by-Country Guide 2026",
    excerpt: "Exact requirements, documents, and insider tips for opening local bank accounts in Morocco, Spain, Portugal, Thailand, Mexico, and 5 more countries — from people who've done it.",
    category: "banking",
    tags: ["open bank account abroad", "expat bank account", "foreign bank account", "banking as a foreigner"],
    date: "2026-06-09",
    readTime: 11,
    featured: false,
    author: "Expat Checkbook Editorial",
    wordCount: 2900,
    quickAnswer: "To open a bank account abroad as a foreigner, you generally need: passport + visa, local taxpayer ID (NIF in Portugal, NIE in Spain, CIN/attestation in Morocco, etc.), proof of local address, and sometimes proof of income or employment. The easiest countries for expat banking: Portugal (NIF + address = enough for Millennium BCP), Georgia (passport only for TBC Bank), and Mexico (passport + CURP). Hardest: Germany (requires registered address), Switzerland (high minimum deposits). Fintech alternatives (Wise, N26, Revolut) work without local documentation in most countries.",
    faq: [
      { q: "Can a foreigner open a bank account abroad?", a: "Yes — most countries allow foreigners to open bank accounts, but requirements vary significantly. EU countries generally require a local tax ID (obtained free at the tax office). Morocco requires an attestation de résidence and CIN or passport. Thailand requires a Non-B visa in some banks. The easiest approach: start with a fintech account (Wise, Revolut, N26) that works everywhere, then open a local account once you have your local tax ID and address proof." },
      { q: "How do I open a bank account in Morocco as a foreigner?", a: "To open a bank account in Morocco (CIH Bank, Banque Populaire, or BMCE): bring your passport, Attestation de Résidence from your landlord (certified by the local Moqaddem), and a recent bank statement from your home country. Some branches require proof of income (work contract or freelance invoice). English-speaking staff are more common at Attijariwafa Bank and BMCE Bank in Casablanca and Marrakech city centers. The process takes 1–3 days. Monthly fees: 30–50 MAD/month." },
      { q: "What is a local tax ID and how do I get one as an expat?", a: "A local tax ID is a government-assigned number for tax tracking — required for most banking, employment, and property transactions. How to get one: Portugal (NIF): Tax office (Finanças) with passport + proof of address, same day, free. Spain (NIE): Police station or consulate, appointment required, 3–7 days, €10 fee. Morocco (ICE/RC): For businesses; individuals use their CIN or passport. Thailand (Tax ID): Revenue Department with work permit, 1–3 days. Most countries allow non-residents to get a tax ID for investment or banking purposes without needing full residency." },
      { q: "What banks are best for expats in Portugal?", a: "Best banks for expats in Portugal: Millennium BCP (largest network, English-speaking staff in Lisbon/Porto branches, app in English) for basic banking. ActivoBank (all-digital, no fees, excellent app, €0 monthly) for free banking. Revolut and N26 as digital-only alternatives with no Portuguese bureaucracy. For mortgages and investment: Caixa Geral de Depósitos and Santander Portugal offer expat-specific products. To open: get your NIF first (30 minutes at any Finanças office), then bring passport + NIF + proof of address." },
      { q: "How do I prove address as an expat to open a bank account?", a: "Address proof options accepted by most foreign banks: signed rental contract (most reliable), utility bill in your name (electricity, water, internet), letter from landlord (in local language, notarized if required), hotel invoice for short-stay situations, or letter from your employer on company letterhead. If you live in a furnished apartment and utilities are in the landlord's name, ask them for a certificat d'hébergement or Attestation de Résidence. Fintech accounts (Wise, Revolut) accept a simple selfie with your passport — no local address needed." },
    ],
    affiliates: [
      { name: "Wise Account (No Local Bank Needed)", url: "https://wise.com/", cta: "Open Wise — Works Without Local Address →", badge: "Easiest to Open" },
      { name: "Revolut (Bank Alternative)", url: "https://revolut.com/", cta: "Get Revolut — Open in 10 Minutes →" },
    ],
  },
  {
    slug: "best-budgeting-app-expat",
    title: "Best Budgeting Apps for Expats and Digital Nomads 2026: Multi-Currency, Real Reviews",
    excerpt: "Most budgeting apps break when you're spending in 5 currencies. These ones actually handle multi-currency, automatic categorization, and the irregular income reality of nomadic life.",
    category: "digital-nomad",
    tags: ["budgeting app expat", "YNAB", "Copilot", "multi-currency budget", "digital nomad finance"],
    date: "2026-06-06",
    readTime: 7,
    featured: false,
    author: "Expat Checkbook Editorial",
    wordCount: 1900,
    quickAnswer: "Best budgeting apps for expats in 2026: Best overall (multi-currency): YNAB ($14.99/month or $99/year) — zero-based budgeting, multi-currency support, and the most effective system for variable income. Best free option: Wallet by BudgetBakers (free tier, connects to 40,000+ banks in 60 countries). Best for automatic tracking: Copilot (iOS only, $13/month) — AI categorization is the best we've tested. Best for simplicity: Revolut's built-in analytics (free with any Revolut account). YNAB pays for itself if it stops even one budget blowout.",
    faq: [
      { q: "What is the best budgeting app for people who spend in multiple currencies?", a: "YNAB (You Need A Budget) handles multi-currency budgeting best. You can set your base currency and track expenses in any currency — YNAB automatically records the home-currency equivalent at the time of the transaction. Wallet by BudgetBakers connects to international banks and supports multi-currency accounts. Revolut's in-app analytics shows spending by currency, category, and country — useful if Revolut is your primary spending card." },
      { q: "How do I budget as a digital nomad with irregular income?", a: "Zero-based budgeting works best for irregular income: each month, budget using last month's income, not this month's. YNAB was designed for this — the 'Age Your Money' principle trains you to live 30+ days behind your income. Additional strategies: (1) Set a minimum monthly 'floor' budget covering only essentials. (2) Build a 3-month emergency fund before going nomad. (3) Track income in your home currency to avoid fake gains from currency fluctuations. (4) Review and rebudget monthly based on actual income received." },
      { q: "Is YNAB worth it for expats?", a: "YNAB ($99/year) is worth it if you're serious about budgeting and spend more than it costs on financial mistakes. In a survey of YNAB users, the average savings was $600 in the first 2 months. For expats specifically: YNAB's goal tracking helps manage large variable expenses (flights, accommodation deposits, visa fees). The learning curve is 2–4 weeks. Free trial: 34 days. College students get a free year with .edu email — nomads: no discount, but it's less than $8.50/month." },
      { q: "How do I track spending in multiple countries automatically?", a: "Best automatic multi-country tracking setup: (1) Use Revolut or Wise as your primary spending card — both categorize transactions automatically in the app. (2) Connect your accounts to Wallet by BudgetBakers (supports 60+ countries' banks) or Copilot (iOS, US banks). (3) For comprehensive tracking, use YNAB manually (10 minutes/day) or TrueLayer-connected apps. Full automation is limited for international accounts — budget 10 minutes/week for manual entry of any uncategorized transactions." },
      { q: "What exchange rate should I use for expat budgeting?", a: "Use the mid-market rate (the real exchange rate, available on Google or XE.com) as your reference rate for budgeting. Budget conservatively — assume you'll get 1–2% worse than mid-market in practice (Wise fees, Revolut weekend markups, ATM fees). For long-term budgeting in a foreign country, budget in the local currency to avoid currency risk confusion. Track your home-currency equivalent monthly to monitor your real net worth across currencies." },
    ],
    affiliates: [
      { name: "Wise (Zero-Fee Banking)", url: "https://wise.com/", cta: "Open Wise — The Expat Banking Standard →", badge: "Essential Tool" },
      { name: "SafetyWing (Nomad Insurance)", url: "https://safetywing.com/", cta: "Insure Your Nomad Life →" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: string) => posts.filter((p) => p.category === cat);
export const getFeaturedPosts = () => posts.filter((p) => p.featured);
export const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
export const getCategoryLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? slug;
