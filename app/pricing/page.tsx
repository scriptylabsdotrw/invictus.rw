import type { Metadata } from 'next'
import PricingHero from '@/components/pricing/PricingHero'
import PricingPlans from '@/components/pricing/PricingPlans'
import PlanComparison from '@/components/pricing/PlanComparison'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Pricing | Flexible Plans for Financial Institutions',
  description:
    'Invictus plans from RWF 100K per month — Basic, Standard, Corporate and Enterprise. Built for microfinance institutions, SACCOs, banks and lenders.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PlanComparison />
      <FAQ />
      <CTABand title="Get a quote in one call." body="Tell us how you lend today. We'll recommend a plan and send pricing that fits." />
    </>
  )
}
