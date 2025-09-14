import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useSubmit } from 'react-router'

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
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'

import LogoDark from '@shared/assets/logo-dark'

import { loginValidationFormSchema } from './validations'
import { TypographyBase } from '@components/typography/typography-base'
import { RoutesEnum } from '@routes'
import { TypographyH1 } from '@components/typography/typography-h1'
import type { AuthUserEntity } from '@services/user/post/post.entity'

export function Login() {
  const submit = useSubmit()

  const form = useForm<z.infer<typeof loginValidationFormSchema>>({
    resolver: zodResolver(loginValidationFormSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  })

  const onSubmit = (data: z.infer<typeof loginValidationFormSchema>) => {
    const user: AuthUserEntity = {
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
          <CardHeader className="justify-center text-center">
            <LogoDark size="130" />
            <TypographyH1 className="font-bold text-2xl">
              Faça Login
            </TypographyH1>
          </CardHeader>
          <CardContent>
            <form
              id="login-form"
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
                          placeholder="Digite sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        <Link
                          className="text-sm text-primary underline-offset-4 hover:underline"
                          to={RoutesEnum.REGISTER}
                        >
                          Esqueceu a senha?
                        </Link>
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="default" size="default">
                  Entrar
                </Button>
              </FormProvider>
            </form>
          </CardContent>
          <CardFooter className="pt-4">
            <TypographyBase className="text-secondary font-normal">
              Ainda não tem conta?
            </TypographyBase>
            <Link
              className="ml-2 text-sm text-primary underline-offset-4 hover:underline"
              to={RoutesEnum.REGISTER}
            >
              Criar conta
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
