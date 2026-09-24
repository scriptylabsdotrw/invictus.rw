import type { IconSvgElement } from "@hugeicons/react";
import {
  BankIcon,
  Layers01Icon,
  BookOpen01Icon,
  Rocket01Icon,
  ChartUpIcon,
  Globe02Icon,
  SecurityCheckIcon,
  Notification01Icon,
} from "@hugeicons/core-free-icons";

/* ----------------------------------------------------------------------------
 * Clients & partners — real institutions only. Add new ones here.
 * ------------------------------------------------------------------------- */

export type ClientCategory = "Microfinance" | "SACCO" | "Lender";

export interface Client {
  name: string;
  category: ClientCategory;
  logo: string;
  description: string;
  website?: string;
}

export const clients: Client[] = [
  {
    name: "Atlas Wealth",
    category: "Microfinance",
    logo: "/images/clients/atlas-wealth.webp",
    description: "Manages its loans on Invictus.",
    website: "https://atlaswealth.rw/",
  },
  {
    name: "Fina Group",
    category: "Microfinance",
    logo: "/images/clients/fina-group.webp",
    description: "Manages its loans on Invictus.",
    website: "https://finagroup.co/",
  },
  {
    name: "Giant Eagle Finance",
    category: "Microfinance",
    logo: "/images/clients/giant-eagle-finance.webp",
    description: "Manages its loans on Invictus.",
    website: "https://www.gianteaglefinance.rw/",
  },
  {
    name: "Umurage Finance Solution",
    category: "Microfinance",
    logo: "/images/clients/umurage-finance-solution.webp",
    description: "Manages its loans on Invictus.",
  },
];

export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "National Land Authority", logo: "/partners/NLA.png" },
  { name: "National ID Agency", logo: "/partners/arms_Rwanda.png" },
  { name: "Data Protection Office", logo: "/partners/logo.jpg" },
  { name: "TransUnion", logo: "/partners/transunion-logo.png" },
];

/* ----------------------------------------------------------------------------
 * FAQ
 * ------------------------------------------------------------------------- */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is Invictus?",
    answer:
      "Invictus is loan management software for financial institutions. Customer onboarding, applications, approvals, disbursements, repayments, penalties, accounting and reporting live in one secure platform.",
  },
  {
    question: "Who is it for?",
    answer:
      "Microfinance institutions, SACCOs and cooperatives, community banks, money lenders and SME lenders across Rwanda and East Africa.",
  },
  {
    question: "Which parts of the loan lifecycle does it cover?",
    answer:
      "All of it. From onboarding and application, through approval and disbursement, to repayment tracking, penalties and portfolio reporting.",
  },
  {
    question: "Do we get our own portal?",
    answer:
      "Yes. On Standard and above, your institution runs on its own subdomain or custom domain — for example yourbank.invictus.rw — with your branding.",
  },
  {
    question: "Is our data kept separate from other institutions?",
    answer:
      "Yes. Invictus is multi-tenant: many institutions share one platform, but each institution's data is isolated from every other.",
  },
  {
    question: "Can we control what each staff member can do?",
    answer:
      "Yes. Set exactly what administrators, managers and loan officers can see and do. Multi-branch institutions also get performance visibility per branch.",
  },
  {
    question: "How is accounting handled?",
    answer:
      "Every loan transaction posts to a double-entry general ledger. Income statement, trial balance and balance sheet are ready when you need them.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a demo. We walk you through the platform, scope your setup, and send a quote that fits your institution.",
  },
];

/* ----------------------------------------------------------------------------
 * Core features
 * ------------------------------------------------------------------------- */

export interface Feature {
  icon: IconSvgElement;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: BankIcon,
    title: "Loans, end to end",
    description:
      "Applications, approvals, disbursements and repayments in one flow. No spreadsheets in between.",
  },
  {
    icon: Globe02Icon,
    title: "Borrower portal",
    description:
      "Your customers see their balance, schedule and history — and pay — from their own portal.",
  },
  {
    icon: Notification01Icon,
    title: "Automatic reminders",
    description:
      "SMS and email reminders go out before each due date. Fewer late payments, fewer calls.",
  },
  {
    icon: BookOpen01Icon,
    title: "Built-in accounting",
    description:
      "A double-entry ledger with income statement, trial balance and balance sheet. Always balanced.",
  },
  {
    icon: ChartUpIcon,
    title: "Reports & analytics",
    description:
      "Portfolio, repayment and performance reports on demand. Custom reports when you need more.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Full audit trail",
    description:
      "Every action is logged: who did it, what changed and when. Ready for any audit.",
  },
];

/* ----------------------------------------------------------------------------
 * Pricing
 * ------------------------------------------------------------------------- */

export interface Plan {
  name: string;
  icon: IconSvgElement;
  price: string;
  /** Billing period shown next to the price, e.g. "/ month". */
  cadence?: string;
  priceNote: string;
  tagline: string;
  popular?: boolean;
  inherits?: string;
  features: string[];
  cta: string;
}

export const plans: Plan[] = [
  {
    name: "Basic",
    icon: Rocket01Icon,
    price: "RWF 100K",
    cadence: "/ month",
    priceNote: "No setup fees.",
    tagline: "For single-branch lenders moving off paper.",
    features: [
      "1 institution portal",
      "Up to 2 staff users",
      "Customer profiles & KYC basics",
      "Loan applications & approvals",
      "Disbursements & repayments",
      "Interest, fees & penalties",
      "Standard support",
    ],
    cta: "Get started",
  },
  {
    name: "Standard",
    icon: ChartUpIcon,
    price: "RWF 150K",
    cadence: "/ month",
    priceNote: "Scales with you.",
    tagline: "For growing lenders that need their own brand and books.",
    popular: true,
    inherits: "Everything in Basic",
    features: [
      "Custom subdomain or domain",
      "Up to 10 staff users",
      "General ledger & accounting",
      "Automated payment reminders",
      "Analytics & reports",
      "National ID (NIDA) verification",
      "National Land Authority (NLA) lookups",
      "Mobile money integration",
      "Priority support",
    ],
    cta: "Get started",
  },
  {
    name: "Corporate",
    icon: Layers01Icon,
    price: "RWF 200K",
    cadence: "/ month",
    priceNote: "Built for branch networks.",
    tagline: "For institutions running more than one branch.",
    inherits: "Everything in Standard",
    features: [
      "Multiple branches",
      "Advanced roles & permissions",
      "Branch performance analytics",
      "National ID (NIDA) verification",
      "National Land Authority (NLA) lookups",
      "Mobile money integration",
      "Premium support",
    ],
    cta: "Get started",
  },
  {
    name: "Enterprise",
    icon: BankIcon,
    price: "Custom quote",
    priceNote: "Scoped to your institution.",
    tagline: "For regulated and large institutions.",
    inherits: "Everything in Corporate",
    features: [
      "Dedicated onboarding",
      "National ID (NIDA) verification",
      "National Land Authority (NLA) lookups",
      "Mobile money integration",
      "Dedicated support team",
      "Custom SLAs",
    ],
    cta: "Talk to sales",
  },
];

/* ----------------------------------------------------------------------------
 * Plan comparison — every row is derived from the plan lists above
 * (each plan includes everything in the plan before it).
 * Values are in plan order: Basic, Standard, Corporate, Enterprise.
 * ------------------------------------------------------------------------- */

export type ComparisonValue = boolean | string;

export interface ComparisonRow {
  label: string;
  info?: string;
  values: [ComparisonValue, ComparisonValue, ComparisonValue, ComparisonValue];
}

export interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

export const comparison: ComparisonGroup[] = [
  {
    category: "Loans & borrowers",
    rows: [
      { label: "Customer profiles & KYC basics", info: "One profile per borrower with their details and documents.", values: [true, true, true, true] },
      { label: "Loan applications & approvals", values: [true, true, true, true] },
      { label: "Disbursements & repayments", values: [true, true, true, true] },
      { label: "Interest, fees & penalties", info: "Configured per loan product and calculated automatically.", values: [true, true, true, true] },
      { label: "Automated payment reminders", info: "Reminders sent to borrowers before each due date.", values: [false, true, true, true] },
    ],
  },
  {
    category: "Portal & brand",
    rows: [
      { label: "Institution portal", values: [true, true, true, true] },
      { label: "Custom subdomain or domain", info: "For example yourbank.invictus.rw, or a domain you own.", values: [false, true, true, true] },
    ],
  },
  {
    category: "Team & branches",
    rows: [
      { label: "Staff users", values: ["Up to 2", "Up to 10", "Scoped to you", "Scoped to you"] },
      { label: "Multiple branches", values: [false, false, true, true] },
      { label: "Advanced roles & permissions", info: "Control exactly what each administrator, manager and loan officer can see and do.", values: [false, false, true, true] },
      { label: "Branch performance analytics", values: [false, false, true, true] },
    ],
  },
  {
    category: "Accounting & reporting",
    rows: [
      { label: "General ledger & accounting", info: "Double-entry ledger with income statement, trial balance and balance sheet.", values: [false, true, true, true] },
      { label: "Analytics & reports", values: [false, true, true, true] },
    ],
  },
  {
    category: "Integrations",
    rows: [
      { label: "National ID (NIDA) verification", info: "Verify borrower identity against the national ID system during onboarding.", values: [false, true, true, true] },
      { label: "National Land Authority (NLA) lookups", info: "Check land and property records for collateral.", values: [false, true, true, true] },
      { label: "Mobile money", info: "Connect disbursements and repayments to mobile money.", values: [false, true, true, true] },
    ],
  },
  {
    category: "Onboarding & support",
    rows: [
      { label: "Support", values: ["Standard", "Priority", "Premium", "Dedicated team"] },
      { label: "Dedicated onboarding", values: [false, false, false, true] },
      { label: "Custom SLAs", info: "Service levels agreed in your contract.", values: [false, false, false, true] },
    ],
  },
];
