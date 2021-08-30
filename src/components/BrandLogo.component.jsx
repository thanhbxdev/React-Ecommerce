import React from 'react'
import Brand1 from '../assets/images/brand/brand1.jpg'
import Brand2 from '../assets/images/brand/brand2.jpg'
import Brand3 from '../assets/images/brand/brand3.jpg'
import Brand4 from '../assets/images/brand/brand4.jpg'
import Brand5 from '../assets/images/brand/brand5.jpg'
import Brand6 from '../assets/images/brand/brand6.jpg'
import Brand7 from '../assets/images/brand/brand7.jpg'
import Brand8 from '../assets/images/brand/brand8.jpg'
import Brand9 from '../assets/images/brand/brand9.jpg'

function BrandLogoComponent() {
  return (
    <div className="brand-logo-area ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="brand-carousel-active d-flex">
              <div className="brand-logo">
                <img src={Brand1} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand2} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand3} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand4} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand5} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand6} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand7} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand8} alt="Brand logo" />
              </div>
              <div className="brand-logo">
                <img src={Brand9} alt="Brand logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandLogoComponent
