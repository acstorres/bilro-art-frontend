import { privateAPI } from '@shared/api/config'
import type { GetCustomerNS } from './get.types'
import { CUSTOMER } from '@shared/api/endpoints'

export async function getCustomer({
  customerId,
}: GetCustomerNS.Params): Promise<GetCustomerNS.Response> {
  const res = await privateAPI().get<GetCustomerNS.Response>(
    `${CUSTOMER}/${customerId}`,
  )

  return res.data
}
