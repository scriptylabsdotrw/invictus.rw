'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DashboardMockup from './ui/DashboardMockup'
import Icon from './ui/Icon'
import { ArrowRight01Icon, ArrowDataTransferHorizontalIcon } from '@/lib/icons'
import { staggerContainer, staggerItem } from './ui/Reveal'

const MotionLink = motion.create(Link)

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-emerald-950 text-white">
      {/* Background image */}
      <div className="hero-bg pointer-events-none absolute inset-0 -z-10 bg-cover bg-center" />

      <div className="container-px pt-36 sm:pt-44">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={staggerItem}
            className="display text-5xl text-white sm:text-7xl lg:text-[5.75rem]"
          >
            The core banking system for{' '}
            <span className="text-emerald-300">modern institutions</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-emerald-100/80 sm:text-2xl"
          >
            Run your entire institution — customers, accounts, deposits, payments, lending, and
            branches — on one secure, multi-tenant banking platform.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              Request a Demo <Icon icon={ArrowRight01Icon} size={18} />
            </MotionLink>
            <MotionLink
              href="/product"
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Explore the platform
              <span className="transition-transform group-hover:translate-x-1">
                <Icon icon={ArrowRight01Icon} size={18} />
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Dashboard preview — only the top half shows, cut off with a fade */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[300px] overflow-hidden rounded-t-3xl ring-1 ring-white/10 sm:max-h-[360px]"
          >
            <DashboardMockup />
            {/* fade the cut-off edge into the dark hero */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-emerald-950" />
          </motion.div>

          {/* Floating mini card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="absolute -left-4 top-20 hidden rounded-2xl border border-line bg-white/95 p-3 backdrop-blur-xl md:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon icon={ArrowDataTransferHorizontalIcon} size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">Transfer posted</p>
                <p className="text-[11px] text-muted">RWF 1.2M · Kigali HQ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
