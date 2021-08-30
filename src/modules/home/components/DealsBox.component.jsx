import React from 'react'
import { ProductRoutesPath } from '../../product/Product.routes'
import PropTypes from 'prop-types'
import getPhoto from '../../../helpers/GetPhoto'
function DealsBoxComponent({ products }) {
  const limitProduct = products.slice(0, 2)
  return (
    <div className="row">
      {limitProduct.map((product, index) => (
        <div className="single-product-area col-sm-6" key={index}>
          <div className="product-wrapper listview">
            <div className="list-col4">
              <div className="product-image">
                <a href="#">
                  <img src={getPhoto(product._id)} alt="" />
                </a>
                <div className="quickviewbtn">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#product_modal"
                    data-original-title="Quick View"
                  >
                    <i className="ion-eye" />
                  </a>
                </div>
              </div>
            </div>
            <div className="list-col8">
              <div className="product-info">
                <h2>
                  <a href={ProductRoutesPath.toDetail(product._id)}>
                    {product.name}
                  </a>
                </h2>
                <span className="price">
                  <del>$ {product.price}</del> $ {product.price_sale}
                </span>
                <div className="product-rattings">
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
                    <i className="fa fa-star-half-o" />
                  </span>
                  <span>
                    <i className="fa fa-star-o" />
                  </span>
                </div>
                <div className="product-desc">
                  <p>{product.description}</p>
                </div>
                <div className="deal-counter">
                  {/*<div data-countdown="2019/08/02"/>*/}
                  <div>2019/08/02</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

DealsBoxComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}

export default DealsBoxComponent
