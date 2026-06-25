export default defineAppConfig({
  appName: 'Victor Z Software Engineer',
  appDescription:
    'Portfolio for Victor Zellweger, created from the Canvas template built by HugoRCD',
  profilePicture: '/assets/vz-headshot-linkedin.jpeg',
  footerName: 'VictorZ',
  email: 'vazellweg@gmail.com',
  // twitterUsername: '@',
  phone: '(+1) 206 450 5471',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
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
