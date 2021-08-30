import React from 'react'
import { Link } from 'react-router-dom'

function RegisterComponent() {
  return (
    <div className="col-md-6">
      <div className="well mb-sm-30">
        <div className="new-customer">
          <h3 className="custom-title">new customer</h3>
          <p className="mtb-10">
            <strong>Register</strong>
          </p>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made
          </p>
          <Link className="customer-btn" to="/register">
            continue
          </Link>
        </div>
      </div>
    </div>
  )
}
export default RegisterComponent
