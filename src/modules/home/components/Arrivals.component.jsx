import React from 'react'
import ProductSingleComponent from '../../product/components/ProductSingle.component'

function ArrivalsComponent(props) {
  return (
    <div className="product-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              <h3>New Arrivals</h3>
            </div>
          </div>
        </div>
        <div className="product-area-inner">
          <div className="row">
            {/*Single Product*/}
            <ProductSingleComponent {...props} />
            {/*End Single Product*/}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArrivalsComponent
