import { TypographyBase } from '@components/typography/typography-base'
import { motion } from 'framer-motion'

interface ProdutCardProps {
  name: string
  price: string
  imageUrl: string[]
}

export function ProdutCard({ name, price, imageUrl }: ProdutCardProps) {
  return (
    <div className="pb-10 min-w-40 cursor-pointer">
      <div className="relative h-80 md:h-96 lg:h-110 xl:h-120 2xl:h-135 min-w-40 mb-4 overflow-hidden">
        <motion.div
          style={{ backgroundImage: `url(${imageUrl[0]})` }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />

        <motion.div
          style={{ backgroundImage: `url(${imageUrl[1]})` }}
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          initial={{ opacity: 0, scale: 1.05 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <div className="flex flex-col text-center p-t-4 ">
        <TypographyBase className="text-xs sm:text-sm font-medium">
          {name}
        </TypographyBase>
        <TypographyBase className="text-xs sm:text-sm font-medium">{`R$ ${price}`}</TypographyBase>
      </div>
    </div>
  )
}
