'use client'

import { useState } from 'react'

const MONTHS = [
  'January','February','March','April','May',
  'June','July','August','September','October','November','December',
]
const DAY_LABELS = ['Mo','Tu','We','Th','Fr','Sa','Su']

function toISO(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

function parseISO(iso: string) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return { y, m: m - 1, d }
}

interface DatePickerProps {
  value: string
  onChange: (iso: string) => void
  minDate?: string
  error?: boolean
}

export default function DatePicker({ value, onChange, minDate, error }: DatePickerProps) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  const selected = parseISO(value)
  const min = parseISO(minDate ?? toISO(today.getFullYear(), today.getMonth(), today.getDate()))

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const startOffset = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7 // Monday-first

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  function isPast(d: number) {
    if (!min) return false
    if (viewYear < min.y) return true
    if (viewYear === min.y && viewMonth < min.m) return true
    if (viewYear === min.y && viewMonth === min.m && d < min.d) return true
    return false
  }

  function isSelected(d: number) {
    return !!selected && selected.y === viewYear && selected.m === viewMonth && selected.d === d
  }

  function isToday(d: number) {
    return (
      today.getFullYear() === viewYear &&
      today.getMonth() === viewMonth &&
      today.getDate() === d
    )
  }

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const canGoPrev = !(
    viewYear === today.getFullYear() && viewMonth <= today.getMonth()
  )

  const formattedValue = selected
    ? new Date(selected.y, selected.m, selected.d).toLocaleDateString('en-GB', {
        weekday: 'short', day: 'numeric', month: 'long', year: 'numeric',
      })
    : null

  return (
    <div className={`overflow-hidden rounded-2xl border bg-white transition-all ${error ? 'border-rose-400 ring-2 ring-rose-100' : 'border-line'}`}>
      {/* Selected date banner */}
      {formattedValue && (
        <div className="border-b border-line bg-emerald-800 px-4 py-2.5 text-center">
          <span className="text-sm font-semibold text-white">{formattedValue}</span>
        </div>
      )}

      <div className="p-4">
        {/* Month navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={prevMonth}
            disabled={!canGoPrev}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition-colors hover:bg-emerald-50 hover:text-emerald-800 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className="text-sm font-bold tracking-tight text-ink">
            {MONTHS[viewMonth]} {viewYear}
          </span>

          <button
            type="button"
            onClick={nextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-muted transition-colors hover:bg-emerald-50 hover:text-emerald-800"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Day-of-week headers */}
        <div className="mb-1 grid grid-cols-7 text-center">
          {DAY_LABELS.map(l => (
            <span key={l} className="py-1 text-[10px] font-bold uppercase tracking-widest text-muted/50">
              {l}
            </span>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((d, i) => {
            if (d === null) return <span key={`e-${i}`} />
            const past     = isPast(d)
            const sel      = isSelected(d)
            const todayDay = isToday(d)

            return (
              <div key={d} className="flex items-center justify-center">
                <button
                  type="button"
                  disabled={past}
                  onClick={() => onChange(toISO(viewYear, viewMonth, d))}
                  className={`
                    relative flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium
                    transition-all duration-150
                    ${sel
                      ? 'bg-emerald-800 font-bold text-white shadow-sm'
                      : past
                      ? 'cursor-not-allowed text-muted/30'
                      : todayDay
                      ? 'font-bold text-emerald-700 hover:bg-emerald-50'
                      : 'text-ink hover:bg-emerald-50 hover:text-emerald-800'
                    }
                  `}
                >
                  {d}
                  {/* Today dot */}
                  {todayDay && !sel && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500" />
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
