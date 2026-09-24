import type { ReactNode } from 'react'

const CELL = 96

/** Hairline grid background anchored to the page center (edges of centered content sit on lines). */
export function gridBackground(color = '#e4e4e7', cell = CELL): React.CSSProperties {
  return {
    backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
    backgroundSize: `${cell}px ${cell}px`,
    backgroundPosition: `calc(50% + ${cell / 2}px) 0`,
  }
}

interface GridHeroProps {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}

/** Render-style opening block: a white panel sitting on a visible hairline grid. */
export default function GridHero({ eyebrow, title, children }: GridHeroProps) {
  return (
    <section
      className="relative border-b border-zinc-200 py-12 sm:py-24"
      style={gridBackground()}
    >
      <div className="mx-auto max-w-[1152px] px-4 sm:px-0">
        <div className="border border-zinc-200 bg-white px-6 py-10 sm:px-12 sm:py-14">
          <p className="text-sm font-medium text-primary-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-normal leading-[1.02] tracking-tight text-zinc-900 sm:text-7xl">
            {title}
          </h1>
          {children && (
            <div className="mt-14 max-w-3xl space-y-2 text-lg leading-relaxed text-zinc-700 sm:mt-24 [&_a]:text-zinc-900 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary-700">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
