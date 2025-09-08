import type { Factory } from '@api/types'
import type { PostUserNS } from '../../user/post/post.types'

export const createUserFactories = {
  request(data) {
    return data
  },
  response(data) {
    return data
  },
} satisfies Factory<
  PostUserNS.RequestBody,
  PostUserNS.Response,
  PostUserNS.FunctionArgs['data']
>
