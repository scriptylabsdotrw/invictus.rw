import Image from 'next/image'

interface LogoProps {
  className?: string
  /** Use the dark-background variant (e.g. on the emerald footer). */
  light?: boolean
}

// Full brand logos (public/logos/full_logos). 1672x941 each.
const ASPECT = 1672 / 941
const LIGHT_BG = '/logos/full_logos/Invictus_FullLogo_EmeraldOrange_on_White.png'
const DARK_BG = '/logos/full_logos/Invictus_FullLogo_WhiteOrange_on_Emerald.png'

/** Invictus brand logo image, with light/dark variants. */
export default function Logo({ className = '', light = false }: LogoProps) {
  const src = light ? DARK_BG : LIGHT_BG
  const renderHeight = 128 // intrinsic px for next/image; CSS controls display size
  return (
    <Image
      src={src}
      alt="Invictus — core banking platform"
      width={Math.round(renderHeight * ASPECT)}
      height={renderHeight}
      priority
      className={`w-auto rounded-xl ${className}`}
    />
  )
}
