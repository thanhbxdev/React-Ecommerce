import React from 'react'
import image from '../../../assets/images/product/2.jpg'
function ProductTopComponent() {
  return (
    <div className="product-filter mb-30">
      <div className="widget-title">
        <h3>TOP RATED PRODUCTS</h3>
      </div>
      <div className="widget-content">
        <ul className="product_list_widget">
          <li className="widget-mini-product">
            <div className="product-image">
              <a title="Phasellus vel hendrerit" href="#">
                <img alt="" src={image} />
              </a>
            </div>
            <div className="product-info">
              <a title="Phasellus vel hendrerit" href="#">
                <span className="product-title">Consequuntur magni</span>
              </a>
              <div className="star-rating">
                <div className="rating-box">
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                </div>
              </div>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                55.00
              </span>
            </div>
          </li>
          <li className="widget-mini-product">
            <div className="product-image">
              <a title="Phasellus vel hendrerit" href="#">
                <img alt="" src={image} />
              </a>
            </div>
            <div className="product-info">
              <a title="Phasellus vel hendrerit" href="#">
                <span className="product-title">Aliquam lobortis</span>
              </a>
              <div className="star-rating">
                <div className="rating-box">
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                  <span>
                    <i className="fa fa-star" />
                  </span>
                </div>
              </div>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                55.00
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductTopComponent
