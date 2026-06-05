import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { SecurityCheckIcon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Privacy Policy — Invictus',
  description:
    'How Invictus collects, uses, and protects personal data, in accordance with Rwanda’s Law N° 058/2021 relating to the protection of personal data and privacy.',
  alternates: { canonical: '/privacy' },
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: (
      <>
        <p>
          Invictus (“Invictus”, “we”, “us”, or “our”) is a multi-tenant core banking platform and a
          product of <strong>ScriptyLabs Inc</strong> (
          <a href="https://scriptylabs.com" target="_blank" rel="noopener noreferrer">
            scriptylabs.com
          </a>
          ), operated in the Republic of Rwanda. We are committed to protecting your personal data
          and respecting your privacy.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard personal data
          when you visit this website or request a demo, in accordance with{' '}
          <strong>
            Law N° 058/2021 of 13/10/2021 relating to the protection of personal data and privacy
          </strong>{' '}
          and its implementing instruments.
        </p>
        <p>
          For the purposes of this law, Invictus acts as a <strong>data controller</strong> in
          respect of the personal data described below.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    heading: 'Information we collect',
    body: (
      <>
        <p>We may collect the following categories of personal data:</p>
        <ul>
          <li>
            <strong>Contact and identification data</strong> — your name, company name, email
            address, and phone number when you request a demo or contact us.
          </li>
          <li>
            <strong>Institution data</strong> — your business type and number of staff, used to
            tailor a demonstration to your institution.
          </li>
          <li>
            <strong>Message content</strong> — any information you choose to include in a message
            to us.
          </li>
          <li>
            <strong>Technical data</strong> — limited information such as your device, browser, and
            pages visited, collected to operate and secure the website.
          </li>
        </ul>
        <p>
          We do not knowingly collect, through this website, the personal data of the customers of
          financial institutions. Such data is processed only within the Invictus platform under a
          separate agreement with each institution.
        </p>
      </>
    ),
  },
  {
    id: 'lawful-basis',
    heading: 'Lawful basis and consent',
    body: (
      <>
        <p>
          We process personal data only where we have a lawful basis to do so. In most cases we
          rely on your <strong>consent</strong>, which under <strong>Article 6</strong> of Law N°
          058/2021 must be freely given, specific, informed, and unambiguous. You may withdraw your
          consent at any time.
        </p>
        <p>
          We may also process data where necessary for our legitimate interest in responding to
          your enquiry, or to comply with a legal obligation. All processing follows the principles
          set out in <strong>Article 37</strong> of the law — lawfulness, fairness, transparency,
          purpose limitation, data minimisation, accuracy, storage limitation, and security.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    body: (
      <>
        <ul>
          <li>To respond to your demo requests and enquiries;</li>
          <li>To arrange and conduct a private product demonstration;</li>
          <li>To communicate with you about our services;</li>
          <li>To operate, maintain, and secure this website; and</li>
          <li>To comply with applicable laws and regulatory obligations.</li>
        </ul>
        <p>
          We do not sell your personal data, and we do not use it for automated decision-making
          that produces legal effects concerning you.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    heading: 'Your rights as a data subject',
    body: (
      <>
        <p>
          Under Law N° 058/2021, you have the following rights in respect of your personal data:
        </p>
        <ul>
          <li>
            <strong>Right of access</strong> — to obtain the personal data we hold about you
            (<strong>Article 18</strong>);
          </li>
          <li>
            <strong>Right to object</strong> — to object to the processing of your data
            (<strong>Article 19</strong>);
          </li>
          <li>
            <strong>Right to restriction</strong> — to restrict processing in certain circumstances
            (<strong>Article 22</strong>);
          </li>
          <li>
            <strong>Right to erasure</strong> — to request deletion of your data
            (<strong>Article 23</strong>);
          </li>
          <li>
            <strong>Right to rectification</strong> — to correct inaccurate or incomplete data
            (<strong>Article 24</strong>).
          </li>
        </ul>
        <p>
          When we collect your data, we provide the information required under{' '}
          <strong>Article 42</strong> — including our identity, the purposes of processing, the
          recipients, and your right to withdraw consent. To exercise any right, contact us at{' '}
          <a href="mailto:demo@invictus.rw">demo@invictus.rw</a>.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    heading: 'Sharing and disclosure',
    body: (
      <>
        <p>We may share personal data with:</p>
        <ul>
          <li>
            Trusted service providers who process data on our behalf, under appropriate
            confidentiality and data-processing terms;
          </li>
          <li>Competent public authorities, where required by law; and</li>
          <li>
            National systems we integrate with, only where you or your institution have authorised
            such processing.
          </li>
        </ul>
        <p>
          Any data processor acting on our behalf is bound to process personal data only on our
          documented instructions.
        </p>
      </>
    ),
  },
  {
    id: 'cross-border',
    heading: 'Cross-border transfers',
    body: (
      <p>
        Where personal data is shared or transferred outside Rwanda, we do so in accordance with{' '}
        <strong>Article 48</strong> of Law N° 058/2021 — only where adequate protection is ensured,
        with appropriate safeguards, and, where required, with the authorisation of the supervisory
        authority.
      </p>
    ),
  },
  {
    id: 'security',
    heading: 'Data security',
    body: (
      <p>
        We implement appropriate technical and organisational measures to protect personal data
        against unauthorised access, alteration, disclosure, or destruction, as required by{' '}
        <strong>Article 47</strong> of the law. These include role-based access controls,
        encryption, audit trails, and tenant isolation across the platform.
      </p>
    ),
  },
  {
    id: 'breach',
    heading: 'Data breach notification',
    body: (
      <p>
        In the event of a personal data breach, we act in accordance with <strong>Article 43</strong>{' '}
        and <strong>Article 44</strong> of Law N° 058/2021 — notifying the supervisory authority and,
        where the breach is likely to result in a high risk to your rights and freedoms, informing
        affected data subjects without undue delay.
      </p>
    ),
  },
  {
    id: 'retention',
    heading: 'Data retention',
    body: (
      <p>
        We retain personal data only for as long as necessary for the purposes for which it was
        collected, in line with <strong>Article 50</strong> (storage of personal data) and{' '}
        <strong>Article 52</strong> (retention of personal data) of the law. When data is no longer
        required, we securely delete or anonymise it.
      </p>
    ),
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    body: (
      <p>
        This website uses only essential cookies necessary for its operation and security. We do not
        use cookies for advertising. You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    id: 'supervisory-authority',
    heading: 'Supervisory authority and complaints',
    body: (
      <>
        <p>
          The supervisory authority for personal data protection in Rwanda is the{' '}
          <strong>National Cyber Security Authority (NCSA)</strong>, acting through the{' '}
          <strong>Data Protection and Privacy Office</strong>, whose duties and powers are set out in{' '}
          <strong>Article 27</strong> and <strong>Article 28</strong> of Law N° 058/2021.
        </p>
        <p>
          If you believe your data protection rights have been infringed, you may lodge a complaint
          with the supervisory authority. We encourage you to contact us first so we can address
          your concern.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. The “last updated” date above reflects
        the most recent revision. Material changes will be communicated through this website.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <p>To exercise your rights or ask about this Privacy Policy, contact us:</p>
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

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal data — in line with Rwanda’s data protection law."
      icon={SecurityCheckIcon}
      lastUpdated="5 June 2026"
      chips={['Aligned with Law N° 058/2021']}
      sections={sections}
    />
  )
}
