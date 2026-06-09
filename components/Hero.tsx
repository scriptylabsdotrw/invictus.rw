'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import DashboardMockup from './ui/DashboardMockup'
import Icon from './ui/Icon'
import { ArrowRight01Icon } from '@/lib/icons'
import { staggerContainer, staggerItem } from './ui/Reveal'
import Highlight from './ui/Highlight'

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
      {/* ---- Solid dark background ---- */}
      <div className="absolute inset-0 -z-30 bg-black/25" />
      {/* Hero texture, parallaxing */}
      <motion.div
        style={{ y: bgY }}
        className="hero-bg pointer-events-none absolute inset-0 -z-30 bg-cover bg-center opacity-30"
      />
      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_80%)]" />

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
            The core banking system for modern{' '}
            <Highlight>institutions</Highlight>
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
        <motion.div style={{ y: previewY }} className="relative mx-auto mt-16 max-w-5xl">
          {/* Ambient glow behind the window */}
          <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 flex justify-center">
            <div className="h-48 w-3/4 rounded-full bg-emerald-500/25 blur-3xl" />
          </div>
          <div className="pointer-events-none absolute -right-16 top-24 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          {/* Window frame */}
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: previewScale }}
            className="relative max-h-[360px] origin-top overflow-hidden rounded-t-3xl border border-white/20 sm:max-h-[480px]"
          >
            {/* Top edge shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="overflow-hidden rounded-t-3xl">
              <DashboardMockup />
            </div>

            {/* Bottom fade into hero */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-emerald-950" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
