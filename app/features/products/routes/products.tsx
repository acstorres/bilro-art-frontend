import type { Route } from '.react-router/types/app/features/products/routes/+types/products'
import { Products } from '@features/products/pages/products'
import { listProduct } from '../services/product/list/list.requests'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Todos os Produtos' }, { name: 'description', content: '' }]
}

export default function ProductsRoute(props: Route.ComponentProps) {
  return <Products {...props} />
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url)
  const offset = url.searchParams.get('offset') ?? '1'

  const data = await listProduct({ active: 'true', offset })
  return data
}

export function HydrateFallback() {
  return <div>Loading...</div>
}
