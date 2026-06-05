import Link from 'next/link'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { Tick02Icon, SecurityCheckIcon, ArrowRight01Icon, Globe02Icon } from '@/lib/icons'

const seeList = [
  'Live banking overview & dashboards',
  'Accounts, deposits & transactions',
  'Loans, the general ledger & reports',
  'Your branded portal, configured for you',
]

/** Blurred, placeholder-only window — hints at the product without exposing it. */
function LockedPreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-white ring-1 ring-black/[0.03]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-neutralbg px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <div className="mx-auto hidden items-center gap-2 rounded-lg bg-white px-3 py-1 text-xs font-medium text-muted ring-1 ring-line sm:flex">
          <span className="text-emerald-600">
            <Icon icon={Globe02Icon} size={13} />
          </span>
          app.invictus.rw
        </div>
      </div>

      {/* Blurred skeleton — placeholder shapes only, no real data */}
      <div className="relative">
        <div className="pointer-events-none select-none space-y-3 p-5 blur-[7px] [filter:blur(7px)]" aria-hidden>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-line bg-neutralbg p-3">
                <div className="h-2 w-12 rounded-full bg-line" />
                <div className="mt-3 h-3 w-16 rounded-full bg-emerald-200" />
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-line bg-neutralbg p-4">
            <div className="h-2 w-28 rounded-full bg-line" />
            <div className="mt-4 flex h-28 items-end gap-2">
              {[40, 64, 52, 78, 60, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-emerald-300" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-line bg-neutralbg px-4 py-3">
              <div className="space-y-1.5">
                <div className="h-2.5 w-24 rounded-full bg-line" />
                <div className="h-2 w-16 rounded-full bg-line/70" />
              </div>
              <div className="h-5 w-14 rounded-full bg-emerald-100" />
            </div>
          ))}
        </div>

        {/* Frosted overlay with the demo gate */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white via-white/85 to-white/40 p-6">
          <div className="max-w-xs rounded-2xl border border-line bg-white/80 p-6 text-center backdrop-blur-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-white">
              <Icon icon={SecurityCheckIcon} size={24} />
            </span>
            <p className="mt-4 text-sm font-bold text-ink">Shown live in your private demo</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              For security, the full workspace is demonstrated one-on-one — never exposed publicly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DemoTeaser() {
  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <div>
              <span className="eyebrow">Live walkthrough</span>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
                See the full platform in a private demo
              </h2>
              <p className="lead mt-6">
                Invictus runs real customer money, so we don&apos;t put the live workspace on the
                open web. Instead, we walk your team through it directly — at your pace, on your
                scenarios.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {seeList.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
              >
                Request a private demo
                <span className="transition-transform group-hover:translate-x-1">
                  <Icon icon={ArrowRight01Icon} size={18} />
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Locked preview */}
          <Reveal delay={0.1}>
            <LockedPreview />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
