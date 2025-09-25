import { RoutesEnum } from '@routes'
import Breadcrumb from '@shared/components/breadcrumb/breadcrumb'
import { Section } from '@shared/components/layout/components'
import { TypographyH1 } from '@shared/components/typography'
import Layout from '@shared/components/layout'
import { ProductCard } from '@features/products/components'

export function Products() {
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
          <TypographyH1 className="text-2lg lg:text-3xl">
            Todos os Produtos
          </TypographyH1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8">
          <ProductCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={[
              '/app/shared/assets/images/art05.jpg',
              '/app/shared/assets/images/art03.jpg',
            ]}
          />
        </div>
      </Section>
    </Layout>
  )
}
