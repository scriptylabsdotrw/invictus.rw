'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { features } from '@/lib/constants'
import Icon from './ui/Icon'
import { ArrowRight01Icon } from '@/lib/icons'

interface FeaturesProps {
  /** Limit the number of cards shown (e.g. a highlight set on the home page). */
  limit?: number
  /** Show a "View all features" link to the dedicated Features page. */
  showViewAll?: boolean
  heading?: string
  subheading?: string
}

const EASE = [0.22, 1, 0.36, 1] as const
const pad = (n: number) => String(n).padStart(2, '0')

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function Features({
  limit,
  showViewAll = false,
  heading = 'A complete core banking system',
  subheading = 'Everything an institution needs — from customers and accounts to deposits, lending, transactions, the ledger, branches, and branded portals.',
}: FeaturesProps) {
  const items = limit ? features.slice(0, limit) : features

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft emerald glow at the top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="container-px section relative">
        {/* Asymmetric header */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Capabilities
            </span>
            <h2 className="display mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">{heading}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-lg leading-relaxed text-muted">{subheading}</p>
            {showViewAll && (
              <Link
                href="/features"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
              >
                View all capabilities
                <span className="transition-transform group-hover:translate-x-1">
                  <Icon icon={ArrowRight01Icon} size={18} />
                </span>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Numbered card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((f, i) => (
            <motion.article
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-colors hover:border-emerald-200"
            >
              {/* faint index number */}
              <span className="pointer-events-none absolute right-5 top-3 select-none font-display text-5xl font-bold text-emerald-950/[0.06]">
                {pad(i + 1)}
              </span>
              {/* hover corner glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              {/* gold top accent on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gold/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-emerald-950">
                <Icon icon={f.icon} size={22} />
              </span>
              <h3 className="relative mt-6 text-xl font-bold text-ink">{f.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{f.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
