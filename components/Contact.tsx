import GridHero from './sections/GridHero'
import CalBookingEmbed from './call'
import Icon, { type IconSvgElement } from './ui/Icon'
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons'
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from '@/lib/site'

const channels: { icon: IconSvgElement; label: string; value: string; href?: string }[] = [
  { icon: Mail01Icon, label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Call02Icon, label: 'Phone', value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}` },
  { icon: WhatsappIcon, label: 'WhatsApp', value: 'Chat with our team', href: WHATSAPP_URL },
  { icon: Location01Icon, label: 'Office', value: 'Kigali, Rwanda' },
]

const agenda = [
  { title: 'We learn how you lend', text: 'Your products, rates, approval steps and team size.' },
  { title: 'We show you Invictus', text: 'A live walkthrough built around your workflow — not a generic tour.' },
  { title: 'You get a tailored quote', text: 'A recommended plan and pricing that fits your institution.' },
]

function ChannelRow({ c }: { c: (typeof channels)[number] }) {
  const external = c.href?.startsWith('http')
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary-50 text-primary-700">
        <Icon icon={c.icon} size={20} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500">{c.label}</span>
        <span className="mt-0.5 block truncate text-lg text-zinc-900">{c.value}</span>
      </span>
      {c.href && (
        <span className="text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900">
          <Icon icon={ArrowUpRight01Icon} size={18} />
        </span>
      )}
    </>
  )
  const cls = 'group flex items-center gap-4 border-b border-zinc-200 px-6 py-5 sm:px-8'
  return c.href ? (
    <a
      href={c.href}
      className={`${cls} transition-colors hover:bg-zinc-50`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function Contact({ calLink }: { calLink: string }) {
  return (
    <>
      <GridHero eyebrow="Contact" title="Let's talk about your business.">
        <p>
          <a href="#book">Book a private demo</a> at a time that suits you, or reach us directly below.
        </p>
        <p>We&apos;ll walk through Invictus using the way your institution lends today.</p>
      </GridHero>

      <section id="book" className="scroll-mt-20 border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1344px] border-zinc-200 lg:grid-cols-[0.85fr_2fr] lg:border-x">
          {/* Reach us + what to expect */}
          <div className="order-2 border-zinc-200 lg:order-1 lg:border-r">
            <div className="flex h-24 items-end border-b border-zinc-200 px-6 pb-4 sm:h-32 sm:px-8">
              <h2 className="text-3xl font-normal tracking-tight">Reach us</h2>
            </div>
            {channels.map((c) => (
              <ChannelRow key={c.label} c={c} />
            ))}

            <div className="px-6 pb-10 pt-12 sm:px-8">
              <h2 className="text-3xl font-normal tracking-tight">On the call</h2>
              <ol className="mt-8 space-y-7">
                {agenda.map((a, i) => (
                  <li key={a.title} className="flex gap-4">
                    <span className="text-sm tabular-nums text-primary-700">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="block text-base font-medium text-zinc-900">{a.title}</span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-zinc-600">{a.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Booking */}
          <div className="order-1 min-w-0 border-b border-zinc-200 lg:order-2 lg:border-b-0">
            <div className="flex h-24 items-end justify-between gap-4 border-b border-zinc-200 bg-zinc-100 px-6 pb-4 sm:h-32 sm:px-8">
              <h2 className="text-3xl font-normal tracking-tight">Book a demo</h2>
              <span className="mb-1.5 hidden bg-accent px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white sm:inline">
                Free · No commitment
              </span>
            </div>
            <div className="p-2 sm:p-6">
              <CalBookingEmbed calLink={calLink} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
