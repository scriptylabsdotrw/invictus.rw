import type { IconSvgElement } from "@hugeicons/react";
import {
  UserMultipleIcon,
  PiggyBankIcon,
  BankIcon,
  ArrowDataTransferHorizontalIcon,
  Wallet01Icon,
  PercentCircleIcon,
  SecurityCheckIcon,
  Building03Icon,
  Analytics01Icon,
  Globe02Icon,
  Layers01Icon,
  BookOpen01Icon,
  Rocket01Icon,
  ChartUpIcon,
} from "@/lib/icons";

export type ClientAccent = "orange" | "sky" | "emerald";

export interface Client {
  name: string;
  badge: string;
  accent: ClientAccent;
  logo: string;
  website?: string;
}

export const clientsRowOne: Client[] = [
  {
    name: "Atlas Wealth",
    badge: "Microfinance",
    accent: "sky",
    logo: "/clients/atlas_logo.png",
    website: "https://atlaswealth.rw/",
  },
  {
    name: "Fina Group",
    badge: "Microfinance",
    accent: "emerald",
    logo: "/clients/FINAGROUP.webp",
    website: "https://finagroup.co/",
  },
  {
    name: "Giant Eagle Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/GEF_LOG.jpg-removebg-preview.png",
    website: "https://www.gianteaglefinance.rw/",
  },
  {
    name: "Umurage Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/umuragefinance.webp",
  },
];

export const clientsRowTwo: Client[] = [
  {
    name: "Giant Eagle Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/GEF_LOG.jpg-removebg-preview.png",
    website: "https://www.gianteaglefinance.rw/",
  },
  {
    name: "Umurage Finance",
    badge: "Microfinance",
    accent: "orange",
    logo: "/clients/umuragefinance.webp",
  },
  {
    name: "Fina Group",
    badge: "Microfinance",
    accent: "emerald",
    logo: "/clients/FINAGROUP.webp",
    website: "https://finagroup.co/",
  },
  {
    name: "Atlas Wealth",
    badge: "Microfinance",
    accent: "sky",
    logo: "/clients/atlas_logo.png",
    website: "https://atlaswealth.rw/",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is Invictus?",
    answer:
      "Invictus is a cloud core banking system for financial institutions. It brings customers, accounts, deposits, transactions, lending, the general ledger, staff, branches, reports, and branded customer portals together in one secure platform.",
  },
  {
    question: "Who is Invictus built for?",
    answer:
      "Invictus is designed for microfinance institutions, SACCOs and cooperatives, community banks, money lenders, SME lenders, and other financial service providers across Rwanda and East Africa.",
  },
  {
    question: "Is Invictus a full core banking system?",
    answer:
      "Yes. Invictus covers core banking end to end — customer and account management, deposits and savings, loans and credit, transactions and payments, teller operations, and a real double-entry general ledger.",
  },
  {
    question: "Can each institution get its own portal?",
    answer:
      "Yes. Every institution can operate under its own branded subdomain — for example yourbank.invictus.rw — while still being powered by the central Invictus platform.",
  },
  {
    question: "Does Invictus support multiple institutions?",
    answer:
      "Absolutely. Invictus is a multi-tenant platform. It can serve many institutions from one scalable system while keeping each tenant’s data cleanly separated.",
  },
  {
    question: "Does it handle deposits and transactions, not just loans?",
    answer:
      "Yes. Deposits, savings, withdrawals, transfers, and payments are all first-class — posted in real time to the general ledger alongside lending.",
  },
  {
    question: "Can staff roles and branches be managed?",
    answer:
      "You can control exactly what administrators, managers, tellers, and officers can do, and operate multiple branches with performance visibility across the network.",
  },
  {
    question: "How are reports and the ledger handled?",
    answer:
      "Every transaction posts to a double-entry general ledger, so your books stay balanced and audit-ready. Portfolio, deposit, transaction, and income reports are available on demand.",
  },
  {
    question: "Is there a backend in this project?",
    answer:
      "This website is a frontend showcase. It uses polished mock content and frontend-only interactions to demonstrate the Invictus experience, without a live backend, database, or real API.",
  },
  {
    question: "How can an institution request a demo?",
    answer:
      "Complete the demo request form in the Contact section. Tell us about your institution and the Invictus team will walk you through the platform.",
  },
];

export interface Feature {
  icon: IconSvgElement;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: UserMultipleIcon,
    title: "Customers & Accounts",
    description:
      "Onboard customers with KYC, open multiple account types, and keep every profile, document, and balance in one place.",
  },
  {
    icon: PiggyBankIcon,
    title: "Deposits & Savings",
    description:
      "Run savings, current, and fixed-deposit products with automated interest accrual and clear balances.",
  },
  {
    icon: BankIcon,
    title: "Loans & Credit",
    description:
      "Originate, approve, disburse, and track loans — with repayments, arrears, and penalties handled end to end.",
  },
  {
    icon: ArrowDataTransferHorizontalIcon,
    title: "Transactions & Payments",
    description:
      "Process deposits, withdrawals, transfers, and payments in real time, posted straight to the ledger.",
  },
  {
    icon: Wallet01Icon,
    title: "Teller & Cashiering",
    description:
      "Give branch tellers fast, controlled cash operations with day-open, day-close, and cash position tracking.",
  },
  {
    icon: PercentCircleIcon,
    title: "Interest, Fees & Charges",
    description:
      "Configure interest, fees, and penalties per product so income and customer charges are always accurate.",
  },
  {
    icon: BookOpen01Icon,
    title: "General Ledger & Accounting",
    description:
      "A real double-entry general ledger keeps every transaction balanced and your books audit-ready.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Staff & Role Management",
    description:
      "Control exactly what administrators, managers, tellers, and officers can access with granular roles.",
  },
  {
    icon: Building03Icon,
    title: "Branch Management",
    description:
      "Operate multiple branches, assign teams, and monitor performance across your whole network.",
  },
  {
    icon: Analytics01Icon,
    title: "Reports & Analytics",
    description:
      "Portfolio, deposits, transactions, income, and regulatory-style reports — ready whenever you need them.",
  },
  {
    icon: Globe02Icon,
    title: "Branded Customer Portals",
    description:
      "Give every institution its own professional portal on a subdomain such as yourbank.invictus.rw.",
  },
  {
    icon: Layers01Icon,
    title: "Multi-Tenant Architecture",
    description:
      "Serve many institutions from one scalable platform while keeping each tenant’s data fully separate.",
  },
];
export interface Plan {
  name: string;
  icon: IconSvgElement;
  price: string;
  cadence?: string;
  priceNote?: string;
  tagline: string;
  bestFor: string;
  popular?: boolean;
  inherits?: string;
  features: string[];
  cta: string;
}

export const plans: Plan[] = [
  {
    name: "Starter",
    icon: Rocket01Icon,
    price: "Contact Sales",
    priceNote: "Tailored quote — no setup fees",
    tagline: "For small institutions digitizing their core banking operations.",
    bestFor: "Small institutions going digital",
    features: [
      "1 institution portal",
      "Up to 2 staff users",
      "Customers & accounts",
      "Deposits & savings",
      "Basic loans & repayments",
      "Standard support",
    ],
    cta: "Request Demo",
  },
  {
    name: "Growth",
    icon: ChartUpIcon,
    price: "Contact Sales",
    priceNote: "Tailored quote — scale as you grow",
    tagline: "For active microfinance institutions, SACCOs, and lenders.",
    bestFor: "Active MFIs, SACCOs & lenders",
    popular: true,
    inherits: "Everything in Starter, plus",
    features: [
      "1 branded subdomain",
      "Up to 10 staff users",
      "Full deposits, loans & transactions",
      "Teller & cashiering",
      "General ledger & reports",
      "Branch support",
      "Priority support",
    ],
    cta: "Request Demo",
  },
  {
    name: "Enterprise",
    icon: BankIcon,
    price: "Custom Quote",
    priceNote: "Scoped to your institution",
    tagline: "For banks, groups, and multi-branch financial institutions.",
    bestFor: "Banks & multi-branch groups",
    inherits: "Everything in Growth, plus",
    features: [
      "Multiple branches",
      "Advanced staff roles",
      "Custom products & configurations",
      "Advanced reporting & ledger",
      "Dedicated onboarding",
      "Premium support",
      "Custom integrations",
    ],
    cta: "Talk to Sales",
  },
];

export interface ComparisonRow {
  label: string;
  values: (boolean | string)[];
}
export interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}
export const comparison: ComparisonGroup[] = [
  {
    category: "Core banking",
    rows: [
      { label: "Customers & accounts", values: [true, true, true] },
      { label: "Deposits & savings", values: [true, true, true] },
      { label: "Transactions & transfers", values: [true, true, true] },
      { label: "Loans & repayments", values: ["Basic", "Full", "Advanced"] },
      {
        label: "General ledger & accounting",
        values: [false, true, "Advanced"],
      },
    ],
  },
  {
    category: "Operations",
    rows: [
      { label: "Staff users", values: ["Up to 2", "Up to 10", "Custom roles"] },
      { label: "Branded subdomain portal", values: [false, true, true] },
      { label: "Teller & cashiering", values: [false, true, true] },
      { label: "Branch support", values: [false, "Single", "Multiple"] },
      {
        label: "Custom products & configuration",
        values: [false, false, true],
      },
      {
        label: "Reports & dashboards",
        values: ["Basic", "Standard", "Advanced"],
      },
    ],
  },
  {
    category: "Integrations & support",
    rows: [
      {
        label: "National integrations (NIDA, NLA, credit)",
        values: [false, false, true],
      },
      { label: "Dedicated onboarding", values: [false, false, true] },
      { label: "Support", values: ["Standard", "Priority", "Premium"] },
    ],
  },
];
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  image: string;
}
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=480&h=480&fit=crop&crop=faces&auto=format&q=80`;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Invictus gives us a single, real-time view of every customer, account, deposit, and loan. It finally feels like a banking system built for how we actually operate.",
    name: "A. Mukamana",
    role: "Microfinance CEO",
    initials: "AM",
    image: unsplash("1573497019418-b400bb3ab074"),
  },
  {
    quote:
      "We replaced a patchwork of spreadsheets and disconnected tools. Now deposits, transactions, and lending all post to one ledger — and our books balance every day.",
    name: "J. Habimana",
    role: "Head of Operations",
    initials: "JH",
    image: unsplash("1495603889488-42d1d66e5523"),
  },
  {
    quote:
      "Our tellers move faster and our branch numbers reconcile instantly. Day-open and day-close that used to take hours now take minutes.",
    name: "C. Uwase",
    role: "Branch Manager",
    initials: "CU",
    image: unsplash("1611432579402-7037e3e2c1e4"),
  },
  {
    quote:
      "The reporting and general ledger give leadership the visibility we needed to grow with confidence across multiple branches.",
    name: "D. Niyonzima",
    role: "Finance Director",
    initials: "DN",
    image: unsplash("1605602517387-ec78b947335e"),
  },
];
