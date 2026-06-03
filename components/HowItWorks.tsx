'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './ui/Icon'
import {
  Building03Icon,
  Configuration01Icon,
  Globe02Icon,
  ChartUpIcon,
  Tick02Icon,
} from '@/lib/icons'

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

const EASE = [0.22, 1, 0.36, 1] as const
const STEP_MS = 3600

export default function HowItWorks({ showHeader = true }: { showHeader?: boolean }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((v) => (v + 1) % steps.length), STEP_MS)
    return () => clearInterval(id)
  }, [paused])

  // Fraction of the connector line that should be filled (0 → 1).
  const fill = steps.length > 1 ? active / (steps.length - 1) : 0

  return (
    <section className="section bg-white">
      <div className="container-px">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="eyebrow">How it works</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Live in four clear steps
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`relative ${showHeader ? 'mt-20' : 'mt-8'}`}
        >
          {/* Connector line that fills up to the active step */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-line lg:block">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
              animate={{ scaleX: fill }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ width: '100%', transformOrigin: 'left' }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const isActive = i === active
              const isDone = i < active

              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Numbered / completed node */}
                  <motion.div
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold ring-4 ring-white transition-colors duration-300 ${
                      isActive || isDone
                        ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {isDone ? <Icon icon={Tick02Icon} size={26} /> : i + 1}
                  </motion.div>

                  {/* Step card */}
                  <motion.div
                    animate={{ y: isActive ? -4 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className={`mt-6 h-full w-full overflow-hidden rounded-3xl border p-6 transition-colors duration-300 ${
                      isActive ? 'border-emerald-300 bg-emerald-50/60' : 'border-line bg-white'
                    }`}
                  >
                    <span
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        isActive ? 'bg-emerald-800 text-white' : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      <Icon icon={s.icon} size={22} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>

                    {/* Auto-advance progress bar on the active card */}
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-emerald-100">
                      {isActive && (
                        <motion.div
                          key={`${active}-${paused}`}
                          className="h-full rounded-full bg-emerald-600"
                          initial={{ width: paused ? '40%' : '0%' }}
                          animate={{ width: paused ? '40%' : '100%' }}
                          transition={{ duration: paused ? 0.3 : STEP_MS / 1000, ease: 'linear' }}
                        />
                      )}
                    </div>
                  </motion.div>
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
