"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Icon from "./ui/Icon";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const steps = [
  {
    title: "Onboard your organisation",
    text: "Collaborate with our team to onboard your organisation and bring your team members onto Invictus.",
  },
  {
    title: "Set up your operations",
    text: "Set up charges, interest rates, staff members, and the accounts your institution needs.",
  },
  {
    title: "Go live",
    text: "Start operations and serve your customers with Invictus.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, "0");

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(v * steps.length)),
    );
    setActive(idx);
  });

  const step = steps[active];
  const isLast = active === steps.length - 1;

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${steps.length * 90}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-14 sm:py-24">
        <div className="container-px w-full">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                How it works
              </span>
              <h2 className="display mt-2 text-3xl text-ink sm:text-4xl lg:text-5xl">
                Ready to get started?
              </h2>
            </div>
            <span className="hidden font-display text-sm font-bold tracking-[0.2em] text-muted sm:block">
              {pad(active + 1)} <span className="text-line">/</span>{" "}
              {pad(steps.length)}
            </span>
          </div>
          <div className="relative mt-5 h-px w-full bg-line">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600 to-brand-orange"
            />
          </div>
          <div className="mt-8 grid items-center gap-4 lg:mt-14 lg:min-h-[360px] lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -40, rotateX: 20 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="block bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-400 bg-clip-text font-display text-[5.5rem] font-bold leading-[0.8] tracking-tighter text-transparent sm:text-[12rem] lg:text-[17rem]"
                >
                  {pad(active + 1)}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <h3 className="display mt-4 text-balance text-3xl text-ink sm:text-5xl lg:text-6xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                    {step.text}
                  </p>
                  <div className="mt-7">
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-md bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
                      >
                        Request a demo
                        <span className="transition-transform group-hover:translate-x-1">
                          <Icon icon={ArrowRight01Icon} size={16} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 border-t border-line sm:grid-cols-3 lg:mt-12">
            {steps.map((s, i) => {
              const isCurrent = i === active;
              const isDone = i < active;
              return (
                <div
                  key={s.title}
                  className={`relative border-line px-1 py-4 transition-opacity duration-300 sm:border-l sm:px-5 sm:py-5 sm:first:border-l-0 ${
                    isCurrent ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-display text-sm font-bold ${
                        isCurrent || isDone ? "text-emerald-700" : "text-muted"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-ink">
                    {s.title}
                  </p>
                  {isCurrent && (
                    <motion.span
                      layoutId="hiw-marker"
                      className="absolute -top-px left-0 right-0 h-0.5 bg-brand-orange sm:left-5 sm:right-5"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
