import type { IconSvgElement } from '@hugeicons/react'
import {
  UserMultipleIcon,
  PiggyBankIcon,
  BankIcon,
  ArrowDataTransferHorizontalIcon,
  Wallet01Icon,
  PercentCircleIcon,
  SecurityCheckIcon,
  Building03Icon,
  Analytics01Icon,
  Globe02Icon,
  Layers01Icon,
  BookOpen01Icon,
} from '@/lib/icons'

export interface Feature {
  icon: IconSvgElement
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: UserMultipleIcon,
    title: 'Customers & Accounts',
    description:
      'Onboard customers with KYC, open multiple account types, and keep every profile, document, and balance in one place.',
  },
  {
    icon: PiggyBankIcon,
    title: 'Deposits & Savings',
    description:
      'Run savings, current, and fixed-deposit products with automated interest accrual and clear balances.',
  },
  {
    icon: BankIcon,
    title: 'Loans & Credit',
    description:
      'Originate, approve, disburse, and track loans — with repayments, arrears, and penalties handled end to end.',
  },
  {
    icon: ArrowDataTransferHorizontalIcon,
    title: 'Transactions & Payments',
    description:
      'Process deposits, withdrawals, transfers, and payments in real time, posted straight to the ledger.',
  },
  {
    icon: Wallet01Icon,
    title: 'Teller & Cashiering',
    description:
      'Give branch tellers fast, controlled cash operations with day-open, day-close, and cash position tracking.',
  },
  {
    icon: PercentCircleIcon,
    title: 'Interest, Fees & Charges',
    description:
      'Configure interest, fees, and penalties per product so income and customer charges are always accurate.',
  },
  {
    icon: BookOpen01Icon,
    title: 'General Ledger & Accounting',
    description:
      'A real double-entry general ledger keeps every transaction balanced and your books audit-ready.',
  },
  {
    icon: SecurityCheckIcon,
    title: 'Staff & Role Management',
    description:
      'Control exactly what administrators, managers, tellers, and officers can access with granular roles.',
  },
  {
    icon: Building03Icon,
    title: 'Branch Management',
    description:
      'Operate multiple branches, assign teams, and monitor performance across your whole network.',
  },
  {
    icon: Analytics01Icon,
    title: 'Reports & Analytics',
    description:
      'Portfolio, deposits, transactions, income, and regulatory-style reports — ready whenever you need them.',
  },
  {
    icon: Globe02Icon,
    title: 'Branded Customer Portals',
    description:
      'Give every institution its own professional portal on a subdomain such as yourbank.invictus.rw.',
  },
  {
    icon: Layers01Icon,
    title: 'Multi-Tenant Architecture',
    description:
      'Serve many institutions from one scalable platform while keeping each tenant’s data fully separate.',
  },
]
