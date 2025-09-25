import { createUser } from '@features/register/services/user/post/post.requests'
import type { Route } from '.react-router/types/app/features/register/routes/+types/register'

import { Register } from '@features/register/pages/register'
import { redirect } from 'react-router'
import { RoutesEnum } from '@routes'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Registro' }, { name: 'description', content: '' }]
}

export default function RegisterRoute() {
  return <Register />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const data = await request.json()
  const user = await createUser({ data })

  if (!user.id) {
    return redirect(RoutesEnum.REGISTER)
  }
  return redirect(RoutesEnum.LOGIN)
}
