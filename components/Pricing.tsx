'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { plans } from '@/lib/constants'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Tick02Icon, StarIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

export default function Pricing({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="section bg-white">
      <div className="container-px">
        {showHeader && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Pricing</span>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                Flexible plans for growing institutions
              </h2>
              <p className="lead mt-6">
                Start where you are and scale as you grow. Every plan is tailored to your
                institution — talk to us for a quote that fits.
              </p>
            </div>
          </Reveal>
        )}

        <div
          className={`mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3 ${
            showHeader ? 'mt-14' : 'mt-4'
          }`}
        >
          {plans.map((plan, i) => {
            const popular = plan.popular
            return (
              <Reveal key={plan.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 ${
                    popular
                      ? 'border-emerald-400/40 bg-emerald-950 text-white ring-1 ring-emerald-400/30'
                      : 'border-line bg-white text-ink'
                  }`}
                >
                  {/* Emerald glow behind the highlighted plan */}
                  {popular && (
                    <div className="pointer-events-none absolute inset-x-0 -top-16 -z-0 h-48 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(16,185,129,0.35),transparent_70%)]" />
                  )}
                  {/* Gold top accent on hover for standard plans */}
                  {!popular && (
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-brand-orange/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}

                  {/* Header: icon mark + popular badge */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                        popular
                          ? 'bg-white/10 text-emerald-200 ring-1 ring-white/15'
                          : 'bg-gradient-to-br from-emerald-700 to-emerald-900 text-white'
                      }`}
                    >
                      <Icon icon={plan.icon} size={22} />
                    </span>
                    {popular && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange px-3 py-1 text-xs font-extrabold text-white">
                        <Icon icon={StarIcon} size={13} /> Most Popular
                      </span>
                    )}
                  </div>

                  <h3
                    className={`relative mt-6 text-xl font-bold ${
                      popular ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`relative mt-1 text-sm ${
                      popular ? 'text-emerald-100/70' : 'text-muted'
                    }`}
                  >
                    {plan.bestFor}
                  </p>

                  {/* Price block */}
                  <div
                    className={`relative mt-6 border-t pt-6 ${
                      popular ? 'border-white/10' : 'border-line'
                    }`}
                  >
                    <p
                      className={`text-3xl font-extrabold tracking-tight ${
                        popular ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {plan.price}
                    </p>
                    {plan.priceNote && (
                      <p
                        className={`mt-1.5 text-xs font-medium ${
                          popular ? 'text-emerald-100/60' : 'text-muted'
                        }`}
                      >
                        {plan.priceNote}
                      </p>
                    )}
                  </div>

                  {/* Feature list */}
                  <div
                    className={`relative mt-6 flex-1 border-t pt-6 ${
                      popular ? 'border-white/10' : 'border-line'
                    }`}
                  >
                    {plan.inherits && (
                      <p
                        className={`mb-4 text-xs font-bold uppercase tracking-wider ${
                          popular ? 'text-emerald-300' : 'text-emerald-700'
                        }`}
                      >
                        {plan.inherits}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              popular
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            <Icon icon={Tick02Icon} size={14} />
                          </span>
                          <span className={popular ? 'text-emerald-50' : 'text-ink/80'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`group/cta relative mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                      popular
                        ? 'bg-brand-orange text-white hover:bg-brand-orange-soft'
                        : 'bg-emerald-800 text-white hover:bg-emerald-900'
                    }`}
                  >
                    {plan.cta}
                    <span className="transition-transform group-hover/cta:translate-x-1">
                      <Icon icon={ArrowRight01Icon} size={16} />
                    </span>
                  </Link>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          All plans are quoted to your needs. No hidden fees — just a clear conversation.
        </p>
      </div>
    </section>
  )
}
