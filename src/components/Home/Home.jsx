import React from 'react'
import HeroSection from './HeroSection'
import WhatWeOffer from './WhatWeOffer'
import WelcomeSection from './WelcomeSection'
import CourseOffering from './CourseOffering'
import FurtureED from './FurtureED'
import PlacementSection from './PlacementSection'
import Testimonial from './Testimonial'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Helmet>
              <title>Home SKillED - Innovating Educators</title>
              <meta
                name="description"
                content="Explore our recent projects and case studies."
              />
              <meta name="keywords" content="projects, portfolio, work" />
              <meta property="og:title" content="Projects | My Website" />
              <meta
                property="og:description"
                content="Explore our recent projects and case studies."
              />
              <meta property="og:type" content="website" />
            </Helmet>
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