import { redirect } from 'react-router'
import type { Route } from './+types/register'

import { RoutesEnum } from '@routes'
import { Register } from '@features/register/register'
import { createUser } from '@services/user/post/post.requests'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Register' }, { name: 'description', content: '' }]
}

export default function RegisterRoute() {
  return <Register />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData()
  let login = formData.get('email') as string
  let password = formData.get('password') as string
  let user = await createUser({ data: { login, password } })

  if (!user) {
    return redirect(RoutesEnum.REGISTER)
  }
  return redirect(RoutesEnum.LOGIN)
}
