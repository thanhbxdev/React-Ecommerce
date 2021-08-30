import React, { useState } from 'react'
import Logo from '../assets/images/logo/logo-white.png'
import { Link } from 'react-router-dom'
import LangEN from '../assets/images/icons/en.png'
import LangFR from '../assets/images/icons/fr.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import icon5 from '../assets/images/icons/5.png'
import icon6 from '../assets/images/icons/6.png'
import icon7 from '../assets/images/icons/7.png'
import icon8 from '../assets/images/icons/8.png'
import icon9 from '../assets/images/icons/9.png'
import icon10 from '../assets/images/icons/10.png'
import icon11 from '../assets/images/icons/11.png'
import icon12 from '../assets/images/icons/12.png'
import { ProductRoutesPath } from '../modules/product/Product.routes'
import { Auth } from '../auth'

function HeaderLayout() {
  const [showCategory, setShowCategory] = useState(false)
  const user = Auth.profile()
  return (
    <header className="header-area">
      {/* Header top area start */}
      <div className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="top-bar-left">
                {/* welcome */}
                <div className="welcome">
                  <p>England's Fastest Online Shopping Destination</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="topbar-nav">
                <div className="wpb_wrapper">
                  {/* my account */}
                  <div
                    className="menu-my-account-container"
                    style={{ width: 'auto' }}
                  >
                    {user ? (
                      <div>
                        <Link to="/" className="text-white text-uppercase">
                          {user.name} <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul>
                          <li>
                            <Link to="/profile">Account</Link>
                          </li>
                          <li>
                            <Link to="/logout">Logout</Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <a href="#" className="text-white text-uppercase">
                          My Account <i className="ion-ios-arrow-down" />
                        </a>
                        <ul>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="switcher">
                    {/* language-menu */}
                    <div className="language">
                      <a href="#">
                        <img src={LangEN} alt="language-selector" />
                        English
                        <i className="ion-ios-arrow-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={LangFR} alt="French" />
                            <span>French</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* currency-menu */}
                    <div className="currency">
                      <a href="#">
                        $ USD
                        <i className="ion-ios-arrow-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">€ EUR</a>
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
      {/* Top bar area end */}
      {/* Header middle area start */}
      <div className="header-middle-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-12">
              {/* site-logo */}
              <div className="site-logo">
                <Link to="/">
                  <img src={Logo} alt="Nikado" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              {/* header-search */}
              <div className="header-search clearfix">
                <div className="category-select pull-right">
                  <select className="nice-select-menu">
                    <option data-display="All Categories">
                      All Categories
                    </option>
                    <option value={1}>Decor &amp; Furniture</option>
                    <option value={2}>Electronics</option>
                    <option value={3}>Fashion &amp; clothings</option>
                    <option value={4} disabled>
                      Sport &amp; Outdoors
                    </option>
                    <option value={5}>Toy, Kids &amp; Baby</option>
                  </select>
                </div>
                <div className="header-search-form">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search product..."
                    />
                    <input type="submit" name="submit" defaultValue="Search" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              {/* shop-cart-menu */}
              <div className="shop-cart-menu pull-right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ion-ios-shuffle-strong" />
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="ion-android-favorite-outline" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cart-icon">
                        <i className="ion-bag" />
                        <sup>3</sup>
                      </span>
                      <span className="cart-text">
                        <span className="cart-text-title">
                          My cart <br /> <strong>$ 145.00</strong>{' '}
                        </span>
                      </span>
                    </a>
                    <ul>
                      <li>
                        {/* single-shop-cart-wrapper */}
                        <div className="single-shop-cart-wrapper">
                          <div className="shop-cart-img">
                            <a href="#">
                              <img
                                src="images/product/1.jpg"
                                alt="Image of Product"
                              />
                            </a>
                          </div>
                          <div className="shop-cart-info">
                            <h5>
                              <a href="cart.html">sport t-shirt men</a>
                            </h5>
                            <span className="price">£515.00</span>
                            <span className="quantaty">Qty: 1</span>
                            <span className="cart-remove">
                              <a href="#">
                                <i className="fa fa-times" />
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        {/* single-shop-cart-wrapper */}
                        <div className="single-shop-cart-wrapper">
                          <div className="shop-cart-img">
                            <a href="#">
                              <img
                                src="images/product/2.jpg"
                                alt="Image of Product"
                              />
                            </a>
                          </div>
                          <div className="shop-cart-info">
                            <h5>
                              <a href="cart.html">sport coat amet</a>
                            </h5>
                            <span className="price">£100.00</span>
                            <span className="quantaty">Qty: 1</span>
                            <span className="cart-remove">
                              <a href="#">
                                <i className="fa fa-times" />
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        {/* single-shop-cart-wrapper */}
                        <div className="single-shop-cart-wrapper">
                          <div className="shop-cart-img">
                            <a href="#">
                              <img
                                src="images/product/3.jpg"
                                alt="Image of Product"
                              />
                            </a>
                          </div>
                          <div className="shop-cart-info">
                            <h5>
                              <a href="cart.html">Pellentesque men</a>
                            </h5>
                            <span className="price">£265.00</span>
                            <span className="quantaty">Qty: 1</span>
                            <span className="cart-remove">
                              <a href="#">
                                <i className="fa fa-times" />
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        {/* shop-cart-total */}
                        <div className="shop-cart-total">
                          <p>
                            Subtotal:{' '}
                            <span className="pull-right">£880.00</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="shop-cart-btn">
                          <a href="checkout.html">Checkout</a>
                          <a href="cart.html" className="pull-right">
                            View Cart
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header middle area end */}
      {/* Header bottom area start */}
      <div className="header-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
              <div className="categori-menu">
                <span
                  className="categorie-title"
                  onClick={() => {
                    setShowCategory(!showCategory)
                  }}
                >
                  Categories
                </span>
                <nav>
                  <ul
                    className="categori-menu-list menu-hidden"
                    style={{ display: showCategory ? '' : 'none' }}
                  >
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon1} alt="menu-icon" />
                        </span>
                        Electronics
                        <i className="" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon2} alt="menu-icon" />
                        </span>
                        Fashion
                        <i className="" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon3} alt="menu-icon" />
                        </span>
                        Home &amp; Kitchen
                        <i className="" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon4} alt="menu-icon" />
                        </span>
                        Phones &amp; Tablets
                        <i className="" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon5} alt="menu-icon" />
                        </span>
                        TV &amp; Video
                        <i className="" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon6} alt="menu-icon" />
                        </span>
                        Beauty
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon7} alt="menu-icon" />
                        </span>
                        Sport &amp; tourism
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon8} alt="menu-icon" />
                        </span>
                        Fruits &amp; Veggies
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon9} alt="menu-icon" />
                        </span>
                        Computer &amp; Laptop
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon10} alt="menu-icon" />
                        </span>
                        Meat &amp; Seafood
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon12} alt="menu-icon" />
                        </span>
                        Samsung
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <span>
                          <img src={icon11} alt="menu-icon" />
                        </span>
                        Sanyo
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-9">
              {/* main-menu */}
              <div className="main-menu">
                <nav>
                  <ul>
                    <li className="current">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to={ProductRoutesPath.list}>Shop</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header bottom area end */}
    </header>
  )
}

export default HeaderLayout
