import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://invictus.rw/sitemap.xml',
  }
}

// Generated once at build time for the static export.
export const dynamic = 'force-static'
