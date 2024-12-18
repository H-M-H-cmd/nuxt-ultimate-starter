export const config = {
  env: process.env.VITE_MODE,
  api: {
    baseURL: process.env.VITE_API_URL,
    backendURL: process.env.VITE_BACKEND_URL,
  },
  reverb: {
    appKey: process.env.VITE_REVERB_APP_KEY,
    host: process.env.VITE_REVERB_HOST,
    port: process.env.VITE_REVERB_PORT,
    scheme: process.env.VITE_REVERB_SCHEME,
    authEndpoint: process.env.VITE_REVERB_AUTH_ENDPOINT,
  }
} as const

// Type guard for environment validation
export const isValidEnvironment = () => {
  const requiredVars = [
    'VITE_MODE',
    'VITE_API_URL',
    'VITE_BACKEND_URL',
    'VITE_REVERB_APP_KEY',
    'VITE_REVERB_HOST',
    'VITE_REVERB_PORT',
    'VITE_REVERB_SCHEME',
    'VITE_REVERB_AUTH_ENDPOINT'
  ]

  return requiredVars.every(varName => !!process.env[varName])
} 