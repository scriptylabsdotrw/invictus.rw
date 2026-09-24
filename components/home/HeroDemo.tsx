'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Icon, { type IconSvgElement } from '../ui/Icon'
import {
  AlertCircleIcon,
  ArrowDataTransferHorizontalIcon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  BankIcon,
  Building03Icon,
  Calendar03Icon,
  ChartUpIcon,
  Clock01Icon,
  CreditCardIcon,
  DashboardSquare01Icon,
  DatabaseIcon,
  DollarCircleIcon,
  Invoice01Icon,
  LegalDocument01Icon,
  Logout01Icon,
  Menu01Icon,
  Moon02Icon,
  Notification01Icon,
  Search01Icon,
  SecurityLockIcon,
  Settings02Icon,
  Sun03Icon,
  Tick02Icon,
  UnfoldMoreIcon,
  UserIcon,
  UserMultipleIcon,
  Briefcase02Icon,
  Camera01Icon,
  CheckmarkCircle02Icon,
  Download01Icon,
  File02Icon,
  FlashIcon,
  MoreHorizontalIcon,
  PauseIcon,
  RepeatIcon,
  Share01Icon,
} from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'

/*
 * A looping simulation of a loan officer using the Invictus back office:
 * dashboard → add a client (NIDA lookup) → loan applications → approve & disburse → contract.
 * "YourBank", the staff, clients and every figure are placeholders, not real data.
 * The UI is drawn at a fixed desktop size and scaled to fit, like a screenshot.
 */

const W = 1280
const H = 760
const EASE = [0.22, 1, 0.36, 1] as const

type ScreenId = 'dashboard' | 'clientType' | 'client' | 'loans' | 'review' | 'contract'
type Click = { x: number; y: number; at: number }
const screens: { id: ScreenId; path: string; nav: string; sub?: string; ms: number; clicks: Click[] }[] = [
  { id: 'dashboard', path: '/en/yourbank/hq', nav: 'Dashboard', ms: 2800, clicks: [{ x: 110, y: 139, at: 2350 }] },
  { id: 'clientType', path: '/en/yourbank/hq/clients/new', nav: 'Clients', sub: 'Add Client', ms: 1700, clicks: [{ x: 549, y: 514, at: 1250 }] },
  { id: 'client', path: '/en/yourbank/hq/clients/new/personal', nav: 'Clients', sub: 'Add Client', ms: 3300, clicks: [{ x: 110, y: 298, at: 2850 }] },
  { id: 'loans', path: '/en/yourbank/hq/loans', nav: 'Loans', ms: 2100, clicks: [{ x: 470, y: 291, at: 1650 }] },
  {
    id: 'review',
    path: '/en/yourbank/hq/loans/LN-2419',
    nav: 'Loans',
    ms: 3000,
    clicks: [
      { x: 1177, y: 461, at: 800 }, // Approve & disburse
      { x: 1238, y: 113, at: 1850 }, // ⋯ actions
      { x: 1090, y: 164, at: 2550 }, // Contract
    ],
  },
  {
    id: 'contract',
    path: '/en/yourbank/hq/loans/LN-2419/contract',
    nav: 'Loans',
    ms: 3900,
    clicks: [
      { x: 1106, y: 347, at: 2500 }, // Download PDF
      { x: 110, y: 97, at: 3450 }, // back to Dashboard
    ],
  },
]

const nav: { label: string; icon: IconSvgElement; chevron?: boolean; children?: string[] }[] = [
  { label: 'Dashboard', icon: DashboardSquare01Icon },
  { label: 'Clients', icon: UserMultipleIcon, chevron: true, children: ['Clients', 'Add Client'] },
  { label: 'Transactions', icon: ArrowDataTransferHorizontalIcon, chevron: true },
  { label: 'Loans', icon: BankIcon, chevron: true },
  { label: 'Payments', icon: CreditCardIcon },
  { label: 'Fines', icon: Invoice01Icon },
  { label: 'Accounting', icon: LegalDocument01Icon, chevron: true },
  { label: 'Security', icon: SecurityLockIcon, chevron: true },
  { label: 'Metadata', icon: DatabaseIcon, chevron: true },
  { label: 'Branches', icon: Building03Icon, chevron: true },
  { label: 'Settings', icon: Settings02Icon, chevron: true },
]

/* ---------------------------------------------------------------- chrome */

function Sidebar({ active, sub }: { active: string; sub?: string }) {
  return (
    <aside className="flex w-[250px] shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="flex h-16 items-center gap-3 border-b border-zinc-200 px-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-primary-50 text-sm font-bold text-primary-700">
          YB
        </span>
        <span className="flex-1 text-[15px] font-bold tracking-tight text-zinc-900">HEAD OFFICE</span>
        <span className="text-zinc-400">
          <Icon icon={UnfoldMoreIcon} size={16} />
        </span>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {nav.map((item) => {
          const isActive = item.label === active
          return (
            <div key={item.label} className="relative">
              {isActive && (
                <motion.span
                  layoutId="demo-nav-active"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-md bg-primary-50"
                />
              )}
              <div
                className={cn(
                  'relative flex items-center gap-3 px-3 py-2.5 text-[14px]',
                  isActive ? 'font-semibold text-primary-700' : 'text-zinc-700',
                )}
              >
                <Icon icon={item.icon} size={17} />
                <span className="flex-1">{item.label}</span>
                {item.chevron && (
                  <span className={cn('text-zinc-400 transition-transform', isActive && sub && 'rotate-90')}>
                    <Icon icon={ArrowRight01Icon} size={13} />
                  </span>
                )}
              </div>
              {isActive && sub && item.children && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="relative ml-5 overflow-hidden border-l border-zinc-200"
                >
                  {item.children.map((c) => (
                    <p
                      key={c}
                      className={cn('py-2 pl-5 text-[14px]', c === sub ? 'font-semibold text-primary-700' : 'text-primary-700/80')}
                    >
                      {c}
                    </p>
                  ))}
                </motion.div>
              )}
            </div>
          )
        })}
      </nav>
      <div className="flex items-center gap-3 border-t border-zinc-200 px-6 py-4 text-[14px] text-zinc-700">
        <Icon icon={Logout01Icon} size={17} /> Logout
      </div>
    </aside>
  )
}

function Topbar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <span className="text-zinc-700">
        <Icon icon={Menu01Icon} size={20} />
      </span>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-700">
          <span className="text-[11px] text-zinc-500">RW</span> English
          <Icon icon={ArrowDown01Icon} size={13} />
        </span>
        <span className="flex items-center gap-1 rounded-full bg-zinc-100 p-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-zinc-800 shadow-soft">
            <Icon icon={Moon02Icon} size={14} />
          </span>
          <span className="flex h-7 w-7 items-center justify-center text-zinc-400">
            <Icon icon={Sun03Icon} size={14} />
          </span>
        </span>
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
          <Icon icon={Notification01Icon} size={16} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <span className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 text-[12px] font-semibold text-white">
            AM
          </span>
          <span className="text-[13px] font-semibold text-zinc-900">AMINA M.</span>
          <span className="text-zinc-500">
            <Icon icon={ArrowDown01Icon} size={13} />
          </span>
        </span>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------- dashboard */

const stats: { label: string; value: string; note?: string; icon: IconSvgElement; tone: string; iconTone: string }[] = [
  { label: 'Total Loan Amount Disbursed', value: 'RWF 486,250,000', icon: DollarCircleIcon, tone: 'bg-sky-50', iconTone: 'bg-sky-100 text-sky-600' },
  { label: 'Disbursed Loans', value: '132', icon: ChartUpIcon, tone: 'bg-emerald-50', iconTone: 'bg-emerald-100 text-emerald-600' },
  { label: 'Pending Loans', value: '7', icon: Clock01Icon, tone: 'bg-orange-50', iconTone: 'bg-orange-100 text-orange-600' },
  { label: 'Projected Amount', value: 'RWF 541,900,000', icon: DollarCircleIcon, tone: 'bg-violet-50', iconTone: 'bg-violet-100 text-violet-600' },
  { label: 'Due Loans This Month', value: '18', icon: ChartUpIcon, tone: 'bg-teal-50', iconTone: 'bg-teal-100 text-teal-600' },
  { label: 'Due Schedules Today', value: '5', icon: AlertCircleIcon, tone: 'bg-red-50', iconTone: 'bg-red-100 text-red-600' },
  { label: 'Outstanding Loan Principal', value: '212,480,500', note: 'Outstanding principal amount', icon: DollarCircleIcon, tone: 'bg-sky-50', iconTone: 'bg-sky-100 text-sky-600' },
  { label: 'Current Outstanding Balance', value: 'RWF 238,915,200', note: 'Principal + accrued interest', icon: Invoice01Icon, tone: 'bg-rose-50', iconTone: 'bg-rose-100 text-rose-600' },
]

function DashboardScreen() {
  return (
    <div className="space-y-5 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <Icon icon={DashboardSquare01Icon} size={20} />
          </span>
          <div>
            <p className="text-[20px] font-bold text-zinc-900">Good afternoon, Amina.</p>
            <p className="text-[14px] text-zinc-500">Hope you&apos;re having a great day</p>
          </div>
        </div>
        <span className="flex items-center gap-2 border border-zinc-200 bg-white px-4 py-2.5 text-[13px] text-zinc-700">
          <Icon icon={Calendar03Icon} size={15} /> Jan 01, 2026 – Sep 24, 2026
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.05, ease: EASE }}
            className={cn('h-[132px] border border-zinc-200/70 p-4', s.tone)}
          >
            <span className={cn('flex h-9 w-9 items-center justify-center rounded-full', s.iconTone)}>
              <Icon icon={s.icon} size={17} />
            </span>
            <p className="mt-3 text-[13px] text-zinc-600">{s.label}</p>
            <p className="mt-1 text-[20px] font-bold tracking-tight text-zinc-900">{s.value}</p>
            {s.note && <p className="text-[11px] text-zinc-500">{s.note}</p>}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] gap-4">
        <div className="border border-zinc-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[16px] font-bold text-zinc-900">Loan Disbursements</p>
              <p className="text-[13px] text-zinc-500">Statistics</p>
            </div>
            <div className="flex bg-zinc-100 p-1 text-[12px]">
              {['One Month', 'Three Months', 'One Year', 'All Time'].map((t, i) => (
                <span key={t} className={cn('px-3 py-1.5', i === 0 ? 'bg-primary-600 font-medium text-white' : 'text-zinc-600')}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 600 120" className="mt-3 h-[120px] w-full" aria-hidden="true">
            <defs>
              <linearGradient id="demo-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 60, 90].map((y) => (
              <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="#f4f4f5" />
            ))}
            <motion.path
              d="M0,95 C60,90 90,70 150,72 C210,74 230,30 300,34 C370,38 390,78 450,70 C510,62 540,22 600,18 L600,120 L0,120 Z"
              fill="url(#demo-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.path
              d="M0,95 C60,90 90,70 150,72 C210,74 230,30 300,34 C370,38 390,78 450,70 C510,62 540,22 600,18"
              fill="none"
              stroke="#059669"
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        <div className="border border-zinc-200 bg-white p-5">
          <p className="text-[16px] font-bold text-zinc-900">Stats By Year</p>
          <p className="flex items-center gap-1 text-[13px] text-zinc-500">
            2026 <Icon icon={ArrowDown01Icon} size={12} />
          </p>
          <div className="mt-2 flex items-center gap-5">
            <svg viewBox="0 0 42 42" className="h-[110px] w-[110px] -rotate-90" aria-hidden="true">
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f4f4f5" strokeWidth="5" />
              <motion.circle
                cx="21" cy="21" r="15.9" fill="none" stroke="#059669" strokeWidth="5"
                initial={{ strokeDasharray: '0 100' }}
                animate={{ strokeDasharray: '72 28' }}
                transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
              />
              <motion.circle
                cx="21" cy="21" r="15.9" fill="none" stroke="#c2410c" strokeWidth="5" strokeDashoffset="-72"
                initial={{ strokeDasharray: '0 100' }}
                animate={{ strokeDasharray: '18 82' }}
                transition={{ duration: 1, delay: 1.1, ease: EASE }}
              />
            </svg>
            <div className="space-y-2 text-[12px] text-zinc-600">
              <p className="flex items-center gap-2"><span className="h-2 w-2 bg-primary-600" /> Repaid</p>
              <p className="flex items-center gap-2"><span className="h-2 w-2 bg-accent" /> Outstanding</p>
              <p className="flex items-center gap-2"><span className="h-2 w-2 bg-zinc-200" /> Written off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- loans */

type Status = 'Pending' | 'Approved' | 'Disbursed'
const statusTone: Record<Status, string> = {
  Pending: 'bg-orange-50 text-orange-700',
  Approved: 'bg-sky-50 text-sky-700',
  Disbursed: 'bg-emerald-50 text-emerald-700',
}

const applications: { id: string; client: string; product: string; amount: string; date: string; status: Status }[] = [
  { id: 'LN-2419', client: 'Joshua KAMANZI', product: 'SME working capital', amount: '1,500,000', date: 'Sep 24, 2026', status: 'Pending' },
  { id: 'LN-2418', client: 'Patrick Niyonzima', product: 'SME working capital', amount: '3,750,000', date: 'Sep 23, 2026', status: 'Pending' },
  { id: 'LN-2417', client: 'Jean Mugisha', product: 'Salary advance', amount: '450,000', date: 'Sep 23, 2026', status: 'Approved' },
  { id: 'LN-2416', client: 'Eric Habimana', product: 'Asset finance', amount: '8,200,000', date: 'Sep 22, 2026', status: 'Disbursed' },
  { id: 'LN-2415', client: 'Grace Mukamana', product: 'Group loan', amount: '2,000,000', date: 'Sep 21, 2026', status: 'Disbursed' },
  { id: 'LN-2414', client: 'Diane Ingabire', product: 'Salary advance', amount: '600,000', date: 'Sep 20, 2026', status: 'Disbursed' },
  { id: 'LN-2413', client: 'Claude Nshimiyimana', product: 'Asset finance', amount: '5,400,000', date: 'Sep 19, 2026', status: 'Disbursed' },
]

function StatusPill({ status }: { status: Status }) {
  return <span className={cn('inline-block px-2.5 py-1 text-[12px] font-medium', statusTone[status])}>{status}</span>
}

function LoansScreen() {
  return (
    <div className="space-y-5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[20px] font-bold text-zinc-900">Loan applications</p>
          <p className="text-[14px] text-zinc-500">Review, approve and disburse loans for this branch</p>
        </div>
        <span className="bg-primary-600 px-4 py-2.5 text-[13px] font-medium text-white">+ New loan</span>
      </div>
      <div className="border border-zinc-200 bg-white">
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
          <div className="flex gap-1 text-[13px]">
            {['All', 'Pending', 'Approved', 'Disbursed'].map((t, i) => (
              <span key={t} className={cn('px-3 py-1.5', i === 0 ? 'bg-zinc-900 font-medium text-white' : 'text-zinc-600')}>
                {t}
              </span>
            ))}
          </div>
          <span className="flex w-64 items-center gap-2 border border-zinc-200 px-3 py-2 text-[13px] text-zinc-400">
            <Icon icon={Search01Icon} size={14} /> Search clients or loan ID
          </span>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-[12px] uppercase tracking-wider text-zinc-500">
              {['Loan ID', 'Client', 'Product', 'Amount (RWF)', 'Applied', 'Status'].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((a, i) => (
              <motion.tr
                key={a.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.07, ease: EASE }}
                className={cn('border-b border-zinc-100', i === 0 && 'bg-primary-50/60')}
              >
                <td className="px-4 py-3 font-medium text-zinc-900">{a.id}</td>
                <td className="px-4 py-3 text-zinc-900">{a.client}</td>
                <td className="px-4 py-3 text-zinc-600">{a.product}</td>
                <td className="px-4 py-3 tabular-nums text-zinc-900">{a.amount}</td>
                <td className="px-4 py-3 text-zinc-600">{a.date}</td>
                <td className="px-4 py-3"><StatusPill status={a.status} /></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- review */

const schedule = [
  { n: 1, due: 'Oct 24, 2026' },
  { n: 2, due: 'Nov 24, 2026' },
  { n: 3, due: 'Dec 24, 2026' },
  { n: 4, due: 'Jan 24, 2027' },
]

function ReviewScreen() {
  const [stage, setStage] = useState<'pending' | 'pressing' | 'done'>('pending')
  const [menu, setMenu] = useState(false)
  const [picked, setPicked] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('pressing'), 800),
      setTimeout(() => setStage('done'), 1000),
      setTimeout(() => setMenu(true), 1900),
      setTimeout(() => setPicked(true), 2580),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const done = stage === 'done'

  return (
    <div className="relative h-full space-y-5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] text-zinc-500">Loans / LN-2419</p>
          <p className="text-[20px] font-bold text-zinc-900">SME working capital — Joshua KAMANZI</p>
        </div>
        <div className="relative flex items-center gap-2">
          <StatusPill status={done ? 'Disbursed' : 'Pending'} />
          <span className="ml-2 flex items-center gap-2 bg-primary-600 px-3 py-2 text-[13px] font-medium text-white">
            <Icon icon={CreditCardIcon} size={14} /> Payment
          </span>
          <span className="flex items-center gap-2 bg-primary-600 px-3 py-2 text-[13px] font-medium text-white">
            <Icon icon={PauseIcon} size={14} /> Pause Penalties
          </span>
          <span
            data-demo="more"
            className={cn(
              'flex h-9 w-9 items-center justify-center border border-zinc-200 bg-white text-zinc-700',
              menu && 'border-zinc-900',
            )}
          >
            <Icon icon={MoreHorizontalIcon} size={16} />
          </span>
          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="absolute right-0 top-11 z-20 w-56 border border-zinc-200 bg-white py-1.5 shadow-elevated"
              >
                {[
                  { label: 'Contract', icon: File02Icon },
                  { label: 'Early Repayment', icon: FlashIcon },
                  { label: 'Restructure Loan', icon: RepeatIcon },
                  { label: 'Transfer', icon: Share01Icon },
                  { label: 'Mark Completed', icon: CheckmarkCircle02Icon },
                ].map((m, i) => (
                  <p
                    key={m.label}
                    data-demo={i === 0 ? 'contract-item' : undefined}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2 text-[14px] text-zinc-800',
                      i === 0 && picked && 'bg-primary-50 font-medium text-primary-700',
                    )}
                  >
                    <Icon icon={m.icon} size={16} /> {m.label}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1.7fr] gap-4">
        <div className="border border-zinc-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src="/images/demo/joshua-kamanzi.jpg" alt="" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <p className="text-[15px] font-semibold text-zinc-900">Joshua KAMANZI</p>
              <p className="text-[12px] text-zinc-500">ID 1199270082737036 · NIDA verified</p>
            </div>
          </div>
          <dl className="mt-5 space-y-3 text-[13px]">
            {[
              ['Phone', '+250 78x xxx xxx'],
              ['Branch', 'Head Office'],
              ['Previous loans', 'First loan'],
              ['Loan officer', 'Amina M.'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-zinc-100 pb-2">
                <dt className="text-zinc-500">{k}</dt>
                <dd className="font-medium text-zinc-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border border-zinc-200 bg-white p-5">
          <div className="grid grid-cols-4 gap-4">
            {[
              ['Amount', 'RWF 1,500,000'],
              ['Interest', '1.8% / month'],
              ['Term', '12 months'],
              ['Installment', 'RWF 140,114'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[12px] text-zinc-500">{k}</p>
                <p className="mt-1 text-[15px] font-bold text-zinc-900">{v}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-semibold text-zinc-900">Repayment schedule</p>
          <table className="mt-2 w-full text-left text-[13px]">
            <tbody>
              {schedule.map((s) => (
                <tr key={s.n} className="border-b border-zinc-100">
                  <td className="py-2 text-zinc-500">#{s.n}</td>
                  <td className="py-2 text-zinc-900">{s.due}</td>
                  <td className="py-2 text-right tabular-nums text-zinc-900">RWF 140,114</td>
                  <td className="py-2 pl-4 text-right text-zinc-500">{done ? 'Upcoming' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 flex justify-end gap-3">
            <span className="border border-zinc-300 px-4 py-2.5 text-[13px] font-medium text-zinc-700">Reject</span>
            <motion.span
              data-demo="approve"
              animate={{ scale: stage === 'pressing' ? 0.94 : 1 }}
              transition={{ duration: 0.15 }}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-white',
                done ? 'bg-zinc-900' : 'bg-primary-600',
              )}
            >
              {done ? 'Disbursed' : 'Approve & disburse'}
              <Icon icon={done ? Tick02Icon : ArrowRight01Icon} size={14} />
            </motion.span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {done && !menu && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute bottom-6 right-6 flex items-center gap-3 border border-zinc-200 bg-white px-4 py-3 shadow-elevated"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600"
            >
              <Icon icon={Tick02Icon} size={18} strokeWidth={2.4} />
            </motion.span>
            <div>
              <p className="text-[14px] font-semibold text-zinc-900">Loan disbursed</p>
              <p className="text-[12px] text-zinc-500">RWF 1,500,000 sent to Joshua KAMANZI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* -------------------------------------------------------------- contract */

const contractTerms: [string, string][] = [
  ['Principal', 'RWF 1,500,000'],
  ['Interest rate', '1.8% per month'],
  ['Term', '12 months'],
  ['Monthly installment', 'RWF 140,114'],
  ['First due date', 'Oct 24, 2026'],
  ['Late penalty', 'As per product terms'],
]

function ContractScreen() {
  const [downloaded, setDownloaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDownloaded(true), 2550)
    return () => clearTimeout(t)
  }, [])

  // Each block of the agreement fades in, as if it is being generated.
  const line = (i: number) => ({
    initial: { opacity: 0, y: 4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, delay: 0.15 + i * 0.11 },
  })

  return (
    <div className="relative grid h-full grid-cols-[1fr_300px] gap-5 p-6">
      {/* Document preview */}
      <div className="flex justify-center overflow-hidden border border-zinc-200 bg-zinc-100 pt-5">
        <div className="w-[520px] bg-white px-10 pb-8 pt-8 shadow-elevated">
          <motion.div {...line(0)} className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-[11px] font-bold text-primary-700">YB</span>
              <span className="text-[13px] font-bold text-zinc-900">YourBank Ltd</span>
            </span>
            <span className="text-right text-[10px] leading-tight text-zinc-500">
              Contract CT-2419
              <br />
              Generated Sep 24, 2026
            </span>
          </motion.div>
          <motion.p {...line(1)} className="mt-4 text-center text-[15px] font-bold tracking-wide text-zinc-900">
            LOAN AGREEMENT
          </motion.p>
          <motion.div {...line(2)} className="mt-4 grid grid-cols-2 gap-4 text-[11px] leading-relaxed">
            <div>
              <p className="font-semibold text-zinc-900">Lender</p>
              <p className="text-zinc-600">YourBank Ltd, Head Office</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Borrower</p>
              <p className="text-zinc-600">Joshua KAMANZI · ID 1199270082737036</p>
            </div>
          </motion.div>
          <motion.table {...line(3)} className="mt-4 w-full text-[11px]">
            <tbody>
              {contractTerms.map(([k, v]) => (
                <tr key={k} className="border-b border-zinc-100">
                  <td className="py-1.5 text-zinc-500">{k}</td>
                  <td className="py-1.5 text-right font-medium text-zinc-900">{v}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
          <div className="mt-4 space-y-1.5">
            {[100, 94, 97, 70].map((w, i) => (
              <motion.span key={i} {...line(4 + i)} className="block h-1.5 bg-zinc-200" style={{ width: `${w}%` }} />
            ))}
          </div>
          <motion.div {...line(8)} className="mt-6 grid grid-cols-2 gap-8 text-[10px] text-zinc-500">
            {['Borrower', 'Loan officer · Amina M.'].map((who, i) => (
              <div key={who}>
                <svg viewBox="0 0 120 28" className="h-7 w-28" aria-hidden="true">
                  <motion.path
                    d={i === 0 ? 'M4,20 C14,4 22,26 32,14 S48,6 56,18 S74,22 84,10 S104,16 116,12' : 'M4,18 C18,8 26,24 40,12 S62,8 70,20 S96,12 116,16'}
                    fill="none"
                    stroke="#18181b"
                    strokeWidth="1.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 1.35 + i * 0.35, ease: 'easeInOut' }}
                  />
                </svg>
                <p className="border-t border-zinc-300 pt-1">{who}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side panel */}
      <div className="space-y-4">
        <div className="border border-zinc-200 bg-white p-5">
          <p className="text-[16px] font-bold text-zinc-900">Loan contract</p>
          <p className="text-[12px] text-zinc-500">LN-2419 · Joshua KAMANZI</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-4 flex items-center gap-2 bg-primary-50 px-3 py-2 text-[12px] font-medium text-primary-700"
          >
            <Icon icon={Tick02Icon} size={14} /> Generated automatically
          </motion.p>
          <ul className="mt-4 space-y-2 text-[12px] text-zinc-600">
            {['Client details from the profile', 'Terms from the loan product', 'Repayment schedule attached'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-primary-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <span
          data-demo="download"
          className={cn(
            'flex items-center justify-between px-4 py-3 text-[14px] font-medium text-white transition-colors',
            downloaded ? 'bg-zinc-900' : 'bg-primary-850',
          )}
        >
          {downloaded ? 'Downloaded' : 'Download PDF'}
          <Icon icon={downloaded ? Tick02Icon : Download01Icon} size={16} />
        </span>
        <span className="flex items-center justify-between border border-zinc-900 px-4 py-3 text-[14px] font-medium text-zinc-900">
          Print contract
          <Icon icon={File02Icon} size={16} />
        </span>
      </div>

      <AnimatePresence>
        {downloaded && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute bottom-6 right-6 flex items-center gap-3 border border-zinc-200 bg-white px-4 py-3 shadow-elevated"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Icon icon={Download01Icon} size={17} />
            </span>
            <div>
              <p className="text-[14px] font-semibold text-zinc-900">Contract ready</p>
              <p className="text-[12px] text-zinc-500">CT-2419_Joshua-KAMANZI.pdf</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------------------------------- client type */

function Cursor() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" className="drop-shadow-md">
      <path d="M4 2.5 19 12l-6.6 1.4L9.3 20 4 2.5Z" fill="#18181b" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function ClientTypeScreen() {
  // The shared cursor clicks "Individual Client"; the button presses in sync.
  const CLICK = 1.25
  const cards = [
    { title: 'Individual Client', icon: UserIcon, text: 'Create an individual client to apply for a personal loan.' },
    { title: 'Business Client', icon: Briefcase02Icon, text: 'Create a business client to apply for a business loan.' },
  ]
  return (
    <div className="flex h-full items-center justify-center gap-8 p-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
          className="w-[400px] border border-zinc-200 bg-white p-8"
        >
          <p className="text-[22px] font-semibold text-zinc-900">{c.title}</p>
          <span className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-700">
            <Icon icon={c.icon} size={28} />
          </span>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">{c.text}</p>
          <div className="relative mt-6">
            <motion.div
              animate={i === 0 ? { scale: [1, 1, 0.96, 1] } : undefined}
              transition={i === 0 ? { duration: CLICK + 0.3, times: [0, CLICK / (CLICK + 0.3), (CLICK + 0.12) / (CLICK + 0.3), 1] } : undefined}
              className={cn(
                'py-3 text-center text-[15px] font-semibold text-white',
                'bg-primary-600',
              )}
            >
              {c.title}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------ add client */

const NATIONAL_ID = '1199270082737036'
const clientFields: [string, string, boolean][] = [
  ['Name', 'KAMANZI', true],
  ['Last Name', 'Joshua', true],
  ['Other Names', '', false],
  ['Father Names', 'Mugabo', false],
  ['Mother Names', 'Uwimana', false],
  ['Place of Issue', 'Gasabo / Kigali', false],
]

function AddClientScreen() {
  const [typed, setTyped] = useState(0)
  const [verified, setVerified] = useState(false)

  // Type the national ID, then look it up and auto-fill the client's details.
  useEffect(() => {
    let i = 0
    let tick: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      tick = setInterval(() => {
        i += 1
        setTyped(i)
        if (i >= NATIONAL_ID.length && tick) clearInterval(tick)
      }, 32)
    }, 250)
    const check = setTimeout(() => setVerified(true), 250 + NATIONAL_ID.length * 32 + 200)
    return () => {
      clearTimeout(start)
      clearTimeout(check)
      if (tick) clearInterval(tick)
    }
  }, [])

  return (
    <div className="p-6">
      <div className="border border-zinc-200 bg-white px-6 pb-6 pt-5">
        <div className="flex justify-center gap-10">
          {['Personal Info', 'Overview', 'Next of Kin'].map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-semibold',
                  i === 0 ? 'bg-primary-600 text-white' : 'border border-zinc-200 text-zinc-700',
                )}
              >
                {i + 1}
              </span>
              <span className={cn('text-[13px]', i === 0 ? 'font-medium text-primary-700' : 'text-zinc-600')}>{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex h-[132px] items-center justify-center border border-zinc-200">
          <div className="relative h-[108px] w-[108px] border border-dashed border-zinc-300 bg-white">
            {verified ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="absolute inset-0"
              >
                <Image src="/images/demo/joshua-kamanzi.jpg" alt="" fill sizes="120px" className="object-cover" />
                <span className="absolute -right-2.5 -top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                  ×
                </span>
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-1.5 text-zinc-400">
                <Icon icon={Camera01Icon} size={22} />
                <span className="text-[11px]">Photo</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5">
          <div>
            <p className="text-[13px] font-medium text-zinc-900">Type</p>
            <div className="mt-2 flex items-center justify-between border border-zinc-200 px-3 py-2.5 text-[14px] text-zinc-900">
              National ID <Icon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
          <div>
            <p className="text-[13px] font-medium text-zinc-900">
              ID <span className="text-red-500">*</span>
            </p>
            <div
              className={cn(
                'mt-2 flex h-[42px] items-center justify-between border-2 px-3 text-[14px] text-zinc-900 transition-colors',
                verified ? 'border-primary-500' : 'border-primary-300',
              )}
            >
              <span className="tabular-nums">
                {NATIONAL_ID.slice(0, typed)}
                {!verified && <span className="ml-px inline-block h-4 w-px animate-pulse bg-zinc-900 align-middle" />}
              </span>
              {verified && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500"
                >
                  <Icon icon={Tick02Icon} size={11} strokeWidth={3} />
                </motion.span>
              )}
            </div>
            <p className={cn('mt-1 h-4 text-[11px] text-emerald-600 transition-opacity', verified ? 'opacity-100' : 'opacity-0')}>
              Verified with NIDA — details filled in
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-4">
          {clientFields.map(([label, value, required], i) => (
            <div key={label}>
              <p className="text-[13px] font-medium text-zinc-900">
                {label} {required && <span className="text-red-500">*</span>}
              </p>
              <div className="mt-2 h-[42px] border border-zinc-200 px-3 py-2.5 text-[14px]">
                {verified && value ? (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="inline-block text-zinc-900"
                  >
                    {value}
                  </motion.span>
                ) : (
                  <span className="text-zinc-400">{label}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const views: Record<ScreenId, () => React.ReactElement> = {
  dashboard: DashboardScreen,
  clientType: ClientTypeScreen,
  client: AddClientScreen,
  loans: LoansScreen,
  review: ReviewScreen,
  contract: ContractScreen,
}

/* --------------------------------------------------------------- cursor */

const MOVE = 480 // ms the cursor takes to travel to each target

/** One cursor for the whole demo: travels to each click target, then presses. */
function DemoCursor({ from, clicks, ms }: { from: { x: number; y: number }; clicks: Click[]; ms: number }) {
  const xs = [from.x]
  const ys = [from.y]
  const ss = [1]
  const times = [0]
  let prev = from
  let last = 0
  const push = (t: number, x: number, y: number, sc: number) => {
    const tt = Math.min(1, Math.max(last + 0.001, t / ms))
    times.push(tt)
    xs.push(x)
    ys.push(y)
    ss.push(sc)
    last = tt
  }
  for (const c of clicks) {
    push(c.at - MOVE, prev.x, prev.y, 1) // wait
    push(c.at - 40, c.x, c.y, 1) // travel
    push(c.at + 60, c.x, c.y, 0.78) // press
    push(c.at + 180, c.x, c.y, 1) // release
    prev = c
  }
  const duration = ms / 1000

  return (
    <>
      {clicks.map((c) => (
        <motion.span
          key={`${c.x}-${c.y}-${c.at}`}
          className="pointer-events-none absolute z-40 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-500 bg-primary-400/40"
          style={{ left: c.x, top: c.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 0.4, 1.6], opacity: [0, 0.9, 0] }}
          transition={{ duration: 0.45, delay: c.at / 1000 }}
        />
      ))}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-50"
        initial={{ x: from.x, y: from.y }}
        animate={{ x: xs, y: ys, scale: ss }}
        transition={{ duration, times, ease: 'easeInOut' }}
        style={{ originX: 0, originY: 0 }}
      >
        <Cursor />
      </motion.div>
    </>
  )
}

/* ---------------------------------------------------------------- frame */

export default function HeroDemo() {
  const [index, setIndex] = useState(0)
  const frameRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)

  // Only start the loop (from the dashboard) once the demo is actually on screen.
  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIndex(0)
          setPlaying(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Each screen stays up for its own duration before moving on.
  useEffect(() => {
    if (!playing) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % screens.length), screens[index].ms)
    return () => clearTimeout(id)
  }, [index, playing])

  // Scale the fixed-size app UI to the frame width.
  useLayoutEffect(() => {
    const el = frameRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const screen = screens[index]
  const View = views[screen.id]
  const prevClicks = screens[(index + screens.length - 1) % screens.length].clicks
  const cursorFrom = playing ? prevClicks[prevClicks.length - 1] : { x: 900, y: 620 }

  return (
    <div
      className="overflow-hidden border border-zinc-200 bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.15)]"
      role="img"
      aria-label="Animated preview of the Invictus back office: a loan officer views the dashboard, opens loan applications, then approves and disburses a loan."
    >
      <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        </span>
        <span className="mx-auto w-full max-w-sm truncate rounded-md border border-zinc-200 bg-white px-3 py-1 text-center text-[11px] text-zinc-500">
          lms.rw<span className="text-zinc-400">{screen.path}</span>
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>

      <div ref={frameRef} className="relative w-full overflow-hidden" style={{ aspectRatio: `${W} / ${H}` }}>
        <div
          className="absolute left-0 top-0 flex origin-top-left bg-zinc-50 transition-opacity duration-300"
          style={{ width: W, height: H, transform: `scale(${scale ?? 1})`, opacity: scale ? 1 : 0 }}
        >
          <Sidebar active={screen.nav} sub={screen.sub} />
          <div className="flex min-w-0 flex-1 flex-col">
            <Topbar />
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={screen.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.005 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                >
                  <View />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {playing && <DemoCursor key={index} from={cursorFrom} clicks={screen.clicks} ms={screen.ms} />}
        </div>
      </div>
    </div>
  )
}
