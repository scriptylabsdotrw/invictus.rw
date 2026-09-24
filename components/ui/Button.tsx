import Link from 'next/link'
import type { ReactNode } from 'react'
import Icon from './Icon'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'accent' | 'dark' | 'outline' | 'light'

interface ButtonProps {
  href?: string
  onClick?: () => void
  ariaExpanded?: boolean
  children: ReactNode
  /** accent = main conversion (demo, quote) · dark = secondary · outline = tertiary · light = on dark backgrounds */
  variant?: ButtonVariant
  size?: 'sm' | 'md'
  /** Stretch to the container width. */
  full?: boolean
  arrow?: boolean
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  accent: 'bg-primary-850 text-white hover:bg-primary-900',
  dark: 'bg-zinc-900 text-white hover:bg-primary-800',
  outline: 'border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white',
  light: 'bg-white text-zinc-900 hover:bg-primary-50',
}

/** The one button style used across the site: square corners, arrow on the right. */
export default function Button({
  href,
  onClick,
  ariaExpanded,
  children,
  variant = 'dark',
  size = 'md',
  full,
  arrow = true,
  className,
}: ButtonProps) {
  const cls = cn(
    'group inline-flex items-center justify-between font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600',
    size === 'sm' ? 'gap-3 px-4 py-2.5 text-sm' : 'gap-6 px-5 py-3.5 text-[15px]',
    full && 'flex w-full',
    variants[variant],
    className,
  )
  const content = (
    <>
      {children}
      {arrow && (
        <span className="transition-transform group-hover:translate-x-0.5">
          <Icon icon={ArrowRight01Icon} size={size === 'sm' ? 14 : 16} />
        </span>
      )}
    </>
  )

  if (!href) {
    return (
      <button type="button" onClick={onClick} aria-expanded={ariaExpanded} className={cls}>
        {content}
      </button>
    )
  }
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    )
  }
  const newTab = href.startsWith('http')
  return (
    <a href={href} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  )
}
