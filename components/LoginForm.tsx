'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './ui/Logo'
import Icon from './ui/Icon'
import {
  Mail01Icon,
  SecurityCheckIcon,
  ViewIcon,
  ArrowRight01Icon,
  Layers01Icon,
  Globe02Icon,
} from '@/lib/icons'

// Backend endpoint for institution-admin login. Override per environment with
// NEXT_PUBLIC_API_BASE; defaults to the Invictus API.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'https://api.invictus.com'

const highlights = [
  { icon: Layers01Icon, text: 'Run your whole institution from one secure console' },
  { icon: Globe02Icon, text: 'Your branded portal on the Invictus platform' },
  { icon: SecurityCheckIcon, text: 'Role-based access with full audit trails' },
]

const fieldBase =
  'w-full rounded-2xl border border-line bg-white py-3 pl-11 text-sm text-ink transition-colors ' +
  'placeholder:text-muted/70 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password, remember }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        throw new Error(data?.message ?? 'Invalid email or password.')
      }
      // On success, hand off to the institution app. Adjust to match your API.
      window.location.href = data?.redirectUrl ?? 'https://app.invictus.rw'
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to sign in. Please try again.'
      setError(
        message === 'Failed to fetch'
          ? 'Cannot reach the server right now. Please try again shortly.'
          : message,
      )
      setLoading(false)
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* ---- Brand panel ---- */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-emerald-950 p-10 text-white lg:flex xl:p-14">
        <div className="absolute inset-0 -z-30 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_10%,black_30%,transparent_80%)]" />

        <Link href="/" aria-label="Invictus home" className="relative w-fit">
          <Logo light className="h-20" />
        </Link>

        <div className="relative">
          <h2 className="display text-balance text-4xl text-white xl:text-5xl">
            The institution admin console
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-emerald-100/75">
            Sign in to run your accounts, deposits, lending, branches, and branded portal — all in
            one secure place.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h.text} className="flex items-center gap-3 text-sm font-medium text-emerald-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-200 ring-1 ring-white/15">
                  <Icon icon={h.icon} size={18} />
                </span>
                {h.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-emerald-100/50">
          © 2026 Invictus · A product of ScriptyLabs Inc
        </p>
      </div>

      {/* ---- Form panel ---- */}
      <div className="flex items-center justify-center bg-white px-5 py-12 sm:px-8">
        <div className="w-full max-w-sm">
          <Link href="/" aria-label="Invictus home" className="mb-8 inline-block lg:hidden">
            <Logo className="h-16" />
          </Link>

          <h1 className="display text-3xl text-ink sm:text-4xl">Sign in</h1>
          <p className="mt-2 text-sm text-muted">
            Welcome back. Enter your credentials to access your institution.
          </p>

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                Email address
              </label>
              <div className="relative mt-1.5">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                  <Icon icon={Mail01Icon} size={18} />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@institution.rw"
                  className={`${fieldBase} pr-4`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-ink">
                  Password
                </label>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative mt-1.5">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                  <Icon icon={SecurityCheckIcon} size={18} />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${fieldBase} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  className={`absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg transition-colors ${
                    showPw ? 'text-emerald-700' : 'text-muted hover:text-emerald-700'
                  }`}
                >
                  <Icon icon={ViewIcon} size={18} />
                </button>
              </div>
            </div>

            <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-line text-emerald-600 focus:ring-emerald-500"
              />
              Keep me signed in
            </label>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.99 }}
              className="btn-primary w-full disabled:opacity-70"
            >
              {loading ? (
                'Signing in…'
              ) : (
                <>
                  Sign in <Icon icon={ArrowRight01Icon} size={18} />
                </>
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t have access yet?{' '}
            <Link href="/contact" className="font-semibold text-emerald-700 hover:underline">
              Request a demo
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
