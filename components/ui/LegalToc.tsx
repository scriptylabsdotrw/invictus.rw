'use client'

import { useEffect, useRef, useState } from 'react'

export interface TocItem {
  id: string
  heading: string
}

interface LegalTocProps {
  items: TocItem[]
}

/**
 * Client-side table of contents for legal pages.
 *  - Scroll-spy: highlights the section currently in view via IntersectionObserver.
 *  - Reading-progress bar fixed to the top edge of the viewport.
 *  - Collapsible variant on mobile (the desktop aside stays sticky).
 */
export default function LegalToc({ items }: LegalTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  // Tracks every section currently intersecting, so we can always pick the topmost.
  const visible = useRef<Set<string>>(new Set())

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.add(entry.target.id)
          else visible.current.delete(entry.target.id)
        }
        // The active item is the first section (in document order) still on screen.
        const firstVisible = items.find((i) => visible.current.has(i.id))
        if (firstVisible) setActiveId(firstVisible.id)
      },
      // Bias the active band to the upper third so headings activate as they arrive.
      { rootMargin: '-128px 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, doc.scrollTop / scrollable) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const activeIndex = Math.max(0, items.findIndex((i) => i.id === activeId))

  const list = (onNavigate?: () => void) => (
    <nav className="border-l border-line">
      {items.map((item, i) => {
        const active = item.id === activeId
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavigate}
            aria-current={active ? 'location' : undefined}
            className={`-ml-px flex items-baseline gap-2 border-l-2 py-1.5 pl-4 text-sm transition-colors ${
              active
                ? 'border-emerald-500 font-medium text-emerald-700'
                : 'border-transparent text-muted hover:border-emerald-300 hover:text-emerald-700'
            }`}
          >
            <span className="text-xs tabular-nums text-muted/60">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item.heading}
          </a>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Reading-progress bar pinned to the very top edge of the viewport. */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Desktop: sticky TOC in the left rail. */}
      <aside className="hidden lg:block">
        <div className="lg:sticky lg:top-32">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">On this page</p>
            <span className="text-xs font-semibold tabular-nums text-emerald-700">
              {activeIndex + 1}/{items.length}
            </span>
          </div>
          <div className="mt-4">{list()}</div>
        </div>
      </aside>

      {/* Mobile: collapsible TOC above the content. */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-2xl border border-line bg-neutralbg px-4 py-3 text-left"
        >
          <span className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
              On this page
            </span>
            <span className="mt-0.5 text-sm font-medium text-ink">
              {items[activeIndex]?.heading}
            </span>
          </span>
          <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {open && <div className="mt-3 pl-1">{list(() => setOpen(false))}</div>}
      </div>
    </>
  )
}
