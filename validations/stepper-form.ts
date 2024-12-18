import * as z from 'zod'
import { useValidationRules, usePasswordValidation } from './rules'

// Define the schema types
export type FormSchemas = ReturnType<typeof useFormSchemas>

// Create a composable for all form schemas
export const useFormSchemas = () => {
  const rules = useValidationRules()

  // Personal Details Schema
  const personalDetailsSchema = z.object({
    fullName: rules.name,
    email: rules.email,
  })

  // Password Schema using the new validation
  const passwordSchema = usePasswordValidation()

  // Drink Selection Schema
  const drinkSelectionSchema = z.object({
    favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
  })

  // Combined Schema for the entire form
  const stepperFormSchema = z.object({
    applicantType: rules.required,
    applicantPhone: rules.phone,
    contractUsage: rules.required,
    contractType: rules.required,
    deedNumber: rules.deed,
    partyType: rules.required,
    partyPhone: rules.phone,
    partyName: rules.name,
  })

  const applicantDetailsSchema = z.object({
    applicantType: rules.required,
    applicantPhone: rules.phone,
    contractUsage: rules.required,
    contractType: rules.required,
  })

  const deedDetailsSchema = z.object({
    deedNumber: rules.deed,
    // ownerId: rules.required,
    // deedDate: rules.required,
  })

  const partyDetailsSchema = z.object({
    partyType: rules.required,
    partyPhone: rules.phone,
    partyName: rules.name,
  })

  return {
    personalDetailsSchema,
    passwordSchema,
    drinkSelectionSchema,
    stepperFormSchema,
    applicantDetailsSchema,
    deedDetailsSchema,
    partyDetailsSchema
  }
}

// Type for the form values
export type StepperFormValues = z.infer<ReturnType<typeof useFormSchemas>['stepperFormSchema']>

// Export schema types for type checking
export type ApplicantDetailsSchema = z.infer<ReturnType<typeof useFormSchemas>['applicantDetailsSchema']>
export type DeedDetailsSchema = z.infer<ReturnType<typeof useFormSchemas>['deedDetailsSchema']>
export type PartyDetailsSchema = z.infer<ReturnType<typeof useFormSchemas>['partyDetailsSchema']> 