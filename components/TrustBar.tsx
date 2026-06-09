import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  BankIcon,
  ServerStack01Icon,
  BrowserIcon,
  MoneyExchange01Icon,
  Audit01Icon,
  Location01Icon,
} from '@/lib/icons'

const items = [
  { icon: BankIcon, label: 'Full Core Banking' },
  { icon: ServerStack01Icon, label: 'Multi-Tenant Platform' },
  { icon: BrowserIcon, label: 'Branded Portals' },
  { icon: MoneyExchange01Icon, label: 'Real-Time Transactions' },
  { icon: Audit01Icon, label: 'Secure & Audit-Ready' },
  { icon: Location01Icon, label: 'Rwanda & East Africa' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px py-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-9">
            {items.map(({ icon, label }) => (
              <span
                key={label}
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-ink/75"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon icon={icon} size={18} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
