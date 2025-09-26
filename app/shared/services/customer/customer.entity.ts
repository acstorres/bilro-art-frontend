import type { AddressEntity } from '../address/address.entity'

export interface CustomerEntity {
  id: string
  active: boolean
  userId: string
  name: string
  email: string
  phone: string
  profilePicture: string
  address?: AddressEntity
  createdAt: string
  updatedAt: string
}
