import React from "react";
import EDU from "../../assets/EDU.jpg";

const EducationTitle = () => {
  return (
    <div className="relative w-full font-family">
      {/* ✅ Background Image */}
      <img
        src={EDU}
        alt=""
        className="w-full h-[400px] md:h-[650px] object-cover"
      />

      {/* ✅ Overlay Content */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center">
        <div className="px-4 md:px-20 text-white max-w-7xl ">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Educators. Transforming <br />Classrooms
          </h1>
          <p className="mb-6 text-md md:text-lg">
            At Skill Ed, we specialize in developing confident, future-ready
            educators through globally relevant teaching <br />programs and personal
            development courses.
          </p>
          <button
            className="bg-button text-white px-5 py-2 rounded hover:bg-pink-600 
          cursor-pointer transition"
          >
            Explore Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationTitle;
