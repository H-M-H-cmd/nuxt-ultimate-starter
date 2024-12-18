export { default as Select } from './Select.vue'
export { default as SelectGroup } from './SelectGroup.vue'
export { default as SelectValue } from './SelectValue.vue'
export { default as SelectTrigger } from './SelectTrigger.vue'
export { default as SelectContent } from './SelectContent.vue'
export { default as SelectLabel } from './SelectLabel.vue'
export { default as SelectItem } from './SelectItem.vue'
export { default as SelectSeparator } from './SelectSeparator.vue'
export { default as SelectScrollDownButton } from './SelectScrollDownButton.vue'
export { default as SelectScrollUpButton } from './SelectScrollUpButton.vue'
import { type VariantProps } from 'class-variance-authority'
import { selectTriggerVariants } from './select-variants'

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>
