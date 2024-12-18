<script setup lang="ts">
import { h, ref, onMounted, nextTick } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from '@/components/ui/toast'
import { useStepperForm, type Step } from '@/composables/useStepperForm'
import {
  useFormSchemas,
  type StepperFormValues
} from '@/validations/stepper-form'// Get validation schemas
const { 
  personalDetailsSchema, 
  passwordSchema, 
  drinkSelectionSchema,
} = useFormSchemas()


const { toast } = useToast()

const { isRTL } = useDirection()

// Define initial form values
const initialValues = ref<Partial<StepperFormValues>>({
  // fullName: '',
  // email: '',
  // password: '',
  // confirmPassword: '',
  // favoriteDrink: undefined,
})

// Example of loading initial values
const loadInitialValues = async () => {
  try {
    // Simulate API call
    // const response = await fetch('/api/user-defaults')
    // const data = await response.json()
    let data = {}
    // setTimeout(() => {
    //   data = {
    //     fullName: 'John Doe',
    //     email: 'john.doe@example.com',
    //   }
    // }, 2000)
    data = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
    }
    initialValues.value = {
      ...initialValues.value,
      ...data,
    }
  } catch (error) {
    console.error('Failed to load initial values:', error)
  }
}

// Load initial values when component mounts
onMounted(() => {
  loadInitialValues()
})

// Define your steps with components and schemas
const steps: Step[] = [
  {
    step: 1,
    title: 'معلوماتك',
    description: 'قم بإدخال اسمك وبريدك الإلكتروني',
    component: defineAsyncComponent(() => import('@/components/steps/personal-details.vue')),
    schema: personalDetailsSchema,
  },
  {
    step: 2,
    title: 'كلمة المرور',
    description: 'اختر كلمة المرور',
    component: defineAsyncComponent(() => import('@/components/steps/password.vue')),
    schema: passwordSchema,
  },
  {
    step: 3,
    title: 'مشروبك المفضل',
    description: 'اختر مشروبك',
    component: defineAsyncComponent(() => import('@/components/steps/drink-selection.vue')),
    schema: drinkSelectionSchema,
  },
]

const {
  stepIndex,
  direction,
  currentSchema,
  currentComponent,
  isStepValid,
  handleStepTransition,
  resetTransition,
} = useStepperForm({ steps })

const onSubmit = (values: StepperFormValues) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}

const handleNext = () => {
  handleStepTransition(stepIndex.value + 1)
}

const handlePrev = () => {
  handleStepTransition(stepIndex.value - 1)
}
</script>

<template>
  <Form 
    v-slot="{ meta, values, validate }" 
    as="" 
    keep-values
    :initial-values="initialValues"
    :validation-schema="currentSchema ? toTypedSchema(currentSchema) : undefined"
  >
    <Stepper 
      v-slot="{ isNextDisabled, isPrevDisabled }" 
      v-model="stepIndex" 
      class="block w-full"
    >
      <form @submit="(e: any) => {
        e.preventDefault()
        validate()

        if (stepIndex === steps.length && meta.valid) {
          onSubmit(values as StepperFormValues)
        }
      }">
          <StepperHeader 
            :meta="meta" 
            :steps="steps" 
            :step-index="stepIndex"
            @click="resetTransition"
          />

        <div class="relative mt-4 min-h-[200px] overflow-hidden">
          <Transition
            :name="direction ? (direction === 'next' ? `slide-${isRTL ? 'right' : 'left'}` : `slide-${isRTL ? 'left' : 'right'}`) : 'fade-up'"
            mode="out-in"
          >
            <component 
              :key="stepIndex"
              :is="currentComponent" 
            />
          </Transition>
        </div>

        <div class="mt-4">
          <Transition name="fade" mode="out-in">
            <div :key="`buttons-${stepIndex}`" class="flex items-center justify-between">
              <Button 
                :disabled="isPrevDisabled" 
                variant="outline" 
                size="sm" 
                @click="handlePrev"
              >
                السابق
              </Button>
              <div class="flex items-center gap-3">
                <Button 
                  v-if="stepIndex !== steps.length" 
                  type="button" 
                  :disabled="!isStepValid(values)" 
                  size="sm"
                  @click="handleNext"
                >
                  التالي
                </Button>
                <Button 
                  v-if="stepIndex === steps.length" 
                  size="sm" 
                  type="submit" 
                  :disabled="!isStepValid(values)"
                >
                  إرسال
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </form>
    </Stepper>
  </Form>
</template> 