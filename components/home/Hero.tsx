import Button from '../ui/Button'
import HeroDemo from './HeroDemo'
import { gridBackground } from '../sections/GridHero'

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 py-10 sm:py-20" style={gridBackground()}>
      <div className="mx-auto max-w-[1152px] px-4 sm:px-0">
        {/* Headline panel */}
        <div className="border border-zinc-200 bg-white px-6 py-10 sm:px-12 sm:py-14">
          <p className="flex items-center gap-2 text-sm font-medium text-primary-700">
            <span className="h-1.5 w-1.5 bg-primary-600" aria-hidden="true" />
            Loan management for microfinance, SACCOs &amp; lenders
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-normal leading-[1.02] tracking-tight text-zinc-900 sm:text-8xl">
            Built to grow
            <br />
            your business.
          </h1>

          <div className="mt-12 grid gap-8 sm:mt-20 md:grid-cols-[1.4fr_1fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-zinc-700 sm:text-xl">
              Applications, approvals, disbursements, repayments and the ledger behind them — in one secure system
              your team and your borrowers can rely on.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button href="/contact" variant="accent" className="sm:min-w-[13rem]">
                Request a demo
              </Button>
              <Button href="/pricing" variant="outline" className="sm:min-w-[11rem]">
                See pricing
              </Button>
            </div>
          </div>
        </div>

        {/* Live product demo */}
        <div className="mt-6 border border-zinc-200 bg-zinc-50 p-3 sm:mt-10 sm:p-6">
          <HeroDemo />
        </div>
      </div>
    </section>
  )
}
