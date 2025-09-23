import { type RouteConfig, index, route } from '@react-router/dev/routes'

export enum RoutesEnum {
  HOME = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  PRODUCTS = '/products',
}

export default [
  index('routes/home.tsx'),
  route('register', 'routes/register.tsx'),
  route('login', 'routes/login.tsx'),
  route('products', 'routes/products.tsx'),
] satisfies RouteConfig
