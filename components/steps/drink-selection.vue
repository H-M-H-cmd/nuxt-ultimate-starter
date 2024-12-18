<script setup lang="ts">
defineProps<{
    componentField?: any
}>()
</script>

<template>
    <div class="flex flex-col gap-4">
        <FormField v-slot="{ componentField }" name="favoriteDrink">
            <FormItem>
                <FormLabel>المشروب</FormLabel>
                <Select v-bind="componentField">
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="اختر مشروباً" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="coffee">قهوة</SelectItem>
                            <SelectItem value="tea">شاي</SelectItem>
                            <SelectItem value="soda">مشروب غازي</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
        </FormField>
    </div>
</template>