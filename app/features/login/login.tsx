import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, useNavigate } from 'react-router'

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

export function Login() {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginValidationFormSchema>>({
    resolver: zodResolver(loginValidationFormSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  })

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
            <Form method="post" className="grid gap-4">
              <FormProvider {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-normal">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu e-mail"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-normal">
                        Senha
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Digite sua senha"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage>
                        <Button variant="link" className="pl-0 pt-0 text-sm">
                          Esqueceu a senha?
                        </Button>
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="default" size="default">
                  Entrar
                </Button>
              </FormProvider>
            </Form>
          </CardContent>
          <CardFooter className="pt-4">
            <TypographyBase className="text-secondary font-normal">
              Ainda não tem conta?
            </TypographyBase>
            <Button
              variant="link"
              className="pl-2 text-sm"
              onClick={() => navigate(RoutesEnum.REGISTER)}
            >
              Criar conta
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
