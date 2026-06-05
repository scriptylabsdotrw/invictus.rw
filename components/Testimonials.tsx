'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import Icon from './ui/Icon'
import { QuoteUpIcon, StarIcon } from '@/lib/icons'

const EASE = [0.22, 1, 0.36, 1] as const
const INTERVAL = 6000

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [failed, setFailed] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((v) => (v + 1) % testimonials.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const markFailed = (i: number) => setFailed((s) => new Set(s).add(i))
  const t = testimonials[active]

  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">In their words</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Built for how banking teams actually work
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="grid overflow-hidden rounded-3xl border border-line md:grid-cols-[300px_1fr]">
            {/* ---- Portrait ---- */}
            <div className="relative h-72 overflow-hidden bg-emerald-950 md:h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  {failed.has(active) ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 font-display text-5xl font-bold text-white">
                      {t.initials}
                    </div>
                  ) : (
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      onError={() => markFailed(active)}
                      priority={active === 0}
                      className="object-cover object-center"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/35 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <span className="absolute left-5 top-5 z-10 text-gold drop-shadow">
                <Icon icon={QuoteUpIcon} size={30} />
              </span>
            </div>

            {/* ---- Quote ---- */}
            <div className="relative flex flex-col justify-center bg-white p-8 sm:p-12">
              {/* Rating */}
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} icon={StarIcon} size={16} />
                ))}
              </div>

              <div className="relative mt-5 min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <blockquote className="text-balance text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6">
                      <p className="text-sm font-bold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>

              {/* Avatar selectors + progress */}
              <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                {testimonials.map((p, i) => {
                  const isActive = i === active
                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show testimonial from ${p.name}`}
                      className={`relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-white transition-all duration-300 ${
                        isActive
                          ? 'ring-emerald-500'
                          : 'opacity-55 ring-transparent hover:opacity-100'
                      }`}
                    >
                      {failed.has(i) ? (
                        <span className="flex h-full w-full items-center justify-center bg-emerald-800 text-xs font-bold text-white">
                          {p.initials}
                        </span>
                      ) : (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="48px"
                          onError={() => markFailed(i)}
                          className="object-cover"
                        />
                      )}
                    </button>
                  )
                })}

                <div className="ml-auto hidden h-1 w-24 overflow-hidden rounded-full bg-line sm:block">
                  {!paused && (
                    <motion.div
                      key={active}
                      className="h-full rounded-full bg-emerald-600"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
