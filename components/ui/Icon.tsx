import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'

interface IconProps {
  icon: IconSvgElement
  /** Pixel size; defaults to 20. */
  size?: number
  className?: string
  strokeWidth?: number
}

/**
 * Thin wrapper around Hugeicons. Inherits text color (currentColor) so it
 * works with Tailwind `text-*` classes exactly like the old lucide icons.
 */
export default function Icon({ icon, size = 20, className, strokeWidth = 1.8 }: IconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      color="currentColor"
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}

export type { IconSvgElement }
