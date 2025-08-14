import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import missionImage from "../../assets/Mission.jpg";

const Missions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      heading: "Our Mission -With Purpose, Driven by Progress",
      text: `Our mission is to provide individuals with relevant hands-on capabilities that equip them to make achievements in the sphere of training of teachers and the sphere of teacher training in general. Our objective is to nurture fully confident, compassionate educators, with a graduate diploma in teaching (early childhood education), postgraduate diploma in teaching’ and diploma in Montessori teacher training in Trichy.`,
    },
    vision: {
      heading: "Our Vision",
      text: `We aspire to be a global hub in trusted educator training and certified teacher training and have dynamic programs like Diploma in Teaching Skills, Certification in Teaching Skills and Early Childhood Education- Certificate in ECCE, that makes a difference. It is our purpose to establish new principles of contemporary teaching approach and personality growth training in a modern educator, bringing inspiration of lifelong learning and career change. Providing internationally accepted certification and teaching practices will help to create competent professionals and teachers with confidence to create a positive difference in teaching and training in any community or classroom across the world.`,
    },
  };

  return (
    <div
      className="bg-white px-4 py-12 font-family max-w-6xl mx-auto"
      data-aos="fade-up"
    >
      <p
        className="text-lg text-gray-600 mb-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        About Mission
      </p>
      <h2
        className="text-2xl md:text-3xl font-bold mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Guided by Purpose. Driven by Progress.
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6" data-aos="fade-up" data-aos-delay="300">
        <button
          onClick={() => setActiveTab("mission")}
          className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
            activeTab === "mission"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          Our Mission
        </button>
        <button
          onClick={() => setActiveTab("vision")}
          className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
            activeTab === "vision"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          Our Vision
        </button>
      </div>

      {/* Content Section */}
      <div
        className="flex flex-col lg:flex-row items-center gap-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Text */}
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-lg mb-2">
            {content[activeTab].heading}
          </h3>
          <p className="text-gray-700 leading-loose text-md md:text-lg">
            {content[activeTab].text}
          </p>
        </div>

        {/* Image */}
        <div
          className="relative flex-1 w-full max-w-md"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="overflow-hidden rounded-lg shadow-lg relative">
            <img
              src={missionImage}
              alt="Mission or Vision"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-0 right-0 h-full w-2 bg-primary rounded-tr-lg rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
