import React from 'react'
import image from '../assets/images/slider/1.jpg'
function SliderComponent() {
  return (
    <div className="slider-area">
      <div className="container">
        <div className="row">
          <div className=" col-lg-3"></div>
          <div className=" col-xl-9">
            {/* slider-area start */}
            <div className="">
              {/* slider start */}
              <div className="">
                <div id="mainSlider" className="">
                  <img src={image} alt="main slider" title="#htmlcaption1" />
                  {/*<img src="images/slider/2.jpg" alt="main slider" title="#htmlcaption2" />*/}
                </div>
              </div>
              {/* slider end */}
            </div>
            {/* slider-area end */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderComponent
