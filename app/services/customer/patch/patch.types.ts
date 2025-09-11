import type { DefaultError, RequestError } from '@api/types'

export namespace PatchCustomerBackendNS {
  export type Params = Record<string, never>

  export type RequestBody = {}

  export type Response = {}

  export type Error = RequestError
}

export namespace PatchCustomerFrontendNS {
  export interface FunctionArgs {
    data: {}
  }

  export type Response = {
    customerId: string
  }

  export type Error = DefaultError
}
