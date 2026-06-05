import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import HowItWorks from '@/components/HowItWorks'
import DemoTeaser from '@/components/DemoTeaser'
import CTABand from '@/components/CTABand'
import { Rocket01Icon } from '@/lib/icons'

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
        title="From setup to live banking in four steps"
        subtitle="Onboarding is simple. Your institution can be live on its own branded portal in no time."
        icon={Rocket01Icon}
        chips={['Onboard', 'Configure', 'Launch', 'Operate']}
      />
      <HowItWorks showHeader={false} />
      <DemoTeaser />
      <CTABand />
    </>
  )
}
