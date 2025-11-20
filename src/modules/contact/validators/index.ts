import z from 'zod'

export const contact_form_schema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.email().min(2).max(500),
  phone: z.string().min(7).max(12),
  message: z.string().min(6).max(600),
})

export type IContactFormValues = z.infer<typeof contact_form_schema>
