import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import userAPI from '../../../../callApi/userAPI'
import { useHistory } from 'react-router-dom'
import { ADMIN, AUTH, AUTH_TOKEN } from '../../../../constants'

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const history = useHistory()

  const onSubmit = (data, e) => {
    try {
      userAPI
        .login(data)
        .then((res) => {
          console.log(res)
          localStorage.setItem(AUTH_TOKEN, res.data.token)
          localStorage.setItem(AUTH, JSON.stringify(res.data.user))
          if (res.data.user.role === ADMIN) {
            history.push('/admin')
          } else {
            history.push('/')
          }
        })
        .catch((error) => {
          const response = error.request
            ? JSON.parse(error.request.response)
            : null
          Swal.fire({
            icon: 'warning',
            title: response ? response.error : 'Loi'
          })
        })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="col-md-6">
      <div className="well">
        <div className="return-customer">
          <h3 className="mb-10 custom-title">returnng customer</h3>
          <p className="mb-10">
            <strong>I am a returning customer</strong>
          </p>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address..."
                id="input-email"
                className="form-control"
                {...register('email')}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                id="input-password"
                className="form-control"
                {...register('password')}
              />
            </div>
            <p className="lost-password">
              <a href="forgot-password.html">Forgot password?</a>
            </p>
            <button className="return-customer-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginComponent
