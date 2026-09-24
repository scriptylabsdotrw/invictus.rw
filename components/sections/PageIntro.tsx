import type { ReactNode } from 'react'
import Eyebrow from '../ui/Eyebrow'
import GridBackdrop from '../ui/GridBackdrop'

interface PageIntroProps {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  children?: ReactNode
}

/** Light opening headline block with the hairline grid texture behind it. */
export default function PageIntro({ eyebrow, title, body, children }: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <GridBackdrop />
      <div className="container-narrow pb-16 pt-20 text-center sm:pb-20 sm:pt-28">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-7xl">
          {title}
        </h1>
        {body && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">{body}</p>}
        {children}
      </div>
    </section>
  )
}
