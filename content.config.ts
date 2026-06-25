import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const projectSchema = z.object({
  name: z.string(),
  id: z.string(),
  release: z.string(),
  image: z.string(),
  description: z.string(),
  role: z.string(),
  tags: z.array(z.string()),
  layout: z.string().optional(),
  featured: z.boolean().optional(),
  link: z.string().optional(),
  logo: z.string().optional(),
})

const articleSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  readingTime: z.string().optional(),
  layout: z.string().optional(),
})

const faqSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  faqQuestions: z.array(
    z.object({
      title: z.string(),
      questions: z.array(
        z.object({
          title: z.string(),
          answer: z.string(),
        }),
      ),
    }),
  ),
})

const stackSchema = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      logo: z.string(),
      link: z.string().optional(),
    }),
  ),
})

export default defineContentConfig({
  collections: {
    // Top-level route pages: /, /works, /writing, /about, /contact
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'en/*.md',
        prefix: '',
      },
      schema: z.object({
        title: z.string().optional(),
        layout: z.string().optional(),
      }),
    }),
    // Project entries rendered on the /works page
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'en/projects/**',
        exclude: ['**/*.example'],
        prefix: '/projects',
      },
      schema: projectSchema,
    }),
    // Blog articles, also routable at /articles/<slug>
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'en/articles/**',
        exclude: ['**/*.example'],
        prefix: '/articles',
      },
      schema: articleSchema,
    }),
    faq: defineCollection({
      type: 'data',
      source: 'en/faq.json',
      schema: faqSchema,
    }),
    stack: defineCollection({
      type: 'data',
      source: 'stack.json',
      schema: stackSchema,
    }),
  },
})
