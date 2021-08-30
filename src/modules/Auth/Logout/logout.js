import { Auth } from '../../../auth'
function Logout() {
  Auth.logout()
  document.location.href = '/login'
}
export default Logout
