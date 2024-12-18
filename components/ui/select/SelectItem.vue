<script setup lang="ts">
import { cn } from '@/lib/utils'
import { CheckIcon } from '@radix-icons/vue'
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
const { direction } = useDirection()
const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'], skipDirection?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem v-bind="forwardedProps" :class="cn(
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    'data-[state=checked]:font-medium data-[state=checked]:text-primary',
    props.class,
    !props.skipDirection && direction === 'rtl' ? 'flex-row-reverse' : 'flex-row',
  )">
    <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <CheckIcon class="h-4 w-4 text-primary" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
