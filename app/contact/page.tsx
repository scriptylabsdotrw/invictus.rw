import type { Metadata } from 'next'
import Contact from '@/components/Contact'


export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a private demo of Invictus and see how to manage customers, loan applications, approvals, disbursements, repayments, accounting, and portfolio reporting from one platform.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <Contact calLink="https://cal.com/ikuzwe-shema-elysee-itmmhn/invictus-demo" />
  )
}
