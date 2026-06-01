'use client'

import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { FlashIcon, ViewIcon, Building03Icon, SparklesIcon, Tick02Icon } from '@/lib/icons'

const stats = [
  { icon: FlashIcon, label: 'Faster daily operations' },
  { icon: ViewIcon, label: 'Real-time financial visibility' },
  { icon: Building03Icon, label: 'Stronger branch control' },
  { icon: SparklesIcon, label: 'A modern customer experience' },
]

const values = [
  'Reduce manual reconciliation',
  'See real-time balances and positions',
  'Keep an always-balanced ledger',
  'Unify customer and account records',
  'Improve staff accountability',
  'Make reporting and audits easier',
  'Offer customers a professional portal',
  'Scale operations with confidence',
]

export default function ROISection() {
  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow">Business value</span>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Built to help institutions operate better and grow faster
              </h2>
              <p className="lead mt-6">
                Invictus removes the busywork so your team can focus on customers — with the
                real-time visibility and control to grow responsibly.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full rounded-3xl border border-line bg-white p-6 transition-colors hover:border-emerald-200"
                >
                  <span className="icon-tile">
                    <Icon icon={s.icon} size={22} />
                  </span>
                  <p className="mt-5 text-lg font-bold text-ink">{s.label}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                    Illustrative benefit
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
