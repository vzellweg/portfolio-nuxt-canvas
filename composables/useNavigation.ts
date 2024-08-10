type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'i-lucide-home',
        },
        works: {
          name: 'Works',
          to: '/works/sampleid',
          icon: 'i-lucide-briefcase',
        },
        // Uncomment when I have some blog content to show
        // writing: {
        //   name: 'Writing',
        //   to: '/writing',
        //   icon: 'i-lucide-library',
        // },
        about: {
          name: 'About',
          to: '/about',
          icon: 'i-lucide-user',
        },
        contact: {
          name: 'Contact',
          to: '/contact',
          icon: 'i-lucide-mail',
        },
      }
    default:
      return []
  }
}
