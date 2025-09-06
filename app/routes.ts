import { type RouteConfig, index, route } from '@react-router/dev/routes'

export enum RoutesEnum {
  LOGIN = '/login',
  HOME = '/',
  REGISTER = '/register',
}

export default [
  index('routes/home.tsx'),
  route('register', 'routes/register.tsx'),
  route('login', 'routes/login.tsx'),
] satisfies RouteConfig
