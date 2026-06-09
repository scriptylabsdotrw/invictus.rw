'use client'

import Image from 'next/image'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import Icon from './Icon'
import {
  DashboardSquare01Icon,
  UserMultipleIcon,
  Wallet01Icon,
  ArrowDataTransferHorizontalIcon,
  Building03Icon,
  Analytics01Icon,
  Settings01Icon,
  Notification01Icon,
  Globe02Icon,
  ChartIncreaseIcon,
} from '@/lib/icons'

const volume = [
  { m: 'Jan', v: 32 },
  { m: 'Feb', v: 38 },
  { m: 'Mar', v: 35 },
  { m: 'Apr', v: 47 },
  { m: 'May', v: 52 },
  { m: 'Jun', v: 61 },
  { m: 'Jul', v: 68 },
]

const nav = [
  { icon: DashboardSquare01Icon, active: true },
  { icon: UserMultipleIcon },
  { icon: Wallet01Icon },
  { icon: ArrowDataTransferHorizontalIcon },
  { icon: Building03Icon },
  { icon: Analytics01Icon },
  { icon: Settings01Icon },
]

const transactions = [
  { initials: 'AK', name: 'Aline K.', amount: '+ RWF 240,000', type: 'Deposit', dot: 'bg-emerald-500' },
  { initials: 'EM', name: 'Eric M.', amount: '− RWF 85,000', type: 'Withdrawal', dot: 'bg-amber-500' },
  { initials: 'GU', name: 'Grace U.', amount: '→ RWF 410,000', type: 'Transfer', dot: 'bg-sky-500' },
  { initials: 'PN', name: 'Patrick N.', amount: '+ RWF 120,000', type: 'Repayment', dot: 'bg-emerald-500' },
]

const todayActivity = [
  { label: 'Deposits received', value: 'RWF 4.2M', color: 'bg-emerald-500' },
  { label: 'Withdrawals', value: 'RWF 1.8M', color: 'bg-amber-500' },
  { label: 'Loans disbursed', value: 'RWF 620K', color: 'bg-sky-500' },
  { label: 'Pending transfers', value: '23 items', color: 'bg-violet-500' },
]

const EASE = [0.22, 1, 0.36, 1] as const

const rowsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 1.1 } },
}
const rowVariant = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE } },
}

function AnimatedNumber({ to, format }: { to: number; format: (n: number) => string }) {
  const val = useMotionValue(0)
  const display = useTransform(val, (v) => format(v))
  useEffect(() => {
    const ctrl = animate(val, to, { duration: 1.7, ease: 'easeOut', delay: 1.0 })
    return () => ctrl.stop()
  }, [to])
  return <motion.span>{display}</motion.span>
}

function Sparkline({ points, stroke }: { points: string; stroke: string }) {
  return (
    <svg viewBox="0 0 60 22" preserveAspectRatio="none" className="h-5 w-14">
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-[#F9FAFB] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[11px] ring-1 ring-line">
          <span className="text-emerald-600">
            <Icon icon={Globe02Icon} size={11} />
          </span>
          <span className="font-medium text-muted/70">
            <span className="text-emerald-700">yourbank</span>
            <span className="text-muted/50">.invictus.rw</span>
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Live
          </span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[52px] flex-shrink-0 flex-col items-center bg-emerald-950 py-4 sm:flex">
          <div className="mb-5 h-8 w-8 overflow-hidden rounded-xl">
            <Image
              src="/logos/icons/Invictus_Icon_WhiteOrange_on_Emerald.png"
              alt="Invictus"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            {nav.map(({ icon, active }, i) => (
              <div
                key={i}
                className={`relative flex h-9 w-9 items-center justify-center rounded-xl ${
                  active ? 'bg-white/15 text-white' : 'text-white/25'
                }`}
              >
                {active && (
                  <div className="absolute -left-[1px] top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-r-full bg-emerald-400" />
                )}
                <Icon icon={icon} size={16} />
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <div className="h-7 w-7 overflow-hidden rounded-full ring-2 ring-white/15">
              <Image
                src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=80&h=80&fit=crop&crop=faces&auto=format&q=80"
                alt="Admin"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 bg-[#F4F7FA] p-3 sm:p-4">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted/60">
                Overview
              </p>
              <h3 className="font-display text-[13px] font-bold text-ink">Giant Eagle Bank</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.4, ease: EASE }}
                className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100 sm:flex"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
                All systems normal
              </motion.div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted ring-1 ring-line">
                <Icon icon={Notification01Icon} size={13} />
              </div>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2">
            {/* Primary */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: EASE }}
              className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-3 text-white"
            >
              <p className="text-[9px] font-semibold uppercase tracking-widest text-emerald-300/60">
                Total Deposits
              </p>
              <div className="mt-1.5 flex items-end justify-between">
                <p className="font-display text-[15px] font-bold sm:text-base">
                  <span className="text-[9px] font-normal text-emerald-300/50">RWF </span>
                  <AnimatedNumber to={1.84} format={(n) => n.toFixed(2) + 'B'} />
                </p>
                <Sparkline points="0,18 10,15 20,17 30,12 40,9 50,6 60,3" stroke="rgba(110,231,183,0.7)" />
              </div>
              <div className="mt-2 flex items-center gap-1 text-[9px] font-medium text-emerald-300/80">
                <Icon icon={ChartIncreaseIcon} size={10} />
                +6.4% this month
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55, ease: EASE }}
              className="rounded-2xl bg-white p-3 ring-1 ring-line"
            >
              <p className="text-[9px] font-semibold uppercase tracking-widest text-muted/60">
                Active Accounts
              </p>
              <div className="mt-1.5 flex items-end justify-between">
                <p className="font-display text-[15px] font-bold text-ink sm:text-base">
                  <AnimatedNumber to={12840} format={(n) => Math.round(n).toLocaleString()} />
                </p>
                <Sparkline points="0,16 10,14 20,17 30,11 40,9 50,7 60,4" stroke="#059669" />
              </div>
              <p className="mt-2 text-[9px] font-medium text-emerald-600">+312 new this week</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55, ease: EASE }}
              className="rounded-2xl bg-white p-3 ring-1 ring-line"
            >
              <p className="text-[9px] font-semibold uppercase tracking-widest text-muted/60">
                Loan Portfolio
              </p>
              <div className="mt-1.5 flex items-end justify-between">
                <p className="font-display text-[15px] font-bold text-ink sm:text-base">
                  <span className="text-[9px] font-normal text-muted/50">RWF </span>
                  <AnimatedNumber to={248.6} format={(n) => n.toFixed(1) + 'M'} />
                </p>
                <Sparkline points="0,14 10,16 20,12 30,14 40,11 50,10 60,7" stroke="#0284c7" />
              </div>
              <p className="mt-2 text-[9px] text-muted">932 active loans</p>
            </motion.div>
          </div>

          {/* Charts row */}
          <div className="mt-2 grid grid-cols-5 gap-2">
            {/* Area chart */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.55, ease: EASE }}
              className="col-span-3 rounded-2xl bg-white p-3 ring-1 ring-line"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-ink">Transaction Volume</p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                  +18.4%
                </span>
              </div>
              <div className="h-[72px] sm:h-[84px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volume} margin={{ top: 4, right: 2, left: 2, bottom: 0 }}>
                    <defs>
                      <linearGradient id="vol" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" stopOpacity={0.28} />
                        <stop offset="100%" stopColor="#059669" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="m"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 8, fill: '#94a3b8' }}
                    />
                    <Tooltip
                      cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '4 2' }}
                      contentStyle={{
                        borderRadius: 10,
                        border: '1px solid #E2E8F0',
                        fontSize: 10,
                        padding: '4px 8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#059669"
                      strokeWidth={2}
                      fill="url(#vol)"
                      dot={false}
                      isAnimationActive
                      animationBegin={900}
                      animationDuration={1400}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Today's activity */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.55, ease: EASE }}
              className="col-span-2 rounded-2xl bg-white p-3 ring-1 ring-line"
            >
              <p className="mb-2.5 text-[11px] font-semibold text-ink">Today's Activity</p>
              <div className="space-y-2">
                {todayActivity.map((a, i) => (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.1, duration: 0.35, ease: EASE }}
                    className="flex items-center gap-2"
                  >
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${a.color}`} />
                    <div className="flex flex-1 items-center justify-between">
                      <span className="text-[9px] text-muted">{a.label}</span>
                      <span className="text-[9px] font-bold text-ink">{a.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.55, ease: EASE }}
            className="mt-2 rounded-2xl bg-white p-3 ring-1 ring-line"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-ink">Recent Transactions</p>
              <span className="text-[9px] font-medium text-emerald-600">View all →</span>
            </div>
            <motion.div
              className="space-y-1"
              variants={rowsContainer}
              initial="hidden"
              animate="show"
            >
              {transactions.map((t) => (
                <motion.div
                  key={t.name}
                  variants={rowVariant}
                  className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-2.5 py-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${t.dot}`}
                    >
                      {t.initials}
                    </span>
                    <span className="text-[11px] font-medium text-ink">{t.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-ink">{t.amount}</span>
                    <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
                      {t.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
