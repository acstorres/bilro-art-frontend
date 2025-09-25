import { userRequests } from '@features/register/services/user/user.mocks'
import { productRequests } from '@features/products/services/product/product.mocks'

export const handlers = [...userRequests, ...productRequests]
