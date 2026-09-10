export default defineAppConfig({
  appName: 'Victor Zellweger | Software Engineer',
  appDescription:
    'Accessible AI tools, 3D web simulations, and full-stack TypeScript projects by Victor Zellweger.',
  profilePicture: '/assets/vz-headshot-linkedin.jpeg',
  footerName: 'VictorZ',
  email: 'vazellweg@gmail.com',
  // twitterUsername: '@',
  phone: '(+1) 206 450 5471',
  openGraphImage: 'https://victorz.dev/projects/accessible-inaturalist.jpg',
  socials: {
    github: 'https://github.com/vzellweg',
    linkedin: 'https://www.linkedin.com/in/vzellweg/',
    soundcloud: 'https://soundcloud.com/zellweger',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
    input: {
      variants: {
        variant: {
          none: 'bg-gray-100 dark:bg-gray-900/40 border border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
        },
      },
    },
    textarea: {
      variants: {
        variant: {
          none: 'bg-gray-100 dark:bg-gray-900/40 border border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
        },
      },
    },
  },
})
