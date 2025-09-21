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
    <div className="relative h-1/3 w-1/3 min-w-[350px] min-h-[200px] sm:min-w-[350px] sm:min-h-[200px] md:min-w-[350px] md:min-h-[200px]">
      <div
        title={`Foto do Artesão ${name}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-no-repeat bg-cover bg-center w-2/3 h-80 transform -scale-x-100"
      />
      <div className="absolute bottom-0 w-3/5 h-10/12 min-w-[250px] sm:min-w-[250px] md:min-w-[250px] right-0 bg-background text-secondary pt-6 pl-5 pr-5 flex flex-col gap-5">
        <TypographyBase className="text-md sm:text-lg">{name}</TypographyBase>
        <TypographyBase className="text-xs sm:text-sm">
          {content}
        </TypographyBase>
        <Link className="underline text-foreground" to={RoutesEnum.HOME}>
          Ler mais
        </Link>
      </div>
    </div>
  )
}
