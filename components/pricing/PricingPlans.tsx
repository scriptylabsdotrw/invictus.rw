import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { Tick02Icon } from '@hugeicons/core-free-icons'
import { plans } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Everything in Basic is included in every plan.
const everyPlan = plans[0].features.filter((f) => !/staff users|support/i.test(f))

export function PlanButton({
  popular,
  label,
  small,
  href = "/contact",
}: {
  popular?: boolean
  label: string
  small?: boolean
  href?: string
}) {
  return (
    <Button href={href} variant={popular ? 'accent' : 'dark'} size={small ? 'sm' : 'md'} full>
      {label}
    </Button>
  )
}

export default function PricingPlans() {
  return (
    <section id="plans" className="scroll-mt-20 border-b border-zinc-200">
      <div className="mx-auto grid max-w-[1344px] lg:grid-cols-[0.85fr_repeat(4,1fr)]">
        {/* Included in every plan */}
        <aside className="border-zinc-200 px-6 py-10 lg:border-x lg:px-8 lg:pt-32">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Every plan includes</p>
          <ul className="mt-5 space-y-3">
            {everyPlan.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] text-zinc-700">
                <span className="mt-0.5 text-primary-600">
                  <Icon icon={Tick02Icon} size={16} strokeWidth={2.2} />
                </span>
                {f}
              </li>
            ))}
            <li className="flex items-start gap-2.5 text-[15px] text-zinc-700">
              <span className="mt-0.5 text-primary-600">
                <Icon icon={Tick02Icon} size={16} strokeWidth={2.2} />
              </span>
              Isolated, secure data
            </li>
          </ul>
        </aside>

        <div className="grid border-t border-zinc-200 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4 lg:border-t-0">
          {plans.map((plan, i) => {
            const previous = plans[i - 1]
            return (
              <div
                key={plan.name}
                className={cn(
                  'flex flex-col border-b border-zinc-200 sm:border-r lg:border-b-0',
                  i % 2 === 0 && 'sm:border-l lg:border-l-0',
                )}
              >
                {/* Plan name stays pinned while the column scrolls. */}
                <div
                  className={cn(
                    'sticky top-20 z-10 flex h-24 items-end justify-between gap-2 border-b border-zinc-200 px-5 pb-4 sm:h-32',
                    plan.popular ? 'bg-zinc-100' : 'bg-white',
                  )}
                >
                  <h2 className="text-3xl font-normal tracking-tight">{plan.name}</h2>
                  {plan.popular && (
                    <span className="mb-1.5 bg-accent px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-5 pb-10 pt-6">
                  <p className="min-h-[3.5rem] text-lg leading-snug text-zinc-800">{plan.tagline}</p>

                  <div className="mt-10">
                    <p className="text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl">
                      {plan.price}
                      {plan.cadence && <span className="ml-1.5 text-base text-zinc-500">{plan.cadence}</span>}
                    </p>
                    <p className="mt-1.5 text-sm text-zinc-500">{plan.priceNote}</p>
                  </div>

                  <div className="mt-8">
                    <PlanButton popular={plan.popular} label={plan.cta} />
                  </div>

                  <p className="mt-8 text-[15px] text-zinc-500">
                    {previous ? `All ${previous.name} features, plus:` : 'Everything to start lending:'}
                  </p>
                  <ul className="mt-4 space-y-4">
                    {plan.features.map((f) => (
                      <li key={f} className="text-[15px] leading-snug text-zinc-900">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
