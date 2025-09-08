import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from 'react-router'

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

export function Login() {
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
          <CardHeader className="justify-center">
            <LogoDark size="190" />
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
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu email"
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
            <Button variant="link" className="pl-2 text-sm">
              Criar conta
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
