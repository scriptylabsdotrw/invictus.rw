'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import DashboardMockup from './ui/DashboardMockup'
import Icon from './ui/Icon'
import {
  ArrowRight01Icon,
  ArrowDataTransferHorizontalIcon,
  CheckmarkCircle02Icon,
} from '@/lib/icons'
import { staggerContainer, staggerItem } from './ui/Reveal'

const MotionLink = motion.create(Link)

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  // Scroll progress through the hero, used to drive a gentle parallax on the preview.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const previewY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const previewScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-emerald-950 text-white"
    >
      {/* ---- Layered background ---- */}
      {/* Base vertical gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-emerald-950 via-emerald-900/95 to-emerald-950" />
      {/* Top radial glow */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(16,185,129,0.28),transparent_70%)]" />
      {/* Existing hero texture, parallaxing */}
      <motion.div
        style={{ y: bgY }}
        className="hero-bg pointer-events-none absolute inset-0 -z-30 bg-cover bg-center opacity-40"
      />
      {/* Fine grid, masked to fade at the edges */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_80%)]" />
      {/* Floating colour orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 -z-20 h-72 w-72 animate-float rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-20 h-80 w-80 animate-float rounded-full bg-gold/15 blur-3xl [animation-delay:2s]" />

      <div className="container-px pt-32 sm:pt-40">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={staggerItem}
            className="display text-balance text-5xl text-white sm:text-7xl lg:text-[5.75rem]"
          >
            The core banking system for{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-gold-soft bg-clip-text text-transparent">
              modern institutions
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-7 max-w-2xl text-balance text-xl leading-relaxed text-emerald-100/80 sm:text-2xl"
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-900 ring-1 ring-white/40 transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              Request a Demo <Icon icon={ArrowRight01Icon} size={18} />
            </MotionLink>
            <MotionLink
              href="/features"
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              Explore the platform
              <span className="transition-transform group-hover:translate-x-1">
                <Icon icon={ArrowRight01Icon} size={18} />
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* ---- Dashboard preview ---- */}
        <motion.div style={{ y: previewY }} className="relative mx-auto mt-14 max-w-5xl">
          {/* Glow behind the preview */}
          <div className="pointer-events-none absolute -inset-x-16 -top-10 bottom-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_35%,rgba(16,185,129,0.4),transparent_70%)] blur-2xl" />

          {/* Gradient hairline border (no shadows in this system) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: previewScale }}
            className="relative max-h-[340px] origin-top overflow-hidden rounded-t-3xl bg-gradient-to-b from-white/25 via-white/10 to-transparent p-[1.5px] sm:max-h-[440px]"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <DashboardMockup />
            </div>
            {/* fade the cut-off edge into the dark hero */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-emerald-950" />
          </motion.div>

          {/* Floating card — left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="absolute -left-4 top-24 hidden animate-float rounded-2xl border border-line bg-white/95 p-3 backdrop-blur-xl md:block"
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

          {/* Floating card — right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="absolute -right-4 top-40 hidden animate-float rounded-2xl border border-line bg-white/95 p-3 backdrop-blur-xl md:block [animation-delay:1.5s]"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <Icon icon={CheckmarkCircle02Icon} size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">Identity verified</p>
                <p className="text-[11px] text-muted">NIDA · 0.4s</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
