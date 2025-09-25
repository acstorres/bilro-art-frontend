import { http, delay, HttpResponse } from 'msw'

import { BFF_API_URL } from '@shared/api/config'
import { PRODUCTS } from '@shared/api/endpoints'
import type { ListProductNS } from './list.types'
import {
  CategoryEnum,
  ColorEnum,
  SizeEnum,
  SubCategoryEnum,
} from '../product.entity'

export const listProductMock = http.get<
  ListProductNS.Params,
  any,
  ListProductNS.Response
>(`${BFF_API_URL + PRODUCTS}`, async () => {
  await delay(500)

  return HttpResponse.json<ListProductNS.Response>({
    products: [
      {
        id: 'prod-001',
        name: 'Capa de Almofada Decorativa Rendada',
        description:
          'Capa de almofada feita à mão com renda de bilro, ideal para decoração sofisticada.',
        material: 'Algodão e renda de bilro',
        category: CategoryEnum.CUSHION_COVERS,
        subCategory: SubCategoryEnum.DECORATIVE,
        price: 120.5,
        minimumOrderAmount: 1,
        weight: 0.25,
        amount: 10,
        images: [
          'app/shared/assets/images/art03.jpg',
          'app/shared/assets/images/art05.jpg',
        ],
        onlyByOrder: false,
        manufacturingTime: 7,
        sizes: [
          {
            id: 'size-001',
            sizeEnum: SizeEnum.M,
            height: 45,
            width: 45,
            length: 0,
            active: true,
          },
        ],
        colors: [
          { id: 'color-001', colorEnum: ColorEnum.WHITE, active: true },
          { id: 'color-002', colorEnum: ColorEnum.GRAY, active: true },
        ],
        sellerId: 'seller-001',
        active: true,
      },
      {
        id: 'prod-002',
        name: 'Vestido de Renda Tradicional',
        description:
          'Vestido artesanal em renda de bilro, perfeito para ocasiões especiais.',
        material: 'Linho e renda de bilro',
        category: CategoryEnum.CLOTHES,
        subCategory: SubCategoryEnum.DRESSES,
        price: 480,
        minimumOrderAmount: 1,
        weight: 0.8,
        amount: 5,
        images: [
          'app/shared/assets/images/art02.jpg',
          'app/shared/assets/images/art04.jpg',
        ],
        onlyByOrder: true,
        manufacturingTime: 20,
        sizes: [
          {
            id: 'size-002',
            sizeEnum: SizeEnum.P,
            height: 100,
            width: 50,
            length: 5,
            active: true,
          },
          {
            id: 'size-003',
            sizeEnum: SizeEnum.M,
            height: 105,
            width: 55,
            length: 5,
            active: true,
          },
        ],
        colors: [
          { id: 'color-003', colorEnum: ColorEnum.WHITE, active: true },
          { id: 'color-004', colorEnum: ColorEnum.RED, active: true },
          { id: 'color-005', colorEnum: ColorEnum.BLUE, active: true },
        ],
        sellerId: 'seller-002',
        active: true,
      },
      {
        id: 'prod-003',
        name: 'Toalha de Mesa Bordada',
        description:
          'Toalha de mesa em algodão com aplicação de renda de bilro bordada à mão.',
        material: 'Algodão e renda de bilro',
        category: CategoryEnum.TOWELS,
        subCategory: SubCategoryEnum.TABLE_TOWELS,
        price: 350,
        minimumOrderAmount: 1,
        weight: 1.2,
        amount: 3,
        images: [
          'app/shared/assets/images/art06.png',
          'app/shared/assets/images/art07.png',
        ],
        onlyByOrder: false,
        manufacturingTime: 15,
        sizes: [
          {
            id: 'size-004',
            sizeEnum: SizeEnum.G,
            height: 150,
            width: 220,
            length: 0,
            active: true,
          },
        ],
        colors: [
          { id: 'color-006', colorEnum: ColorEnum.WHITE, active: true },
          {
            id: 'color-007',
            colorEnum: ColorEnum.OTHER,
            active: true,
          },
        ],
        sellerId: 'seller-003',
        active: true,
      },
      {
        id: 'prod-004',
        name: 'Lenço de Pescoço em Renda Colorida',
        description:
          'Lenço de pescoço feito em renda de bilro com cores vibrantes.',
        material: 'Linho e fios coloridos',
        category: CategoryEnum.SCARVES,
        subCategory: SubCategoryEnum.NECK_SCARVES,
        price: 180,
        minimumOrderAmount: 1,
        weight: 0.15,
        amount: 8,
        images: [
          'app/shared/assets/images/art10.png',
          'app/shared/assets/images/art11.png',
        ],
        onlyByOrder: false,
        manufacturingTime: 10,
        sizes: [
          {
            id: 'size-005',
            sizeEnum: SizeEnum.U,
            height: 90,
            width: 90,
            length: 0,
            active: true,
          },
        ],
        colors: [
          { id: 'color-008', colorEnum: ColorEnum.PINK, active: true },
          { id: 'color-009', colorEnum: ColorEnum.ORANGE, active: true },
          { id: 'color-010', colorEnum: ColorEnum.GREEN, active: true },
        ],
        sellerId: 'seller-004',
        active: true,
      },
    ],
    pages: 1,
    total: 4,
  })
})
