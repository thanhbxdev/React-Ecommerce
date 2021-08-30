import React from 'react'
import banner from '../../../assets/images/banner/shop-sidebar.jpg'
import WidgetContentComponent from './WidgetContent.component'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SidebarShopComponent(props) {
  return (
    <div className="col-xs-12 col-md-3 sidebar-shop">
      <div className="sidebar-product-categori">
        <div className="widget-title">
          <h3>PRODUCT CATEGORIES</h3>
        </div>
        <WidgetContentComponent {...props} />
        <div className="sidebar-single-banner">
          <Link to="/">
            <img src={banner} alt="Banner" />
          </Link>
        </div>
      </div>
    </div>
  )
}
SidebarShopComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SidebarShopComponent
