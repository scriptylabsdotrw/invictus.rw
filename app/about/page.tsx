import type { Metadata } from 'next'
import Image from 'next/image'
import CTABand from '@/components/CTABand'
import Reveal from '@/components/ui/Reveal'
import Icon from '@/components/ui/Icon'
import { gridBackground } from '@/components/sections/GridHero'
import { clients } from '@/lib/constants'
import { BookOpen01Icon, SecurityCheckIcon, UserMultipleIcon } from '@hugeicons/core-free-icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Invictus is loan management software built in Kigali by ScriptyLabs Inc for microfinance institutions, SACCOs and lenders across Rwanda and East Africa.',
  alternates: { canonical: '/about' },
}

const principles = [
  {
    icon: UserMultipleIcon,
    title: 'Built with lenders',
    description: 'We design around how loan officers, managers and borrowers really work — not around a spreadsheet.',
  },
  {
    icon: BookOpen01Icon,
    title: 'Books you can trust',
    description: 'Every transaction lands in a double-entry ledger. Your numbers balance, every day.',
  },
  {
    icon: SecurityCheckIcon,
    title: 'Security by default',
    description: 'Access controls, isolated tenant data and a full audit trail are built in, not bolted on.',
  },
]

const team = [
  { name: 'Jackson Ntarindwa', role: 'Founder', img: '/images/team/jackson-ntarindwa.jpg' },
  { name: 'Sugira Erasto', role: 'Head of Design', img: '/images/team/sugira-erasto.jpg' },
  { name: 'Wilson Mutarindwa', role: 'Designer', img: '/images/team/wilson-mutarindwa.jpg' },
  { name: 'Gloria Umwali', role: 'Compliance Officer', img: '/images/team/gloria-umwali.jpg' },
  { name: 'Elisa Shema', role: 'Full Stack Engineer', img: '/images/team/elisa-shema.jpg' },
  { name: 'Shema Elie', role: 'Full Stack Engineer', img: '/images/team/shema-elie.jpg' },
  { name: 'Benitha Murekeyisoni', role: 'Customer Success Lead', img: '/images/team/benitha-murekeyisoni.jpg' },
  { name: 'Niyonkuru Lionel', role: 'Frontend Engineer', img: '/images/team/niyonkuru-lionel.jpg' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero: brand panel · grid strip · photo */}
      <section className="grid border-b border-zinc-200 lg:min-h-[640px] lg:grid-cols-[1.15fr_0.45fr_1fr]">
        <div className="flex flex-col justify-between gap-16 bg-primary-800 px-6 py-12 sm:px-10 sm:py-14">
          <h1 className="max-w-xl text-5xl font-normal leading-[1.04] tracking-tight text-white sm:text-7xl">
            We build the software lenders run on.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-primary-100">
            Invictus helps microfinance institutions, SACCOs and lenders run their whole business — from the
            first application to the final repayment — on one secure platform.
          </p>
        </div>
        <div className="hidden border-r border-zinc-200 lg:block" style={gridBackground()} aria-hidden="true" />
        <div className="relative min-h-[320px] sm:min-h-[440px]">
          <Image
            src="/images/team-at-work.jpg"
            alt="A team working together at laptops around a shared table"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Story: text + photo collage on the grid */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-[1344px] items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-5xl font-normal tracking-tight sm:text-7xl">Our story</h2>
            <div className="mt-10 max-w-lg space-y-5 text-lg leading-relaxed text-zinc-800 sm:mt-16">
              <p>
                Too many lenders still track loans across spreadsheets, notebooks and phone reminders. Repayments
                slip. Month-end takes days. Nobody has the full picture.
              </p>
              <p>
                Invictus is built and supported in Kigali by{' '}
                <a
                  href="https://scriptylabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary-700"
                >
                  ScriptyLabs Inc
                </a>
                , working side by side with the institutions that use it every day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mx-auto w-full max-w-xl">
            <div className="relative grid aspect-square grid-cols-4 grid-rows-4" aria-hidden="true">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 border-l border-t border-zinc-200">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="border-b border-r border-zinc-200" />
                ))}
              </div>
              <div className="relative col-span-2 col-start-3 row-span-2 row-start-1">
                <Image src="/images/loan-officer-meeting.jpg" alt="" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative col-start-1 row-start-3 bg-accent" />
              <div className="relative col-span-2 col-start-2 row-span-2 row-start-3">
                <Image src="/images/approval-handshake.jpg" alt="" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative col-start-4 row-start-4 bg-primary-100" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="grid border-b border-zinc-200 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-16 bg-primary-1000 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-primary-400">Our mission</p>
            <h2 className="mt-6 max-w-lg text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl">
              Give every lender the tools to lend with confidence.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-lg leading-relaxed text-zinc-400">
              We replace spreadsheets and paper ledgers with one secure system — so lenders approve faster, collect
              on time and always know where their portfolio stands.
            </p>
          </Reveal>
        </div>
        <div
          className="flex flex-col justify-between gap-16 border-t border-zinc-200 bg-primary-50 px-6 py-16 sm:px-10 sm:py-20 md:border-l md:border-t-0 lg:px-16"
          style={gridBackground('rgb(4 120 87 / 0.08)')}
        >
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wider text-primary-700">Our vision</p>
            <h2 className="mt-6 max-w-lg text-4xl font-normal leading-[1.08] tracking-tight sm:text-5xl">
              Modern lending infrastructure for every institution in East Africa.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-lg leading-relaxed text-zinc-700">
              A future where every microfinance institution and SACCO — large or small — runs on software as reliable
              as the biggest banks, and every borrower can see exactly where they stand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1344px] border-zinc-200 lg:border-x">
          <div className="px-6 py-16 sm:px-10 sm:py-24">
            <h2 className="text-5xl font-normal tracking-tight sm:text-7xl">What we stand for</h2>
          </div>
          <div className="grid border-t border-zinc-200 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 100}
                className="border-b border-zinc-200 px-6 py-10 sm:px-10 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-primary-50 text-primary-700">
                  <Icon icon={p.icon} size={20} />
                </span>
                <h3 className="mt-8 text-2xl font-normal tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team on the grid */}
      <section className="border-b border-zinc-200 py-12 sm:py-24" style={gridBackground()}>
        <div className="mx-auto max-w-[1152px] px-4 sm:px-0">
          <div className="w-fit border border-zinc-200 bg-white px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl">Our team</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-700">
              The ScriptyLabs team in Kigali that designs, builds and supports Invictus.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px border border-zinc-200 bg-zinc-200 sm:mt-24 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 100} as="article" className="group bg-white p-3 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-zinc-200 bg-zinc-50">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 260px, 45vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight sm:text-lg">{m.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customers: tinted panel + logo board on a grid */}
      <section className="grid border-b border-zinc-200 lg:grid-cols-2">
        <div className="flex flex-col justify-center border-zinc-200 bg-white px-6 py-20 sm:px-10 lg:border-r lg:px-16">
          <Reveal>
            <h2 className="text-5xl font-normal tracking-tight sm:text-7xl">Our customers</h2>
            <p className="mt-10 max-w-md text-lg leading-relaxed text-zinc-800 sm:mt-16">
              Microfinance institutions across Rwanda manage their loans on Invictus. Here are some of them.
            </p>
          </Reveal>
        </div>
        <div className="bg-white p-6 sm:p-12 lg:p-16" style={gridBackground()}>
          <div className="grid grid-cols-2 border border-zinc-200 bg-white">
            {clients.map((c, i) => (
              <a
                key={c.name}
                href={c.website ?? undefined}
                target={c.website ? '_blank' : undefined}
                rel={c.website ? 'noopener noreferrer' : undefined}
                className={`group flex aspect-[4/3] flex-col items-center justify-center gap-4 border-zinc-200 p-6 transition-colors hover:bg-zinc-50 ${
                  i % 2 === 0 ? 'border-r' : ''
                } ${i < 2 ? 'border-b' : ''}`}
              >
                <span className="flex h-20 w-full items-center justify-center p-3 transition-transform group-hover:-translate-y-0.5 sm:h-24">
                  <Image src={c.logo} alt={`${c.name} logo`} width={200} height={80} className="max-h-full w-auto object-contain" />
                </span>
                <span className="text-sm text-zinc-600">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's talk about your business." />
    </>
  )
}
