import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Pricing from '@/components/Pricing'
import PricingAssurance from '@/components/PricingAssurance'
import ROISection from '@/components/ROISection'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Pricing — Flexible Plans for Financial Institutions',
  description:
    'Flexible Invictus plans for growing institutions — Starter, Growth, and Enterprise. Tailored to microfinance institutions, SACCOs, banks, and lenders. Contact sales for a quote.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Flexible plans for growing institutions"
        subtitle="Start where you are and scale as you grow. Every plan is tailored to your institution — talk to us for a quote that fits."
      />
      <Pricing showHeader={false} />
      <PricingAssurance />
      <ROISection />
      <FAQ limit={5} />
      <CTABand />
    </>
  )
}
