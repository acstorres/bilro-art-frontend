import { RoutesEnum } from '@routes'
import Layout from '@shared/components/layout/layout'
import { Link } from 'react-router'
import { SellerCard } from './components/seller-card'
import Section from '@shared/components/layout/components/section'
import { TypographyBase } from '@shared/components/typography/typography-base'
import { BackgroundVideo } from './components/background-video'
import { TypographyH1 } from '@shared/components/typography/typography-h1'

export function Home() {
  return (
    <Layout>
      <div className="relative w-full h-90 md:h-120 lg:h-170 flex">
        <div className="bg-[url(/app/shared/assets/images/art06.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-70" />
        <div className="bg-[url(/app/shared/assets/images/art07.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white gap-4 font-medium">
          <div className="text-3xl md:text-4xl lg:text-5xl">
            Conheça o artesanato
          </div>
          <Link
            className="underline text-xl lg:text-2xl"
            to={RoutesEnum.PRODUCTS}
          >
            Ver produtos
          </Link>
        </div>
      </div>

      <Section>
        <div className="flex flex-col items-center text-center lg:text-start lg:block pt-10">
          <TypographyH1 className="text-2xl lg:text-3xl">
            Mais vendidos
          </TypographyH1>
          <TypographyBase className="text-md">
            Explore nossa coleção e leve um pedaço da história para casa!
          </TypographyBase>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center text-center lg:text-start lg:block">
          <TypographyH1 className="text-2xl lg:text-3xl">Artesãos</TypographyH1>
          <TypographyBase className="text-md">
            Conheça cada história que nossos artesãos tem a compartilhar.
          </TypographyBase>
          <div className="mt-8 flex flex-col lg:flex-row justify-around lg:justify-between gap-8">
            <SellerCard
              name="Maria do Amparo"
              imageUrl="/app/shared/assets/images/art01.jpg"
              content="Mais do que um ofício, a renda de bilros é um patrimônio imaterial que
          preserva identidades e histórias. No Brasil, ela representa
          resistência cultural para comunidades tradicionais..."
            />

            <SellerCard
              name="Francisca Pereira"
              imageUrl="/app/shared/assets/images/art08.png"
              content="Em nosso site, celebramos essa herança oferecendo rendas de bilros autênticas, criadas por artesãs talentosas. Cada compra não só embeleza sua vida, mas apoia a preservação dessa arte milenar..."
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex justify-center text-center pt-10 pb-10">
          <TypographyBase className="text:xl md:text-2xl lg:text-3xl">
            "BilroArte é joia em renda! Com exclusividade e autenticidade
            brasileira."
          </TypographyBase>
        </div>
      </Section>

      <div className="relative overflow-hidden w-full h-70 lg:h-140">
        <BackgroundVideo
          src="app/shared/assets/videos/lace-making.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </Layout>
  )
}
