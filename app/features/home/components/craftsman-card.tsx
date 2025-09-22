import { TypographyBase } from '@components/typography/typography-base'
import { RoutesEnum } from '@routes'
import { Link } from 'react-router'

interface CraftsmanCardProps {
  name: string
  content: string
  imageUrl: string
}

export function CraftsmanCard({ name, content, imageUrl }: CraftsmanCardProps) {
  return (
    <div className="relative lg:h-1/3 w-1/3 min-w-[350px] min-h-[450px] lg:min-h-[200px]">
      <div
        title={`Foto do Artesão ${name}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-no-repeat bg-cover bg-center w-full lg:w-2/3 h-80 transform -scale-x-100"
      />
      <div className="absolute top-60 lg:top-8 w-11/12 lg:w-3/5 h-fit lg:h-72 lg:bottom-0 right-3.5 lg:right-0 bg-background text-secondary pt-6 pl-5 pr-5 pb-4 flex flex-col gap-5">
        <TypographyBase className="text-md sm:text-lg">{name}</TypographyBase>
        <TypographyBase className="text-xs sm:text-sm">
          {content}
        </TypographyBase>
        <Link
          className="underline decoration-2 underline-offset-4 text-foreground"
          to={RoutesEnum.HOME}
        >
          Ler mais
        </Link>
      </div>
    </div>
  )
}
