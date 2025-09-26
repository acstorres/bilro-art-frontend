import { Badge } from '@shared/components/ui/badge'
import { ColorEnum } from '../../services/product/product.entity'
import type { ColorValues, ProductColorsProps } from './types'

const colorValues: ColorValues = {
  [ColorEnum.WHITE]: '#FFFFFF',
  [ColorEnum.BLACK]: '#000000',
  [ColorEnum.RED]: '#C21807',
  [ColorEnum.BLUE]: '#0080FE',
  [ColorEnum.YELLOW]: '#FFDA03',
  [ColorEnum.GREEN]: '#008000',
  [ColorEnum.ORANGE]: '#FFA500',
  [ColorEnum.PINK]: '#F64ABA',
  [ColorEnum.PURPLE]: '#6C3BAA',
  [ColorEnum.BROWN]: '#563D2D',
  [ColorEnum.GRAY]: '#808080',
  [ColorEnum.OTHER]: '#CCCCCC',
}

export function ProductColors({ colors }: ProductColorsProps) {
  return colors.map((color) => (
    <Badge
      key={color.id}
      variant="default"
      className="p-2 lg:p-3 xl:p-3 2xl:p-3 border border-secondary rounded-full"
      style={{ backgroundColor: colorValues[color.colorEnum] }}
    />
  ))
}
