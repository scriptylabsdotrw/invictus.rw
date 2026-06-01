'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../data/faqs'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { PlusSignIcon } from '@/lib/icons'

interface FAQProps {
  /** Limit the number of questions shown (e.g. a short set on the pricing page). */
  limit?: number
}

export default function FAQ({ limit }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)
  const items = limit ? faqs.slice(0, limit) : faqs

  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Answers for financial institutions
            </h2>
            <p className="lead mt-6">Everything you need to know before requesting a demo.</p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.question} delay={(i % 4) * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen ? true : false}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink">{f.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"
                    >
                      <Icon icon={PlusSignIcon} size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{f.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
