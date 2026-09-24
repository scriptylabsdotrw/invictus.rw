import Link from 'next/link'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { features } from '@/lib/constants'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'

/** The six core tools as bordered cells, with a link row to the full features page. */
export default function PlatformCells() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-zinc-200">
      <div className="mx-auto max-w-[1344px] border-zinc-200 lg:border-x">
        <div className="grid gap-6 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-medium text-primary-700">Platform</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl">
              Everything a lender runs on.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-zinc-700 md:justify-self-end">
            Six tools that replace the spreadsheets, paper ledgers and reminder calls.
          </p>
        </div>

        <div className="grid border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 100}
              className={cn(
                'group border-b border-zinc-200 px-6 py-10 transition-colors hover:bg-zinc-50 sm:px-10 sm:py-12',
                // Right divider: every 1st of 2 columns on tablet, 1st and 2nd of 3 on desktop.
                i % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0',
                i % 3 === 2 ? 'lg:border-r-0' : 'lg:border-r',
              )}
            >
              <span className="flex h-12 w-12 items-center justify-center bg-primary-600 text-white transition-colors group-hover:bg-zinc-900">
                <Icon icon={f.icon} size={22} />
              </span>
              <h3 className="mt-10 text-2xl font-normal tracking-tight sm:text-3xl">{f.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-zinc-600">{f.description}</p>
            </Reveal>
          ))}
        </div>

        <Link
          href="/features"
          className="group flex items-center justify-between px-6 py-6 text-lg text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white sm:px-10"
        >
          Explore all features
          <span className="transition-transform group-hover:translate-x-1">
            <Icon icon={ArrowRight01Icon} size={18} />
          </span>
        </Link>
      </div>
    </section>
  )
}
