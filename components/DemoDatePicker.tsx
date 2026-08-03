'use client'

import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface DemoDatePickerProps {
  value: string
  onChange: (iso: string) => void
  minDate?: string
  error?: boolean
}

const fromIso = (value: string) => (value ? new Date(`${value}T00:00:00`) : undefined)
const toIso = (date: Date) => date.toISOString().slice(0, 10)

export default function DemoDatePicker({ value, onChange, minDate, error }: DemoDatePickerProps) {
  const [open, setOpen] = useState(false)
  const selected = fromIso(value)
  const minimum = fromIso(minDate ?? new Date().toISOString().slice(0, 10))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="outline"
            aria-invalid={error}
            className={cn(
              'mt-1.5 w-full justify-start rounded-2xl px-4 font-normal',
              !selected && 'text-muted',
              error && 'border-rose-400 ring-2 ring-rose-100',
            )}
          />
        }
      >
        <CalendarIcon className="mr-2 size-4" />
        {selected
          ? selected.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })
          : 'Choose a demo date'}
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-2xl border-line p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          disabled={minimum ? { before: minimum } : undefined}
          weekStartsOn={1}
          onSelect={(date) => {
            if (date) onChange(toIso(date))
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
