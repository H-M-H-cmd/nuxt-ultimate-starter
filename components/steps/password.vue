<script setup lang="ts">
defineProps<{
  componentField?: any
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>كلمة المرور</FormLabel>
        <FormControl>
          <Input type="password" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="confirmPassword">
      <FormItem>
        <FormLabel>تأكيد كلمة المرور</FormLabel>
        <FormControl>
          <Input type="password" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template> 