import React from 'react'
import { Link } from 'react-router-dom'

function NavLayoutAdmin() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src=""
          alt=""
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">Husky Luxury</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="" className="img-circle elevation-2" alt="" />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Bùi Xuân Thành
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview">
              <Link to="/admin/product/list" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p className="text-white">Product</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/admin/category/list" className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p className="text-white">Category</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/admin/blog/list" className="nav-link">
                <i className="nav-icon fas fa-tree" />
                <p className="text-white">Post</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/admin/user/list" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p className="text-white">User</p>
              </Link>
            </li>
            <li className="nav-header">STATISTIC</li>
            <li className="nav-item">
              <Link to="/admin/oder/list" className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                <p className="text-white">Bill</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}

export default NavLayoutAdmin
