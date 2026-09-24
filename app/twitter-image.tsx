import { renderOgImage, size, contentType, alt } from '@/lib/og-image'

export { size, contentType, alt }

export default async function Image() {
  return renderOgImage()
}

// Generated once at build time for the static export.
export const dynamic = 'force-static'
