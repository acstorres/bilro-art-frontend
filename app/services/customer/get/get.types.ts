import type { RequestError } from '@api/types'
import type { GetCustomerEntity } from './get.entity'

export namespace GetCustomerNS {
  export type Params = {
    customerId: string
  }

  export type RequestBody = undefined

  export type Response = GetCustomerEntity

  export type Error = RequestError
}
