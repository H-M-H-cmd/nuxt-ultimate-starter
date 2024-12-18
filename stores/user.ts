// No need to import defineStore, ref, or computed as they're auto-imported by Nuxt
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const setUser = (newUser: User | null) => {
    user.value = newUser
  }

  return {
    user,
    isAuthenticated,
    setUser
  }
})

type User = {
  id: string
  email: string
  name: string
}
    