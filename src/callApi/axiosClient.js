import axios from 'axios'
import { AUTH_TOKEN } from '../constants'

const authToken = localStorage.getItem(AUTH_TOKEN) || null

const getAuthToken = () => {
  if (authToken) {
    return { Authorization: `Bearer ${authToken}` }
  }
  return {}
}

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    'Content-Type': 'application/json',
    ...getAuthToken()
  }
})
