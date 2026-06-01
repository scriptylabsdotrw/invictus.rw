export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'What is Invictus?',
    answer:
      'Invictus is a cloud core banking system for financial institutions. It brings customers, accounts, deposits, transactions, lending, the general ledger, staff, branches, reports, and branded customer portals together in one secure platform.',
  },
  {
    question: 'Who is Invictus built for?',
    answer:
      'Invictus is designed for microfinance institutions, SACCOs and cooperatives, community banks, money lenders, SME lenders, and other financial service providers across Rwanda and East Africa.',
  },
  {
    question: 'Is Invictus a full core banking system?',
    answer:
      'Yes. Invictus covers core banking end to end — customer and account management, deposits and savings, loans and credit, transactions and payments, teller operations, and a real double-entry general ledger.',
  },
  {
    question: 'Can each institution get its own portal?',
    answer:
      'Yes. Every institution can operate under its own branded subdomain — for example yourbank.invictus.rw — while still being powered by the central Invictus platform.',
  },
  {
    question: 'Does Invictus support multiple institutions?',
    answer:
      'Absolutely. Invictus is a multi-tenant platform. It can serve many institutions from one scalable system while keeping each tenant’s data cleanly separated.',
  },
  {
    question: 'Does it handle deposits and transactions, not just loans?',
    answer:
      'Yes. Deposits, savings, withdrawals, transfers, and payments are all first-class — posted in real time to the general ledger alongside lending.',
  },
  {
    question: 'Can staff roles and branches be managed?',
    answer:
      'You can control exactly what administrators, managers, tellers, and officers can do, and operate multiple branches with performance visibility across the network.',
  },
  {
    question: 'How are reports and the ledger handled?',
    answer:
      'Every transaction posts to a double-entry general ledger, so your books stay balanced and audit-ready. Portfolio, deposit, transaction, and income reports are available on demand.',
  },
  {
    question: 'Is there a backend in this project?',
    answer:
      'This website is a frontend showcase. It uses polished mock content and frontend-only interactions to demonstrate the Invictus experience, without a live backend, database, or real API.',
  },
  {
    question: 'How can an institution request a demo?',
    answer:
      'Complete the demo request form in the Contact section. Tell us about your institution and the Invictus team will walk you through the platform.',
  },
]
