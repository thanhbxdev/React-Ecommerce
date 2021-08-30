import React from 'react'
import banner1 from '../../../assets/images/banner/ehome1-banner4-1.jpg'
import banner2 from '../../../assets/images/banner/home1-banner4-2.jpg'
import banner3 from '../../../assets/images/banner/home1-banner4-3.jpg'
import banner4 from '../../../assets/images/banner/home1-banner4-4.jpg'
function HomeBannerFourComponent() {
  return (
    <div className="home-banner-four">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 banner-four-one">
            <a href="shop.html">
              <img src={banner1} alt="" />
            </a>
          </div>
          <div className="col-sm-7 banner-four-two">
            <div className="top-banner">
              <a href="shop.html">
                <img src={banner2} alt="" />
              </a>
            </div>
            <div className="bottom-banner">
              <div className="row">
                <div className="col-sm-6">
                  <a href="shop.html">
                    <img src={banner3} alt="" />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="shop.html">
                    <img src={banner4} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeBannerFourComponent
