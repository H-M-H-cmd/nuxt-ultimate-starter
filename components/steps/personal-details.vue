<script setup lang="ts">
defineProps<{
  componentField?: any
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <FormField v-slot="{ componentField }" name="fullName">
      <FormItem>
        <FormLabel>الاسم الكامل</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>البريد الإلكتروني</FormLabel>
        <FormControl>
          <Input type="email" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template> 