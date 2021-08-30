import React from 'react'
import { Link } from 'react-router-dom'
import TableProductComponent from '../products/component/TableProduct.component'
import MasterLayoutAdmin from '../../layout/Master.layout.admin'
import TableCategoryComponent from './component/TableCategory.component'

// eslint-disable-next-line react/prop-types
function CategoryPageAdmin(props) {
  return (
    <MasterLayoutAdmin>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Category</h1>
              </div>
              <div className="col-sm-6 text-right">
                <Link to="/admin/category/add" className="btn btn-primary">
                  <span>ADD CATEGORY</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <TableCategoryComponent {...props} />
      </div>
    </MasterLayoutAdmin>
  )
}
export default CategoryPageAdmin
