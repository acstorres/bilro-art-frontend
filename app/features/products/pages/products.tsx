import { useSearchParams } from 'react-router'
import type { Route } from '../routes/+types/products'

import { RoutesEnum } from '@routes'
import Breadcrumb from '@shared/components/breadcrumb/breadcrumb'
import { Section } from '@shared/components/layout/components'
import { TypographyH1 } from '@shared/components/typography'
import Layout from '@shared/components/layout'

import { Filters, Pagination, ProductCard } from '../components'

export function Products({ loaderData }: Route.ComponentProps) {
  const { products, pages } = loaderData
  const [searchParams, setSearchParams] = useSearchParams()

  const onPageChange = (page: number) =>
    setSearchParams({ ...searchParams, offset: page.toString() })

  const currentPage = () => Number(searchParams.get('offset') ?? '1')

  return (
    <Layout>
      <Section>
        <Breadcrumb
          pages={[
            { route: RoutesEnum.HOME, name: 'Início' },
            { route: RoutesEnum.PRODUCTS, name: 'Produtos' },
          ]}
        />
        <div className="flex flex-col items-center text-center lg:text-start lg:block pt-10 pb-2">
          <TypographyH1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-8">
            Todos os Produtos
          </TypographyH1>
          <Filters />
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
          <Pagination
            pages={pages}
            currentPage={currentPage()}
            onPageChange={onPageChange}
          />
        </div>
      </Section>
    </Layout>
  )
}
