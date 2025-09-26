import type { RequestError } from '@shared/api/types'
import type {
  AuthUserEntity,
  AuthUserResponseEntity,
  CreateUserEntity,
  CreateUserResponseEntity,
} from './post.entity'

export namespace CreateUserNS {
  export type Params = undefined

  export interface FunctionArgs {
    data: CreateUserEntity
  }

  export type RequestBody = CreateUserEntity

  export type Response = CreateUserResponseEntity

  export type Error = RequestError
}

export namespace AuthUserNS {
  export type Params = undefined

  export interface FunctionArgs {
    data: AuthUserEntity
  }

  export type RequestBody = AuthUserEntity

  export type Response = AuthUserResponseEntity

  export type Error = RequestError
}
