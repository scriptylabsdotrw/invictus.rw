import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle?: string;
  chips?: string[];
}

export default function PageHero({ title, subtitle, chips }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
      <div className="absolute inset-0 -z-30 bg-black/25" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_10%,black_30%,transparent_80%)]" />
      <div className="container-px pb-20 pt-40 sm:pb-24 sm:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="display text-balance text-5xl text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
              {subtitle}
            </p>
          )}
          {chips && chips.length > 0 && (
            <div className="mt-9 flex flex-wrap justify-center gap-2.5">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-emerald-50 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
