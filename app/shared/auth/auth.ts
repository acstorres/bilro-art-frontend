import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

interface JWTPayload {
  exp: number
  id: string
  [key: string]: any
}

const setToken = (token: string) => {
  Cookies.set('token', token, { expires: 7, secure: true })
}

const getToken = () => {
  const token = Cookies.get('token')
  return token
}

const removeToken = () => {
  Cookies.remove('token')
}

const getDecodedToken = () => jwtDecode<JWTPayload>(getToken() ?? '')

const isTokenExpired = () => {
  if (!getToken()) return true
  try {
    const decoded = getDecodedToken()

    const now = Math.floor(Date.now() / 1000)
    return decoded.exp < now
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (e) {
    return true
  }
}

const getUser = () => {
  if (!getToken()) return undefined

  const decoded = getDecodedToken()
  return decoded.id
}

const isAuthenticated = () => {
  return !!getToken() && !isTokenExpired()
}

export {
  getToken,
  setToken,
  getUser,
  isTokenExpired,
  isAuthenticated,
  removeToken,
}
