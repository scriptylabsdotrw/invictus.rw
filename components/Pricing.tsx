'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { plans } from '../data/pricing'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Tick02Icon, StarIcon } from '@/lib/icons'

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

        <div className={`mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-3 ${showHeader ? 'mt-14' : 'mt-4'}`}>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.popular
                    ? 'border-emerald-400/40 bg-emerald-950 text-white ring-1 ring-emerald-400/30'
                    : 'border-line bg-white text-ink'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-emerald-950">
                    <Icon icon={StarIcon} size={14} /> Most Popular
                  </span>
                )}

                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-ink'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-emerald-100/80' : 'text-muted'}`}>
                  {plan.tagline}
                </p>

                <p className="mt-6">
                  <span className={`text-3xl font-extrabold ${plan.popular ? 'text-white' : 'text-ink'}`}>
                    {plan.price}
                  </span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        <Icon icon={Tick02Icon} size={14} />
                      </span>
                      <span className={plan.popular ? 'text-emerald-50' : 'text-ink/80'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gold text-emerald-950 hover:brightness-105'
                      : 'bg-emerald-800 text-white hover:bg-emerald-900'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          All plans are quoted to your needs. No hidden fees — just a clear conversation.
        </p>
      </div>
    </section>
  )
}
