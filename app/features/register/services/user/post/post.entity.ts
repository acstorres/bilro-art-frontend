import type { UserEntity } from '../user.entity'

export type CreateUserEntity = Pick<UserEntity, 'login' | 'password'>

export type CreateUserResponseEntity = {
  id: string
}

export type AuthUserEntity = Pick<UserEntity, 'login' | 'password'>

export type AuthUserResponseEntity = {
  token: string
}
