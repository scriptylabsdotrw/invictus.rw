'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from './ui/Reveal'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  /** Small glassy chips shown under the subtitle (e.g. key capabilities). */
  chips?: string[]
}

/** Premium dark hero band for inner pages (Features, Pricing). */
export default function PageHero({ eyebrow, title, subtitle, chips }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
      {/* Layered background — matches the homepage hero language */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-emerald-950 via-emerald-900/95 to-emerald-950" />
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(16,185,129,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_10%,black_30%,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-20 h-72 w-72 animate-float rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-20 h-80 w-80 animate-float rounded-full bg-gold/15 blur-3xl [animation-delay:2s]" />

      <div className="container-px pb-20 pt-40 sm:pb-24 sm:pt-48">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="display mt-6 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-emerald-100/80 sm:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {chips && chips.length > 0 && (
            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-wrap justify-center gap-2.5"
            >
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-emerald-50 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
