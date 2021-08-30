import React from 'react'
import MasterLayoutAdmin from '../../layout/Master.layout.admin'
import { Link } from 'react-router-dom'
import FormAddComponent from './component/FormAdd.component'

function ProductAddPageAdmin(props) {
  return (
    <MasterLayoutAdmin>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Add Product</h1>
              </div>
              <div className="col-sm-6 text-right">
                <Link to="/admin/product/list" className="btn btn-primary">
                  <span>Back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FormAddComponent {...props} />
      </div>
    </MasterLayoutAdmin>
  )
}
export default ProductAddPageAdmin
