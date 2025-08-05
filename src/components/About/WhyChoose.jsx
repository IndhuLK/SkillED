import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import girlImage from "../../assets/GirlThumbsUp.png";
import vector from "../../assets/Vector3.png";

const WhyChoose = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-white px-4 py-12 text-center font-family overflow-hidden"
      data-aos="fade-up"
    >
      {/* Heading Section */}
      <h2
        className="text-2xl md:text-3xl font-bold mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Why Choose Skill Ed
      </h2>
      <p
        className="text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed px-2 text-md md:text-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        At Skill Ed, we don’t just offer courses — we shape confident, future-ready professionals.
        Our programs are designed to be practical, flexible, and aligned with the latest global teaching
        standards. Whether you're stepping into the education field or upgrading your skills,
        SkillEd ensures that you gain real value from every lesson.
      </p>

      {/* Image + Points Section */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center md:gap-30 gap-5">
          
          {/* Image Section */}
          <div
            className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex-shrink-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={vector}
              alt="Vector Shape"
              className="absolute w-[350px] h-[250px] sm:w-[400px] sm:h-[280px] md:left-6 md:top-17 top-0 z-0"
            />
            <img
              src={girlImage}
              alt="Girl"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          {/* Feature List */}
          <ul
            className="text-left space-y-4 text-gray-800 text-md md:text-lg max-w-md px-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {[
              "Globally Recognized Certifications",
              "100% Placement Support",
              "Flexible Learning: Online / Hybrid / In-Person",
              "Industry-Ready Curriculum",
              "Real-World Training & Projects",
              "Expert Faculty & Mentors"
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100} // staggered animation
              >
                <span className="text-xl text-green-600">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
