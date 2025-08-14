import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { CardHeader, CardTitle } from '@components/ui/card'
import LogoDark from '@shared/assets/logo-dark'

export function Login() {
  return (
    <div className="w-full h-screen bg-primary content-center justify-center flex p-4">
      <div className="grid w-full max-w-sm h-min items-center gap-4 bg-accent p-6 rounded-md self-center">
        <CardHeader>
          <CardTitle>Faça Login</CardTitle>
          <LogoDark size="190" />
        </CardHeader>
        <form>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            required
          />
          <Label htmlFor="password">Senha</Label>

          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </form>
        <a
          href="#"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
        >
          Esqueceu a senha?
        </a>

        <Button
          type="submit"
          variant={'default'}
          size={'default'}
          className="w-full"
        >
          Entrar
        </Button>

        <Button variant="link">Criar conta</Button>
      </div>
    </div>
  )
}
