import type { Route } from './+types/products'
import { Products } from '@features/products/products'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Todos os Produtos' }, { name: 'description', content: '' }]
}

export default function ProductsRoute() {
  return <Products />
}
