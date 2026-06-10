'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import { CheckmarkCircle02Icon, Alert01Icon, Cancel01Icon } from '@/lib/icons'

interface ToastProps {
  type: 'success' | 'error'
  message: string
  onClose: () => void
  duration?: number
}

export default function Toast({ type, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, duration)
    return () => clearTimeout(t)
  }, [onClose, duration])

  const ok = type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-6 right-6 z-[9999] w-[360px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border ${
        ok
          ? 'border-emerald-700/40 bg-emerald-950'
          : 'border-rose-200 bg-white'
      }`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start gap-3 p-4 pr-3">
        {/* Icon */}
        <span
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            ok ? 'bg-emerald-400/15 text-emerald-300' : 'bg-rose-50 text-rose-500'
          }`}
        >
          <Icon icon={ok ? CheckmarkCircle02Icon : Alert01Icon} size={20} />
        </span>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-bold leading-tight ${ok ? 'text-white' : 'text-ink'}`}>
            {ok ? 'Demo request sent!' : 'Failed to send request'}
          </p>
          <p className={`mt-1 text-xs leading-relaxed ${ok ? 'text-emerald-200/70' : 'text-muted'}`}>
            {message}
          </p>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-colors ${
            ok
              ? 'text-emerald-400/50 hover:bg-white/10 hover:text-emerald-300'
              : 'text-muted/50 hover:bg-neutralbg hover:text-muted'
          }`}
        >
          <Icon icon={Cancel01Icon} size={14} />
        </button>
      </div>

      {/* Countdown progress bar */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
        style={{ originX: 0 }}
        className={`h-[3px] w-full ${ok ? 'bg-emerald-400/40' : 'bg-rose-400/50'}`}
      />
    </motion.div>
  )
}
