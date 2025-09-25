import { http, delay, HttpResponse } from 'msw'
import type { AuthUserNS, CreateUserNS } from './post.types'
import { BFF_API_URL } from '@shared/api/config'
import { AUTH, REGISTER } from '@shared/api/endpoints'

export const createUsertMock = http.post<
  any,
  CreateUserNS.RequestBody,
  CreateUserNS.Response
>(`${BFF_API_URL + REGISTER}`, async () => {
  await delay(500)
  return HttpResponse.json<CreateUserNS.Response>({
    id: '44c24631-18e8-4286-afaa-6dd6fbdb2925',
  })
})

export const authUsertMock = http.post<
  any,
  AuthUserNS.RequestBody,
  AuthUserNS.Response
>(`${BFF_API_URL + AUTH}`, async () => {
  await delay(500)
  return HttpResponse.json<AuthUserNS.Response>({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJlbWFpbCI6ImpvZWRAZXhhbXBsZS5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDE3ODg4MDAsImV4cCI6MjAwNzM2NDgwMH0._mKF0fUvMfOq2BfXgzN49SRIh0o7o_Hn1I7d9_G2XeY',
  })
})
