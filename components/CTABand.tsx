import Link from "next/link";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { ArrowRight01Icon } from "@/lib/icons";

interface CTABandProps {
  title?: string;
  subtitle?: string;
}

export default function CTABand({
  title = "Whats Next?",
  subtitle = "Request a private demo and see how Invictus runs accounts,transactions, loans, branches.",
}: CTABandProps) {
  return (
    <section className="section bg-white">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-emerald-950 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
              <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-emerald-700/40 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-emerald-600/30 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="display text-3xl text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-emerald-100/80">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-soft sm:w-auto"
                >
                  Request a Demo <Icon icon={ArrowRight01Icon} size={18} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
