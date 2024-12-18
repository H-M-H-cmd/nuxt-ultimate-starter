<script setup lang="ts">
const { t } = useI18n()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <nav class="container flex h-14 items-center">
      <div class="flex flex-1 items-center justify-between">
        <!-- Left side -->
        <div class="flex items-center gap-6 md:gap-8">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="font-bold">Logo</span>
          </NuxtLink>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-2">
          <!-- Theme Switcher -->
          <ClientOnly>
            <ThemeSwitcher />
          </ClientOnly>
          
          <!-- Language Switcher -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <Icon
                  :name="locale === 'ar' ? 'twemoji:flag-saudi-arabia' : 'twemoji:flag-united-states'"
                  class="h-5 w-5"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem v-for="locale in availableLocales" :key="locale.code">
                <NuxtLink :to="switchLocalePath(locale.code)" class="flex items-center gap-2">
                  <Icon
                    :name="locale.code === 'ar' ? 'twemoji:flag-saudi-arabia' : 'twemoji:flag-united-states'"
                    class="h-4 w-4"
                  />
                  {{ locale.name }}
                </NuxtLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  </header>
</template> 