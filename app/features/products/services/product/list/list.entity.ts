import type {
  CategoryEnum,
  ColorEnum,
  ProductEntity,
  SizeEnum,
  SubCategoryEnum,
} from '../product.entity'

export type ListProductEntity = ProductEntity[]

export type ListProductParams = {
  name?: string
  category?: CategoryEnum
  subCategory?: SubCategoryEnum
  size?: SizeEnum
  color?: ColorEnum
  sellerId?: string
  active: string
  offset: string
}

export type ListProductResponse = {
  products: ListProductEntity
  pages: number
  total: number
}
