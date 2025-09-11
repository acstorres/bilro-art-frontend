import { z } from 'zod'

export const registerValidationFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Endereço de e-mail inválido' })
      .min(5, { message: 'O e-mail deve ter no mínimo 5 caracteres' })
      .max(100, { message: 'O e-mail deve ter no máximo 100 caracteres' }),

    password: z
      .string()
      .min(8, { message: 'A senha deve possuir no mínimo 8 caracteres' })
      .max(50, { message: 'A senha não deve exceder 50 caracteres' })
      .regex(/[A-Z]/, {
        message: 'A senha deve possuir pelo menos uma letra maiúscula',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve possuir pelo menos uma letra minúscula',
      })
      .regex(/[0-9]/, {
        message: 'A senha deve possuir pelo menos um número',
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: 'A senha deve possuir pelo menos um caractere especial',
      }),

    confirmPassword: z.string(),

    isTermsAccepted: z.boolean().refine((val) => val === true, {
      message: 'Você deve aceitar os termos',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas são diferentes',
  })
