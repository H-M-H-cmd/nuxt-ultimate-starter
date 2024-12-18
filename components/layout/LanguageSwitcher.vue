<script setup lang="ts">

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>)
})

const currentLocale = computed(() => {
  return availableLocales.value.find((l: { code: string; name: string }) => l.code === locale.value)?.name || ''
})

const switchLocale = (value: string) => {
  setLocale(value as 'ar' | 'en'); // Cast to the specific types if needed
};
console.log(availableLocales.value)
</script>

<template>
  <Select :model-value="locale" @update:model-value="switchLocale">
    <SelectTrigger skip-direction  class="w-[180px]">
      <SelectValue :placeholder="currentLocale" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Languages</SelectLabel>
        <SelectItem
          v-for="lang in availableLocales"
          :key="lang.code"
          :value="lang.code"
        >
          <span class="flex items-center gap-2">
            <span v-if="lang.code === 'ar'">🇸🇦</span>
            <span v-if="lang.code === 'en'">🇺🇸</span>
            {{ lang.name }}
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template> 