import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Highlight from '@/components/ui/Highlight'
import Contact from '@/components/Contact'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Contact — Request a Private Demo of Invictus',
  description:
    'Request a private demo of Invictus. Tell us about your institution and we will show you how to run accounts, deposits, transactions, lending, branches, and branded portals from one core banking platform.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={<>Talk to our <Highlight>team</Highlight></>}
        subtitle="Send us a few details and we'll arrange a private walkthrough tailored to your institution."
      />
      <Contact />
      <CTABand
        title="Prefer to explore first?"
        subtitle="Browse the features and pricing, then come back to request your private demo whenever you're ready."
      />
    </>
  )
}
