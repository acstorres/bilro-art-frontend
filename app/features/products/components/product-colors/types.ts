import type {
  Color,
  ColorEnum,
} from '@features/products/services/product/product.entity'

export type ColorValues = {
  [K in ColorEnum]: string
}

export interface ProductColorsProps {
  colors: Color[]
}
