'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { plans, comparison } from '../data/pricing'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Tick02Icon, StarIcon, Cancel01Icon } from '@/lib/icons'

const EASE = [0.22, 1, 0.36, 1] as const
const popularIndex = plans.findIndex((p) => p.popular)

/** Renders a single comparison cell: check, dash, or a text value. */
function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Icon icon={Tick02Icon} size={15} />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutralbg text-muted/50">
        <Icon icon={Cancel01Icon} size={13} />
      </span>
    )
  }
  return <span className="text-sm font-semibold text-ink">{value}</span>
}

export default function PlanComparison() {
  return (
    <section className="section bg-white">
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

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[680px] border-collapse text-left">
              {/* Plan header */}
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-5 align-bottom sm:p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
                      Capabilities
                    </span>
                  </th>
                  {plans.map((plan, ci) => {
                    const popular = ci === popularIndex
                    return (
                      <th
                        key={plan.name}
                        className={`p-5 align-bottom sm:p-6 ${
                          popular ? 'bg-emerald-50/70' : ''
                        }`}
                      >
                        {popular && (
                          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-emerald-950">
                            <Icon icon={StarIcon} size={11} /> Popular
                          </span>
                        )}
                        <p className="text-base font-bold text-ink">{plan.name}</p>
                        <p className="mt-0.5 text-xs font-medium text-muted">{plan.price}</p>
                      </th>
                    )
                  })}
                </tr>
              </thead>

              <tbody>
                {comparison.map((group) => (
                  <Fragment key={group.category}>
                    {/* Category divider row */}
                    <tr>
                      <td
                        colSpan={plans.length + 1}
                        className="border-t border-line bg-neutralbg px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 sm:px-6"
                      >
                        {group.category}
                      </td>
                    </tr>

                    {group.rows.map((row) => (
                      <tr
                        key={row.label}
                        className="group border-t border-line transition-colors hover:bg-neutralbg/60"
                      >
                        <td className="sticky left-0 z-10 bg-white p-5 text-sm font-medium text-ink/80 transition-colors group-hover:bg-neutralbg/60 sm:p-6">
                          {row.label}
                        </td>
                        {row.values.map((v, ci) => {
                          const popular = ci === popularIndex
                          return (
                            <td
                              key={ci}
                              className={`p-5 sm:p-6 ${popular ? 'bg-emerald-50/40' : ''}`}
                            >
                              <Cell value={v} />
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </Fragment>
                ))}

                {/* CTA row */}
                <tr className="border-t border-line">
                  <td className="sticky left-0 z-10 bg-white p-5 sm:p-6" />
                  {plans.map((plan, ci) => {
                    const popular = ci === popularIndex
                    return (
                      <td key={plan.name} className={`p-5 sm:p-6 ${popular ? 'bg-emerald-50/40' : ''}`}>
                        <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                          <Link
                            href="/contact"
                            className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                              popular
                                ? 'bg-gold text-emerald-950 hover:brightness-105'
                                : 'border border-line bg-white text-ink hover:border-emerald-300 hover:bg-neutralbg'
                            }`}
                          >
                            {plan.cta}
                          </Link>
                        </motion.div>
                      </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-6 text-center text-sm text-muted"
        >
          Not sure which fits? <Link href="/contact" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">Talk to us</Link> and we&apos;ll tailor a plan to your institution.
        </motion.p>
      </div>
    </section>
  )
}
