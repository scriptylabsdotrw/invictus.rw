import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'FAQ — Common Questions About Invictus',
  description:
    'Answers to common questions about Invictus: who it is built for, branded portals, multi-tenant architecture, deposits and transactions, the general ledger, staff roles, branch support, and how to request a demo.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        subtitle="Everything financial institutions ask before getting started with Invictus."
      />
      <FAQ />
      <CTABand />
    </>
  )
}
