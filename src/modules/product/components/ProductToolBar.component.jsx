import React from 'react'
import ProductSingleComponent from './ProductSingle.component'

function ProductToolBarComponent(props) {
  return (
    <div className="product-toolbar">
      <div className="topbar-title">
        <h3>SHOP</h3>
      </div>
      <div className="product-toolbar-inner">
        <div className="product-view-mode">
          <ul className="nav nav-tabs">
            <li className="active">
              <a data-toggle="tab" className="active show">
                <i className="ion-grid" />
              </a>
            </li>
            <li>
              <a data-toggle="tab" className>
                <i className="ion-navicon" />
              </a>
            </li>
          </ul>
        </div>
        <p className="woocommerce-result-count">Showing 1–12 of 42 results</p>
        <div className="woocommerce-ordering">
          <form method="get" className="woocommerce-ordering hidden-xs">
            <div className="orderby-wrapper">
              <label>Sort By :</label>
              <select className="nice-select-menu orderby nice-select">
                <option>Default sorting</option>
                <option value="popularity">Sort A-Z</option>
                <option value="rating">Sort Z-A</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="shop-page-product-area tab-content px-2">
        <div id="grid" className="tab-pane fade in show active">
          <div className="row">
            <ProductSingleComponent {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductToolBarComponent
