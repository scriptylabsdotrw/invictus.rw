import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SolutionSection from '@/components/SolutionSection'
import ProductPreview from '@/components/ProductPreview'
import SubdomainSection from '@/components/SubdomainSection'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Product — Core Banking Platform Overview',
  description:
    'See how Invictus brings customers, accounts, deposits, transactions, lending, the general ledger, staff, branches, reports, and branded portals into one modern multi-tenant core banking platform.',
  alternates: { canonical: '/product' },
}

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="One platform for your entire institution"
        subtitle="From customer onboarding to deposits, transactions, lending, the ledger, branches, and branded portals — Invictus gives banking teams a single, secure operating system."
      />
      <SolutionSection />
      <ProductPreview />
      <SubdomainSection />
      <CTABand />
    </>
  )
}
