import { ref, type Component, computed } from 'vue'
import * as z from 'zod'

export type Step = {
    step: number
    title: string
    description: string
    component: Component
    schema: z.ZodType<any>
}

type UseStepperFormProps = {
    steps: Step[]
}

export const useStepperForm = ({ steps }: UseStepperFormProps) => {
    const stepIndex = ref(1)
    const direction = ref<'next' | 'prev' | null>(null)
    const lastStepIndex = ref(1)

    const currentStep = computed(() =>
        steps.find(step => step.step === stepIndex.value)
    )

    const currentSchema = computed(() =>
        currentStep.value?.schema
    )

    const currentComponent = computed(() =>
        currentStep.value?.component
    )

    const handleStepTransition = async (targetStep: number) => {
        lastStepIndex.value = stepIndex.value
        // Set direction only for next/prev button clicks
        direction.value = targetStep > lastStepIndex.value ? 'next' : 'prev'

        stepIndex.value = targetStep
    }

    const resetTransition = () => {
        direction.value = null
    }

    const isStepValid = (values: any) => {
        if (!currentSchema.value) return false
        try {
            currentSchema.value.parse(values)
            return true
        } catch {
            return false
        }
    }

    return {
        stepIndex,
        direction,
        steps,
        currentStep,
        currentSchema,
        currentComponent,
        isStepValid,
        handleStepTransition,
        resetTransition,
    }
} 