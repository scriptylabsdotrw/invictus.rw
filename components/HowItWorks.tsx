"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Button from "./ui/Button";

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
        <div className="container-page w-full">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
                How it works
              </span>
              <h2 className="font-semibold leading-[1.05] tracking-tight mt-2 text-3xl text-zinc-900 sm:text-4xl lg:text-5xl">
                Ready to get started?
              </h2>
            </div>
            <span className="hidden text-sm font-bold tracking-[0.2em] text-zinc-500 sm:block">
              {pad(active + 1)} <span className="text-zinc-300">/</span>{" "}
              {pad(steps.length)}
            </span>
          </div>
          <div className="relative mt-5 h-px w-full bg-zinc-200">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 to-accent"
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
                  className="block bg-gradient-to-br from-primary-900 via-primary-600 to-primary-400 bg-clip-text text-[5.5rem] font-bold leading-[0.8] tracking-tighter text-transparent sm:text-[12rem] lg:text-[17rem]"
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
                  <h3 className="font-semibold leading-[1.05] tracking-tight mt-4 text-balance text-3xl text-zinc-900 sm:text-5xl lg:text-6xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-500 sm:text-lg">
                    {step.text}
                  </p>
                  <div className="mt-7">
                    <div className="flex flex-wrap items-center gap-4">
                      <Button href="/contact" variant="accent">
                        Request a demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 border-t border-zinc-200 sm:grid-cols-3 lg:mt-12">
            {steps.map((s, i) => {
              const isCurrent = i === active;
              const isDone = i < active;
              return (
                <div
                  key={s.title}
                  className={`relative border-zinc-200 px-1 py-4 transition-opacity duration-300 sm:border-l sm:px-5 sm:py-5 sm:first:border-l-0 ${
                    isCurrent ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-sm font-bold ${
                        isCurrent || isDone ? "text-primary-700" : "text-zinc-500"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-zinc-900">
                    {s.title}
                  </p>
                  {isCurrent && (
                    <motion.span
                      layoutId="hiw-marker"
                      className="absolute -top-px left-0 right-0 h-0.5 bg-accent sm:left-5 sm:right-5"
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
