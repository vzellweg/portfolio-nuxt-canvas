export default defineAppConfig({
  appName: "Victor Z Software Engineer",
  appDescription:
    "Portfolio for Victor Zellweger, created from the Canvas template built by HugoRCD",
  profilePicture: "/assets/vz-headshot-linkedin.jpeg",
  footerName: "VictorZ",
  email: "vazellweg@gmail.com",
  // twitterUsername: '@',
  phone: "(+1) 206 450 5471",
  openGraphImage: "https://canvas.hrcd.fr/social-preview.jpg",
  socials: {
    github: "https://github.com/vzellweg",
    linkedin: "https://www.linkedin.com/in/vzellweg/",
    soundcloud: "https://soundcloud.com/zellweger",
  },
  ui: {
    primary: "emerald",
    gray: "zinc",
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    input: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
    textarea: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
  },
});
