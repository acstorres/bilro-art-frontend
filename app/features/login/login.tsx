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

import { loginValidationFormSchema } from './validations'
import { TypographyBase } from '@components/typography/typography-base'
import { RoutesEnum } from '@routes'
import { TypographyH1 } from '@components/typography/typography-h1'
import type { AuthUserEntity } from '@services/user/post/post.entity'
import { useTheme } from '@shared/hooks/use-theme'

export function Login() {
  const submit = useSubmit()
  const { isDark } = useTheme()

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
      <div className="w-full h-screen bg-primary dark:bg-secondary justify-center flex p-4">
        <Card className="w-full max-w-sm h-min self-center gap-0">
          <CardHeader className="justify-center text-center">
            <Link to={RoutesEnum.HOME}>
              {isDark() ? (
                <img
                  src="app/shared/assets/logo/logo-and-name-white.png"
                  alt="Ir para home"
                  width={200}
                />
              ) : (
                <img
                  src="app/shared/assets/logo/logo-and-name.png"
                  alt="Ir para home"
                  width={200}
                />
              )}
            </Link>
            <TypographyH1 className="font-bold text-lg">
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
                          className="text-base text-primary-light dark:text-primary-light underline-offset-4 hover:underline"
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
            <TypographyBase className="font-normal">
              Ainda não tem conta?
            </TypographyBase>
            <Link
              className="ml-2 text-base text-primary-light dark:text-primary-light underline-offset-4 hover:underline"
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
