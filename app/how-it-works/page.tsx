import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Highlight from '@/components/ui/Highlight'
import HowItWorks from '@/components/HowItWorks'
import DemoTeaser from '@/components/DemoTeaser'
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
      <PageHero
        title={<>From setup to live <Highlight>banking</Highlight> in four steps</>}
        subtitle="Your institution can be live on its own branded portal in no time — and run full banking operations from day one."
      />
      <HowItWorks showHeader={false} />
      <DemoTeaser />
      <CTABand />
    </>
  )
}
