import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Body copy — highly readable.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Headings / display — geometric, premium.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = 'https://invictus.rw'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Invictus — Core Banking System for Microfinance, SACCOs & Banks in Rwanda',
    template: '%s — Invictus',
  },
  description:
    'Invictus is a multi-tenant core banking system for microfinance institutions, SACCOs, banks, and lenders in Rwanda and East Africa. Run customers, accounts, deposits, transactions, lending, the general ledger, staff, branches, reports, and branded portals from one secure platform.',
  keywords: [
    'core banking system Rwanda',
    'core banking software',
    'microfinance software Rwanda',
    'SACCO management software',
    'banking software East Africa',
    'cloud core banking platform',
    'deposit and savings software',
    'general ledger banking software',
    'transactions and payments system',
    'multi-tenant banking platform',
    'Invictus core banking system',
    'banking software for microfinance institutions',
    'customer portal for banks',
    'loan management software',
    'software for SACCOs',
    'fintech software Rwanda',
  ],
  authors: [{ name: 'Invictus' }],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/logos/favicon/favicon.ico', sizes: 'any' },
      { url: '/logos/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/logos/favicon/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logos/favicon/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/logos/favicon/favicon-180x180.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Invictus',
    title: 'Invictus — The Core Banking System for Modern Financial Institutions',
    description:
      'Run your entire institution — accounts, deposits, payments, lending, and branches — on one secure, multi-tenant core banking platform across Rwanda and East Africa.',
    url: SITE_URL,
    locale: 'en_RW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invictus — Core Banking System for Financial Institutions',
    description:
      'Multi-tenant core banking platform with branded portals for banks, microfinance, and SACCOs in Rwanda and East Africa.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#065F46',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Invictus',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description:
    'Multi-tenant core banking system for microfinance institutions, SACCOs, banks, and lenders in Rwanda and East Africa.',
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact sales for pricing',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
