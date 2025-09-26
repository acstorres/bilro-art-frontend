export enum ColorEnum {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  RED = 'RED',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  PINK = 'PINK',
  PURPLE = 'PURPLE',
  BROWN = 'BROWN',
  GRAY = 'GRAY',
  OTHER = 'OTHER',
}

export enum SizeEnum {
  PP = 'PP',
  P = 'P',
  M = 'M',
  G = 'G',
  GG = 'GG',
  U = 'U',
}

export enum CategoryEnum {
  CUSHION_COVERS = 'CUSHION_COVERS',
  CLOTHES = 'CLOTHES',
  TOWELS = 'TOWELS',
  SCARVES = 'SCARVES',
}

export enum SubCategoryEnum {
  // Cushion Covers
  DECORATIVE = 'DECORATIVE', // almofadas decorativas
  EMBROIDERED = 'EMBROIDERED', // bordadas
  PLAIN = 'PLAIN', // lisas/simples
  CUSTOM = 'CUSTOM', // personalizadas

  // Clothes
  DRESSES = 'DRESSES',
  BLOUSES = 'BLOUSES',
  SKIRTS = 'SKIRTS',
  TOPS = 'TOPS',
  SHAWLS = 'SHAWLS', // capas/estolas de renda
  CHILDREN = 'CHILDREN', // roupas infantis

  // Towels
  TABLE_TOWELS = 'TABLE_TOWELS', // toalhas de mesa
  HAND_TOWELS = 'HAND_TOWELS', // toalhas de mão/lavabo
  RUNNERS = 'RUNNERS', // trilhos de mesa

  // Scarves
  NECK_SCARVES = 'NECK_SCARVES',
  HEAD_SCARVES = 'HEAD_SCARVES',
  SHAWLS_SCARVES = 'SHAWLS_SCARVES',
  HANDKERCHIEFS = 'HANDKERCHIEFS',
}

export interface Color {
  id: string
  colorEnum: ColorEnum
  active: boolean
}

export interface Size {
  id: string
  sizeEnum: SizeEnum
  height: number
  width: number
  length: number
  active: boolean
}

export interface ProductEntity {
  id: string
  name: string
  description: string
  material: string
  category: CategoryEnum
  subCategory: SubCategoryEnum
  price: number
  images: string[]
  minimumOrderAmount: number
  weight: number
  amount: number
  onlyByOrder: boolean
  manufacturingTime: number
  sizes: Size[]
  colors: Color[]
  sellerId: string
  active: boolean
}
