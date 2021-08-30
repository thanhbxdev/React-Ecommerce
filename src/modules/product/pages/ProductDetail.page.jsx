import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductAPI from '../../../callApi/productApi'
import { ProductRoutesPath } from '../Product.routes'
import prd from '../../../assets/images/product/single/product4.jpg'

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: product } = await ProductAPI.get(id)
        setProduct(product)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="wrapper home-one single-product-page">
      {/*breadcrumbs*/}
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span>
                <Link to={ProductRoutesPath.root}>Shop</Link>
                <span className="separator">/</span>
                <Link to="/">Clothings</Link>
                <span className="separator">/</span> {product.name}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/*end breadcrumbs */}
      {/*entry-header*/}
      <div className="entry-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="entry-title">{product.name}</h1>
            </div>
          </div>
        </div>
      </div>
      {/*end entry-header */}
      <div className="single-product-area">
        <div className="container">
          <div className="single-product-wrapper">
            <div className="row">
              <div className="col-xs-12 col-md-7 col-lg-7">
                <div className="product-details-img-content">
                  <div className="product-details mr-40">
                    <div className="product-details-large tab-content">
                      <div className="tab-pane active" id="pro-details1">
                        <div className="product-popup">
                          <a href="images/product/single/product4.jpg">
                            <img src={prd} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-5 col-lg-5">
                <div className="single-product-info">
                  <h1>{product.name}</h1>
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
                  <span className="price">
                    <del>$ {product.price}</del> $ {product.price_sale}
                  </span>
                  <p>{product.description}</p>
                  <div className="box-quantity d-flex">
                    <form action="#">
                      <input
                        className="quantity mr-40"
                        min={1}
                        defaultValue={1}
                        type="number"
                      />
                    </form>
                    <a className="add-cart" href="cart.html">
                      add to cart
                    </a>
                  </div>
                  <div className="wishlist-compear-area">
                    <a href="wishlist.html">
                      <i className="ion-ios-heart-outline" /> Add to Wishlist
                    </a>
                    <a href="#">
                      <i className="ion-ios-loop-strong" /> Compare
                    </a>
                  </div>
                  <div className="product_meta">
                    <span className="posted_in">
                      Categories:{' '}
                      <a href="#" rel="tag">
                        Accessories
                      </a>
                      ,{' '}
                      <a href="#" rel="tag">
                        Clothings
                      </a>
                    </span>
                  </div>
                  <div className="single-product-sharing">
                    <div className="widget widget_socialsharing_widget">
                      <h3 className="widget-title">Share this product</h3>
                      <ul className="social-icons">
                        <li>
                          <a className="facebook social-icon" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter social-icon" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="pinterest social-icon" href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a className="gplus social-icon" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin social-icon" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
