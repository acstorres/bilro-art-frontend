import { type RouteConfig, index, route } from '@react-router/dev/routes'

export enum RoutesEnum {
  LOGIN = '/login',
  HOME = '/home',
  REGISTER = '/register',
}

export default [
  index('routes/login.tsx'),
  route('home', 'routes/home.tsx'),
] satisfies RouteConfig
