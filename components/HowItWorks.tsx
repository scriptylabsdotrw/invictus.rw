'use client'

import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Building03Icon, Configuration01Icon, Globe02Icon, ChartUpIcon } from '@/lib/icons'

const steps = [
  {
    icon: Building03Icon,
    title: 'Create Institution Account',
    text: 'A bank, SACCO, or microfinance institution is onboarded into Invictus.',
  },
  {
    icon: Configuration01Icon,
    title: 'Configure Banking',
    text: 'Set up account products, interest and fees, staff users, branches, and your chart of accounts.',
  },
  {
    icon: Globe02Icon,
    title: 'Launch Branded Portal',
    text: 'The institution receives a branded portal such as yourbank.invictus.rw.',
  },
  {
    icon: ChartUpIcon,
    title: 'Run Banking Operations',
    text: 'Serve customers across accounts, deposits, transactions, loans, branches, and reports.',
  },
]

export default function HowItWorks({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="section bg-white">
      <div className="container-px">
        {showHeader && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">How it works</span>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Live in four clear steps
              </h2>
            </div>
          </Reveal>
        )}

        <div className={`relative ${showHeader ? 'mt-16' : 'mt-4'}`}>
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-card"
                    >
                      <Icon icon={s.icon} size={24} />
                      <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-extrabold text-emerald-950">
                        {i + 1}
                      </span>
                    </motion.div>
                    <h3 className="text-lg font-bold text-ink lg:mt-5">{s.title}</h3>
                  </div>
                  <p className="mt-3 pl-[72px] text-sm leading-relaxed text-muted lg:pl-0">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
