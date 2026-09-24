'use client'

import { useState } from 'react'
import Icon from '../ui/Icon'
import { ArrowDown01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { comparison, plans, type ComparisonValue } from '@/lib/constants'
import { PlanButton } from './PricingPlans'
import Button from '../ui/Button'
import { cn } from '@/lib/utils'

const popularIndex = plans.findIndex((p) => p.popular)

function Value({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <span className="inline-flex text-zinc-900">
        <Icon icon={Tick02Icon} size={20} strokeWidth={2.2} />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="text-zinc-300">
        —<span className="sr-only">Not included</span>
      </span>
    )
  }
  return <span className="text-[15px] text-zinc-900">{value}</span>
}

function Info({ text }: { text: string }) {
  return (
    <span className="group/info relative ml-2 inline-flex align-middle">
      <button
        type="button"
        aria-label={text}
        className="flex h-4 w-4 items-center justify-center bg-primary-50 text-[10px] font-semibold text-primary-700"
      >
        i
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full -left-2 z-20 mb-2 w-60 bg-zinc-900 px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-elevated transition-opacity group-hover/info:opacity-100 group-focus-within/info:opacity-100"
      >
        {text}
      </span>
    </span>
  )
}

export default function PlanComparison() {
  const [expanded, setExpanded] = useState(false)
  const [mobilePlan, setMobilePlan] = useState(popularIndex)
  const groups = expanded ? comparison : comparison.slice(0, 2)

  return (
    <section id="compare" className="scroll-mt-20 border-b border-zinc-200">
      <div className="mx-auto max-w-[1344px] border-zinc-200 lg:border-x">
        <div className="px-6 py-16 sm:px-8 sm:py-24 lg:pl-[calc(17.5%+2rem)]">
          <h2 className="text-5xl font-normal tracking-tight sm:text-7xl">Compare plans</h2>
          <p className="mt-4 text-xl text-zinc-700">Every feature, side by side.</p>
        </div>

        {/* Mobile: pick one plan to compare against the feature list. */}
        <div className="sticky top-20 z-10 grid grid-cols-4 border-y border-zinc-200 bg-white md:hidden" role="tablist">
          {plans.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={mobilePlan === i}
              onClick={() => setMobilePlan(i)}
              className={cn(
                'border-r border-zinc-200 px-1 py-3 text-sm last:border-r-0',
                mobilePlan === i ? 'bg-zinc-900 font-medium text-white' : 'text-zinc-600',
              )}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Feature comparison across Invictus plans</caption>
            <thead className="sticky top-20 z-10 hidden bg-white md:table-header-group">
              <tr>
                <th scope="col" className="w-[17.5%] border-y border-zinc-200 bg-white" />
                {plans.map((p, i) => (
                  <th
                    key={p.name}
                    scope="col"
                    className={cn(
                      'w-[20.625%] border-y border-l border-zinc-200 px-5 pb-4 pt-5 align-bottom font-normal',
                      i === popularIndex ? 'bg-zinc-100' : 'bg-white',
                    )}
                  >
                    <span className="block text-2xl tracking-tight text-zinc-900 lg:text-3xl">{p.name}</span>
                    <span className="mt-3 block">
                      <PlanButton small popular={p.popular} label={p.cta} />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            {groups.map((group) => (
              <tbody key={group.category}>
                <tr>
                  <th
                    colSpan={5}
                    scope="colgroup"
                    className="px-6 pb-4 pt-14 text-2xl font-normal tracking-tight text-zinc-900 sm:px-8 sm:text-3xl"
                  >
                    {group.category}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-zinc-200 transition-colors hover:bg-zinc-50/70">
                    <th scope="row" className="px-6 py-5 text-base font-normal text-zinc-900 sm:px-8">
                      {row.label}
                      {row.info && <Info text={row.info} />}
                    </th>
                    {row.values.map((v, i) => (
                      <td
                        key={plans[i].name}
                        className={cn(
                          'border-l border-zinc-200 px-5 py-5 text-center',
                          i === mobilePlan ? 'table-cell' : 'hidden md:table-cell',
                          i === popularIndex && 'md:bg-zinc-50/60',
                        )}
                      >
                        <Value value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>

          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-white/0 to-white" />
          )}
        </div>

        <div className="flex justify-center border-t border-zinc-200 px-6 py-12">
          <Button onClick={() => setExpanded((v) => !v)} ariaExpanded={expanded} variant="dark" arrow={false} className="min-w-[16rem]">
            {expanded ? 'Show fewer features' : 'Compare all features'}
            <span className={cn('transition-transform', expanded && 'rotate-180')}>
              <Icon icon={ArrowDown01Icon} size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
