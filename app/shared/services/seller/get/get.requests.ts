import { privateAPI } from '@api/config'
import type { GetCustomerNS } from './get.types'
import { CUSTOMER } from '@api/endpoints'

export async function getCustomer({
  customerId,
}: GetCustomerNS.Params): Promise<GetCustomerNS.Response> {
  //TODO
  const res = await privateAPI('fgdgdf').get<GetCustomerNS.Response>(
    `${CUSTOMER}/${customerId}`,
  )

  return res.data
}
