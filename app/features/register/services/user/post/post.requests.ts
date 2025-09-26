import { AUTH, REGISTER } from '@shared/api/endpoints'
import type { AuthUserNS, CreateUserNS } from './post.types'
import { publicAPI } from '@shared/api/config'

export async function createUser({
  data,
}: CreateUserNS.FunctionArgs): Promise<CreateUserNS.Response> {
  const res = await publicAPI().post<CreateUserNS.Response>(REGISTER, {
    ...data,
  })

  return res.data
}

export async function authUser({
  data,
}: AuthUserNS.FunctionArgs): Promise<AuthUserNS.Response> {
  const res = await publicAPI().post<AuthUserNS.Response>(AUTH, { ...data })

  return res.data
}
