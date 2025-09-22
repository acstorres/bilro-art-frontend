import { RoutesEnum } from '@routes'
import Layout from '@shared/layout/layout'
import { Link } from 'react-router'
import { CraftsmanCard } from './components/craftsman-card'
import Section from '@shared/layout/components/section'
import { TypographyH2 } from '@components/typography/typography-h2'
import { TypographyBase } from '@components/typography/typography-base'
import { VideoPlayer } from '@components/video-player/video-player'

export function Home() {
  return (
    <Layout>
      <div className="relative w-full h-130 flex">
        <div className="bg-[url(/app/shared/assets/images/art06.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-75" />
        <div className="bg-[url(/app/shared/assets/images/art07.png)] bg-no-repeat bg-cover bg-center w-1/2 brightness-75" />

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white gap-4 font-medium">
          <div className="text-4xl">Conheça o artesanato</div>
          <Link className="underline" to={RoutesEnum.REGISTER}>
            Ver produtos
          </Link>
        </div>
      </div>
      <Section>
        <TypographyH2 className="text-2xl">Mais vendidos</TypographyH2>
      </Section>

      <VideoPlayer />

      <Section>
        <div className="flex flex-col items-center text-center lg:text-start lg:block">
          <TypographyH2 className="text-2xl">Artesãos</TypographyH2>
          <TypographyBase className="text-sm">
            Conheça cada história que nossos artesãos tem a compartilhar.
          </TypographyBase>
          <div className="mt-5 flex flex-col lg:flex-row justify-around lg:justify-between gap-8">
            <CraftsmanCard
              name="Maria do Amparo"
              imageUrl="/app/shared/assets/images/art01.jpg"
              content="Mais do que um ofício, a renda de bilros é um patrimônio imaterial que
          preserva identidades e histórias. No Brasil, ela representa
          resistência cultural para comunidades tradicionais..."
            />

            <CraftsmanCard
              name="Francisca Pereira"
              imageUrl="/app/shared/assets/images/art08.png"
              content="Em nosso site, celebramos essa herança oferecendo rendas de bilros autênticas, criadas por artesãs talentosas. Cada compra não só embeleza sua vida, mas apoia a preservação dessa arte milenar..."
            />
          </div>
        </div>
      </Section>

      <div className="justify-center flex text-2xl">
        #BilroArte | @bilroarte
      </div>
    </Layout>
  )
}
