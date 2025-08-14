import { Home } from '@features/home/home'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Birlo Art Vitrine' }, { name: 'description', content: '' }]
}

export default function HomeRoute() {
  return <Home />
}
