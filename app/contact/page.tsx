import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Contact from '@/components/Contact'
import CTABand from '@/components/CTABand'
import { SentIcon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Contact — Request a Private Demo of Invictus',
  description:
    'Request a private demo of Invictus. Tell us about your institution and we will show you how to run accounts, deposits, transactions, lending, branches, and branded portals from one core banking platform.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Request a private demo of Invictus"
        subtitle="Tell us about your institution and we'll show you how Invictus runs accounts, deposits, transactions, lending, branches, and branded portals."
        icon={SentIcon}
        chips={['Private demo', 'Reply within 1 business day', 'No commitment']}
      />
      <Contact />
      <CTABand
        title="Prefer to explore first?"
        subtitle="Browse the features and pricing, then come back to request your private demo whenever you're ready."
      />
    </>
  )
}
