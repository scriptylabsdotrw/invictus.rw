'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
}

const EASE = [0.22, 1, 0.36, 1] as const

/** Top band for inner pages — clears the fixed navbar and sets the page tone. */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Content drifts up and fades as the header scrolls away — Apple-style.
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-neutralbg pt-36 pb-14 sm:pt-44 sm:pb-20"
    >
      {/* Soft emerald glow that parallaxes behind the heading */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="container-px">
        <motion.div style={{ y, opacity }} className="mx-auto max-w-3xl text-center">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            className="display mt-5 text-5xl text-ink sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="lead mt-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
