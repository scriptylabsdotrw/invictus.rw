'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { features } from '../data/features'
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
    <section className="relative overflow-hidden bg-neutralbg">
      {/* soft emerald glow at the top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="container-px section relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Capabilities
          </span>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl lg:text-6xl">{heading}</h2>
          <p className="lead mt-6">{subheading}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((f) => (
            <motion.article
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-colors hover:border-emerald-200"
            >
              {/* hover corner glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-emerald-200/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              {/* gold top accent on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gold/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 text-white transition-transform duration-300 group-hover:scale-110">
                <Icon icon={f.icon} size={22} />
              </span>
              <h3 className="relative mt-6 text-xl font-bold text-ink">{f.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{f.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 flex justify-center"
          >
            <Link href="/features" className="btn-secondary">
              View all capabilities <Icon icon={ArrowRight01Icon} size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
