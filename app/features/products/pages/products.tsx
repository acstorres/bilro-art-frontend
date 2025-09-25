import { useSearchParams } from 'react-router'
import type { Route } from '../routes/+types/products'

import { RoutesEnum } from '@routes'
import Breadcrumb from '@shared/components/breadcrumb/breadcrumb'
import { Section } from '@shared/components/layout/components'
import { TypographyH1 } from '@shared/components/typography'
import Layout from '@shared/components/layout'
import { ProductCard } from '@features/products/components'
import { Button } from '@shared/components/ui/button'

export function Products({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData
  const [searchParams, setSearchParams] = useSearchParams()

  const loadMore = () => {
    const nextOffset = Number(searchParams.get('offset') ?? '1') + 1
    setSearchParams({ ...searchParams, offset: nextOffset.toString() })
  }

  setSearchParams({ offset: '1' })
  return (
    <Layout>
      <Section>
        <Breadcrumb
          pages={[
            { route: RoutesEnum.HOME, name: 'Início' },
            { route: RoutesEnum.PRODUCTS, name: 'Produtos' },
          ]}
        />
        <div className="flex flex-col items-center text-center lg:text-start lg:block pt-16 pb-10">
          <TypographyH1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl">
            Todos os Produtos
          </TypographyH1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              name={product.name}
              price={product.price}
              colors={product.colors}
              sizes={product.sizes}
              imageUrl={product.images}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant={'ghost'} onClick={() => loadMore()}>
            Carregar mais
          </Button>
        </div>
      </Section>
    </Layout>
  )
}
