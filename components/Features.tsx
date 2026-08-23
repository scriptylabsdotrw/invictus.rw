'use client'

import { motion } from 'framer-motion'
import { features } from '@/lib/constants'

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-neutralbg">
      <div className="container-px section relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl"
          >
            <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="h-px w-9 bg-muted" />
              Our services
            </span>
            <h2 className="display mt-5 text-balance text-xl capitalize">
              What we <em className="font-serif font-normal lowercase">offer</em>
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[18px] bg-gradient-to-b from-emerald-900 to-emerald-950 p-9 lg:p-10"
            >
              <div className="relative max-w-md">
                <h3 className="font-serif text-3xl font-normal italic leading-tight text-white sm:text-[2rem]">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-emerald-100/55">{f.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
