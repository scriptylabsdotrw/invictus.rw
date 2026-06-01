import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import FeaturesShowcase, { LedgerSpotlight } from '@/components/FeaturesShowcase'
import ProductPreview from '@/components/ProductPreview'
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
      <PageHeader
        eyebrow="Capabilities"
        title="Everything your institution needs"
        subtitle="A complete, secure core banking toolkit — organized into the three pillars that run a modern financial institution."
      />
      <FeaturesShowcase />
      <LedgerSpotlight />
      <ProductPreview />
      <CTABand />
    </>
  )
}
