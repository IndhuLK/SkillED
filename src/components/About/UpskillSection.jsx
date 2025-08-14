import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import studentsImage from "../../assets/students.png";

const UpskillSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-white py-10 px-4 md:px-16 flex flex-col lg:flex-row items-center 
      justify-center gap-10 font-family"
      data-aos="fade-up"
    >
      {/* Left Image */}
      <img
        src={studentsImage}
        alt="Students"
        className="w-[280px] md:w-[320px] lg:w-[360px] mb-6 object-contain"
        data-aos="fade-right"
        data-aos-delay="100"
      />

      {/* Right Content */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left space-y-10"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Are you now Ready to Upskill and Make an Impact?
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-loose">
          The next step is SkillEd- your trusted partners in educator training
          and certified teacher training in Trichy. Whether you have a diploma
          in teaching or modern teaching methodologies course Trichy, we help
          make your career in education- a fulfilling one.
        </p>
        <p className="text-gray-700 text-md md:text-lg leading-loose">
          Enroll today in one of our teaching skills Diploma courses,
          Certificate courses in ECCE or personality development training
          programs given to teachers by calling us now.
        </p>
        <button
          className="bg-button text-white px-6 py-2 rounded hover:bg-pink-700 
          transition duration-300 cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default UpskillSection;
