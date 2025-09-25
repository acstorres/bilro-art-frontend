import type { RequestError } from '@shared/api/types'

import type { ListProductParams, ListProductResponse } from './list.entity'

export namespace ListProductNS {
  export type Params = ListProductParams

  export type RequestBody = undefined

  export type Response = ListProductResponse

  export type Error = RequestError
}
