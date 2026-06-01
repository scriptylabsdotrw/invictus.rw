import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  BankIcon,
  Layers01Icon,
  Globe02Icon,
  ArrowDataTransferHorizontalIcon,
  SecurityCheckIcon,
  Location01Icon,
} from '@/lib/icons'

const items = [
  { icon: BankIcon, label: 'Full Core Banking' },
  { icon: Layers01Icon, label: 'Multi-Tenant Platform' },
  { icon: Globe02Icon, label: 'Branded Portals' },
  { icon: ArrowDataTransferHorizontalIcon, label: 'Real-Time Transactions' },
  { icon: SecurityCheckIcon, label: 'Secure & Audit-Ready' },
  { icon: Location01Icon, label: 'Rwanda & East Africa' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {items.map(({ icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70"
              >
                <span className="text-emerald-600">
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
