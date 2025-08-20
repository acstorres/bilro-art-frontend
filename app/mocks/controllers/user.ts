import { http, delay, HttpResponse } from 'msw'
import { BFF_API_URL } from '@api/config'
import { AUTH } from '@api/endpoints'
import { user } from '@mocks/data/user'

export const authenticateUser = http.post(`${BFF_API_URL + AUTH}`, async () => {
  await delay(1200)
  return HttpResponse.json(user)
})

export const userRequests = [authenticateUser]
