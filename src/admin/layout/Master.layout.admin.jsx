import React from 'react'
import PropTypes from 'prop-types'
import HeaderLayoutAdmin from './Header.layout.admin'
import FooterLayoutAdmin from './Footer.layout.admin'
import '../assets/dist/css/adminlte.css'
import '../assets/plugins/fontawesome-free/css/all.min.css'
import '../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import NavLayoutAdmin from './Nav.layout.admin'

function MasterLayoutAdmin({ children }) {
  return (
    <div className="wrapper">
      <HeaderLayoutAdmin />
      <NavLayoutAdmin />
      {children}
      <FooterLayoutAdmin />
    </div>
  )
}

MasterLayoutAdmin.propTypes = {
  children: PropTypes.element
}
export default MasterLayoutAdmin
