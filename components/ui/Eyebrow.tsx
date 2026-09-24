import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

/** Small bordered pill with a colored dot, used above section headlines. */
export default function Eyebrow({ children, tone = 'light', className }: EyebrowProps) {
  const dark = tone === 'dark'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium',
        dark ? 'border-white/10 bg-white/5 text-zinc-300' : 'border-zinc-200 bg-zinc-50 text-zinc-600',
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', dark ? 'bg-primary-400' : 'bg-primary-600')} aria-hidden="true" />
      {children}
    </span>
  )
}
