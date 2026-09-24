import type { MetadataRoute } from 'next'

const SITE_URL = 'https://invictus.rw'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/features', '/pricing', '/about', '/contact', '/privacy', '/terms']
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

// Generated once at build time for the static export.
export const dynamic = 'force-static'
