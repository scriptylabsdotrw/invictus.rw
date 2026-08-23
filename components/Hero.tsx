"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Icon from "./ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import Highlight from "./ui/Highlight";

const MotionLink = motion.create(Link);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const previewY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const previewScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-emerald-950 text-white"
    >
      <div className="absolute inset-0 -z-30 bg-black/25" />
      <motion.div
        style={{ y: bgY }}
        className="hero-bg pointer-events-none absolute inset-0 -z-30 bg-cover bg-center opacity-30"
      />
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
            className="display text-balance text-5xl text-white"
          >
            Loan management system for modern{" "}
            <Highlight>institutions</Highlight>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-7 max-w-2xl text-balance text-xl leading-relaxed text-emerald-100/80 sm:text-2xl"
          >
          Loan Operations shouldn’t run on spreadsheets
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-emerald-900 ring-1 ring-white/40 transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              Request a Demo <Icon icon={ArrowRight01Icon} size={18} />
            </MotionLink>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: previewY }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: previewScale }}
            className="origin-top"
          >
            <Image
              src="/demo.png"
              alt="Invictus loan management dashboard"
              width={2880}
              height={1800}
              priority
              className="block h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
