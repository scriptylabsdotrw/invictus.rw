"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { plans } from "@/lib/constants";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function Pricing() {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <div
          className={`mx-auto grid max-w-8xl items-stretch gap-3 lg:grid-cols-4 'mt-4'`}
        >
          {plans.map((plan, i) => {
            const popular = plan.popular;
            return (
              <Reveal key={plan.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`flex h-full flex-col rounded-md border p-5 ${
                    popular
                      ? "border-emerald-950 bg-emerald-950 text-white"
                      : "border-line bg-white text-ink"
                  }`}
                >
                  <h3
                    className={`text-3xl font-extrabold ${popular ? "text-white" : "text-ink"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-3 text-sm ${popular ? "text-emerald-100/70" : "text-muted"}`}
                  >
                    {plan.tagline}
                  </p>

                  <ul className="mt-8 flex-1 space-y-4">
                    {plan.inherits && (
                      <li className="flex items-start gap-3 text-sm font-semibold">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            popular
                              ? "border-white/30 text-white"
                              : "border-ink/30 text-ink"
                          }`}
                        >
                          <Icon icon={Tick02Icon} size={13} />
                        </span>
                        <span className={popular ? "text-white" : "text-ink"}>
                          {plan.inherits}
                        </span>
                      </li>
                    )}
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            popular
                              ? "border-white/30 text-white"
                              : "border-ink/30 text-ink"
                          }`}
                        >
                          <Icon icon={Tick02Icon} size={13} />
                        </span>
                        <span
                          className={
                            popular ? "text-emerald-50" : "text-ink/80"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-between rounded-lg border px-5 py-3 text-sm font-semibold transition-colors ${
                      popular
                        ? "border-white/20 bg-white text-emerald-950 hover:bg-emerald-50"
                        : "border-ink/15 bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    {plan.cta}
                    <Icon icon={ArrowRight01Icon} size={16} />
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
