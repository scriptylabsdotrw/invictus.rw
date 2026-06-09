import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import Highlight from '@/components/ui/Highlight'
import { JusticeScaleIcon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Invictus',
  description:
    'The terms and conditions governing your use of the Invictus website, governed by the laws of the Republic of Rwanda.',
  alternates: { canonical: '/terms' },
}

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    heading: 'Acceptance of terms',
    body: (
      <p>
        These Terms and Conditions (“Terms”) govern your access to and use of the Invictus website
        (the “Website”). By accessing or using the Website, you agree to be bound by these Terms. If
        you do not agree with any part of them, please do not use the Website.
      </p>
    ),
  },
  {
    id: 'definitions',
    heading: 'Definitions',
    body: (
      <ul>
        <li>
          <strong>“Invictus”, “we”, “us”</strong> — ScriptyLabs Inc (
          <a href="https://scriptylabs.com" target="_blank" rel="noopener noreferrer">
            scriptylabs.com
          </a>
          ), the operator of the Website and of the Invictus core banking platform.
        </li>
        <li>
          <strong>“Platform”</strong> — the Invictus core banking software, provided to financial
          institutions under a separate written agreement.
        </li>
        <li>
          <strong>“You”</strong> — any person who accesses or uses the Website.
        </li>
      </ul>
    ),
  },
  {
    id: 'use-of-website',
    heading: 'Use of the website',
    body: (
      <p>
        The Website is provided for general information about Invictus and to allow you to request a
        private demo. You agree to use the Website only for lawful purposes and in a manner that does
        not infringe the rights of, or restrict the use of the Website by, any third party.
      </p>
    ),
  },
  {
    id: 'demo-requests',
    heading: 'Demo requests and the platform',
    body: (
      <p>
        Information you submit through the Website (for example, a demo request) does not create any
        contract for the Platform. Access to the Platform is governed by a separate service agreement
        between Invictus and the relevant institution. Demonstrations of the live Platform are
        conducted privately.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    body: (
      <p>
        All content on the Website — including text, graphics, logos, and software — is the property
        of Invictus or its licensors and is protected by applicable intellectual property laws. You
        may not copy, reproduce, or distribute any content without our prior written consent.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Website in any way that breaches applicable laws or regulations;</li>
          <li>Attempt to gain unauthorised access to the Website or its underlying systems;</li>
          <li>Introduce malicious code or otherwise interfere with the Website’s operation; or</li>
          <li>Use the Website to transmit unlawful, harmful, or misleading content.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-protection',
    heading: 'Data protection and privacy',
    body: (
      <p>
        Your use of the Website is also governed by our <a href="/privacy">Privacy Policy</a>. We
        process personal data in accordance with{' '}
        <strong>
          Law N° 058/2021 of 13/10/2021 relating to the protection of personal data and privacy
        </strong>
        . By using the Website, you acknowledge the processing of your data as described in the
        Privacy Policy.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: 'Third-party links and services',
    body: (
      <p>
        The Website may reference third-party systems or contain links to third-party websites. We
        are not responsible for the content, policies, or practices of any third party, and such
        references do not imply endorsement.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer of warranties',
    body: (
      <p>
        The Website is provided on an “as is” and “as available” basis, without warranties of any
        kind, whether express or implied. While we strive to keep information accurate and up to
        date, we do not warrant that the Website will be uninterrupted, error-free, or free of
        harmful components.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    body: (
      <p>
        To the maximum extent permitted by law, Invictus shall not be liable for any indirect,
        incidental, or consequential loss arising from your use of, or inability to use, the
        Website.
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: 'Indemnification',
    body: (
      <p>
        You agree to indemnify and hold harmless Invictus from any claims, damages, or expenses
        arising out of your breach of these Terms or your misuse of the Website.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: 'Governing law and disputes',
    body: (
      <p>
        These Terms are governed by the laws of the <strong>Republic of Rwanda</strong>. Any dispute
        arising from or relating to these Terms or the Website shall be subject to the exclusive
        jurisdiction of the competent courts of Rwanda.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    body: (
      <p>
        We may revise these Terms at any time. The “last updated” date above reflects the most
        recent version. Your continued use of the Website after changes take effect constitutes
        acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <p>Questions about these Terms can be sent to:</p>
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

export default function TermsPage() {
  return (
    <LegalPage
      title={<>Terms & <Highlight>Conditions</Highlight></>}
      subtitle="The terms that govern your use of the Invictus website."
      icon={JusticeScaleIcon}
      lastUpdated="5 June 2026"
      chips={['Governed by Rwandan law']}
      sections={sections}
    />
  )
}
