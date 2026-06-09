import type { ReactNode } from 'react'
import Icon, { type IconSvgElement } from './ui/Icon'
import { SparklesIcon } from '@/lib/icons'

interface PageHeaderProps {
  title: ReactNode
  subtitle?: string
  /** Small glassy chips under the title. */
  chips?: string[]
  /** Icon shown in a small badge above the title. */
  icon?: IconSvgElement
}

/** Static, elegant dark hero band for inner pages. */
export default function PageHeader({
  title,
  subtitle,
  chips,
  icon = SparklesIcon,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
      {/* Solid dark overlay */}
      <div className="absolute inset-0 -z-30 bg-black/25" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_10%,black_30%,transparent_80%)]" />

      <div className="container-px pb-20 pt-36 sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 ring-1 ring-white/15">
            <Icon icon={icon} size={26} />
          </span>

          <h1 className="display mt-7 text-balance text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <div className="mx-auto mt-6 h-0.5 w-16 bg-gold" />

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
              {subtitle}
            </p>
          )}

          {chips && chips.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-emerald-50 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
