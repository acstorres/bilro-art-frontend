import axios from 'axios'

export const BFF_API_URL = import.meta.env.VITE_BFF_API_URL

export const publicAPI = () => {
  return axios.create({
    baseURL: BFF_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export const privateAPI = (token: string) => {
  return axios.create({
    baseURL: BFF_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization-Type': 'client',
      Authorization: `Bearer ${token}`,
    },
  })
}
