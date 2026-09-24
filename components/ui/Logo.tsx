import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** Use the white/orange variant for dark backgrounds. */
  light?: boolean
}

const ASPECT = 1672 / 941
const ON_WHITE = '/logos/full_logos/Invictus_FullLogo_EmeraldOrange_on_White.png'
const ON_DARK = '/logos/full_logos/Invictus_FullLogo_WhiteOrange_on_Emerald.png'

export default function Logo({ className, light = false }: LogoProps) {
  const height = 128
  return (
    <Image
      src={light ? ON_DARK : ON_WHITE}
      alt="Invictus"
      width={Math.round(height * ASPECT)}
      height={height}
      priority
      className={cn('w-auto', className)}
    />
  )
}
