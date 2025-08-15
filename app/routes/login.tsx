import { Login } from '@features/login/login'
import type { Route } from './+types/login'
import { publicAPI } from '@shared/api/config'
import { AUTH } from '@shared/api/endpoints'
import { redirect } from 'react-router'
import { RoutesEnum } from '~/routes'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: '' }]
}

export default function LoginRoute() {
  return <Login />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData()
  let email = formData.get('email')
  let password = formData.get('password')
  let user = await publicAPI().post(AUTH, { email, password })

  if (!user) {
    return redirect(RoutesEnum.LOGIN)
  }
  return redirect(RoutesEnum.HOME)
}
