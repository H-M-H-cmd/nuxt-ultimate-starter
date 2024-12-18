<script setup lang="ts">
import type { Step } from '@/composables/useStepperForm'
import type { Ref } from 'vue'
const { direction } = useDirection()

const props = defineProps<{
    meta: any
    steps: Step[]
    stepIndex: Ref<number> | number
}>()

</script>

<template>
    <div class="relative">
        <!-- Steps -->
        <div>

            <div class="flex flex-row w-full flex-start gap-2 mb-16">
                <div v-for="step in steps" class="flex-1" :key="step.step">
                    <StepperItem v-slot="{ state }"
                        class="relative flex w-full flex-col items-center justify-center" :step="step.step">
                        <!-- Active Step Title -->
                        <transition name="fade" mode="out-in">
                            <div v-if="step.step === (typeof stepIndex === 'number' ? stepIndex : stepIndex.value)"
                                class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <h2 class="text-sm text-primary">
                                    {{ step.title }}
                                </h2>
                            </div>
                        </transition>

                        <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
                            :class="direction === 'rtl' ? 'left-[calc(-50%+20px)] right-[calc(50%+30px)]' : 'left-[calc(50%+20px)] right-[calc(-50%+30px)]'"
                            class="absolute  top-[10px] block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                        <StepperTrigger as-child>
                            <!-- <Button 
                                :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'" size="icon"
                                class="z-10 rounded-full shrink-0"
                                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                                :disabled="state !== 'completed' && !meta.valid"> -->
                            <div>
                                <transition name="fade" mode="out-in">
                                    <div v-if="state === 'completed'"
                                        class="flex items-center justify-center bg-primary rounded-full w-4 h-4">
                                        <Icon class="text-white" size="12" name="mdi:check" />
                                    </div>
                                    <div v-else-if="state === 'active'"
                                        class="flex items-center justify-center rounded-full w-4 h-4">
                                        <Icon class="text-primary-light" size="10" name="mdi:circle" />
                                    </div>
                                    <div v-else-if="state === 'inactive'"
                                        class="flex items-center justify-center rounded-full w-4 h-4">
                                        <Icon class="text-primary-secondary" size="10" name="mdi:circle" />
                                    </div>
                                </transition>
                            </div>
                            <!-- </Button> -->
                        </StepperTrigger>
                    </StepperItem>
                    <div>
                        <div class="w-full flex justify-center text-sm absolute -bottom-14 -left-1/2 translate-x-1/2 font-semibold">
                            <transition name="fade" mode="out-in">
                                <div v-if="step.step === (typeof stepIndex === 'number' ? stepIndex : stepIndex.value)">
                                    {{ step.description }}
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>