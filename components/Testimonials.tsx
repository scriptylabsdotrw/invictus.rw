'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import Icon from './ui/Icon'
import { QuoteUpIcon } from '@/lib/icons'

const EASE = [0.22, 1, 0.36, 1] as const
const INTERVAL = 5500

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((v) => (v + 1) % testimonials.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const t = testimonials[active]

  return (
    <section className="section bg-white">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Trusted by institutions</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Built for how banking teams actually work
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          {/* Featured quote card */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-neutralbg p-8 sm:p-12">
            {/* big watermark quote */}
            <span className="pointer-events-none absolute -right-2 -top-4 text-emerald-200/50">
              <Icon icon={QuoteUpIcon} size={120} />
            </span>

            <div className="relative min-h-[220px] sm:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex h-full flex-col"
                >
                  <blockquote className="flex-1 text-balance text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* Avatar selectors */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((p, i) => {
              const isActive = i === active
              return (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${p.name}`}
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-800 text-white ring-2 ring-emerald-300 ring-offset-2'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  {p.initials}
                  {/* auto-advance progress ring on the active avatar */}
                  {isActive && !paused && (
                    <motion.span
                      key={active}
                      className="absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-emerald-600"
                      initial={{ width: 0 }}
                      animate={{ width: 24 }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
