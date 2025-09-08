import type { DefaultError, RequestError } from '@api/types'

export namespace PostCustomerBackendNS {
  export type Params = Record<string, never>

  export type RequestBody = {}

  export type Response = {}

  export type Error = RequestError
}

export namespace PostCustomerFrontendNS {
  export interface FunctionArgs {
    data: {}
  }

  export type Response = {
    customerId: string
  }

  export type Error = DefaultError
}
