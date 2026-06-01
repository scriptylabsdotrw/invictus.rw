export interface Plan {
  name: string
  price: string
  cadence?: string
  tagline: string
  popular?: boolean
  features: string[]
  cta: string
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Contact Sales',
    tagline: 'For small institutions digitizing their core banking operations.',
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
    price: 'Contact Sales',
    tagline: 'For active microfinance institutions, SACCOs, and lenders.',
    popular: true,
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
    price: 'Custom Quote',
    tagline: 'For banks, groups, and multi-branch financial institutions.',
    features: [
      'Multiple branches',
      'Advanced staff roles',
      'Custom products & configurations',
      'Advanced reporting & ledger',
      'Dedicated onboarding',
      'Premium support',
      'Custom integrations (placeholder)',
    ],
    cta: 'Talk to Sales',
  },
]
