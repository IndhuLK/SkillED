import React from "react";
import EducationTitle from "./EducationTitle";
import About from "./About";
import WhyChoose from "./WhyChoose";
import Missions from "./Missions";
import Testimonials from "./Testimonials";
import UpskillSection from "./UpskillSection";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About SKillED - Innovating Educators</title>
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

      <EducationTitle />
      <About />
      <WhyChoose />
      <Missions />
      <Testimonials />
      <UpskillSection />
    </div>
  );
};

export default AboutUs;
