import type { ReactNode } from 'react'
import PageHeader from './PageHeader'
import type { IconSvgElement } from './ui/Icon'

export interface LegalSection {
  id: string
  heading: string
  body: ReactNode
}

interface LegalPageProps {
  title: string
  subtitle: string
  icon: IconSvgElement
  lastUpdated: string
  chips?: string[]
  sections: LegalSection[]
}

const bodyClass =
  'space-y-4 text-[15px] leading-relaxed text-muted ' +
  '[&_strong]:font-semibold [&_strong]:text-ink ' +
  '[&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline [&_a]:underline-offset-2 ' +
  '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5'

/** Shared layout for legal pages — dark hero + sticky table of contents + sections. */
export default function LegalPage({
  title,
  subtitle,
  icon,
  lastUpdated,
  chips,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} icon={icon} chips={chips} />

      <section className="section bg-white">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[250px_1fr] lg:gap-16">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
                  On this page
                </p>
                <nav className="mt-4 border-l border-line">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-emerald-500 hover:text-emerald-700"
                    >
                      {s.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-sm text-muted">
                Last updated:{' '}
                <strong className="font-semibold text-ink">{lastUpdated}</strong>
              </p>

              <div className="mt-10 space-y-12">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-32">
                    <h2 className="display text-2xl text-ink sm:text-3xl">
                      <span className="text-emerald-600">{String(i + 1).padStart(2, '0')}.</span>{' '}
                      {s.heading}
                    </h2>
                    <div className={`mt-5 ${bodyClass}`}>{s.body}</div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
