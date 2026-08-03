'use client'

import { faqs } from '@/lib/constants'
import Reveal from './ui/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

interface FAQProps { limit?: number }

export default function FAQ({ limit }: FAQProps) {
  const items = limit ? faqs.slice(0, limit) : faqs

  return (
    <section className="section bg-neutralbg">
      <div className="container-px">
        <Reveal><div className="mx-auto max-w-2xl text-center"><span className="eyebrow">FAQ</span><h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">Answers for financial institutions</h2><p className="lead mt-6">Everything you need to know before requesting a demo.</p></div></Reveal>
        <Reveal><Accordion defaultValue={faqs[0] ? [faqs[0].question] : []} multiple={false} className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line bg-white px-6">
          {items.map((faq) => <AccordionItem key={faq.question} value={faq.question}><AccordionTrigger className="py-5 text-base font-semibold text-ink hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="pb-5 leading-relaxed text-muted">{faq.answer}</AccordionContent></AccordionItem>)}
        </Accordion></Reveal>
      </div>
    </section>
  )
}
