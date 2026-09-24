import type { IconSvgElement } from "@hugeicons/react";
import {
  BankIcon,
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
