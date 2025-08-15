'use client'

import { z } from 'zod'

export const loginValidationFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})
