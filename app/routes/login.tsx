import { Login } from '@features/login/login'
import type { Route } from './+types/login'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: '' }]
}

export default function LoginRoute() {
  return <Login />
}
