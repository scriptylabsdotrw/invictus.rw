'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './ui/Icon'
import DemoDatePicker from './DemoDatePicker'
import TimePicker from './ui/TimePicker'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select'
import { Textarea } from './ui/textarea'
import {
  Mail01Icon,
  SmartPhone01Icon,
  Location01Icon,
  CheckmarkCircle02Icon,
  SentIcon,
  Tick02Icon,
  UserCircleIcon,
  Building03Icon,
} from '@/lib/icons'

type AccountType = 'business' | 'individual'

const businessTypes = [
  'Microfinance Institution',
  'SACCO / Cooperative',
  'Bank / Community Bank',
  'Money Lender / SME Lender',
  'Private Credit Company',
  'Other',
]

const individualRoles = [
  'Consultant / Advisor',
  'Banking Professional',
  'Researcher / Academic',
  'Other',
]

const TIME_SLOTS = [
  '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM',
  '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM',
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
  '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM',
]

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

const inputClass = 'mt-1.5 h-12 w-full rounded-2xl border-line bg-white px-4 text-ink placeholder:text-muted/70 focus-visible:border-emerald-500 focus-visible:ring-emerald-100'

const contactItems = [
  { icon: Mail01Icon,       label: 'Email',    value: 'demo@invictus.rw'  },
  { icon: SmartPhone01Icon, label: 'Phone',    value: '+250 780 226 666'  },
  { icon: Location01Icon,   label: 'Location', value: 'Kigali, Rwanda'    },
]

const assurances = [
  'A private demo tailored to your needs',
  'Response within 1 business day',
  'No commitment, no pressure',
]

export default function Contact() {
  const [accountType, setAccountType] = useState<AccountType>('business')
  const [submitted,   setSubmitted]   = useState(false)
  const [category,    setCategory]    = useState('')
  const [catError,    setCatError]    = useState(false)
  const [demoDate,    setDemoDate]    = useState('')
  const [dateError,   setDateError]   = useState(false)
  const [demoTime,    setDemoTime]    = useState('')
  const [timeError,   setTimeError]   = useState(false)
  const [loading,  setLoading]  = useState(false)
  const isBusiness = accountType === 'business'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let valid = true
    if (!category) { setCatError(true);  valid = false }
    if (!demoDate) { setDateError(true); valid = false }
    if (!demoTime) { setTimeError(true); valid = false }
    if (!valid) return

    setLoading(true)

    const fd = new FormData(e.currentTarget)
    const payload = {
      accountType,
      fullName: fd.get('fullName')  as string,
      orgName:  isBusiness ? (fd.get('orgName') as string) : '',
      email:    fd.get('email')     as string,
      phone:    fd.get('phone')     as string,
      category,
      staff:    isBusiness ? (fd.get('staff') as string) : '',
      demoDate,
      demoTime,
      message:  fd.get('message')   as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) throw new Error(data?.error ?? 'Something went wrong.')
      setSubmitted(true)
      toast.success('Demo request sent!', { description: "We'll confirm your demo slot within 1 business day. Check your inbox for a confirmation email." })
    } catch (err) {
      toast.error('Failed to send request', { description: err instanceof Error ? err.message : 'Unable to send. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setAccountType('business')
    setCategory('')
    setCatError(false)
    setDemoDate('')
    setDateError(false)
    setDemoTime('')
    setTimeError(false)
  }

  return (
    <>
    <section className="section bg-white">
      <div className="container-px">
        {/*
          Form is FIRST in the DOM → appears on top on mobile and on the
          LEFT column on desktop. Info sidebar is second → right on desktop,
          below the form on mobile. No order-class tricks needed.
        */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-14">

          {/* ─── FORM (first / left) ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="rounded-3xl border border-line bg-neutralbg py-0 shadow-none ring-0">
              <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[480px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon icon={CheckmarkCircle02Icon} size={32} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-ink">Request received!</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    The Invictus team will reach out within 1 business day to confirm your demo.
                    Check your inbox for a confirmation email.
                  </p>
                  <Button type="button" variant="outline" onClick={resetForm} className="mt-8">
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Account type toggle */}
                  <div>
                    <p className="mb-2 text-sm font-semibold text-ink">I am a</p>
                    <div className="flex w-full rounded-2xl border border-line bg-white p-1">
                      {([
                        { value: 'business',   label: 'Business / Organisation', icon: Building03Icon },
                        { value: 'individual', label: 'Individual',              icon: UserCircleIcon },
                      ] as const).map((opt) => (
                        <Button
                          key={opt.value}
                          type="button"
                          onClick={() => { setAccountType(opt.value); setCategory(''); setCatError(false) }}
                          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                            accountType === opt.value
                              ? 'bg-emerald-800 text-white'
                              : 'text-muted hover:text-ink'
                          }`}
                        >
                          <Icon icon={opt.icon} size={16} />
                          {opt.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Org */}
                  <div className={`grid gap-4 ${isBusiness ? 'sm:grid-cols-2' : ''}`}>
                    <div>
                      <Label htmlFor="fullName" className="text-ink">Full Name</Label>
                      <Input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
                    </div>
                    <AnimatePresence>
                      {isBusiness && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Label htmlFor="orgName" className="text-ink">Organisation Name</Label>
                          <Input id="orgName" name="orgName" type="text" required={isBusiness} autoComplete="organization" placeholder="Your institution or company" className={inputClass} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email" className="text-ink">Email Address</Label>
                      <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-ink">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 ..." className={inputClass} />
                    </div>
                  </div>

                  {/* Category + Staff */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="category" className="text-ink">
                        {isBusiness ? 'Business Type' : 'Your Role'}
                      </Label>
                      <Select value={category || null} onValueChange={(v) => { setCategory(v ?? ''); setCatError(false) }}>
                        <SelectTrigger id="category" aria-invalid={catError} className="mt-1.5 h-12 w-full rounded-2xl border-line bg-white px-4"><SelectValue placeholder={isBusiness ? 'Select business type' : 'Select your role'} /></SelectTrigger>
                        <SelectContent>{(isBusiness ? businessTypes : individualRoles).map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
                      </Select>
                      <input type="hidden" name="category" value={category} />
                      {catError && <p className="mt-1.5 text-xs font-medium text-rose-500">Please make a selection.</p>}
                    </div>
                    <AnimatePresence>
                      {isBusiness && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Label htmlFor="staff" className="text-ink">Number of Staff</Label>
                          <Input id="staff" name="staff" type="number" min={1} placeholder="e.g. 12" className={inputClass} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Date + Time */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label className="text-ink">Preferred Demo Date</Label>
                      {dateError && <p className="mt-1 text-xs font-medium text-rose-500">Please select a date.</p>}
                      <DemoDatePicker
                        value={demoDate}
                        onChange={(d) => { setDemoDate(d); setDateError(false) }}
                        minDate={todayISO()}
                        error={dateError}
                      />
                    </div>
                    <div>
                      <Label className="text-ink">Preferred Time</Label>
                      {timeError && <p className="mt-1 text-xs font-medium text-rose-500">Please select a time slot.</p>}
                      <TimePicker
                        slots={TIME_SLOTS}
                        value={demoTime}
                        onChange={(t) => { setDemoTime(t); setTimeError(false) }}
                        error={timeError}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-ink">
                      Message <span className="font-normal text-muted">(optional)</span>
                    </Label>
                    <Textarea
                      id="message" name="message" rows={3}
                      placeholder={isBusiness
                        ? "Tell us about your institution — size, current challenges, what you'd like to see…"
                        : "Anything you'd like us to know before the demo…"}
                      className={inputClass}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full disabled:opacity-70"
                  >
                    {loading ? 'Sending…' : <> Book My Demo <Icon icon={SentIcon} size={18} /></>}
                  </Button>

                  <p className="text-center text-xs text-muted">
                    We respect your privacy. Your details are only used to arrange your demo.
                  </p>
                </form>
              )}
              </CardContent>
            </Card>
          </motion.div>

          {/* ─── SIDEBAR (second / right) ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="space-y-8">
              <div>
                <h2 className="display text-3xl text-ink sm:text-4xl">Talk to our team</h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Send us a few details and we&apos;ll arrange a private walkthrough at a time that
                  works for you.
                </p>
              </div>

              <div className="space-y-3">
                {contactItems.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-emerald-200"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon icon={c.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">{c.label}</p>
                      <p className="text-sm font-semibold text-ink">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-3 border-t border-line pt-6">
                {assurances.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    </>
  )
}
