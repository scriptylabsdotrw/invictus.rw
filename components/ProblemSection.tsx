import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import {
  File02Icon,
  JusticeScaleIcon,
  PieChart01Icon,
  UserRemove01Icon,
  ComputerRemoveIcon,
  GitBranchIcon,
  Clock01Icon,
  BookOpen01Icon,
} from '@/lib/icons'

const problems = [
  { icon: File02Icon, title: 'Disconnected systems', text: 'Accounts, deposits, and loans live in separate tools and spreadsheets that never reconcile.' },
  { icon: Clock01Icon, title: 'No real-time balances', text: 'Customer and branch balances are always out of date, so decisions are made on stale numbers.' },
  { icon: JusticeScaleIcon, title: 'Manual reconciliation', text: 'Closing the day means hours of matching cash, transactions, and ledgers by hand.' },
  { icon: BookOpen01Icon, title: 'No proper ledger', text: 'Without double-entry accounting, books drift out of balance and audits become painful.' },
  { icon: UserRemove01Icon, title: 'Fragmented customer view', text: 'A customer’s accounts, history, and loans are scattered and hard to see in one place.' },
  { icon: ComputerRemoveIcon, title: 'No customer portal', text: 'Customers have no branded, trustworthy place to bank with your institution online.' },
  { icon: GitBranchIcon, title: 'Hard branch control', text: 'Running multiple branches consistently and securely becomes nearly impossible.' },
  { icon: PieChart01Icon, title: 'Weak reporting', text: 'Leadership lacks a clear, real-time view of deposits, portfolio, income, and growth.' },
]

export default function ProblemSection() {
  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The challenge</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Banking shouldn’t run on spreadsheets
            </h2>
            <p className="lead mt-6">
              Growing a financial institution on manual processes and disconnected tools creates
              risk, slows everything down, and makes it hard to truly know where the money is.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-white p-6 transition-colors hover:border-emerald-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                  <Icon icon={p.icon} size={20} />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
