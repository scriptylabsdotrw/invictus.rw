export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Invictus gives us a single, real-time view of every customer, account, deposit, and loan. It finally feels like a banking system built for how we actually operate.',
    name: 'A. Mukamana',
    role: 'Microfinance CEO',
    initials: 'AM',
  },
  {
    quote:
      'We replaced a patchwork of spreadsheets and disconnected tools. Now deposits, transactions, and lending all post to one ledger — and our books balance every day.',
    name: 'J. Habimana',
    role: 'Head of Operations',
    initials: 'JH',
  },
  {
    quote:
      'Our tellers move faster and our branch numbers reconcile instantly. Day-open and day-close that used to take hours now take minutes.',
    name: 'C. Uwase',
    role: 'Branch Manager',
    initials: 'CU',
  },
  {
    quote:
      'The reporting and general ledger give leadership the visibility we needed to grow with confidence across multiple branches.',
    name: 'D. Niyonzima',
    role: 'Finance Director',
    initials: 'DN',
  },
]
