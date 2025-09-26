import { publicAPI } from '@shared/api/config'
import { PRODUCTS } from '@shared/api/endpoints'
import type { ListProductNS } from './list.types'

export async function listProduct(
  params: ListProductNS.Params,
): Promise<ListProductNS.Response> {
  const res = await publicAPI().get<ListProductNS.Response>(PRODUCTS, {
    params,
  })

  return res.data
}
