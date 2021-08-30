import { AUTH, AUTH_TOKEN } from '../constants'

export const Auth = {
  profile() {
    const auth = localStorage.getItem(AUTH) || null
    return auth ? JSON.parse(auth) : null
  },
  getToken() {
    return localStorage.getItem(AUTH_TOKEN) || null
  },
  logout() {
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(AUTH)
  }
}
