import React from 'react'
import MasterLayout from '../../layout/Master.layout'
import DealsComponent from './components/Deals.component'
import BestSellerComponent from './components/BestSeller.component'
import HomeBannerComponent from '../../components/HomeBanner.component'
import ArrivalsComponent from './components/Arrivals.component'
import HomeBannerFourComponent from './components/HomeBannerFour.component'
import SliderComponent from '../../components/Slider.component'
import PolicyComponent from '../../components/Policy.component'
import BrandLogoComponent from '../../components/BrandLogo.component'
import PropTypes from 'prop-types'

function HomePage(props) {
  return (
    <MasterLayout>
      <SliderComponent />
      <PolicyComponent />
      <DealsComponent {...props} />
      <HomeBannerComponent />
      <BestSellerComponent {...props} />
      <HomeBannerComponent />
      <ArrivalsComponent {...props} />
      <HomeBannerFourComponent />
      <BrandLogoComponent />
    </MasterLayout>
  )
}

HomePage.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.array
}
export default HomePage
