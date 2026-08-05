"use client";

import CalBookingEmbed from "./call";
import Highlight from "./ui/Highlight";

export default function Contact({ calLink }: { calLink: string }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 -z-30 bg-black/25" />
        <div className="hero-bg pointer-events-none absolute inset-0 -z-30 bg-cover bg-center opacity-30" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_80%)]" />

        <div className="container-px mx-auto max-w-3xl pb-16 pt-32 text-center sm:pb-20 sm:pt-40">
          <h1 className="text-4xl text-white font-semibold tracking-tight sm:text-5xl">
            Book a <Highlight>private demo</Highlight>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Pick a time that works for you and we&apos;ll walk you through
            Invictus.
          </p>
        </div>
      </section>

      <section className="bg-white pb-8 pt-8 sm:pb-12 sm:pt-12">
        <div className="container-px mx-auto max-w-6xl">
          <CalBookingEmbed calLink={calLink} />
        </div>
      </section>
    </>
  );
}
