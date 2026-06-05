import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import DemoTeaser from '@/components/DemoTeaser'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Features — Accounts, Deposits, Transactions & Lending',
  description:
    'Explore Invictus capabilities: customers & accounts, deposits & savings, loans & credit, transactions & payments, teller & cashiering, general ledger, staff roles, branch management, reports, branded portals, and multi-tenant architecture.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="Everything your institution needs"
        subtitle="A complete, secure core banking toolkit — organized into the core pillars that run a modern financial institution."
        chips={['Accounts', 'Deposits', 'Lending', 'Transactions', 'Ledger', 'Branches', 'Portals', 'Mobile']}
      />
      <FeaturesShowcase />
      <DemoTeaser />
      <CTABand />
    </>
  )
}
