import type { Route } from '.react-router/types/app/features/products/routes/+types/products'
import { Products } from '@features/products/pages/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Todos os Produtos' }, { name: 'description', content: '' }]
}

export default function ProductsRoute() {
  return <Products />
}
