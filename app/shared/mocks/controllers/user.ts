import { http, delay, HttpResponse } from 'msw'
import { BFF_API_URL } from '@shared/api/config'
import { AUTH } from '@shared/api/endpoints'
import { user } from '@shared/mocks/data/user'

export const authenticateUser = http.post(`${BFF_API_URL + AUTH}`, async () => {
  await delay(1200)
  return HttpResponse.json(user)
})

export const userRequests = [authenticateUser]
