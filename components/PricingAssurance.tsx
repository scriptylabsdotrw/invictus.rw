import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  SecurityCheckIcon,
  Layers01Icon,
  BookOpen01Icon,
  Configuration01Icon,
} from '@/lib/icons'

const items = [
  {
    icon: SecurityCheckIcon,
    title: 'Secure by design',
    text: 'Role-based access, audit trails, and tenant isolation on every plan.',
  },
  {
    icon: BookOpen01Icon,
    title: 'Real general ledger',
    text: 'Double-entry accounting keeps your books balanced and audit-ready.',
  },
  {
    icon: Layers01Icon,
    title: 'Branded portal',
    text: 'Your own subdomain on the multi-tenant Invictus platform.',
  },
  {
    icon: Configuration01Icon,
    title: 'Guided onboarding',
    text: 'We help you configure products, branches, and staff to go live.',
  },
]

export default function PricingAssurance() {
  return (
    <section className="bg-white pb-8">
      <div className="container-px">
        <Reveal>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Every plan includes
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-neutralbg p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Icon icon={it.icon} size={22} />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
