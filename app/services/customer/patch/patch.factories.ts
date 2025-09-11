import type { Factory } from '@api/types'
import type { CreateUserNS } from '../../user/post/post.types'

export const createUserFactories = {
  request(data) {
    return data
  },
  response(data) {
    return data
  },
} satisfies Factory<
  CreateUserNS.RequestBody,
  CreateUserNS.Response,
  CreateUserNS.FunctionArgs['data']
>
