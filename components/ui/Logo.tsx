import Image from 'next/image'

interface LogoProps {
  className?: string
  light?: boolean
}

const ASPECT = 1672 / 941
const LIGHT_BG = '/logos/full_logos/Invictus_FullLogo_EmeraldOrange_on_White.png'
const DARK_BG = '/logos/full_logos/Invictus_FullLogo_WhiteOrange_on_Emerald.png'

export default function Logo({ className = '', light = false }: LogoProps) {
  const src = light ? DARK_BG : LIGHT_BG
  const renderHeight = 128
  return (
    <Image
      src={src}
      alt="Invictus — loan management platform"
      width={Math.round(renderHeight * ASPECT)}
      height={renderHeight}
      priority
      className={`w-auto rounded-xl ${className}`}
    />
  )
}
