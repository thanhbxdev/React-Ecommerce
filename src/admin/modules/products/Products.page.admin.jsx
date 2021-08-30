import React from 'react'
import MasterLayoutAdmin from '../../layout/Master.layout.admin'
import TableProductComponent from './component/TableProduct.component'
import { Link } from 'react-router-dom'

function ProductsPageAdmin() {
  return (
    <MasterLayoutAdmin>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Product</h1>
              </div>
              <div className="col-sm-6 text-right">
                <Link to="/admin/product/add" className="btn btn-primary">
                  <span>ADD PRODUCT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <TableProductComponent />
      </div>
    </MasterLayoutAdmin>
  )
}

export default ProductsPageAdmin
