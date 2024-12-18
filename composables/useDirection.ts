export const useDirection = () => {
  const { locale, locales, setLocale } = useI18n()
  
  const direction = computed(() => locales.value.find(l => l.code === locale.value)?.dir || 'ltr')
  
  const isRTL = computed(() => direction.value === 'rtl')

  return {
    direction,
    isRTL,
    setLocale
  }
} 