import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import EDU from "../../assets/EDU.jpg";

const EducationTitle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full font-family">
      {/* ✅ Background Image */}
      <img
        src={EDU}
        alt="Education Background"
        className="w-full h-[400px] md:h-[650px] object-cover"
      />

      {/* ✅ Overlay Content */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center">
        <div
          className="px-4 md:px-20 text-white max-w-7xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            className="text-2xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore more about our courses – SkillEd <br />Teacher Training and
            Professional <br />Skills Institute
          </h1>

          <p
            className="mb-6 text-md md:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At SkillEd, we are making confident future ready educators by
            building world class teaching programs and <br />personal development
            training into transformative practitioners.
          </p>

          <button
            className="bg-button text-white px-5 py-2 rounded hover:bg-pink-600 cursor-pointer transition"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Explore Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationTitle;
