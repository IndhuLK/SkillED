import React from 'react'
import HeroSection from './HeroSection'
import WhatWeOffer from './WhatWeOffer'
import WelcomeSection from './WelcomeSection'
import CourseOffering from './CourseOffering'
import FurtureED from './FurtureED'
import PlacementSection from './PlacementSection'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <WhatWeOffer />
      <WelcomeSection />
      <CourseOffering />
      <FurtureED />
      <PlacementSection />
      <Testimonial />
    </div>
  )
}

export default Home