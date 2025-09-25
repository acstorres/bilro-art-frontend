import type { Route } from '.react-router/types/app/features/home/routes/+types/home'
import { Home } from '@features/home/pages/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'BilroArte Início' }, { name: 'description', content: '' }]
}

export default function HomeRoute() {
  return <Home />
}
