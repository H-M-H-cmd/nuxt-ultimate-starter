import * as z from 'zod'
import { useValidationRules } from './rules'

export const useLoginFormSchema = () => {
  const rules = useValidationRules()
  
  return z.object({
    email: rules.email,
    password: rules.password,
  })
}

// Export type for form values
export type LoginFormValues = z.infer<ReturnType<typeof useLoginFormSchema>> 