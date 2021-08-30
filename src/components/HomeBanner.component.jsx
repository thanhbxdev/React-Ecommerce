import React from 'react'
import banner from '../assets/images/banner/home1-banner2.jpg'
function HomeBannerComponent() {
  return (
    <div className="home-fullwidth-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeBannerComponent
