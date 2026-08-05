'use client'

import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import type { IconSvgElement } from './ui/Icon'
import {
  UserMultipleIcon,
  PiggyBankIcon,
  BankIcon,
  ArrowDataTransferHorizontalIcon,
  Wallet01Icon,
  PercentCircleIcon,
  BookOpen01Icon,
  SecurityCheckIcon,
  Building03Icon,
  Analytics01Icon,
  Globe02Icon,
  Layers01Icon,
  Calendar01Icon,
  Clock01Icon,
  Coins01Icon,
  BalanceScaleIcon,
  DashboardSquare01Icon,
  Invoice01Icon,
  SmartPhone01Icon,
  DollarCircleIcon,
  UserCircleIcon,
  Notification01Icon,
  Tick02Icon,
} from '@/lib/icons'

interface Capability {
  icon: IconSvgElement
  title: string
  description: string
}

interface Pillar {
  label: string
  title: string
  summary: string
  items: Capability[]
}

const pillars: Pillar[] = [
  {
    label: '01 — Core Banking',
    title: 'Accounts, deposits & lending',
    summary: 'The transactional heart of your institution, posted to a real ledger in real time.',
    items: [
      {
        icon: UserMultipleIcon,
        title: 'Customers & Accounts',
        description:
          'Onboard with KYC, open multiple account types, and keep every profile, document, and balance in one place.',
      },
      {
        icon: PiggyBankIcon,
        title: 'Deposits & Savings',
        description:
          'Run savings, current, and fixed-deposit products with automated interest accrual.',
      },
      {
        icon: Calendar01Icon,
        title: 'Fixed & Term Deposits',
        description:
          'Lock in term deposits with defined tenures, maturity handling, and automatic interest payout.',
      },
      {
        icon: BankIcon,
        title: 'Loans & Credit',
        description:
          'Originate, approve, disburse, and track loans — repayments, arrears, and penalties end to end.',
      },
      {
        icon: ArrowDataTransferHorizontalIcon,
        title: 'Transactions & Payments',
        description:
          'Deposits, withdrawals, transfers, and payments processed in real time, straight to the ledger.',
      },
      {
        icon: Clock01Icon,
        title: 'Standing Orders & Schedules',
        description:
          'Automate recurring transfers, loan repayments, and scheduled postings without manual work.',
      },
    ],
  },
  {
    label: '02 — Operations',
    title: 'Run the institution',
    summary: 'Day-to-day control over cash, pricing, staff, and your branch network.',
    items: [
      {
        icon: Wallet01Icon,
        title: 'Teller & Cashiering',
        description: 'Fast, controlled cash operations with day-open, day-close, and cash positions.',
      },
      {
        icon: Coins01Icon,
        title: 'Cash & Vault Management',
        description: 'Track till floats, vault balances, and cash movements across every branch.',
      },
      {
        icon: PercentCircleIcon,
        title: 'Interest, Fees & Charges',
        description: 'Configure interest, fees, and penalties per product so income is always accurate.',
      },
      {
        icon: BalanceScaleIcon,
        title: 'Approvals & Maker–Checker',
        description: 'Enforce dual control on sensitive actions so nothing posts without a second sign-off.',
      },
      {
        icon: SecurityCheckIcon,
        title: 'Staff & Role Management',
        description: 'Granular control over what admins, managers, tellers, and officers can access.',
      },
      {
        icon: Building03Icon,
        title: 'Branch Management',
        description: 'Operate multiple branches, assign teams, and monitor performance network-wide.',
      },
    ],
  },
  {
    label: '03 — Insight & Scale',
    title: 'Books, reports & growth',
    summary: 'Stay audit-ready and scale from one branch to many institutions.',
    items: [
      {
        icon: BookOpen01Icon,
        title: 'General Ledger & Accounting',
        description: 'A real double-entry ledger keeps every transaction balanced and audit-ready.',
      },
      {
        icon: Analytics01Icon,
        title: 'Reports & Analytics',
        description: 'Portfolio, deposits, transactions, and income reports ready on demand.',
      },
      {
        icon: DashboardSquare01Icon,
        title: 'Real-Time Dashboards',
        description: 'Live KPIs on deposits, portfolio, income, and growth for leadership at a glance.',
      },
      {
        icon: Invoice01Icon,
        title: 'Compliance Reporting',
        description: 'Generate regulatory-style returns and statements built from your live ledger.',
      },
      {
        icon: Globe02Icon,
        title: 'Branded Customer Portals',
        description: 'Each institution gets a professional portal on its own subdomain.',
      },
      {
        icon: Layers01Icon,
        title: 'Multi-Tenant Architecture',
        description: 'Serve many institutions from one platform with fully isolated data.',
      },
    ],
  },
  {
    label: '04 — Channels & Integrations',
    title: 'Reach customers & connect systems',
    summary: 'Meet customers where they are and plug into the national systems you rely on.',
    items: [
      {
        icon: SmartPhone01Icon,
        title: 'Mobile & USSD Banking',
        description: 'Let customers check balances, transfer, and transact from any phone, smart or basic.',
      },
      {
        icon: DollarCircleIcon,
        title: 'Mobile Money Integration',
        description: 'Connect deposits and withdrawals to mobile money for instant, cashless funding.',
      },
      {
        icon: UserCircleIcon,
        title: 'Identity Verification (NIDA)',
        description: 'Confirm customer identity in real time against the national ID system during onboarding.',
      },
      {
        icon: Notification01Icon,
        title: 'Notifications & Alerts',
        description: 'Keep customers and staff informed with automated SMS and email on key events.',
      },
      {
        icon: SecurityCheckIcon,
        title: 'Audit Trail & Security',
        description: 'Every action is logged and traceable, with encryption and tenant isolation throughout.',
      },
    ],
  },
]

function CapabilityCard({ item, delay }: { item: Capability; delay: number }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:border-emerald-200"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-all group-hover:bg-brand-orange group-hover:text-white">
          <Icon icon={item.icon} size={20} />
        </span>
        <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
      </motion.article>
    </Reveal>
  )
}

export default function FeaturesShowcase() {
  return (
    <section className="section bg-white">
      <div className="container-px space-y-16">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            {/* Sticky pillar intro */}
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                  {pillar.label}
                </p>
                <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">{pillar.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">{pillar.summary}</p>
              </div>
            </Reveal>

            {/* Capability cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {pillar.items.map((item, i) => (
                <CapabilityCard key={item.title} item={item} delay={(i % 2) * 0.06} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/** A spotlight band highlighting the double-entry ledger — the trust differentiator. */
export function LedgerSpotlight() {
  const proof = [
    'Every posting is double-entry — debits always equal credits',
    'Trial balance and financial position available in real time',
    'Full audit trail on every transaction and adjustment',
    'Chart of accounts configurable to your institution',
  ]

  return (
    <section className="section bg-emerald-950 text-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="text-brand-orange">
                  <Icon icon={BookOpen01Icon} size={16} />
                </span>
                Built on a real ledger
              </span>
              <h2 className="display mt-4 text-4xl text-white sm:text-5xl">
                Your books stay balanced, automatically
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-emerald-100/80">
                Unlike spreadsheets and bolt-on tools, Invictus posts every deposit, withdrawal,
                transfer, and loan movement to a true double-entry general ledger.
              </p>
              <ul className="mt-7 space-y-3.5">
                {proof.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-emerald-50">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Mini trial-balance mockup */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/40 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-sm font-bold text-white">Trial Balance</p>
                <span className="pill bg-emerald-500/15 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Balanced
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { a: 'Cash & Bank', d: '1,240,000', c: '—' },
                  { a: 'Customer Deposits', d: '—', c: '1,840,000' },
                  { a: 'Loan Portfolio', d: '248,600', c: '—' },
                  { a: 'Interest Income', d: '—', c: '64,200' },
                  { a: 'Operating Expenses', d: '92,400', c: '—' },
                ].map((row) => (
                  <div key={row.a} className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 text-sm">
                    <span className="text-emerald-100/90">{row.a}</span>
                    <span className="w-24 text-right font-medium text-white">{row.d}</span>
                    <span className="w-24 text-right font-medium text-white">{row.c}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-t border-white/10 bg-white/5 px-5 py-3 text-sm font-bold">
                <span className="text-white">Total</span>
                <span className="w-24 text-right text-emerald-300">1,581,000</span>
                <span className="w-24 text-right text-emerald-300">1,581,000</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
