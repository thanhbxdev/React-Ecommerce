import React from 'react'
import MasterLayout from '../../layout/Master.layout'
import { Link } from 'react-router-dom'
import EntryHeaderComponent from './component/EntryHeader.component'
import BlogAreaComponent from './component/BlogArea.component'

function BlogPage() {
  return (
    <MasterLayout>
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span> Blog
              </nav>
            </div>
          </div>
        </div>
      </div>
      <EntryHeaderComponent />
      <BlogAreaComponent />
    </MasterLayout>
  )
}
export default BlogPage
