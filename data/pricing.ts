import type { IconSvgElement } from '@hugeicons/react'
import { Rocket01Icon, ChartUpIcon, BankIcon } from '@/lib/icons'

export interface Plan {
  name: string
  /** Icon mark shown in the card header. */
  icon: IconSvgElement
  price: string
  cadence?: string
  /** Small note under the price, e.g. "Tailored quote". */
  priceNote?: string
  tagline: string
  /** One-line "who it's for" descriptor shown under the plan name. */
  bestFor: string
  popular?: boolean
  /** Optional "Everything in X, plus" label shown above the feature list. */
  inherits?: string
  features: string[]
  cta: string
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    icon: Rocket01Icon,
    price: 'Contact Sales',
    priceNote: 'Tailored quote — no setup fees',
    tagline: 'For small institutions digitizing their core banking operations.',
    bestFor: 'Small institutions going digital',
    features: [
      '1 institution portal',
      'Up to 2 staff users',
      'Customers & accounts',
      'Deposits & savings',
      'Basic loans & repayments',
      'Standard support',
    ],
    cta: 'Request Demo',
  },
  {
    name: 'Growth',
    icon: ChartUpIcon,
    price: 'Contact Sales',
    priceNote: 'Tailored quote — scale as you grow',
    tagline: 'For active microfinance institutions, SACCOs, and lenders.',
    bestFor: 'Active MFIs, SACCOs & lenders',
    popular: true,
    inherits: 'Everything in Starter, plus',
    features: [
      '1 branded subdomain',
      'Up to 10 staff users',
      'Full deposits, loans & transactions',
      'Teller & cashiering',
      'General ledger & reports',
      'Branch support',
      'Priority support',
    ],
    cta: 'Request Demo',
  },
  {
    name: 'Enterprise',
    icon: BankIcon,
    price: 'Custom Quote',
    priceNote: 'Scoped to your institution',
    tagline: 'For banks, groups, and multi-branch financial institutions.',
    bestFor: 'Banks & multi-branch groups',
    inherits: 'Everything in Growth, plus',
    features: [
      'Multiple branches',
      'Advanced staff roles',
      'Custom products & configurations',
      'Advanced reporting & ledger',
      'Dedicated onboarding',
      'Premium support',
      'Custom integrations',
    ],
    cta: 'Talk to Sales',
  },
]

/** A single capability row. `values` align to the plans above: [Starter, Growth, Enterprise]. */
export interface ComparisonRow {
  label: string
  /** true → included, false → not included, string → specific value shown as text. */
  values: (boolean | string)[]
}

export interface ComparisonGroup {
  category: string
  rows: ComparisonRow[]
}

export const comparison: ComparisonGroup[] = [
  {
    category: 'Core banking',
    rows: [
      { label: 'Customers & accounts', values: [true, true, true] },
      { label: 'Deposits & savings', values: [true, true, true] },
      { label: 'Transactions & transfers', values: [true, true, true] },
      { label: 'Loans & repayments', values: ['Basic', 'Full', 'Advanced'] },
      { label: 'General ledger & accounting', values: [false, true, 'Advanced'] },
    ],
  },
  {
    category: 'Operations',
    rows: [
      { label: 'Staff users', values: ['Up to 2', 'Up to 10', 'Custom roles'] },
      { label: 'Branded subdomain portal', values: [false, true, true] },
      { label: 'Teller & cashiering', values: [false, true, true] },
      { label: 'Branch support', values: [false, 'Single', 'Multiple'] },
      { label: 'Custom products & configuration', values: [false, false, true] },
      { label: 'Reports & dashboards', values: ['Basic', 'Standard', 'Advanced'] },
    ],
  },
  {
    category: 'Integrations & support',
    rows: [
      { label: 'National integrations (NIDA, NLA, credit)', values: [false, false, true] },
      { label: 'Dedicated onboarding', values: [false, false, true] },
      { label: 'Support', values: ['Standard', 'Priority', 'Premium'] },
    ],
  },
]
