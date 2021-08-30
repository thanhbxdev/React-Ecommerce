import React from 'react'
import PropTypes from 'prop-types'
import HeaderLayout from './Header.layout'
import FooterLayout from './Footer.layout'
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/ionicons.min.css'
import '../assets/css/css-plugins-call.css'
import '../assets/css/bundle.css'
import '../assets/css/main.css'
import '../assets/css/responsive.css'
import '../assets/css/colors.css'
import '../assets/css/css-plugins/owl.carousel.min.css'
import '../assets/css/css-plugins/jquery-ui.css'

function MasterLayout({ children }) {
  return (
    <div className="wrapper home-one">
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  )
}

MasterLayout.propTypes = {
  children: PropTypes.element
}

export default MasterLayout
