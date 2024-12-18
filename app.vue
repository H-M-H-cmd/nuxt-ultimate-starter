<template>
  <div>
    <!-- <NuxtLoadingIndicator :height="20" :duration="10000" :throttle="1000" /> -->
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'fade',
          mode: 'out-in',
          onBeforeEnter
        }"
      />
    </NuxtLayout>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - My Nuxt App'
})

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}

</script>