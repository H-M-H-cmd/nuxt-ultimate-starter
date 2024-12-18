import * as z from 'zod'
import { useI18n } from 'vue-i18n'

// Common validation rules
export const useValidationRules = () => {
  const { t } = useI18n()

  return {
    required: z.string().min(1, t('validation.required')),
    
    email: z.string().email(t('validation.email')),
    
    password: z.string()
      .min(8, t('validation.minLength', { min: 8 }))
      .max(50, t('validation.maxLength', { max: 50 })),
      
    name: z.string()
      .min(2, t('validation.minLength', { min: 2 }))
      .max(50, t('validation.maxLength', { max: 50 }))
      .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, t('validation.name')),
      
    phone: z.string()
      .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, t('validation.phone')),
      
    url: z.string().url(t('validation.url')),

    deed: z.string()
      .regex(/^[0-9]{12}$/i, t('validation.deedNumber'))
      .refine((data) => !/(.)\1{4}/.test(data), t('validation.deedNumberRepeat')),
  }
}

// Password validation schema builder
export const usePasswordValidation = (passwordField: string = 'password') => {
  const { t } = useI18n()
  
  return z.object({
    [passwordField]: useValidationRules().password,
    [`confirm${passwordField.charAt(0).toUpperCase() + passwordField.slice(1)}`]: z.string()
  }).superRefine((data, ctx) => {
    const password = data[passwordField]
    const confirmPassword = data[`confirm${passwordField.charAt(0).toUpperCase() + passwordField.slice(1)}`]
    
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('validation.passwordMatch'),
        path: [`confirm${passwordField.charAt(0).toUpperCase() + passwordField.slice(1)}`]
      })
    }
  })
}