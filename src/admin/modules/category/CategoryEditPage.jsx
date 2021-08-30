import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MasterLayoutAdmin from '../../layout/Master.layout.admin'
import FormEditCate from './component/FormEditCate'

function CategoryEditPage() {
  return (
    <MasterLayoutAdmin>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Edit Category</h1>
              </div>
              <div className="col-sm-6 text-right">
                <Link to="/admin/category/list" className="btn btn-primary">
                  <span>Back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FormEditCate />
      </div>
    </MasterLayoutAdmin>
  )
}

export default CategoryEditPage
