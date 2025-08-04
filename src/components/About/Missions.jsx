import React, { useState } from "react";
import missionImage from '../../assets/Mission.jpg'

const Missions = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // Content for Mission and Vision
  const content = {
    mission: {
      heading: "Our Company Mission",
      text: `At Skill Ed, our mission is to empower individuals with practical,
      globally relevant skills that help them thrive in teaching, communication,
      and personal development. We aim to create confident, compassionate educators
      and professionals who can make a meaningful impact in the lives of learners
      and in their own careers.`,
    },
    vision: {
      heading: "Our Vision",
      text: `Our vision is to be a global leader in education innovation,
      delivering impactful learning experiences that shape future educators and professionals.
      We strive to inspire lifelong learning, support career transformation,
      and build communities that thrive through knowledge and empowerment.`,
    },
  };

  return (
    <div className="bg-white px-4 py-12 font-family max-w-6xl mx-auto">
      <p className="text-lg text-gray-600 mb-2">About Mission</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Guided by Purpose. Driven by Progress.
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 ">
        <button
          onClick={() => setActiveTab("mission")}
          className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer  ${
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
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text */}
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-lg mb-2">{content[activeTab].heading}</h3>
          <p className="text-gray-700 leading-loose text-md md:text-lg">{content[activeTab].text}</p>
        </div>

        {/* Image */}
        <div className="relative flex-1 w-full max-w-md">
          <div className="overflow-hidden rounded-lg shadow-lg relative">
            <img
              src={missionImage}
              alt="Mission or Vision"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-0 right-0 h-full  w-2 bg-primary rounded-tr-lg rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
