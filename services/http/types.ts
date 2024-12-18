// Common response types
export type ApiResponse<T> = {
  data: T
  message?: string
  status?: number
}

// Error response type
export type ApiError = {
  message: string
  errors?: Record<string, string[]>
  code?: string
}

// Environment configuration type
export type EnvConfig = {
  apiUrl: string
  backendUrl: string
  mode: string
  reverb: {
    appKey: string
    host: string
    port: number
    scheme: string
    authEndpoint: string
  }
} 