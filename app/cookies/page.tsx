import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import Highlight from '@/components/ui/Highlight'
import { CookieIcon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Cookie Policy — Invictus',
  description:
    'How the Invictus website uses cookies and similar technologies, and how you can control them — in line with Rwanda’s Law N° 058/2021.',
  alternates: { canonical: '/cookies' },
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: (
      <>
        <p>
          This Cookie Policy explains how the Invictus website (the “Website”) — operated by{' '}
          <strong>ScriptyLabs Inc</strong> (
          <a href="https://scriptylabs.com" target="_blank" rel="noopener noreferrer">
            scriptylabs.com
          </a>
          ) — uses cookies and similar technologies when you visit.
        </p>
        <p>
          It should be read together with our <a href="/privacy">Privacy Policy</a>, which explains
          how we process personal data in accordance with{' '}
          <strong>
            Law N° 058/2021 of 13/10/2021 relating to the protection of personal data and privacy
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    id: 'what-are-cookies',
    heading: 'What cookies are',
    body: (
      <p>
        Cookies are small text files that a website places on your device to store information. They
        let a site remember your actions and preferences over time. Similar technologies — such as
        local storage and pixels — perform comparable functions, and we refer to all of them as
        “cookies” in this policy.
      </p>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use cookies',
    body: (
      <>
        <p>
          The Invictus website is intentionally light on cookies. We use them only to operate and
          secure the site — not to build advertising profiles. Specifically, we use cookies to:
        </p>
        <ul>
          <li>Keep the Website secure and protect against fraudulent or abusive requests;</li>
          <li>Remember essential preferences, such as dismissing a notice;</li>
          <li>Understand, in aggregate, how the Website is used so we can improve it.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'categories',
    heading: 'Categories of cookies we use',
    body: (
      <>
        <ul>
          <li>
            <strong>Strictly necessary</strong> — required for the Website to function and to keep
            it secure. These cannot be switched off through our systems.
          </li>
          <li>
            <strong>Preference</strong> — remember choices you make to give you a more personal
            experience, such as hiding a banner you have already seen.
          </li>
          <li>
            <strong>Analytics</strong> — help us understand, in aggregate and without identifying
            you, how visitors interact with the Website so we can improve it.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> use advertising or cross-site tracking cookies, and we do not
          sell any information collected through cookies.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-party cookies',
    body: (
      <p>
        Some pages may rely on trusted third-party services — for example, embedded fonts or content
        delivery networks — that can set their own cookies. We only work with providers that handle
        data under appropriate confidentiality and data-protection terms, as described in our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: 'managing',
    heading: 'Managing your cookies',
    body: (
      <>
        <p>
          You are in control. Most browsers let you view, manage, block, and delete cookies through
          their settings. You can usually find these controls in the “Privacy” or “Security” section
          of your browser’s preferences.
        </p>
        <p>
          Please note that blocking strictly necessary cookies may affect how parts of the Website
          function. For guidance on managing cookies in your specific browser, refer to its help
          documentation.
        </p>
      </>
    ),
  },
  {
    id: 'consent',
    heading: 'Your consent',
    body: (
      <p>
        Where required by <strong>Law N° 058/2021</strong>, we rely on your consent for any
        non-essential cookies, which you may withdraw at any time by adjusting your browser settings.
        Strictly necessary cookies do not require consent, as they are essential to deliver a service
        you have requested.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology or the
        law. The “last updated” date above reflects the most recent revision.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <p>Questions about our use of cookies can be sent to:</p>
        <ul>
          <li>
            Email: <a href="mailto:demo@invictus.rw">demo@invictus.rw</a>
          </li>
          <li>Phone: +250 780 226 666</li>
          <li>Address: Kigali, Rwanda</li>
        </ul>
      </>
    ),
  },
]

export default function CookiesPage() {
  return (
    <LegalPage
      title={<><Highlight>Cookie</Highlight> Policy</>}
      subtitle="How we use cookies on the Invictus website — and how you stay in control."
      icon={CookieIcon}
      lastUpdated="23 June 2026"
      chips={['Essential cookies only', 'No ad tracking']}
      sections={sections}
    />
  )
}
