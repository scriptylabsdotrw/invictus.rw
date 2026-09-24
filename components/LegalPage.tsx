import type { ReactNode } from 'react'
import PageIntro from './sections/PageIntro'
import CTABand from './CTABand'
import { CONTACT_EMAIL } from '@/lib/site'

export interface LegalSection {
  id: string
  heading: string
  body: ReactNode
}

interface LegalPageProps {
  eyebrow: string
  title: string
  subtitle: string
  lastUpdated: string
  sections: LegalSection[]
}

/** Shared layout for legal pages — grid-texture intro, sticky contents list, numbered sections. */
export default function LegalPage({ eyebrow, title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} body={subtitle}>
        <p className="mt-6 text-sm text-zinc-500">
          Last updated <span className="font-medium text-zinc-900">{lastUpdated}</span>
        </p>
      </PageIntro>

      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-zinc-200">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900"
                    >
                      <span className="tabular-nums text-zinc-400">{String(i + 1).padStart(2, '0')}</span> {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl space-y-12">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl">
                  <span className="tabular-nums text-primary-600">{String(i + 1).padStart(2, '0')}.</span> {s.heading}
                </h2>
                <div className="prose-legal mt-5">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Questions about this policy?"
        body="Our team is happy to explain how we handle your data and your rights."
        cta={{ label: `Email ${CONTACT_EMAIL}`, href: `mailto:${CONTACT_EMAIL}` }}
      />
    </>
  )
}
