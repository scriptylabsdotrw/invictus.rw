import type { Metadata } from 'next'
import Link from 'next/link'
import GridHero, { gridBackground } from '@/components/sections/GridHero'
import Button from '@/components/ui/Button'
import CTABand from '@/components/CTABand'
import Icon, { type IconSvgElement } from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { features } from '@/lib/constants'
import {
  ArrowRight01Icon,
  Building03Icon,
  DollarCircleIcon,
  Globe02Icon,
  IdentityCardIcon,
  Layers01Icon,
  PercentCircleIcon,
  Tick02Icon,
  UserLock01Icon,
} from '@hugeicons/core-free-icons'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Loan applications, approvals, disbursements, repayments, reminders, borrower portal, accounting, reporting and audit trail — every Invictus capability in one place.',
  alternates: { canonical: '/features' },
}

const lifecycle = [
  { title: 'Apply', description: 'Capture the borrower, their KYC details and the loan request.' },
  { title: 'Approve', description: 'Route each application to the right person for a decision.' },
  { title: 'Disburse', description: 'Release funds and generate the repayment schedule instantly.' },
  { title: 'Repay', description: 'Record repayments against the schedule and apply penalties on time.' },
  { title: 'Report', description: 'Every movement posts to the ledger and shows up in your reports.' },
]

const controls: { icon: IconSvgElement; title: string; description: string; plan: string }[] = [
  {
    icon: IdentityCardIcon,
    title: 'Customer profiles & KYC',
    description: 'One profile per borrower with their details, documents and full loan history.',
    plan: 'All plans',
  },
  {
    icon: PercentCircleIcon,
    title: 'Interest, fees & penalties',
    description: 'Set the rules per product. Invictus calculates them so your income is right.',
    plan: 'All plans',
  },
  {
    icon: Layers01Icon,
    title: 'Isolated tenant data',
    description: 'Your institution’s data is kept separate from every other institution on the platform.',
    plan: 'All plans',
  },
  {
    icon: Globe02Icon,
    title: 'Your own domain',
    description: 'Run your portal on yourbank.invictus.rw or your own domain, in your brand.',
    plan: 'Standard+',
  },
  {
    icon: UserLock01Icon,
    title: 'Roles & permissions',
    description: 'Decide exactly what administrators, managers and loan officers can see and do.',
    plan: 'Corporate+',
  },
  {
    icon: Building03Icon,
    title: 'Multiple branches',
    description: 'Run every branch from one system and compare performance across them.',
    plan: 'Corporate+',
  },
]

const integrations: { icon: IconSvgElement; title: string; description: string; plan: string }[] = [
  {
    icon: IdentityCardIcon,
    title: 'National ID (NIDA)',
    description: 'Verify borrower identity against the national ID system during onboarding.',
    plan: 'Standard+',
  },
  {
    icon: Building03Icon,
    title: 'National Land Authority (NLA)',
    description: 'Check land and property records when you take collateral.',
    plan: 'Standard+',
  },
  {
    icon: DollarCircleIcon,
    title: 'Mobile money',
    description: 'Connect disbursements and repayments to mobile money.',
    plan: 'Standard+',
  },
]

const ledgerPoints = [
  'Every posting is double-entry — debits always equal credits',
  'Income statement, trial balance and balance sheet on demand',
  'A full audit trail on every transaction and change',
]

// Illustrative figures for the sample panel only.
const trialBalance = [
  { account: 'Cash & bank', debit: '12,400,000', credit: '' },
  { account: 'Loan portfolio', debit: '48,600,000', credit: '' },
  { account: 'Borrowings', debit: '', credit: '55,000,000' },
  { account: 'Interest income', debit: '', credit: '7,150,000' },
  { account: 'Operating expenses', debit: '1,150,000', credit: '' },
]

function SectionTitle({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <p className="text-sm font-medium text-primary-700">{kicker}</p>
      <h2 className="mt-4 max-w-3xl text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl">{title}</h2>
      {body && <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-700">{body}</p>}
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <GridHero eyebrow="Features" title="Every tool your business needs.">
        <p>
          Jump to <a href="#lifecycle">the lifecycle</a>, <a href="#core">core tools</a>,{' '}
          <a href="#ledger">accounting</a>, <a href="#control">controls</a>, and{' '}
          <a href="#integrations">integrations</a>.
        </p>
        <p>From the first application to the final repayment — and every ledger entry in between.</p>
        <p>
          Want to see it with your own products? <Link href="/contact">Book a demo ↗</Link>
        </p>
      </GridHero>

      {/* Lifecycle */}
      <section id="lifecycle" className="scroll-mt-20 border-b border-zinc-200">
        <div className="mx-auto max-w-[1344px] border-zinc-200 lg:border-x">
          <SectionTitle
            kicker="Lifecycle"
            title="One flow, start to finish."
            body="Each step hands off to the next. No re-typing, no exports, no lost paperwork."
          />
          <ol className="grid border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-5">
            {lifecycle.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 100}
                className="group relative border-b border-zinc-200 px-6 pb-10 pt-8 sm:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <span className="block text-6xl font-normal tabular-nums tracking-tight text-zinc-200 transition-colors group-hover:text-primary-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-10 text-2xl font-normal tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{step.description}</p>
                {i < lifecycle.length - 1 && (
                  <span
                    style={{ top: "9.25rem" }}
                    className="absolute right-0 z-10 hidden h-7 w-7 -translate-y-1/2 translate-x-1/2 items-center justify-center border border-zinc-200 bg-white text-zinc-400 lg:flex">
                    <Icon icon={ArrowRight01Icon} size={14} />
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Core tools */}
      <section id="core" className="scroll-mt-20 border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1344px] border-zinc-200 lg:grid-cols-[0.85fr_2fr] lg:border-x">
          <div className="border-b border-zinc-200 lg:border-b-0 lg:border-r">
            <div className="px-6 py-16 sm:px-10 lg:sticky lg:top-20 lg:py-20">
              <p className="text-sm font-medium text-primary-700">Core</p>
              <h2 className="mt-4 text-5xl font-normal leading-[1.02] tracking-tight">Six tools. One login.</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-700">
                The tools that replace spreadsheets, notebooks and reminder calls. Compare plans to see what each one includes.
              </p>
              <div className="mt-10 max-w-xs">
                <Button href="/pricing" variant="dark" full>
                  See plans
                </Button>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 2) * 100}
                className="group border-b border-zinc-200 px-6 py-10 transition-colors hover:bg-zinc-50 sm:px-10 sm:py-14 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-primary-600 text-white transition-colors group-hover:bg-zinc-900">
                  <Icon icon={f.icon} size={22} />
                </span>
                <h3 className="mt-10 text-3xl font-normal tracking-tight">{f.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-zinc-600">{f.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ledger spotlight */}
      <section id="ledger" className="scroll-mt-20 border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1344px] border-zinc-200 lg:grid-cols-2 lg:border-x">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:border-r lg:border-zinc-200">
            <p className="flex items-center gap-3 text-sm font-medium text-primary-700">
              Accounting
              <span className="bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">Standard+</span>
            </p>
            <h2 className="mt-4 text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl">
              Your books balance. Automatically.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-700">
              Every disbursement, repayment, fee and penalty posts to a real double-entry general ledger — no
              month-end re-keying.
            </p>
            <ul className="mt-10 border-t border-zinc-200">
              {ledgerPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 border-b border-zinc-200 py-4 text-base text-zinc-900">
                  <span className="mt-0.5 text-primary-600">
                    <Icon icon={Tick02Icon} size={18} strokeWidth={2.2} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center bg-primary-800 p-6 sm:p-12 lg:p-16" style={gridBackground('rgb(255 255 255 / 0.12)')}>
            <Reveal className="w-full bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                <div>
                  <p className="text-base font-medium text-zinc-900">Trial balance</p>
                  <p className="text-xs text-zinc-500">Sample figures · RWF</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" /> Balanced
                </span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                    <th className="px-5 py-3 text-left font-medium">Account</th>
                    <th className="px-5 py-3 text-right font-medium">Debit</th>
                    <th className="px-5 py-3 text-right font-medium">Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {trialBalance.map((r) => (
                    <tr key={r.account} className="border-b border-zinc-100">
                      <td className="px-5 py-3 text-zinc-700">{r.account}</td>
                      <td className="px-5 py-3 text-right tabular-nums text-zinc-900">{r.debit || '—'}</td>
                      <td className="px-5 py-3 text-right tabular-nums text-zinc-900">{r.credit || '—'}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-zinc-50 font-medium">
                    <td className="px-5 py-3 text-zinc-900">Total</td>
                    <td className="px-5 py-3 text-right tabular-nums text-primary-700">62,150,000</td>
                    <td className="px-5 py-3 text-right tabular-nums text-primary-700">62,150,000</td>
                  </tr>
                </tfoot>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Controls table */}
      <section id="control" className="scroll-mt-20 border-b border-zinc-200">
        <div className="mx-auto max-w-[1344px] border-zinc-200 lg:border-x">
          <SectionTitle
            kicker="Control"
            title="Set it up your way."
            body="Configure products, people and branches to match how your institution already works."
          />
          <div className="border-t border-zinc-200">
            <div className="hidden grid-cols-[0.85fr_1.4fr_0.6fr] border-b border-zinc-200 text-xs font-medium uppercase tracking-wider text-zinc-500 md:grid">
              <span className="px-10 py-4">Capability</span>
              <span className="border-l border-zinc-200 px-8 py-4">What it does</span>
              <span className="border-l border-zinc-200 px-8 py-4">Available on</span>
            </div>
            {controls.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 60}
                className="group grid border-b border-zinc-200 transition-colors last:border-b-0 hover:bg-zinc-50 md:grid-cols-[0.85fr_1.4fr_0.6fr]"
              >
                <div className="flex items-center gap-4 px-6 pt-6 sm:px-10 md:py-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary-600 text-white transition-colors group-hover:bg-zinc-900">
                    <Icon icon={c.icon} size={18} />
                  </span>
                  <h3 className="text-xl font-normal tracking-tight">{c.title}</h3>
                </div>
                <p className="px-6 pt-3 text-base leading-relaxed text-zinc-600 sm:px-10 md:flex md:items-center md:border-l md:border-zinc-200 md:px-8 md:py-6">
                  {c.description}
                </p>
                <div className="px-6 pb-6 pt-3 sm:px-10 md:flex md:items-center md:border-l md:border-zinc-200 md:px-8 md:py-6">
                  <span
                    className={`inline-block px-2.5 py-1 text-xs font-medium ${
                      c.plan === 'All plans' ? 'bg-primary-50 text-primary-700' : 'bg-zinc-100 text-zinc-700'
                    }`}
                  >
                    {c.plan}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="scroll-mt-20 border-b border-zinc-200 py-12 sm:py-24" style={gridBackground()}>
        <div className="mx-auto max-w-[1152px] px-4 sm:px-0">
          <div className="grid border border-zinc-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-zinc-200 px-6 py-10 sm:px-10 lg:border-b-0 lg:border-r">
              <p className="text-sm font-medium text-primary-700">Integrations</p>
              <h2 className="mt-4 text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.5rem]">
                Connected to the systems you rely on.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600">
                NIDA, NLA and mobile money come with Standard and above.
              </p>
            </div>
            {integrations.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="group flex flex-col border-b border-zinc-200 px-6 py-10 transition-colors last:border-b-0 hover:bg-zinc-50 sm:px-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-primary-600 text-white transition-colors group-hover:bg-zinc-900">
                  <Icon icon={item.icon} size={22} />
                </span>
                <h3 className="mt-10 text-2xl font-normal tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-600">{item.description}</p>
                <span
                  className={`mt-8 w-fit px-2.5 py-1 text-xs font-medium uppercase tracking-wider ${
                    item.plan === 'Enterprise' ? 'bg-accent text-white' : 'bg-primary-50 text-primary-700'
                  }`}
                >
                  {item.plan}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="See it with your own loan products." />
    </>
  )
}
