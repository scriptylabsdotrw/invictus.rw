import type { IconSvgElement } from "@hugeicons/react";
import {
  UserMultipleIcon,
  BankIcon,
  ArrowDataTransferHorizontalIcon,
  Layers01Icon,
  BookOpen01Icon,
  Rocket01Icon,
  ChartUpIcon,
  Globe02Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";

export type ClientAccent = "orange" | "sky" | "emerald";

export interface Client {
  name: string;
  badge: string;
  accent: ClientAccent;
  logo: string;
  website?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is Invictus?",
    answer:
      "Invictus is a modern loan management system for financial institutions. It brings customer onboarding, loan applications, approvals, disbursements, repayments, penalties, accounting, reporting, and branded customer portals together in one secure platform.",
  },
  {
    question: "Who is Invictus built for?",
    answer:
      "Invictus is designed for microfinance institutions, SACCOs and cooperatives, community banks, money lenders, SME lenders, and other financial service providers across Rwanda and East Africa.",
  },
  {
    question: "What parts of the loan lifecycle does Invictus cover?",
    answer:
      "Invictus helps institutions manage loans from customer onboarding and application through approval, disbursement, repayment tracking, penalties, and portfolio reporting.",
  },
  {
    question: "Can each institution get its own portal?",
    answer:
      "Yes. Every institution can operate under its own branded subdomain or custom domain for example yourbank.invictus.rw or yourbank.co.rw while still being powered by the central Invictus platform.",
  },
  {
    question: "Does Invictus support multiple institutions?",
    answer:
      "Absolutely. Invictus is a multi-tenant platform. It can serve many institutions from one scalable system while keeping each tenant’s data cleanly separated.",
  },
  {
    question: "Can staff roles and branches be managed?",
    answer:
      "You can control exactly what administrators, managers, and loan officers can do, and operate multiple branches with performance visibility across the network.",
  },
  {
    question: "How are accounting and reports handled?",
    answer:
      "Every loan transaction posts to a double-entry general ledger, while reports and dashboards help teams monitor their loan portfolio, repayments, and lending performance.",
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
    icon: Globe02Icon,
    title: "Client Portal App",
    description:
      "Client Portal for your Customers to track and Pay  Their Loans",
  },
  {
    icon: Layers01Icon,
    title: "Payment Reminders & Notifications",
    description:
      "Customers Receive automated payment reminders and notifications via SMS and email.",
  },
  {
    icon: BankIcon,
    title: "Loans",
    description:
      "Loan applications,approvals,payments,disbursements and Payment Tracking",
  },

  {
    icon: BookOpen01Icon,
    title: "Accounting",
    description:
      "Double-entry general ledger, income statement,trial balance and balance sheet.",
  },
  {
    icon: ChartUpIcon,
    title: "Reporting & Analytics",
    description:
      " Analytics and  performance reports, advanced/custom reporting.",
  },

  {
    icon: SecurityCheckIcon,
    title: "Audit Trail & Activity Logs",
    description:
      "Track who performed each action, what changed, and when it happened with detailed included.",
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
    name: "Basic",
    icon: Rocket01Icon,
    price: "Contact Sales",
    priceNote: "Tailored quote no setup fees",
    tagline: "Single-branch lenders, manual ops.",
    bestFor: "Small institutions going digital",
    features: [
      "1 institution portal, up to 2 staff users",
      "Customer profiles & KYC basics",
      "Loan applications & approvals",
      "Disbursements & repayments",
      "Interest, fees & penalties",
      "Standard support",
    ],
    cta: "Get A Quote",
  },
  {
    name: "Standard",
    icon: ChartUpIcon,
    price: "Contact Sales",
    priceNote: "Tailored quote scale as you grow",
    tagline: "Growing lenders needing branding + finance.",
    bestFor: "Active MFIs, SACCOs & lenders",
    popular: true,
    inherits: "Everything in Basic",
    features: [
      "Custom subdomain/domain",
      "Up to 10 Staff Members",
      "General ledger & accounting",
      "Automated payment reminders & notifications",
      "Analytics & Reports",
      "Priority support",
    ],
    cta: "Get A Quote",
  },
  {
    name: "Corporate",
    icon: Layers01Icon,
    price: "Contact Sales",
    priceNote: "Tailored quote for growing networks",
    tagline: "Multi-branch institutions.",
    bestFor: "Multi-branch MFIs & lenders",
    inherits: "Everything in Standard",
    features: [
      "Multiple branches ",
      "Advanced staff roles & permissions",
      "Branch performance Analytics",
      "Premium support",
    ],
    cta: "Get A Quote",
  },
  {
    name: "Enterprise",
    icon: BankIcon,
    price: "Custom Quote",
    priceNote: "Scoped to your institution",
    tagline: "Regulated/large institutions.",
    bestFor: "Banks & large financial groups",
    inherits: "Everything in Corporate",
    features: [
      "Dedicated onboarding",
      "National ID & MOMO integrations",
      "Dedicated support team",
      "Custom SLAs",
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
    category: "Loan management",
    rows: [
      { label: "Customers & loan profiles", values: [true, true, true] },
      { label: "Loan applications", values: [true, true, true] },
      { label: "Repayment tracking", values: [true, true, true] },
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
