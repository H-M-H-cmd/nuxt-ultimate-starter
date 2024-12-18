<template>
  <div class="min-h-screen flex flex-col">
    <LayoutAppHeader />
    <main :dir="direction" class="flex-1 container px-0 max-w-xl md:px-8 mt-16 mb-16">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const { direction } = useDirection()
</script> 
