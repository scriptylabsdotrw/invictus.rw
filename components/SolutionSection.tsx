'use client'

import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  Tick02Icon,
  UserMultipleIcon,
  PiggyBankIcon,
  ArrowDataTransferHorizontalIcon,
  Building03Icon,
} from '@/lib/icons'

const benefits = [
  'Onboard customers and open accounts',
  'Run deposits, savings, and fixed deposits',
  'Originate and service loans end to end',
  'Process transactions in real time',
  'Keep a balanced double-entry ledger',
  'Generate financial and portfolio reports',
  'Manage staff users and granular roles',
  'Operate multiple branches with control',
  'Give every institution a branded portal',
]

export default function SolutionSection() {
  return (
    <section id="product" className="section bg-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <Reveal>
            <div>
              <span className="eyebrow">The platform</span>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                One platform for your entire institution
              </h2>
              <p className="lead mt-6">
                Invictus unifies customers, accounts, deposits, transactions, lending, the general
                ledger, staff, branches, and customer portals into one modern banking system.
              </p>

              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Interface preview */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-50 blur-2xl" />
              <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-ink">Banking Workspace</p>
                  <span className="pill bg-emerald-50 text-emerald-700">Live preview</span>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { icon: UserMultipleIcon, label: 'Active accounts', value: '12,840', tone: 'bg-emerald-600', w: '88%' },
                    { icon: PiggyBankIcon, label: 'Total deposits', value: 'RWF 1.84B', tone: 'bg-emerald-700', w: '92%' },
                    { icon: ArrowDataTransferHorizontalIcon, label: 'Transactions today', value: '556', tone: 'bg-sky-600', w: '64%' },
                    { icon: Building03Icon, label: 'Active branches', value: '4', tone: 'bg-violet-600', w: '60%' },
                  ].map((row, i) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-2xl border border-line bg-neutralbg p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-medium text-ink">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-800 text-white">
                            <Icon icon={row.icon} size={18} />
                          </span>
                          {row.label}
                        </span>
                        <span className="text-sm font-bold text-ink">{row.value}</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                        <div
                          className={`h-full rounded-full ${row.tone}`}
                          style={{ width: row.w }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
