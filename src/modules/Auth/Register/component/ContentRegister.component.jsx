import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import userAPI from '../../../../callApi/userAPI'

function ContentRegisterComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const history = useHistory()
  const onSubmit = (data, e) => {
    try {
      userAPI
        .addUser(data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Đã đăng ký tài khoản thành công'
            }).then(() => {
              history.push('/login')
            })
          }
        })
        .catch((error) => {
          const response = JSON.parse(error.request.response)
          Swal.fire({
            icon: 'warning',
            title: response.error
          })
        })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="register-page-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form
              className="form-register"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset>
                <legend>Your Personal Details</legend>
                <div className="form-group d-md-flex align-items-md-center">
                  <label className="control-label col-md-2" htmlFor="f-name">
                    <span className="require">*</span>Name
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="First Name"
                      {...register('name')}
                    />
                  </div>
                </div>
                <div className="form-group d-md-flex align-items-md-center">
                  <label className="control-label col-md-2" htmlFor="email">
                    <span className="require">*</span>Enter you email address
                    here...
                  </label>
                  <div className="col-md-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter you email address here..."
                      {...register('email')}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Your Password</legend>
                <div className="form-group d-md-flex align-items-md-center">
                  <label className="control-label col-md-2" htmlFor="pwd">
                    <span className="require">*</span>Password:
                  </label>
                  <div className="col-md-10">
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      placeholder="Password"
                      {...register('password')}
                    />
                  </div>
                </div>
              </fieldset>
              <div className="row py-5">
                <div className="col-sm-4"></div>
                <div className="text-center col-sm-4">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentRegisterComponent
