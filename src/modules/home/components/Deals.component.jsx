import React from 'react'
import DealsBoxComponent from './DealsBox.component'

function DealsComponent(props) {
  return (
    <div className="deals-of-the-day-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              <h3>Deals Of The Day</h3>
            </div>
          </div>
        </div>
        <div className="big-product-area">
          <div className="product-carousel-active ">
            {/* single product */}
            <DealsBoxComponent {...props} />
            {/* single product end */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealsComponent
