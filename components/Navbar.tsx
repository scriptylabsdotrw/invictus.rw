'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './ui/Logo'
import Icon from './ui/Icon'
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-px flex h-20 items-center justify-between lg:h-[116px]">
          <Link href="/" aria-label="Invictus home" className="shrink-0">
            <Logo light className="h-16 lg:h-[104px]" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? 'bg-white/15 text-white'
                    : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="https://invictus.rw/en/auth/login" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Login
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50">
              Request Demo
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors lg:hidden"
          >
            {open ? <Icon icon={Cancel01Icon} size={20} /> : <Icon icon={Menu01Icon} size={20} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="container-px lg:hidden"
          >
            <div className="mt-2 rounded-3xl border border-line bg-white/95 p-3 shadow-card backdrop-blur-xl">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                    isActive(l.href)
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-ink hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 p-1">
                <a href="https://invictus.rw/en/auth/login" className="btn-secondary">
                  Login
                </a>
                <Link href="/contact" className="btn-primary">
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
