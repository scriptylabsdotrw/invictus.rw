import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import CTABand from '@/components/CTABand'
import { CAL_LINK, WHATSAPP_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a private demo of Invictus and see how to manage customers, loan applications, approvals, disbursements, repayments, accounting and reporting from one platform.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Contact calLink={CAL_LINK} />
      <CTABand
        title="Rather just talk?"
        body="Message our team on WhatsApp and we'll get back to you."
        cta={{ label: 'Chat on WhatsApp', href: WHATSAPP_URL }}
      />
    </>
  )
}
