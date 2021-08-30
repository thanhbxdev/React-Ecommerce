import React from 'react'
import banner from '../../../assets/images/banner/shop-category.jpg'
import ProductToolBarComponent from './ProductToolBar.component'
import PaginationComponent from './Pagination.component'

function ShopContentComponent(props) {
  return (
    <div className="col-xs-12 col-md-9 shop-content">
      <ProductToolBarComponent {...props} />
      <PaginationComponent />
    </div>
  )
}
export default ShopContentComponent
