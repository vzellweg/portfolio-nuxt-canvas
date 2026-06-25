export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-og-image',
    'nuxt-svgo',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'nuxt-studio',
  ],

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },

  devtools: {
    enabled: true,
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },

  css: ['~/assets/style/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.victorz.dev',
    identity: {
      type: 'Person',
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  runtimeConfig: {
    resendApiKey: process.env.NUXT_RESEND_API_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
  },

  routeRules: {
    '/': { isr: true, prerender: true },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-01-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/', '/writing', '/works', '/about', '/contact'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'none' },
      { name: 'Testimonial', provider: 'none' },
    ],
  },

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.victorz.dev',
    locales: ['en'],
    defaultLocale: 'en',
  },

  image: {
    format: ['webp', 'jpeg'],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
      projectLg: 3072,
    },
  },

  // Self-hosted Nuxt Studio. Editing/publishing in production requires GitHub
  // OAuth credentials (STUDIO_GITHUB_CLIENT_ID / STUDIO_GITHUB_CLIENT_SECRET)
  // and an SSR deployment. See README "Content editing (Nuxt Studio)".
  studio: {
    repository: {
      provider: 'github',
      owner: 'vzellweg',
      repo: 'portfolio-nuxt-canvas',
      branch: 'main',
    },
  },

  svgo: {
    autoImportPath: './assets/logo/',
  },
})
