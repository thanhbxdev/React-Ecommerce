import React from 'react'
import ProductSingleComponent from './ProductSingle.component'

function ShopPageComponent(props) {
  return (
    <div className="shop-page-product-area tab-content">
      <div className="tab-pane fade in active show" id="grid">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-xl-3">
            <ProductSingleComponent {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPageComponent
