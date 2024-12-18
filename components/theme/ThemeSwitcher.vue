<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value: boolean) {
    colorMode.value = value ? 'dark' : 'light'
  }
})
</script>

<template>
  <Button variant="ghost" size="icon" @click="isDark = !isDark">
    <Icon
      v-if="isDark"
      name="solar:moon-stars-outline"
      class="h-5 w-5 transition-all"
    />
    <Icon
      v-else
      name="solar:sun-line-duotone"
      class="h-5 w-5 transition-all"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template> 