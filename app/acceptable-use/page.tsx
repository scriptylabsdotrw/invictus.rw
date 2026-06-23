import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import Highlight from '@/components/ui/Highlight'
import { Agreement01Icon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — Invictus',
  description:
    'The rules governing acceptable use of the Invictus website and platform — prohibited activities, security, and enforcement, under the laws of the Republic of Rwanda.',
  alternates: { canonical: '/acceptable-use' },
}

const sections: LegalSection[] = [
  {
    id: 'purpose',
    heading: 'Purpose and scope',
    body: (
      <>
        <p>
          This Acceptable Use Policy (“AUP”) sets out the standards that apply to everyone who
          accesses the Invictus website (the “Website”) or, where applicable, the Invictus core
          banking platform (the “Platform”). It exists to keep our services secure, lawful, and
          available to all users.
        </p>
        <p>
          This AUP forms part of, and should be read together with, our{' '}
          <a href="/terms">Terms &amp; Conditions</a>. Where you access the Platform under a separate
          service agreement, that agreement and this AUP apply together.
        </p>
      </>
    ),
  },
  {
    id: 'general',
    heading: 'General principles',
    body: (
      <p>
        You must use our services lawfully, responsibly, and in good faith. You are responsible for
        all activity carried out under your access, and for ensuring that anyone you authorise also
        complies with this AUP. You must not use our services in any way that harms Invictus, our
        users, or any third party.
      </p>
    ),
  },
  {
    id: 'prohibited',
    heading: 'Prohibited activities',
    body: (
      <>
        <p>You must not use the Website or Platform to:</p>
        <ul>
          <li>
            Breach any applicable law or regulation, including the laws of the{' '}
            <strong>Republic of Rwanda</strong>;
          </li>
          <li>
            Facilitate money laundering, terrorist financing, fraud, or any other financial crime;
          </li>
          <li>
            Infringe the intellectual property, privacy, or other rights of any person or
            institution;
          </li>
          <li>
            Upload, transmit, or distribute unlawful, defamatory, harmful, or misleading content;
          </li>
          <li>Impersonate any person or organisation, or misrepresent your affiliation;</li>
          <li>
            Collect or harvest personal data of others without a lawful basis and proper consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    heading: 'Security and system integrity',
    body: (
      <>
        <p>You must not, and must not attempt to:</p>
        <ul>
          <li>Gain unauthorised access to any account, system, or network we operate;</li>
          <li>
            Probe, scan, or test the vulnerability of our systems, or breach any security or
            authentication measure;
          </li>
          <li>
            Introduce viruses, malware, or any other malicious or disruptive code into our services;
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Website or Platform — for
            example, through denial-of-service attacks or excessive automated requests;
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with rate limits, access controls, or other
            protective features.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-responsibility',
    heading: 'Data and account responsibility',
    body: (
      <p>
        You are responsible for safeguarding any credentials issued to you and for all activity that
        occurs under them. You must keep your credentials confidential, use role-based access
        appropriately, and notify us immediately at{' '}
        <a href="mailto:demo@invictus.rw">demo@invictus.rw</a> if you suspect any unauthorised access
        or security incident. Processing of personal data is governed by our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: 'fair-use',
    heading: 'Fair and reasonable use',
    body: (
      <p>
        Our services are provided for legitimate business use. You must not place an unreasonable or
        disproportionate load on our infrastructure, resell access without authorisation, or use
        automated means to extract data from the Website except as expressly permitted.
      </p>
    ),
  },
  {
    id: 'reporting',
    heading: 'Reporting violations',
    body: (
      <p>
        If you become aware of any actual or suspected violation of this AUP — including a security
        vulnerability — please report it promptly to{' '}
        <a href="mailto:demo@invictus.rw">demo@invictus.rw</a>. We investigate all credible reports
        and appreciate responsible disclosure.
      </p>
    ),
  },
  {
    id: 'enforcement',
    heading: 'Enforcement and consequences',
    body: (
      <>
        <p>
          We may investigate suspected violations of this AUP and take any action we consider
          appropriate, including:
        </p>
        <ul>
          <li>Issuing a warning or requiring you to stop the offending activity;</li>
          <li>Suspending or restricting your access to the Website or Platform;</li>
          <li>Removing or disabling access to offending content;</li>
          <li>
            Reporting unlawful activity to, and cooperating with, the competent authorities of
            Rwanda.
          </li>
        </ul>
        <p>
          Action taken under this AUP is without prejudice to any other rights or remedies available
          to us under our <a href="/terms">Terms &amp; Conditions</a> or applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this Acceptable Use Policy from time to time. The “last updated” date above
        reflects the most recent version, and your continued use of our services after changes take
        effect constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact us',
    body: (
      <>
        <p>Questions about this Acceptable Use Policy can be sent to:</p>
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

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title={<>Acceptable <Highlight>Use</Highlight> Policy</>}
      subtitle="The rules that keep Invictus secure, lawful, and available to everyone."
      icon={Agreement01Icon}
      lastUpdated="23 June 2026"
      chips={['Governed by Rwandan law']}
      sections={sections}
    />
  )
}
