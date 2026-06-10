export type ClientAccent = 'orange' | 'gold' | 'sky' | 'emerald'

export interface Client {
  name: string
  badge: string
  accent: ClientAccent
  logo: string
  website?: string
}

export const clientsRowOne: Client[] = [
  {
    name: 'Atlas Wealth',
    badge: 'Microfinance',
    accent: 'sky',
    logo: '/clients/atlas_logo.png',
    website: 'https://atlaswealth.rw/',
  },
  {
    name: 'Fina Group',
    badge: 'Microfinance',
    accent: 'emerald',
    logo: '/clients/FINAGROUP.webp',
    website: 'https://finagroup.co/',
  },
  {
    name: 'Giant Eagle Finance',
    badge: 'Microfinance',
    accent: 'gold',
    logo: '/clients/GEF_LOG.jpg-removebg-preview.png',
    website: 'https://www.gianteaglefinance.rw/',
  },
  {
    name: 'Umurage Finance',
    badge: 'Microfinance',
    accent: 'orange',
    logo: '/clients/umuragefinance.webp',
  },
]

export const clientsRowTwo: Client[] = [
  {
    name: 'Giant Eagle Finance',
    badge: 'Microfinance',
    accent: 'gold',
    logo: '/clients/GEF_LOG.jpg-removebg-preview.png',
    website: 'https://www.gianteaglefinance.rw/',
  },
  {
    name: 'Umurage Finance',
    badge: 'Microfinance',
    accent: 'orange',
    logo: '/clients/umuragefinance.webp',
  },
  {
    name: 'Fina Group',
    badge: 'Microfinance',
    accent: 'emerald',
    logo: '/clients/FINAGROUP.webp',
    website: 'https://finagroup.co/',
  },
  {
    name: 'Atlas Wealth',
    badge: 'Microfinance',
    accent: 'sky',
    logo: '/clients/atlas_logo.png',
    website: 'https://atlaswealth.rw/',
  },
]
