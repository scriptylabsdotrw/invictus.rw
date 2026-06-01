'use client'

import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  Globe02Icon,
  SecurityCheckIcon,
  Layers01Icon,
  Tick02Icon,
} from '@/lib/icons'

const portals = [
  { name: 'Giant Eagle Bank', domain: 'gianteaglebank.invictus.rw', initials: 'GE' },
  { name: 'Umoja SACCO', domain: 'umojasacco.invictus.rw', initials: 'US' },
  { name: 'Prime Bank', domain: 'primebank.invictus.rw', initials: 'PB' },
]

const points = [
  {
    title: 'Your own subdomain',
    text: 'Each institution gets a dedicated address such as yourbank.invictus.rw — branded as yours.',
  },
  {
    title: 'Fully isolated data',
    text: 'Every tenant’s customers, accounts, and ledgers stay completely separate and secure.',
  },
  {
    title: 'One platform, many brands',
    text: 'All portals are powered by the central Invictus core — you scale without managing servers.',
  },
]

/** Browser-window mockup showing a branded tenant portal. */
function PortalWindow() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/40 backdrop-blur-sm">
      {/* address bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-300/70" />
        <span className="h-3 w-3 rounded-full bg-amber-300/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-emerald-950/60 px-3 py-1 text-[11px] text-emerald-200 ring-1 ring-white/10">
          <span className="text-emerald-300">
            <Icon icon={SecurityCheckIcon} size={12} />
          </span>
          gianteaglebank.invictus.rw
        </div>
      </div>

      {/* portal body */}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/90 text-sm font-extrabold text-emerald-950">
            GE
          </span>
          <div>
            <p className="text-sm font-bold text-white">Giant Eagle Bank</p>
            <p className="text-[11px] text-emerald-300">Powered by Invictus</p>
          </div>
          <span className="ml-auto pill bg-emerald-500/15 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { l: 'Deposits', v: 'RWF 1.84B' },
            { l: 'Accounts', v: '12,840' },
            { l: 'Branches', v: '4' },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-sm font-bold text-white">{s.v}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-emerald-200/70">{s.l}</p>
            </div>
          ))}
        </div>

        {/* other tenant tabs */}
        <div className="mt-4 space-y-2">
          {portals.map((p, i) => (
            <motion.div
              key={p.domain}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-emerald-950/40 px-3 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[10px] font-bold text-emerald-200">
                {p.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white">{p.name}</p>
                <p className="truncate text-[11px] text-emerald-300">{p.domain}</p>
              </div>
              <span className="ml-auto text-emerald-300/70">
                <Icon icon={Globe02Icon} size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SubdomainSection() {
  return (
    <section className="section bg-emerald-950 text-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="text-gold">
                  <Icon icon={Layers01Icon} size={16} />
                </span>
                Multi-tenant architecture
              </span>
              <h2 className="display mt-4 text-4xl text-white sm:text-5xl">
                Every institution gets its own branded portal
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-emerald-100/80">
                Each institution operates under its own dedicated subdomain — while still being
                powered by the central Invictus core banking platform.
              </p>

              <ul className="mt-7 space-y-4">
                {points.map((p) => (
                  <li key={p.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <Icon icon={Tick02Icon} size={16} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-emerald-100/70">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Portal window mockup */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-500/10 blur-2xl" />
              <PortalWindow />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
