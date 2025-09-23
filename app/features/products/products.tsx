import Layout from '@shared/layout/layout'
import Section from '@shared/layout/components/section'
import { TypographyH1 } from '@components/typography/typography-h1'
import { ProdutCard } from './components/product-card'
import Breadcrumb from '@shared/layout/components/breadcrumb'

export function Products() {
  return (
    <Layout>
      <Section>
        <Breadcrumb />
        <div className="flex flex-col items-center text-center lg:text-start lg:block pt-16 pb-10">
          <TypographyH1 className="text-2lg lg:text-3xl">
            Todos os Produtos
          </TypographyH1>

          <TypographyH1 className="text-2lg lg:text-3xl">Filtros</TypographyH1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8">
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={[
              '/app/shared/assets/images/art05.jpg',
              '/app/shared/assets/images/art03.jpg',
            ]}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={[
              '/app/shared/assets/images/art05.jpg',
              '/app/shared/assets/images/art03.jpg',
            ]}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={[
              '/app/shared/assets/images/art05.jpg',
              '/app/shared/assets/images/art03.jpg',
            ]}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={[
              '/app/shared/assets/images/art05.jpg',
              '/app/shared/assets/images/art03.jpg',
            ]}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={['/app/shared/assets/images/art05.jpg']}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={['/app/shared/assets/images/art05.jpg']}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={['/app/shared/assets/images/art05.jpg']}
          />
          <ProdutCard
            name="Capa de Almofada Doce de Coco"
            price="58,99"
            imageUrl={['/app/shared/assets/images/art05.jpg']}
          />
        </div>
      </Section>
    </Layout>
  )
}
