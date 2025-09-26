import { TypographyBase } from '@shared/components/typography'
import { motion } from 'framer-motion'
import type {
  Color,
  Size,
} from '@features/products/services/product/product.entity'

import { ProductColors } from '@features/products/components'

interface ProductCardProps {
  productId: string
  name: string
  price: number
  colors: Color[]
  sizes: Size[]
  imageUrl: string[]
}

export function ProductCard({
  name,
  price,
  colors,
  sizes,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="pb-10 min-w-40 cursor-pointer">
      <div className="relative h-80 lg:h-95 xl:h-120 2xl:h-130 min-w-40 mb-4 overflow-hidden">
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
        <div className="absolute bottom-0 left-0 w-full bg-black/30 text-center py-2 flex gap-4 justify-center">
          {sizes.map((size) => (
            <TypographyBase key={size.id} className="text-white">
              {size.sizeEnum}
            </TypographyBase>
          ))}
        </div>
      </div>

      <div className="flex flex-col text-center">
        <div className="flex flex-row gap-2 justify-center mb-2">
          <ProductColors colors={colors} />
        </div>
        <TypographyBase className="text-xs sm:text-sm font-medium">
          {name}
        </TypographyBase>
        <TypographyBase className="text-xs sm:text-sm font-medium">{`R$ ${price}`}</TypographyBase>
      </div>
    </div>
  )
}
