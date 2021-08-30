import React from 'react'
import Logo from '../assets/images/logo/logo-black.png'
import Paymet from '../assets/images/icons/payment-icon.png'
function FooterLayout() {
  return (
    <footer className="footer-area">
      {/* newsletter area */}
      <div className="newsletter-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xl-9">
              <div className="newsletter-text">
                <div className="icon">
                  <i className="icon ion-email" />
                </div>
                <h3>Sign Up To Newsletter</h3>
                <h4>..and Receive $29 Coupon For First Shopping</h4>
              </div>
              <div className="newsletter">
                <div className="newsletter-box">
                  <form action="#">
                    <input
                      className="subscribe"
                      placeholder="your email address"
                      name="email"
                      id="subscribe"
                      type="email"
                    />
                    <button type="submit" className="submit">
                      subscribe!
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-3">
              <div className="footer-social">
                <ul className="social-icons">
                  <li>
                    <a
                      className="facebook social-icon"
                      href="#"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter social-icon"
                      href="#"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram social-icon"
                      href="#"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin social-icon"
                      href="#"
                      title="Linkedin"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="rss social-icon"
                      href="#"
                      title="Rss"
                      target="_blank"
                    >
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter area end */}
      {/* footer policy area */}
      <div className="footer-policy-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12 foo-pol">
              <div className="footer-policy-box">
                <p>
                  <i className="icon ion-reply-all" />
                </p>
                <h3>Free Returns</h3>
                <p>
                  Currently over 50 countries qualify for express international
                  shipping.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12 foo-pol">
              <div className="footer-policy-box">
                <p>
                  <i className="icon ion-ribbon-b" />
                </p>
                <h3>Customer Support</h3>
                <p>
                  We really care about you and your website as much as you do.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12 foo-pol">
              <div className="footer-policy-box">
                <p>
                  <i className="icon ion-android-plane" />
                </p>
                <h3>International Shipping</h3>
                <p>
                  Currently over 50 countries qualify for express international
                  shipping.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12 foo-pol">
              <div className="footer-policy-box">
                <p>
                  <i className="icon ion-android-star" />
                </p>
                <h3>Dedicated Service</h3>
                <p>
                  Consult our specialists for help with an order, customization,
                  or design advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer policy area end */}
      {/* footer main */}
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12">
              <div className="footer-logo-area">
                <a href="#">
                  <img src={Logo} alt="footer logo" />
                </a>
                <p>
                  We are a team of designers and developers that create high
                  quality Wordpress, Magento, Prestashop, Opencart.
                </p>
                <ul>
                  <li>
                    <h4>Contact info:</h4>
                    <p>169-C, Technohub, Dubai Silicon Oasis.</p>
                  </li>
                  <li>
                    <h4>Telephone:</h4>
                    <p>(+011) 123 777 8888 - (+011) 123 888 9999</p>
                  </li>
                  <li>
                    <h4>Email:</h4>
                    <p>Support@example.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12">
              <div className="footer-menu">
                <h3>Customer Service</h3>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Unsubscribe Notification</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12">
              <div className="footer-menu">
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Warranty</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Seller Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-3 col-xs-12">
              <div className="footer-menu">
                <h3>Extras</h3>
                <ul>
                  <li>
                    <a href="#">Brands</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Order History</a>
                  </li>
                  <li>
                    <a href="#">Track Your Order</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer main end */}
      {/* Footer bottome */}
      <div className="footer-bottome">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Online Shopping for Mobiles</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Samsung Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Micromax Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Lenovo Mobiles</a>
                    </li>
                    <li>
                      <a href="#">HTC Mobiles</a>
                    </li>
                    <li>
                      <a href="#">iPhones</a>
                    </li>
                    <li>
                      <a href="#">LG Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Karbonn Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Vivo Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Asus Mobiles</a>
                    </li>
                    <li>
                      <a href="#">Oppo Mobiles</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Tablets</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Apple iPads</a>
                    </li>
                    <li>
                      <a href="#">Samsung Tablets</a>
                    </li>
                    <li>
                      <a href="#"> Windows Tablets</a>
                    </li>
                    <li>
                      <a href="#">Calling Tablets</a>
                    </li>
                    <li>
                      <a href="#">Micromax Tablets</a>
                    </li>
                    <li>
                      <a href="#">iBall Tablets</a>
                    </li>
                    <li>
                      <a href="#">Swipe Tablets</a>
                    </li>
                    <li>
                      <a href="#">Datawind Tablets</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">TVs, Audio &amp; Video</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Televisions</a>
                    </li>
                    <li>
                      <a href="#">LED TVs</a>
                    </li>
                    <li>
                      <a href="#">Smart Televisions</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">Headphones</a>
                    </li>
                    <li>
                      <a href="#">Earphones</a>
                    </li>
                    <li>
                      <a href="#">Samsung Televisions</a>
                    </li>
                    <li>
                      <a href="#">Micromax Televisions</a>
                    </li>
                    <li>
                      <a href="#">LG Televisions</a>
                    </li>
                    <li>
                      <a href="#">Home Theatre Systems</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Mobiles Accessories</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Mobile Covers</a>
                    </li>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Samsung Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Ambrane Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Intex Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Sony Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Lenovo Power Banks</a>
                    </li>
                    <li>
                      <a href="#">PNY Power Banks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Computers</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Lenovo Laptops</a>
                    </li>
                    <li>
                      <a href="#">Acer Laptops</a>
                    </li>
                    <li>
                      <a href="#">Apple Macbooks</a>
                    </li>
                    <li>
                      <a href="#">Notebook</a>
                    </li>
                    <li>
                      <a href="#">Laptops</a>
                    </li>
                    <li>
                      <a href="#">External Hard Disks</a>
                    </li>
                    <li>
                      <a href="#">Dell Laptops</a>
                    </li>
                    <li>
                      <a href="#">HP Laptops</a>
                    </li>
                    <li>
                      <a href="#">Pen Drives</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Camera</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">DSLR Cameras</a>
                    </li>
                    <li>
                      <a href="#">Canon Cameras</a>
                    </li>
                    <li>
                      <a href="#">Nikon Coolpix</a>
                    </li>
                    <li>
                      <a href="#">Nikon DSLR Cameras</a>
                    </li>
                    <li>
                      <a href="#">Nikon DSLR Cameras</a>
                    </li>
                    <li>
                      <a href="#">Digital Cameras</a>
                    </li>
                    <li>
                      <a href="#">Panasonic Cameras</a>
                    </li>
                    <li>
                      <a href="#">Samsung Cameras</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Watches</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Men’s Watches</a>
                    </li>
                    <li>
                      <a href="#">Women’s Watches</a>
                    </li>
                    <li>
                      <a href="#">Casio Watches</a>
                    </li>
                    <li>
                      <a href="#">Titan Watches</a>
                    </li>
                    <li>
                      <a href="#">Fastrack Watches</a>
                    </li>
                    <li>
                      <a href="#">Fossil watches</a>
                    </li>
                    <li>
                      <a href="#">Casio Edifice</a>
                    </li>
                    <li>
                      <a href="#">Tissot Watches</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget_nav_menu">
                <h2 className="widgettitle">Appliances</h2>
                <div className="menu-online-shopping-for-mobiles-container">
                  <ul>
                    <li>
                      <a href="#">Air Conditioners</a>
                    </li>
                    <li>
                      <a href="#">Air Coolers</a>
                    </li>
                    <li>
                      <a href="#">Refrigerators</a>
                    </li>
                    <li>
                      <a href="#">Fans</a>
                    </li>
                    <li>
                      <a href="#">Washing Machines</a>
                    </li>
                    <li>
                      <a href="#">Inverters &amp; Stabilizers</a>
                    </li>
                    <li>
                      <a href="#">Mircowaves</a>
                    </li>
                    <li>
                      <a href="#">Irons</a>
                    </li>
                    <li>
                      <a href="#">Trimmers</a>
                    </li>
                    <li>
                      <a href="#">Hair Dryers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottome end */}
      {/* footer copyright area */}
      <div className="footer-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <p>Copyright © 2018 Bege . All Rights Reserved.</p>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 pull-right">
              <img src={Paymet} alt="payment icon" />
            </div>
          </div>
        </div>
      </div>
      {/* footer copyright area end */}
    </footer>
  )
}

export default FooterLayout
