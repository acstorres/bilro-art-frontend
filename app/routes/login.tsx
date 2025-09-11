import { Login } from '@features/login/login'
import type { Route } from './+types/login'
import { redirect } from 'react-router'
import { RoutesEnum } from '@routes'
import { authUser } from '@services/user/post/post.requests'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: '' }]
}

export default function LoginRoute() {
  return <Login />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let data = await request.json()
  let token = await authUser({ data })

  if (!token) {
    return redirect(RoutesEnum.LOGIN)
  }
  //TODO gerenciar cookie
  return redirect(RoutesEnum.HOME)
}
