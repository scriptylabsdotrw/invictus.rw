'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
import Reveal from './ui/Reveal'
import Icon, { type IconSvgElement } from './ui/Icon'
import {
  DashboardSquare01Icon,
  Wallet01Icon,
  PiggyBankIcon,
  ArrowDataTransferHorizontalIcon,
  BankIcon,
  Building03Icon,
  Analytics01Icon,
  SecurityCheckIcon,
  Globe02Icon,
} from '@/lib/icons'

type ScreenKey =
  | 'overview'
  | 'accounts'
  | 'deposits'
  | 'transactions'
  | 'loans'
  | 'branches'
  | 'reports'
  | 'roles'
  | 'portal'

const menu: { key: ScreenKey; label: string; icon: IconSvgElement }[] = [
  { key: 'overview', label: 'Banking Overview', icon: DashboardSquare01Icon },
  { key: 'accounts', label: 'Customer Accounts', icon: Wallet01Icon },
  { key: 'deposits', label: 'Deposits & Savings', icon: PiggyBankIcon },
  { key: 'transactions', label: 'Transactions', icon: ArrowDataTransferHorizontalIcon },
  { key: 'loans', label: 'Loans & Credit', icon: BankIcon },
  { key: 'branches', label: 'Branch Performance', icon: Building03Icon },
  { key: 'reports', label: 'Reports', icon: Analytics01Icon },
  { key: 'roles', label: 'Staff Roles', icon: SecurityCheckIcon },
  { key: 'portal', label: 'Subdomain Portal', icon: Globe02Icon },
]

const volume = [
  { m: 'Wk 1', v: 18 },
  { m: 'Wk 2', v: 24 },
  { m: 'Wk 3', v: 21 },
  { m: 'Wk 4', v: 30 },
  { m: 'Wk 5', v: 27 },
  { m: 'Wk 6', v: 34 },
]

function StatGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { l: 'Total Deposits', v: 'RWF 1.84B' },
        { l: 'Active Accounts', v: '12,840' },
        { l: 'Transactions Today', v: '556' },
        { l: 'Loan Portfolio', v: 'RWF 248.6M' },
      ].map((s) => (
        <div key={s.l} className="rounded-2xl border border-line bg-white p-4">
          <p className="text-[11px] uppercase tracking-wide text-muted">{s.l}</p>
          <p className="mt-1 text-lg font-bold text-ink">{s.v}</p>
        </div>
      ))}
    </div>
  )
}

function Tag({ children, tone }: { children: React.ReactNode; tone: string }) {
  return <span className={`pill ${tone}`}>{children}</span>
}

function Screen({ screen }: { screen: ScreenKey }) {
  switch (screen) {
    case 'overview':
      return (
        <div className="space-y-4">
          <StatGrid />
          <div className="rounded-2xl border border-line bg-white p-4">
            <p className="mb-2 text-sm font-bold text-ink">Weekly Transaction Volume (RWF M)</p>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volume}>
                  <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E2E8F0', fontSize: 12 }} cursor={{ fill: '#ECFDF5' }} />
                  <Bar dataKey="v" radius={[6, 6, 0, 0]} fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )
    case 'accounts':
      return (
        <div className="space-y-2">
          {[
            { n: 'Aline Keza', a: 'Savings · RWF 1,240,000', s: 'Active', t: 'bg-emerald-100 text-emerald-700' },
            { n: 'Eric Mugisha', a: 'Current · RWF 650,000', s: 'Active', t: 'bg-emerald-100 text-emerald-700' },
            { n: 'Grace Umutoni', a: 'Fixed Deposit · RWF 5,000,000', s: 'Locked', t: 'bg-violet-100 text-violet-700' },
            { n: 'Patrick Niyo', a: 'Savings · RWF 92,000', s: 'Dormant', t: 'bg-slate-100 text-slate-600' },
          ].map((r) => (
            <div key={r.n} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">{r.n}</p>
                <p className="text-xs text-muted">{r.a}</p>
              </div>
              <Tag tone={r.t}>{r.s}</Tag>
            </div>
          ))}
        </div>
      )
    case 'deposits':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: 'Regular Savings', d: '4.5% p.a. · 6,210 accounts', b: 'RWF 920M' },
            { t: 'Fixed Deposits', d: '9.0% p.a. · 480 accounts', b: 'RWF 610M' },
            { t: 'Current Accounts', d: '0% · 4,120 accounts', b: 'RWF 240M' },
            { t: 'Group Savings', d: '5.0% p.a. · 2,030 accounts', b: 'RWF 70M' },
          ].map((r) => (
            <div key={r.t} className="rounded-2xl border border-line bg-white p-4">
              <span className="text-emerald-700"><Icon icon={PiggyBankIcon} size={20} /></span>
              <p className="mt-2 text-sm font-bold text-ink">{r.t}</p>
              <p className="text-xs text-muted">{r.d}</p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">{r.b}</p>
            </div>
          ))}
        </div>
      )
    case 'transactions':
      return (
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          {[
            { d: 'Jun 02', n: 'Aline Keza', a: '+ RWF 240,000', s: 'Deposit', t: 'bg-emerald-100 text-emerald-700' },
            { d: 'Jun 02', n: 'Eric Mugisha', a: '− RWF 85,000', s: 'Withdrawal', t: 'bg-sky-100 text-sky-700' },
            { d: 'Jun 03', n: 'Grace Umutoni', a: '→ RWF 410,000', s: 'Transfer', t: 'bg-violet-100 text-violet-700' },
            { d: 'Jun 03', n: 'Patrick Niyo', a: '+ RWF 120,000', s: 'Loan Repay', t: 'bg-emerald-100 text-emerald-700' },
          ].map((r, i) => (
            <div key={r.n + i} className={`flex items-center justify-between px-4 py-3 ${i !== 0 ? 'border-t border-line' : ''}`}>
              <span className="w-16 text-xs font-medium text-muted">{r.d}</span>
              <span className="flex-1 text-sm font-medium text-ink">{r.n}</span>
              <span className="mr-3 text-sm font-semibold text-ink">{r.a}</span>
              <Tag tone={r.t}>{r.s}</Tag>
            </div>
          ))}
        </div>
      )
    case 'loans':
      return (
        <div className="space-y-2">
          {[
            { n: 'Aline Keza', a: 'RWF 1,200,000', s: 'Disbursed', t: 'bg-emerald-100 text-emerald-700' },
            { n: 'Eric Mugisha', a: 'RWF 650,000', s: 'In Review', t: 'bg-amber-100 text-amber-700' },
            { n: 'Grace Umutoni', a: 'RWF 2,000,000', s: 'Approved', t: 'bg-sky-100 text-sky-700' },
            { n: 'Jean Bosco', a: 'RWF 280,000', s: 'Overdue', t: 'bg-rose-100 text-rose-700' },
          ].map((r) => (
            <div key={r.n} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">{r.n}</p>
                <p className="text-xs text-muted">{r.a}</p>
              </div>
              <Tag tone={r.t}>{r.s}</Tag>
            </div>
          ))}
        </div>
      )
    case 'branches':
      return (
        <div className="space-y-3 rounded-2xl border border-line bg-white p-5">
          {[
            { b: 'Kigali HQ', p: 82, acc: 5120 },
            { b: 'Musanze', p: 64, acc: 3240 },
            { b: 'Huye', p: 51, acc: 2480 },
            { b: 'Rubavu', p: 73, acc: 2000 },
          ].map((row) => (
            <div key={row.b}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-medium text-ink">{row.b} · {row.acc.toLocaleString()} accounts</span>
                <span className="font-semibold text-emerald-700">{row.p}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-50">
                <div className="h-full rounded-full bg-emerald-600" style={{ width: `${row.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      )
    case 'reports':
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: 'Trial Balance', d: 'Live double-entry general ledger position.' },
            { t: 'Deposits Report', d: 'Balances and growth across products and branches.' },
            { t: 'Transactions Report', d: 'Deposits, withdrawals, and transfers by period.' },
            { t: 'Loan Portfolio & Arrears', d: 'Outstanding, disbursed, and overdue balances.' },
          ].map((r) => (
            <div key={r.t} className="rounded-2xl border border-line bg-white p-4">
              <span className="text-emerald-700"><Icon icon={Analytics01Icon} size={20} /></span>
              <p className="mt-2 text-sm font-bold text-ink">{r.t}</p>
              <p className="mt-1 text-xs text-muted">{r.d}</p>
            </div>
          ))}
        </div>
      )
    case 'roles':
      return (
        <div className="space-y-2">
          {[
            { r: 'Administrator', p: 'Full access', t: 'bg-emerald-100 text-emerald-700' },
            { r: 'Branch Manager', p: 'Branch operations & reports', t: 'bg-sky-100 text-sky-700' },
            { r: 'Teller', p: 'Deposits, withdrawals & cash', t: 'bg-amber-100 text-amber-700' },
            { r: 'Auditor', p: 'Read-only & ledger access', t: 'bg-slate-100 text-slate-600' },
          ].map((row) => (
            <div key={row.r} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink">{row.r}</p>
                <p className="text-xs text-muted">{row.p}</p>
              </div>
              <Tag tone={row.t}>Role</Tag>
            </div>
          ))}
        </div>
      )
    case 'portal':
      return (
        <div className="rounded-2xl border border-line bg-white p-5">
          <div className="flex items-center gap-2 rounded-lg bg-neutralbg px-3 py-2 text-xs text-muted ring-1 ring-line">
            <span className="text-emerald-600"><Icon icon={Globe02Icon} size={14} /></span>
            gianteaglebank.invictus.rw
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink">Portal status</span>
              <Tag tone="bg-emerald-100 text-emerald-700">Live</Tag>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink">Brand color</span>
              <span className="flex items-center gap-2 text-xs text-muted">
                <span className="h-4 w-4 rounded-full bg-emerald-800" /> Emerald
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink">Custom logo</span>
              <Tag tone="bg-emerald-100 text-emerald-700">Uploaded</Tag>
            </div>
          </div>
        </div>
      )
  }
}

export default function ProductPreview() {
  const [active, setActive] = useState<ScreenKey>('overview')
  const current = menu.find((m) => m.key === active)!

  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Product</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              A real operating system for banking teams
            </h2>
            <p className="lead mt-6">
              Explore the workspace your team uses every day — from the banking overview to accounts,
              transactions, the ledger, reports, and portal settings.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            {/* top bar */}
            <div className="flex items-center gap-2 border-b border-line bg-neutralbg px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
              <span className="ml-3 text-xs font-medium text-muted">Invictus · Banking Workspace</span>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr]">
              {/* sidebar menu */}
              <aside className="border-b border-line bg-white p-3 lg:border-b-0 lg:border-r">
                <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                  {menu.map((m) => (
                    <button
                      key={m.key}
                      onClick={() => setActive(m.key)}
                      className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        active === m.key
                          ? 'bg-emerald-800 text-white'
                          : 'text-ink/70 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      <span className="shrink-0"><Icon icon={m.icon} size={16} /></span>
                      <span className="whitespace-nowrap">{m.label}</span>
                    </button>
                  ))}
                </div>
              </aside>

              {/* content */}
              <div className="min-h-[360px] bg-neutralbg p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-emerald-700"><Icon icon={current.icon} size={20} /></span>
                  <h3 className="text-base font-bold text-ink">{current.label}</h3>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Screen screen={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
