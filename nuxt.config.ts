// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  shadcn: {
    /** Prefix for all the imported component */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  
  icon: {
    // Icon config changes the default icon component to Icon
    componentName: 'Icon',
    provider: 'server', // <-- this

    // Custom collections
    customCollections: [
      {
        prefix: 'custom-icon',
        dir: './assets/custom-icons',
      },
    ],
  },

  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    public: {
      apiUrl: process.env.VITE_API_URL || 'http://localhost:8000/api',
      backendUrl: process.env.VITE_BACKEND_URL || 'http://localhost:8000',
      // Motion config
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  
  imports: {
    dirs: ['stores', 'utils', 'types']
  },

  build: {
    transpile: ['vue'],
  },

  compatibilityDate: '2024-10-30',

  i18n: {
    skipSettingLocaleOnNavigate: true,
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: 'ar',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      cookieCrossOrigin: true,
      cookieSecure: true,
    },
    locales: [
      {
        code: 'ar',
        name: 'العربية',
        iso: 'ar-SA',
        file: 'ar-SA.json',
        dir: 'rtl'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr'
      }
    ],
  },

  app: {
    head: {
      htmlAttrs: {}
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'color-mode',
  },
})