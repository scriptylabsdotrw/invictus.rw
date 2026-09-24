'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './ui/Logo'
import Icon from './ui/Icon'
import Button from './ui/Button'
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { LOGIN_URL, navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
      <nav className="container-page grid h-20 grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link href="/" aria-label="Invictus home" className="-ml-4 shrink-0">
          <Logo className="h-20" />
        </Link>

        <div className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                isActive(l.href) ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900',
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href={LOGIN_URL} className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            Log in
          </a>
          <Button href="/contact" variant="accent" size="sm">
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="col-start-3 flex h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-900 md:hidden"
        >
          <Icon icon={open ? Cancel01Icon : Menu01Icon} size={18} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="container-page space-y-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'block px-3 py-2.5 text-base font-medium',
                  isActive(l.href) ? 'bg-zinc-50 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50',
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <Button href={LOGIN_URL} variant="outline" size="sm" full>
                Log in
              </Button>
              <Button href="/contact" variant="accent" size="sm" full>
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
