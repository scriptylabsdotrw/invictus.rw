'use client'

interface TimePickerProps {
  slots: string[]
  value: string
  onChange: (time: string) => void
  error?: boolean
}

export default function TimePicker({ slots, value, onChange, error }: TimePickerProps) {
  return (
    <div className={`mt-1.5 overflow-hidden rounded-2xl border bg-white transition-all ${error ? 'border-rose-400 ring-2 ring-rose-100' : 'border-line'}`}>
      <div className="border-b border-line px-4 py-2.5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted/50">
          Pick a time slot
        </span>
      </div>

      {/* Scrollable slot grid */}
      <div className="max-h-[260px] overflow-y-auto p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {slots.map((slot) => {
            const isActive = value === slot
            const [time, period] = slot.split(' ')
            return (
              <button
                key={slot}
                type="button"
                onClick={() => onChange(slot)}
                className={`
                  group relative flex flex-col items-center justify-center rounded-xl py-2.5
                  transition-all duration-150
                  ${isActive
                    ? 'bg-emerald-800 text-white'
                    : 'border border-line text-ink hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800'
                  }
                `}
              >
                <span className={`text-sm font-bold leading-none ${isActive ? 'text-white' : ''}`}>
                  {time}
                </span>
                <span className={`mt-0.5 text-[9px] font-bold uppercase tracking-wider ${isActive ? 'text-emerald-200' : 'text-muted/50 group-hover:text-emerald-600'}`}>
                  {period}
                </span>
                {isActive && (
                  <span className="absolute right-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-white/25">
                    <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="border-t border-line px-4 py-2">
        <p className="text-center text-[10px] font-medium uppercase tracking-widest text-muted/40">
          Kigali · CAT · UTC +2
        </p>
      </div>
    </div>
  )
}
