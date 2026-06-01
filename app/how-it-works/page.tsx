import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import HowItWorks from '@/components/HowItWorks'
import ProductPreview from '@/components/ProductPreview'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'How It Works — From Setup to Live Banking',
  description:
    'Get started with Invictus in four clear steps: create your institution account, configure banking products and the ledger, launch your branded portal, and run banking operations from one platform.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From setup to live banking in four steps"
        subtitle="Onboarding is simple. Your institution can be live on its own branded portal in no time."
      />
      <HowItWorks showHeader={false} />
      <ProductPreview />
      <CTABand />
    </>
  )
}
