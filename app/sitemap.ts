import type { MetadataRoute } from 'next'

const SITE_URL = 'https://invictus.rw'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/features', '/how-it-works', '/pricing', '/faq', '/contact', '/privacy', '/terms', '/cookies', '/acceptable-use']
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
