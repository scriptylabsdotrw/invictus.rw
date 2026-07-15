import { renderOgImage, size, contentType, alt } from '@/lib/og-image'

export { size, contentType, alt }

export default async function Image() {
  return renderOgImage()
}
