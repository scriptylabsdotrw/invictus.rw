'use client'

import Link from 'next/link'
import { plans, comparison } from '@/lib/constants'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Tick02Icon, StarIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

const popularIndex = plans.findIndex((p) => p.popular)

/** Three plan indicators on the right side of each feature row. */
function PlanDots({ values }: { values: (boolean | string)[] }) {
  return (
    <div className="flex shrink-0 items-center gap-6">
      {plans.map((plan, pi) => {
        const popular = pi === popularIndex
        const value = values[pi]

        return (
          <div key={plan.name} className="flex flex-col items-center gap-1.5">
            {value === true ? (
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  popular ? 'bg-brand-orange/15 text-brand-orange' : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                <Icon icon={Tick02Icon} size={15} />
              </span>
            ) : value === false ? (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-line/60">
                <span className="text-lg font-light leading-none text-muted/30">—</span>
              </span>
            ) : (
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold leading-none ${
                  popular
                    ? 'bg-brand-orange/15 text-brand-orange'
                    : 'bg-emerald-50 text-emerald-700'
                }`}
              >
                {value}
              </span>
            )}
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted/40">
              {plan.name.slice(0, 3)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default function PlanComparison() {
  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Compare plans</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Find the plan that fits
            </h2>
            <p className="lead mt-6">
              Every capability, side by side. Start lean and unlock more as your institution grows.
            </p>
          </div>
        </Reveal>

        {/* ── Plan reference cards ── */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {plans.map((plan, pi) => {
              const popular = pi === popularIndex
              return (
                <div
                  key={plan.name}
                  className={`relative overflow-hidden rounded-2xl border p-5 text-center ${
                    popular
                      ? 'border-emerald-800/40 bg-emerald-950'
                      : 'border-line bg-white'
                  }`}
                >
                  {popular && (
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-orange" />
                  )}

                  {popular ? (
                    <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-brand-orange px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                      <Icon icon={StarIcon} size={9} /> Popular
                    </span>
                  ) : (
                    <div className="mb-2 h-[18px]" />
                  )}

                  <p className={`text-sm font-extrabold ${popular ? 'text-white' : 'text-ink'}`}>
                    {plan.name}
                  </p>
                  <p className={`mt-0.5 text-[11px] ${popular ? 'text-emerald-300' : 'text-muted'}`}>
                    {plan.price}
                  </p>

                  <Link
                    href="/contact"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-1 rounded-full px-3 py-2 text-[11px] font-bold transition-all ${
                      popular
                        ? 'bg-brand-orange text-white hover:bg-brand-orange-soft'
                        : 'border border-line bg-white text-ink hover:border-emerald-300'
                    }`}
                  >
                    {plan.cta}
                    <Icon icon={ArrowRight01Icon} size={11} />
                  </Link>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* ── Feature groups ── */}
        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          {comparison.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div>
                {/* Category label */}
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">
                    {group.category}
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>

                {/* Feature rows */}
                <div className="overflow-hidden rounded-2xl border border-line bg-white divide-y divide-line">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-neutralbg/60"
                    >
                      <p className="text-sm font-medium text-ink/75">{row.label}</p>
                      <PlanDots values={row.values} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Not sure which fits?{' '}
          <Link
            href="/contact"
            className="font-semibold text-emerald-700 underline-offset-4 hover:underline"
          >
            Talk to us
          </Link>{' '}
          and we&apos;ll tailor a plan to your institution.
        </p>
      </div>
    </section>
  )
}
