import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Highlight from '@/components/ui/Highlight'
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
        title={<>Everything your institution <Highlight>needs</Highlight></>}
        subtitle="23+ capabilities across core banking, operations, insights, and channels — all in one platform."
      />
      <FeaturesShowcase />
      <DemoTeaser />
      <CTABand />
    </>
  )
}
