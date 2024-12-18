import { $fetch } from 'ofetch'
import type { FetchOptions } from 'ofetch'

// Use runtimeConfig for Nuxt environment variables
const config = useRuntimeConfig()
const baseURL = config.public.apiUrl || 'http://localhost:8000/api'

// Create custom fetch instance with default config
export const customFetch = $fetch.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})

// Generic request handler with error handling
export const apiRequest = async <T>(
  endpoint: string,
  options: FetchOptions<'json'> = {}
): Promise<T> => {
  try {
    return await customFetch<T>(endpoint, {
      ...options,
      responseType: 'json',
    })
  } catch (error: any) {
    // Handle common error cases
    if (error.response?.status === 401) {
      console.log('Unauthorized')
    }
    throw error
  }
}