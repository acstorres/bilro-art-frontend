import { Login } from '@features/login/login'
import type { Route } from './+types/login'
import { redirect } from 'react-router'
import { RoutesEnum } from '@routes'
import { authUser } from '@features/register/services/user/post/post.requests'
import { setToken } from '@shared/auth/auth'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: '' }]
}

export default function LoginRoute() {
  return <Login />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const data = await request.json()
  const { token } = await authUser({ data })

  if (!token) {
    return redirect(RoutesEnum.LOGIN)
  }

  setToken(token)
  return redirect(RoutesEnum.HOME)
}
