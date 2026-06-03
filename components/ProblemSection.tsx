'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Icon from './ui/Icon'
import {
  File02Icon,
  JusticeScaleIcon,
  PieChart01Icon,
  UserRemove01Icon,
  ComputerRemoveIcon,
  GitBranchIcon,
  Clock01Icon,
  BookOpen01Icon,
  ArrowRight01Icon,
} from '@/lib/icons'

const problems = [
  { icon: File02Icon, title: 'Disconnected systems', text: 'Accounts, deposits, and loans live in separate tools and spreadsheets that never reconcile.' },
  { icon: Clock01Icon, title: 'No real-time balances', text: 'Customer and branch balances are always out of date, so decisions are made on stale numbers.' },
  { icon: JusticeScaleIcon, title: 'Manual reconciliation', text: 'Closing the day means hours of matching cash, transactions, and ledgers by hand.' },
  { icon: BookOpen01Icon, title: 'No proper ledger', text: 'Without double-entry accounting, books drift out of balance and audits become painful.' },
  { icon: UserRemove01Icon, title: 'Fragmented customer view', text: 'A customer’s accounts, history, and loans are scattered and hard to see in one place.' },
  { icon: ComputerRemoveIcon, title: 'No customer portal', text: 'Customers have no branded, trustworthy place to bank with your institution online.' },
  { icon: GitBranchIcon, title: 'Hard branch control', text: 'Running multiple branches consistently and securely becomes nearly impossible.' },
  { icon: PieChart01Icon, title: 'Weak reporting', text: 'Leadership lacks a clear, real-time view of deposits, portfolio, income, and growth.' },
]

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-neutralbg">
      {/* Rose-tinted glow signals the "problem" tone */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(244,63,94,0.08),transparent_70%)]" />

      <div className="container-px section relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-sm font-semibold text-rose-600">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            The challenge
          </span>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Banking shouldn’t run on spreadsheets
          </h2>
          <p className="lead mt-6">
            Growing a financial institution on manual processes and disconnected tools creates
            risk, slows everything down, and makes it hard to truly know where the money is.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-6 transition-colors hover:border-rose-200"
            >
              {/* corner glow on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-rose-100/70 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 ring-1 ring-rose-100 transition-transform duration-300 group-hover:scale-110">
                <Icon icon={p.icon} size={20} />
              </span>
              <h3 className="relative mt-4 text-base font-bold text-ink">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to the solution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/product"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
          >
            Invictus replaces all of it
            <span className="transition-transform group-hover:translate-x-1">
              <Icon icon={ArrowRight01Icon} size={18} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
