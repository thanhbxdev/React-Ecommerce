import React from 'react'
import { Link } from 'react-router-dom'
import MasterLayout from '../../../layout/Master.layout'
import EntryHeaderComponent from './component/EntryHeader.component'
import LoginComponent from './component/Login.component'
import RegisterComponent from './component/Register.component'

function LoginPage() {
  return (
    <MasterLayout>
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span> Login
              </nav>
            </div>
          </div>
        </div>
      </div>
      <EntryHeaderComponent />
      <div className="login-page-area">
        <div className="container">
          <div className="login-area">
            <div className="row">
              <RegisterComponent />
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  )
}
export default LoginPage
