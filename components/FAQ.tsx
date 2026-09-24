import Link from 'next/link'
import { faqs } from '@/lib/constants'
import Icon from './ui/Icon'
import { Add01Icon } from '@hugeicons/core-free-icons'

interface FAQProps {
  limit?: number
}

export default function FAQ({ limit }: FAQProps) {
  const items = limit ? faqs.slice(0, limit) : faqs

  return (
    <section id="faq" className="scroll-mt-20 border-b border-zinc-200">
      <div className="mx-auto grid max-w-[1344px] border-zinc-200 lg:grid-cols-[0.85fr_2fr] lg:border-x">
        <div className="border-b border-zinc-200 lg:border-b-0 lg:border-r">
          <div className="px-6 py-16 sm:px-10 lg:sticky lg:top-20 lg:py-20">
            <p className="text-sm font-medium text-primary-700">FAQ</p>
            <h2 className="mt-4 text-5xl font-normal leading-[1.02] tracking-tight">Questions, answered.</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              Still curious?{' '}
              <Link href="/contact" className="text-zinc-900 underline underline-offset-4 hover:text-primary-700">
                Talk to our team
              </Link>
              .
            </p>
          </div>
        </div>

        <div>
          {items.map((faq, i) => (
            <details
              key={faq.question}
              className="group border-b border-zinc-200 last:border-b-0"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-7 text-left transition-colors hover:bg-zinc-50 sm:px-10 [&::-webkit-details-marker]:hidden">
                <span className="text-xl font-normal tracking-tight text-zinc-900 sm:text-2xl">{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-200 text-zinc-500 transition-all duration-300 group-open:rotate-45 group-open:border-zinc-900 group-open:bg-zinc-900 group-open:text-white">
                  <Icon icon={Add01Icon} size={16} />
                </span>
              </summary>
              <p className="max-w-2xl px-6 pb-8 text-base leading-relaxed text-zinc-600 sm:px-10">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
