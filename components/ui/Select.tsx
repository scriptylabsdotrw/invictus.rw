'use client'

import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import { ArrowDown01Icon, Tick02Icon } from '@/lib/icons'

const EASE = [0.22, 1, 0.36, 1] as const

interface SelectProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  /** Button id, so an external <label htmlFor> stays wired up. */
  id?: string
  /** Mirrors the value into a hidden input for form serialization. */
  name?: string
  /** Show an invalid (red) border, e.g. after a failed required check. */
  error?: boolean
}

/**
 * Custom listbox-style select that matches the site's flat design language —
 * a styled trigger plus an animated options panel (no native browser dropdown).
 */
export default function Select({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  id,
  name,
  error = false,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef<HTMLDivElement>(null)

  // Close on outside click.
  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  // When opening, highlight the current selection.
  useEffect(() => {
    if (open) setActive(options.indexOf(value))
  }, [open, value, options])

  const choose = (v: string) => {
    onChange(v)
    setOpen(false)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'Escape':
        setOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!open) setOpen(true)
        else setActive((i) => Math.min(options.length - 1, i + 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        if (open) setActive((i) => Math.max(0, i - 1))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!open) setOpen(true)
        else if (active >= 0) choose(options[active])
        break
    }
  }

  return (
    <div ref={rootRef} className="relative mt-1.5">
      {name && <input type="hidden" name={name} value={value} />}

      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-2 rounded-2xl border bg-white px-4 py-3 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
          open
            ? 'border-emerald-500 ring-2 ring-emerald-100'
            : error
              ? 'border-rose-300 ring-2 ring-rose-100'
              : 'border-line hover:border-emerald-300'
        } ${value ? 'text-ink' : 'text-muted/70'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="shrink-0 text-muted"
        >
          <Icon icon={ArrowDown01Icon} size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: EASE }}
            className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-line bg-white p-1.5 ring-1 ring-black/[0.03]"
          >
            {options.map((opt, i) => {
              const selected = opt === value
              return (
                <li key={opt}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => choose(opt)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      i === active ? 'bg-emerald-50 text-emerald-900' : 'text-ink/80'
                    }`}
                  >
                    <span className="truncate">{opt}</span>
                    {selected && (
                      <span className="shrink-0 text-emerald-600">
                        <Icon icon={Tick02Icon} size={16} />
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
