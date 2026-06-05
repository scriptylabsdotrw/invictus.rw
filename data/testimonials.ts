export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  /** Square portrait (Unsplash, face-cropped). Falls back to initials if it fails. */
  image: string
}

// Face-cropped square portraits from Unsplash (free to use, no attribution required).
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=480&h=480&fit=crop&crop=faces&auto=format&q=80`

export const testimonials: Testimonial[] = [
  {
    quote:
      'Invictus gives us a single, real-time view of every customer, account, deposit, and loan. It finally feels like a banking system built for how we actually operate.',
    name: 'A. Mukamana',
    role: 'Microfinance CEO',
    initials: 'AM',
    image: unsplash('1573497019418-b400bb3ab074'),
  },
  {
    quote:
      'We replaced a patchwork of spreadsheets and disconnected tools. Now deposits, transactions, and lending all post to one ledger — and our books balance every day.',
    name: 'J. Habimana',
    role: 'Head of Operations',
    initials: 'JH',
    image: unsplash('1495603889488-42d1d66e5523'),
  },
  {
    quote:
      'Our tellers move faster and our branch numbers reconcile instantly. Day-open and day-close that used to take hours now take minutes.',
    name: 'C. Uwase',
    role: 'Branch Manager',
    initials: 'CU',
    image: unsplash('1611432579402-7037e3e2c1e4'),
  },
  {
    quote:
      'The reporting and general ledger give leadership the visibility we needed to grow with confidence across multiple branches.',
    name: 'D. Niyonzima',
    role: 'Finance Director',
    initials: 'DN',
    image: unsplash('1605602517387-ec78b947335e'),
  },
]
