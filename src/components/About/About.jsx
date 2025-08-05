import React, { useEffect } from "react";
import AOS from "aos";
import classroomImage from "../../assets/Classroom.jpg";
import girlImage from "../../assets/GirlImage.jpg";

const About = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="font-family flex flex-col lg:flex-row items-center justify-between 
    gap-10 p-6 lg:p-16 bg-white overflow-hidden"
    >
      {/* Left Side - Images */}
      <div
        className="relative w-full max-w-[320px] h-[350px] mx-auto"
        data-aos="fade-right"
      >
        {/* Back Image */}
        <img
          src={classroomImage}
          alt="Classroom"
          className="w-64 h-60 rounded-[30px] object-cover shadow-md"
        />

        {/* Front Image */}
        <img
          src={girlImage}
          alt="Girl"
          className="absolute md:left-48 left-30 top-35 md:top-30 w-52 h-56 object-cover shadow-xl z-10"
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        />

        {/* Green line */}
        <div className="absolute md:top-[220px] md:left-[40px] top-55 left-10 w-25 md:w-50 h-[4px] bg-primary z-20"></div>

        {/* Badge */}
        <div
          className="absolute top-4 md:left-54 left-54 bg-secondary text-white text-lg sm:text-base 
        font-semibold md:px-10 px-6 py-2 rounded-full shadow z-30 text-center leading-tight"
        >
          10+ Years <br /> Experience
        </div>
      </div>

      {/* Right Side - Text */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0"
        data-aos="fade-left"
      >
        <p className="text-lg text-gray-500 mb-2" data-aos="fade-up">
          About us
        </p>
        <h2
          className="text-2xl lg:text-3xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Who We Are
        </h2>
        <p
          className="text-gray-600 mb-4 text-md md:text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          SkillEd is a modern teacher training and professional skills institute
          offering globally aligned certification programs in teaching
          methodologies, early childhood education, and communication
          development.
        </p>
        <p
          className="text-gray-600 mb-6 leading-relaxed text-md md:text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our flexible online, hybrid, and in-person learning modes make
          education accessible for aspiring educators, working professionals,
          and career changers. With expertly crafted curricula,
          industry-relevant modules, and dedicated mentorship, we help learners
          turn passion into purpose.
        </p>
        <button
          className="bg-button text-white px-4 py-2 rounded hover:bg-pink-600 
        cursor-pointer transition shadow"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore Our Course
        </button>
      </div>
    </div>
  );
};

export default About;
