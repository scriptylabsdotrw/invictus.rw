'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { features } from '../data/features'
import Reveal from './ui/Reveal'
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

export default function Features({
  limit,
  showViewAll = false,
  heading = 'A complete core banking system',
  subheading = 'Everything an institution needs — from customers and accounts to deposits, lending, transactions, the ledger, branches, and branded portals.',
}: FeaturesProps) {
  const items = limit ? features.slice(0, limit) : features

  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Capabilities</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">{heading}</h2>
            <p className="lead mt-6">{subheading}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-colors hover:border-emerald-200"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gold/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="icon-tile">
                  <Icon icon={f.icon} size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {showViewAll && (
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center">
              <Link href="/features" className="btn-secondary">
                View all capabilities <Icon icon={ArrowRight01Icon} size={18} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
