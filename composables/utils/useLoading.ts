export const useLoading = () => {
  const isLoading = ref(false)
  
  const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
    isLoading.value = true
    try {
      return await fn()
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    withLoading
  }
} 