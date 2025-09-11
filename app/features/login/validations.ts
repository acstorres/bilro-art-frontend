import { z } from 'zod'

export const loginValidationFormSchema = z.object({
  email: z.string({
    message: 'Campo obrigatório',
  }),
  password: z.string({
    message: 'Campo obrigatório',
  }),
})
