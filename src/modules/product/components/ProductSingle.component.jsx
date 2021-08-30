import React from 'react'
import PropTypes from 'prop-types'
import getPhoto from '../../../helpers/GetPhoto'
import { ProductRoutesPath } from '../Product.routes'

function ProductSingleComponent({ products, categories }) {
  return (
    <div className="row">
      {products.map((product, index) => (
        <div className="single-product-area col-sm-3" key={index}>
          <div className="product-wrapper gridview">
            <div className="list-col4">
              <div className="product-image">
                <a href={ProductRoutesPath.toDetail(product._id)}>
                  <span className="onsale">Sale!</span>
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
                  <del>
                    $ {new Intl.NumberFormat('de-DE').format(product.price)}
                  </del>
                  $ {new Intl.NumberFormat('de-DE').format(product.price_sale)}
                </span>
              </div>
              <div className="product-hidden">
                <div className="add-to-cart">
                  <a href="cart.html">Add to cart</a>
                </div>
                <div className="star-actions">
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
                  <ul className="actions">
                    <li>
                      <a href="#">
                        <i className="ion-android-favorite-outline" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ProductSingleComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired //
    })
  ),
  categories: PropTypes.array
}

export default ProductSingleComponent
