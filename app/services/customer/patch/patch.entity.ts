import type { AddressEntity } from '@services/address/address.entity'

export type PatchCustomerEntity = {
  active: boolean
  userId: string
  name: string
  email: string
  phone: string
  profilePicture: string
  address: AddressEntity
  createdAt: string
  updatedAt: string
}
