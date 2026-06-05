'use client'

import Image from 'next/image'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
import Icon from './Icon'
import {
  DashboardSquare01Icon,
  UserMultipleIcon,
  Wallet01Icon,
  ArrowDataTransferHorizontalIcon,
  Building03Icon,
  Analytics01Icon,
  Settings01Icon,
  Search01Icon,
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

const statusCards = [
  { label: 'Deposits', value: '312', tone: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { label: 'Withdrawals', value: '148', tone: 'bg-sky-50 text-sky-700 border-sky-100' },
  { label: 'Transfers', value: '96', tone: 'bg-violet-50 text-violet-700 border-violet-100' },
  { label: 'New Accounts', value: '27', tone: 'bg-amber-50 text-amber-700 border-amber-100' },
]

const transactions = [
  { name: 'Aline K.', amount: '+ RWF 240,000', type: 'Deposit', tone: 'bg-emerald-100 text-emerald-700' },
  { name: 'Eric M.', amount: '− RWF 85,000', type: 'Withdrawal', tone: 'bg-sky-100 text-sky-700' },
  { name: 'Grace U.', amount: '→ RWF 410,000', type: 'Transfer', tone: 'bg-violet-100 text-violet-700' },
  { name: 'Patrick N.', amount: '+ RWF 120,000', type: 'Loan Repay', tone: 'bg-emerald-100 text-emerald-700' },
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

/** Custom, frontend-only core banking dashboard preview — no stock images. */
export default function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-neutralbg px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <div className="ml-3 flex items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-line">
          <span className="text-emerald-600">
            <Icon icon={Globe02Icon} size={12} />
          </span>
          gianteaglebank.invictus.rw
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-16 flex-col items-center gap-1 border-r border-line bg-emerald-950 py-5 sm:flex">
          <div className="mb-3 h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image
              src="/logos/icons/Invictus_Icon_WhiteOrange_on_Emerald.png"
              alt="Invictus"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          {nav.map(({ icon, active }, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                active ? 'bg-white/15 text-white' : 'text-emerald-200/60'
              }`}
            >
              <Icon icon={icon} size={18} />
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 bg-neutralbg p-4 sm:p-5">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
                Banking Overview
              </p>
              <h3 className="font-display text-sm font-bold text-ink">Giant Eagle Bank</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] text-muted ring-1 ring-line sm:flex">
                <Icon icon={Search01Icon} size={14} />
                Search customers, accounts…
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-700 ring-1 ring-line">
                <Icon icon={Notification01Icon} size={16} />
              </div>
              <div className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-line">
                <Image
                  src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=80&h=80&fit=crop&crop=faces&auto=format&q=80"
                  alt="Institution administrator"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Top metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-emerald-800 p-3 text-white">
              <p className="text-[10px] uppercase tracking-wide text-emerald-100/80">Total Deposits</p>
              <p className="mt-1 text-base font-bold sm:text-lg">RWF 1.84B</p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-emerald-100">
                <Icon icon={ChartIncreaseIcon} size={12} /> +6.4% this month
              </p>
            </div>
            <div className="rounded-2xl bg-white p-3 ring-1 ring-line">
              <p className="text-[10px] uppercase tracking-wide text-muted">Active Accounts</p>
              <p className="mt-1 text-base font-bold text-ink sm:text-lg">12,840</p>
              <p className="mt-0.5 text-[10px] text-emerald-600">+312 new</p>
            </div>
            <div className="rounded-2xl bg-white p-3 ring-1 ring-line">
              <p className="text-[10px] uppercase tracking-wide text-muted">Loan Portfolio</p>
              <p className="mt-1 text-base font-bold text-ink sm:text-lg">RWF 248.6M</p>
              <p className="mt-0.5 text-[10px] text-muted">932 active loans</p>
            </div>
          </div>

          {/* Status pills */}
          <div className="mt-3 grid grid-cols-4 gap-2">
            {statusCards.map((s) => (
              <div key={s.label} className={`rounded-xl border p-2 text-center ${s.tone}`}>
                <p className="text-sm font-bold leading-none sm:text-base">{s.value}</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-5 gap-3">
            {/* Transaction volume chart */}
            <div className="col-span-3 rounded-2xl bg-white p-3 ring-1 ring-line">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-ink">Transaction Volume</p>
                <span className="pill bg-emerald-50 text-emerald-700">+18.4%</span>
              </div>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volume} margin={{ top: 6, right: 4, left: 4, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity={0.45} />
                        <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="m"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: '#94a3b8' }}
                    />
                    <Tooltip
                      cursor={{ stroke: '#10B981', strokeWidth: 1 }}
                      contentStyle={{
                        borderRadius: 12,
                        border: '1px solid #E2E8F0',
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#047857"
                      strokeWidth={2.5}
                      fill="url(#rev)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Branch performance */}
            <div className="col-span-2 rounded-2xl bg-white p-3 ring-1 ring-line">
              <p className="mb-2 text-[11px] font-semibold text-ink">Branch Performance</p>
              {[
                { b: 'Kigali HQ', p: 82 },
                { b: 'Musanze', p: 64 },
                { b: 'Huye', p: 51 },
              ].map((row) => (
                <div key={row.b} className="mb-2">
                  <div className="mb-1 flex justify-between text-[10px] text-muted">
                    <span>{row.b}</span>
                    <span className="font-semibold text-ink">{row.p}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-emerald-50">
                    <div
                      className="h-full rounded-full bg-emerald-600"
                      style={{ width: `${row.p}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent transactions */}
          <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-line">
            <p className="mb-2 text-[11px] font-semibold text-ink">Recent Transactions</p>
            <div className="space-y-1.5">
              {transactions.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-lg bg-neutralbg px-2.5 py-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-bold text-emerald-700">
                      {r.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')}
                    </span>
                    <span className="text-[11px] font-medium text-ink">{r.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-ink">{r.amount}</span>
                    <span className={`pill ${r.tone} text-[9px]`}>{r.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
