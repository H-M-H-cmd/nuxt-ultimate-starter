<script setup lang="ts">
import { cn } from '@/lib/utils'
import { CaretSortIcon } from '@radix-icons/vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { selectTriggerVariants } from './select-variants'

const { direction } = useDirection()

const props = defineProps<SelectTriggerProps & {
  class?: HTMLAttributes['class']
  skipDirection?: boolean
  iconName?: string
  iconSize?: string
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'error' | 'success'
  size?: 'default' | 'sm' | 'lg' | 'xl'
  fullWidth?: boolean
}>()

const delegatedProps = computed(() => {
  const { 
    class: _, 
    skipDirection: __, 
    iconName: ___, 
    iconSize: ____, 
    variant: _____, 
    size: ______, 
    fullWidth: _______, 
    ...delegated 
  } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger 
    v-bind="forwardedProps" 
    :class="cn(
      selectTriggerVariants({ 
        variant: props.variant,
        size: props.size,
        fullWidth: props.fullWidth
      }),
      props.class,
      !props.skipDirection && direction === 'rtl' ? 'flex-row-reverse' : 'flex-row',
    )"
  >
    <slot />
    <SelectIcon as-child>
      <template v-if="props.iconName">
        <Icon 
          :name="props.iconName" 
          :size="props.iconSize || '20'" 
          class="opacity-50 shrink-0"
        />
      </template>
      <CaretSortIcon v-else class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
