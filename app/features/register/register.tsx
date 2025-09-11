import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as FormProvider,
} from '@components/ui/form'
import { Card, CardContent, CardHeader } from '@components/ui/card'

import { registerValidationFormSchema } from './validations'
import { Checkbox } from '@components/ui/checkbox'
import { TypographySmall } from '@components/typography/typography-small'
import { TypographyH1 } from '@components/typography/typography-h1'
import LogoDark from '@shared/assets/logo-dark'
import { useSubmit } from 'react-router'
import type { CreateUserEntity } from '@services/user/post/post.entity'

export function Register() {
  const submit = useSubmit()

  const form = useForm<z.infer<typeof registerValidationFormSchema>>({
    resolver: zodResolver(registerValidationFormSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      isTermsAccepted: false,
    },
  })

  const onSubmit = (data: z.infer<typeof registerValidationFormSchema>) => {
    const user: CreateUserEntity = {
      login: data.email,
      password: data.password,
    }

    submit(user, {
      method: 'post',
      encType: 'application/json',
    })
  }

  return (
    <main>
      <div className="w-full h-screen bg-primary justify-center flex p-4">
        <Card className="w-full max-w-sm h-min self-center gap-0">
          <CardContent>
            <CardHeader className="justify-center text-center">
              <LogoDark size="130" />
              <TypographyH1 className="font-bold text-2xl">
                Crie sua conta
              </TypographyH1>
            </CardHeader>
            <form
              id="register-form"
              onSubmit={form.handleSubmit(onSubmit)}
              method="post"
              className="grid gap-4"
            >
              <FormProvider {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-normal">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-normal">
                        Senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Crie sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-normal">
                        Confirmar senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirme sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isTermsAccepted"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-2">
                        <FormControl>
                          <Checkbox
                            className="self-center"
                            checked={field.value}
                            onCheckedChange={() => field.onChange(!field.value)}
                          />
                        </FormControl>
                        <FormLabel>
                          <TypographySmall className="font-bold">
                            Li e aceito os{' '}
                            <Button
                              variant="link"
                              className="text-sm font-bold inline p-0 h-6"
                            >
                              Termos de Uso
                            </Button>{' '}
                            e as{' '}
                            <Button
                              variant="link"
                              className="text-sm font-bold inline p-0 h-6"
                            >
                              Políticas de Privacidade
                            </Button>
                          </TypographySmall>
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="default" size="default">
                  Criar conta
                </Button>
              </FormProvider>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
