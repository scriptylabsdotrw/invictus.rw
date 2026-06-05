'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import Select from './ui/Select'
import {
  Mail01Icon,
  SmartPhone01Icon,
  Location01Icon,
  CheckmarkCircle02Icon,
  SentIcon,
  Tick02Icon,
} from '@/lib/icons'

const businessTypes = [
  'Microfinance Institution',
  'SACCO / Cooperative',
  'Bank / Community Bank',
  'Money Lender / SME Lender',
  'Private Credit Company',
  'Other',
]

const inputClass =
  'mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted/70 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100'

const contactItems = [
  { icon: Mail01Icon, label: 'Email', value: 'demo@invictus.rw' },
  { icon: SmartPhone01Icon, label: 'Phone', value: '+250 780 226 666' },
  { icon: Location01Icon, label: 'Location', value: 'Kigali, Rwanda' },
]

const assurances = [
  'A private demo tailored to your institution',
  'Response within 1 business day',
  'No commitment, no pressure',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [businessType, setBusinessType] = useState('')
  const [bizError, setBizError] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Native required fields are validated by the browser first; the custom
    // Business Type select is validated here.
    if (!businessType) {
      setBizError(true)
      return
    }
    // Frontend-only: no backend submission.
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setBusinessType('')
    setBizError(false)
  }

  return (
    <section className="section bg-white">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Contact details + assurances */}
          <Reveal>
            <div>
              <h2 className="display text-3xl text-ink sm:text-4xl">Talk to our team</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Send us a few details and we&apos;ll arrange a private walkthrough for your
                institution.
              </p>

              <div className="mt-8 space-y-3">
                {contactItems.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-emerald-200"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon icon={c.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold text-ink">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {assurances.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon icon={Tick02Icon} size={14} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-neutralbg p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon icon={CheckmarkCircle02Icon} size={32} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-ink">Thank you</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    Your demo request has been received. The Invictus team will contact you shortly.
                  </p>
                  <button type="button" onClick={resetForm} className="btn-secondary mt-8">
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="text-sm font-semibold text-ink">
                        Full Name
                      </label>
                      <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-semibold text-ink">
                        Company Name
                      </label>
                      <input id="company" name="company" type="text" required autoComplete="organization" placeholder="Your company" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="text-sm font-semibold text-ink">
                        Email Address
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-ink">
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+250 ..." className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessType" className="text-sm font-semibold text-ink">
                        Business Type
                      </label>
                      <Select
                        id="businessType"
                        name="businessType"
                        options={businessTypes}
                        value={businessType}
                        onChange={(v) => {
                          setBusinessType(v)
                          setBizError(false)
                        }}
                        placeholder="Select business type"
                        error={bizError}
                      />
                      {bizError && (
                        <p className="mt-1.5 text-xs font-medium text-rose-500">
                          Please select a business type.
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="staff" className="text-sm font-semibold text-ink">
                        Number of Staff
                      </label>
                      <input id="staff" name="staff" type="number" min={1} placeholder="e.g. 8" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-ink">
                      Message
                    </label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us about your institution…" className={inputClass} />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary w-full"
                  >
                    Request a Demo <Icon icon={SentIcon} size={18} />
                  </motion.button>
                  <p className="text-center text-xs text-muted">
                    We respect your privacy. Your details are only used to arrange your demo.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
