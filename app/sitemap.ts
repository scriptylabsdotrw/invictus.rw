import type { MetadataRoute } from 'next'

const SITE_URL = 'https://invictus.rw'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/product', '/features', '/how-it-works', '/pricing', '/faq', '/contact']
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
