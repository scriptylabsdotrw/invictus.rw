import type { Metadata } from 'next'
import Contact from '@/components/Contact'

function getCalLink() {
  const eventUrl = process.env.CAL_COM_EVENT_URL

  if (!eventUrl) {
    throw new Error('CAL_COM_EVENT_URL is required to build the contact page.')
  }

  try {
    const url = new URL(eventUrl)
    if (!['cal.com', 'www.cal.com', 'app.cal.com'].includes(url.hostname)) {
      throw new Error('Unsupported Cal.com host')
    }

    const calLink = `${url.pathname}${url.search}`.replace(/^\/+/, '')
    if (!calLink) throw new Error('Missing event path')
    return calLink
  } catch {
    throw new Error('CAL_COM_EVENT_URL must be a valid Cal.com event URL.')
  }
}

export const metadata: Metadata = {
  title: 'Contact — Book a Private Demo of Invictus',
  description:
    'Book a private demo of Invictus and see how to run accounts, deposits, transactions, lending, branches, and branded portals from one core banking platform.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const calLink = getCalLink()

  return (
    <Contact calLink={calLink} />
  )
}
