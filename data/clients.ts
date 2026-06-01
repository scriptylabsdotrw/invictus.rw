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

export interface Client {
  name: string
  icon: IconSvgElement
  /**
   * Path to a real logo image in `public/logos/`, e.g. '/logos/giant-eagle-bank.svg'.
   * When set, the image is shown instead of the icon placeholder.
   */
  logo?: string
}

/**
 * Placeholder client logos (icon mark + wordmark).
 * To use a real logo: drop the file in `public/logos/` and set `logo` below.
 */
export const clientsRowOne: Client[] = [
  { name: 'Giant Eagle Bank', icon: BankIcon /* logo: '/logos/giant-eagle-bank.svg' */ },
  { name: 'Fina Group', icon: Building03Icon /* logo: '/logos/fina-group.svg' */ },
  { name: 'Prime Bank', icon: DollarCircleIcon /* logo: '/logos/prime-bank.svg' */ },
  { name: 'TrustBank', icon: SecurityCheckIcon /* logo: '/logos/trustbank.svg' */ },
  { name: 'Umoja SACCO', icon: Coins01Icon /* logo: '/logos/umoja-sacco.svg' */ },
  { name: 'Sebeya Capital', icon: Briefcase01Icon /* logo: '/logos/sebeya-capital.svg' */ },
]

export const clientsRowTwo: Client[] = [
  { name: 'Akagera Microfinance', icon: PiggyBankIcon /* logo: '/logos/akagera-microfinance.svg' */ },
  { name: 'Kivu Bank', icon: Money01Icon /* logo: '/logos/kivu-bank.svg' */ },
  { name: 'Nyungwe Finance', icon: Wallet01Icon /* logo: '/logos/nyungwe-finance.svg' */ },
  { name: 'Inkingi Credit', icon: Diamond01Icon /* logo: '/logos/inkingi-credit.svg' */ },
  { name: 'Rebero Capital', icon: ChartIncreaseIcon /* logo: '/logos/rebero-capital.svg' */ },
  { name: 'Isoko Cooperative', icon: BalanceScaleIcon /* logo: '/logos/isoko-cooperative.svg' */ },
]
