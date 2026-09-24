import Icon from './ui/Icon'
import { WhatsappIcon } from '@hugeicons/core-free-icons'
import { WHATSAPP_URL } from '@/lib/site'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-105 active:scale-95"
    >
      <Icon icon={WhatsappIcon} size={28} strokeWidth={1.8} />
    </a>
  )
}
