import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const hostname = useRuntimeConfig(event).public.siteUrl || 'https://www.victorz.dev'

  const [pages, articles] = await Promise.all([
    queryCollection(event, 'pages').all(),
    queryCollection(event, 'articles').all(),
  ])

  const sitemap = new SitemapStream({ hostname })

  const paths = new Set<string>([
    '/',
    ...pages.map(doc => doc.path),
    ...articles.map(doc => doc.path),
  ])

  for (const url of paths) {
    sitemap.write({ url, changefreq: 'daily' })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
