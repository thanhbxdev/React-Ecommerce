import React from 'react'
import MasterLayout from '../../../layout/Master.layout'
import { Link } from 'react-router-dom'
import EntryHeaderComponent from './component/EntryHeader.component'
import ContentRegisterComponent from './component/ContentRegister.component'

function RegisterPage() {
  return (
    <MasterLayout>
      <div>Ahihi</div>
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span> Register
              </nav>
            </div>
          </div>
        </div>
      </div>
      <EntryHeaderComponent />
      <ContentRegisterComponent />
    </MasterLayout>
  )
}
export default RegisterPage
