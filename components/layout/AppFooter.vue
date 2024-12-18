<template>
  <footer class="w-full bg-white dark:bg-gray-900 border-t fixed bottom-0">
    <div class="container mx-auto px-4">
      <div class="flex justify-center items-center py-4 gap-8">
        <!-- WhatsApp Link -->
        <NuxtLink to="#" class="flex flex-col items-center gap-1">
          <div class="w-6 h-6">
            <IconsIconWhatsapp class="w-full h-full text-gray-500" />
          </div>
          <span class="text-sm text-gray-500">راسلنا</span>
        </NuxtLink>

        <!-- About Link -->
        <NuxtLink to="#" class="flex flex-col items-center gap-1">
          <div class="w-6 h-6">
            <IconsIconInfo class="w-full h-full text-gray-500" />
          </div>
          <span class="text-sm text-gray-500">من نحن</span>
        </NuxtLink>

        <!-- Request Service Link -->
        <NuxtLink to="#" class="flex flex-col items-center gap-1">
          <div class="w-6 h-6 text-emerald-500">
            <IconsIconClipboardCheck class="w-full h-full" />
          </div>
          <span class="text-sm text-emerald-500">طلب عقد</span>
        </NuxtLink>

        <!-- Home Link -->
        <NuxtLink to="/" class="flex flex-col items-center gap-1">
          <div class="w-6 h-6">
            <IconsIconHome class="w-full h-full text-gray-500" />
          </div>
          <span class="text-sm text-gray-500">الرئيسية</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component will use auto-imported Iconsicons
</script> 