import type { IconSvgElement } from '@hugeicons/react'
import {
  BankIcon,
  Building03Icon,
  Coins01Icon,
  DollarCircleIcon,
  PiggyBankIcon,
  Money01Icon,
  Wallet01Icon,
  Diamond01Icon,
  SecurityCheckIcon,
  ChartIncreaseIcon,
  Briefcase01Icon,
  BalanceScaleIcon,
} from '@/lib/icons'

export type ClientAccent = 'orange' | 'gold' | 'sky' | 'emerald'

export interface Client {
  name: string
  icon: IconSvgElement
  /** Short institution type, shown as a badge (e.g. 'Bank', 'SACCO'). */
  badge: string
  accent: ClientAccent
  /**
   * Path to a real logo image in `public/clients/`. When set, the image is
   * shown instead of the icon placeholder.
   */
  logo?: string
}

export const clientsRowOne: Client[] = [
  { name: 'Atlas Wealth', icon: BankIcon, badge: 'Bank', accent: 'sky', logo: '/clients/atlas_logo.png' },
  { name: 'Fina Group', icon: Building03Icon, badge: 'Group', accent: 'emerald', logo: '/clients/FINAGROUP.webp' },
  { name: 'Prime Bank', icon: DollarCircleIcon, badge: 'Bank', accent: 'gold' },
  { name: 'TrustBank', icon: SecurityCheckIcon, badge: 'Bank', accent: 'sky' },
  { name: 'Umoja SACCO', icon: Coins01Icon, badge: 'SACCO', accent: 'emerald' },
  { name: 'Sebeya Capital', icon: Briefcase01Icon, badge: 'Lender', accent: 'orange' },
]

export const clientsRowTwo: Client[] = [
  { name: 'Umurage Finance', icon: PiggyBankIcon, badge: 'Microfinance', accent: 'gold', logo: '/clients/umuragefinance.webp' },
  { name: 'Kivu Bank', icon: Money01Icon, badge: 'Bank', accent: 'sky' },
  { name: 'Nyungwe Finance', icon: Wallet01Icon, badge: 'Microfinance', accent: 'emerald' },
  { name: 'Inkingi Credit', icon: Diamond01Icon, badge: 'Credit', accent: 'orange' },
  { name: 'Rebero Capital', icon: ChartIncreaseIcon, badge: 'Lender', accent: 'gold' },
  { name: 'Isoko Cooperative', icon: BalanceScaleIcon, badge: 'Cooperative', accent: 'emerald' },
]
