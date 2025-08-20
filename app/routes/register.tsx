import { redirect } from 'react-router'
import type { Route } from './+types/register'

import { publicAPI } from '@api/config'
import { AUTH } from '@api/endpoints'

import { RoutesEnum } from '~/routes'
import { Register } from '@features/register/register'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Register' }, { name: 'description', content: '' }]
}

export default function RegisterRoute() {
  return <Register />
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData()
  let email = formData.get('email')
  let password = formData.get('password')
  let user = await publicAPI().post(AUTH, { email, password })

  if (!user) {
    return redirect(RoutesEnum.REGISTER)
  }
  return redirect(RoutesEnum.HOME)
}
