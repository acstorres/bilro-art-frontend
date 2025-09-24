import { http, delay, HttpResponse } from 'msw'

import { BFF_API_URL } from '@api/config'
import type { GetCustomerNS } from './get.types'
import { CUSTOMER } from '@api/endpoints'

export const getCustomerMock = http.get<
  GetCustomerNS.Params,
  any,
  GetCustomerNS.Response
>(`${BFF_API_URL + CUSTOMER}/:customerId`, async () => {
  await delay(500)

  return HttpResponse.json<GetCustomerNS.Response>({
    id: '7d758081-8c13-4914-abd0-70b811c88915',
    active: true,
    userId: 'user_123',
    name: 'Alice Martins',
    email: 'alice.martins@example.com',
    phone: '+55 11 91234-5678',
    profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
    address: {
      id: 'd46456f1-7a80-4789-b198-e0f8c172a205',
      active: true,
      zipCode: '01234-567',
      address: 'Rua das Flores',
      number: '123',
      neighborhood: 'Jardins',
      complement: 'Apto 301',
      city: 'São Paulo',
      state: 'SP',
      createdAt: '2025-09-01T14:30:00.000Z',
      updatedAt: '2025-09-07T10:15:00.000Z',
    },
    createdAt: '2025-09-01T14:30:00.000Z',
    updatedAt: '2025-09-07T10:15:00.000Z',
  })
})
