'use client'

import CalBookingEmbed from './CalBookingEmbed'

export default function Contact({ calLink }: { calLink: string }) {
  return (
    <section className="bg-white pb-8 pt-24 sm:pb-12 sm:pt-32">
      <div className="container-px mx-auto max-w-6xl">
        <CalBookingEmbed calLink={calLink} />
      </div>
    </section>
  )
}
