import { type RouteConfig, index, route } from '@react-router/dev/routes'

export enum RoutesEnum {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  PRODUCTS = '/products',
}

export default [
  index('features/home/routes/home.tsx'),
  route('register', 'features/register/routes/register.tsx'),
  route('login', 'features/login/routes/login.tsx'),
  route('products', 'features/products/routes/products.tsx'),
] satisfies RouteConfig
