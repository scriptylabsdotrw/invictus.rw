'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Logo from './ui/Logo'
import Icon from './ui/Icon'
import { Menu01Icon, Cancel01Icon } from '@/lib/icons'
import { navLinks } from '@/lib/nav'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  // "Hero mode": over a dark hero before scrolling. The bar is transparent and
  // uses light text + the white logo. Scrolling (or a light-header page) flips
  // it to the solid white bar with dark text + the green logo.
  const darkHeroRoutes = ['/', '/features', '/pricing', '/how-it-works', '/contact']
  const heroMode = darkHeroRoutes.includes(pathname) && !scrolled
  const showWhiteLogo = heroMode

  // The login page is a standalone, chrome-less screen.
  if (pathname === '/login') return null

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-line/80 bg-white/80 shadow-soft backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-px flex h-20 items-center justify-between lg:h-[116px]">
          <Link href="/" aria-label="Invictus home" className="relative shrink-0">
            {/* Green logo (default) — sizes the container */}
            <Logo
              className={`h-16 transition-opacity duration-300 lg:h-[104px] ${
                showWhiteLogo ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* White logo — fades in over the dark hero */}
            <Logo
              light
              className={`absolute left-0 top-0 h-16 transition-opacity duration-300 lg:h-[104px] ${
                showWhiteLogo ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  heroMode
                    ? isActive(l.href)
                      ? 'bg-white/15 text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                    : isActive(l.href)
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-ink/80 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button render={<a href="https://invictus.rw/en/auth/login" />} variant="ghost" className={heroMode ? 'text-white hover:bg-white/10 hover:text-white' : undefined}>
              Login
            </Button>
            <Button render={<Link href="/contact" />} className={heroMode ? 'bg-white text-emerald-900 hover:bg-emerald-50' : undefined}>
              Request Demo
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button type="button" variant="outline" className={`h-11 w-11 p-0 lg:hidden ${heroMode ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white' : 'border-line bg-white text-ink'}`} aria-label="Open menu" />}>
              <Icon icon={Menu01Icon} size={20} />
            </SheetTrigger>
            <SheetContent side="top" className="rounded-b-3xl border-line bg-white p-3 pt-20 sm:max-w-none" showCloseButton>
              {navLinks.map((l) => (
                <SheetClose key={l.href} render={<Link href={l.href} className={`block rounded-2xl px-4 py-3 text-base font-medium ${isActive(l.href) ? 'bg-emerald-50 text-emerald-800' : 'text-ink hover:bg-emerald-50 hover:text-emerald-800'}`} />} />
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 p-1">
                <Button render={<a href="https://invictus.rw/en/auth/login" />} variant="outline" className="w-full">Login</Button>
                <Button render={<Link href="/contact" />} className="w-full">Request Demo</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

    </header>
  )
}
