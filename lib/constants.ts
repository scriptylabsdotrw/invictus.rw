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
    icon: UserMultipleIcon,
    title: "Customers",
    description:
      "Onboard customers,KYC Verification and National ID Verification.",
  },
  {
    icon: BankIcon,
    title: "Loans",
    description:
      "Create, approve, disburse, and track loans with payments, and penalties handled end to end.",
  },
  {
    icon: ArrowDataTransferHorizontalIcon,
    title: "Repayment Tracking",
    description:
      "Track loan repayments and keep each customer's payment history in one place.",
  },
  {
    icon: PercentCircleIcon,
    title: "Interest, Fees & Charges",
    description: "Configure interest, fees, and penalties and charges",
  },
  {
    icon: BookOpen01Icon,
    title: "General Ledger & Accounting",
    description:
      "A double-entry general ledger keeps loan transactions balanced and your books audit-ready.",
  },
  {
    icon: Layers01Icon,
    title: "Payment Reminders & Notifications",
    description:
      "Customers Receive automated payment reminders and notifications via SMS and email.",
  },
  {
    icon: Globe02Icon,
    title: "Branded Portals",
    description:
      "Operate under your own branded subdomain or custom domain with your  logo, and brand colors to have a familiar experience.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Audit Trail & Activity Logs",
    description:
      "Track who performed each action, what changed, and when it happened with detailed activity logs.",
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
    priceNote: "Tailored quote no setup fees",
    tagline: "For small institutions digitizing their loan operations.",
    bestFor: "Small institutions going digital",
    features: [
      "1 institution portal",
      "Up to 2 staff users",
      "Customers & loan profiles",
      "Loan applications & approvals",
      "Loan disbursements & repayments",     
      "Interest, fees & penalties",
      "Standard support",
    ],
    cta: "Request Demo",
  },
  {
    name: "Growth",
    icon: ChartUpIcon,
    price: "Contact Sales",
    priceNote: "Tailored quote no scale as you grow",
    tagline: "For active microfinance institutions, SACCOs, and lenders.",
    bestFor: "Active MFIs, SACCOs & lenders",
    popular: true,
    inherits: "Everything in Starter, plus",
    features: [
      "1 branded subdomain or custom domain",
      "Up to 10 staff users",
      "Full loan management workflow",
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
    tagline: "For lenders, groups, and multi-branch financial institutions.",
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
      "Invictus gives us a single, real-time view of every customer and loan. It finally feels like a lending system built for how we actually operate.",
    name: "A. Mukamana",
    role: "Microfinance CEO",
    initials: "AM",
    image: unsplash("1573497019418-b400bb3ab074"),
  },
  {
    quote:
      "We replaced a patchwork of spreadsheets and disconnected tools. Now applications, disbursements, and repayments are managed in one place.",
    name: "J. Habimana",
    role: "Head of Operations",
    initials: "JH",
    image: unsplash("1495603889488-42d1d66e5523"),
  },
  {
    quote:
      "Our loan officers move faster because customer details, repayment schedules, and loan activity are easy to follow.",
    name: "C. Uwase",
    role: "Branch Manager",
    initials: "CU",
    image: unsplash("1611432579402-7037e3e2c1e4"),
  },
  {
    quote:
      "The reporting and general ledger give leadership the portfolio visibility we need to grow with confidence across multiple branches.",
    name: "D. Niyonzima",
    role: "Finance Director",
    initials: "DN",
    image: unsplash("1605602517387-ec78b947335e"),
  },
];
