import React, { useEffect } from "react";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AOS from "aos";
import "aos/dist/aos.css";

import Off1 from "../../assets/Off1.jpg";
import Off2 from "../../assets/Off2.jpg";
import Off3 from "../../assets/Off3.jpg";
import Off4 from "../../assets/Off4.jpg";
import Off5 from "../../assets/Off5.jpg";

const courseCard = [
  {
    id: 1,
    img: Off1,
    title: "Diploma in Teaching Skills",
    desc: "A comprehensive program designed to build core teaching competencies, classroom management, and curriculum planning for aspiring and current educators.",
    duration: "6 Months - 12 Months",
    fees: "15,000 - 25,000",
    Morebutton: "Know More",
    button: "Apply Now",
  },
  {
    id: 2,
    img: Off2,
    title: "Certificate in Teaching Skills",
    desc: "A focused certification that equips teachers with essential and practical skills in lesson delivery, student engagement, and assessment methods ",
    duration: "6 Months - 12 Months",
    fees: "15,000 - 25,000",
    Morebutton: "Know More",
    button: "Apply Now",
  },
  {
    id: 3,
    img: Off3,
    title: "Certificate in ECCE (Early Childhood Care and Education)",
    desc: "Specialized training for early childhood educators, covering developmental psychology, activity-based learning, and inclusive practices.",
    duration: "6 Months - 12 Months",
    fees: "15,000 - 25,000",
    Morebutton: "Know More",
    button: "Apply Now",
  },
  {
    id: 4,
    img: Off4,
    title: "Personality Development and Communication Skills",
    desc: "This course enhances confidence, interpersonal skills, and public speaking—empowering educators to lead and connect effectively.",
    duration: "6 Months - 12 Months",
    fees: "15,000 - 25,000",
    Morebutton: "Know More",
    button: "Apply Now",
  },
  {
    id: 5,
    img: Off5,
    title: "Certificate in Modern Teaching Methodologies",
    desc: "A cutting-edge course introducing educators to digital tools, learner-centered strategies, and innovative classroom techniques.",
    duration: "6 Months - 12 Months",
    fees: "15,000 - 25,000",
    Morebutton: "Know More",
    button: "Apply Now",
  },
];

const CourseOffering = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 bg-white font-family">
      <div className="container mx-auto text-center" data-aos="fade-down">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
          SkillED Course Offerings
        </h1>
        <p className="text-gray-600 text-md md:text-lg">
          Explore our carefully crafted programs designed to enhance teaching
          skills, classroom leadership, and professional growth for educators at
          every level.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseCard.slice(0, 3).map((course, i) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow p-4 space-y-4"
              data-aos="zoom-in-up"
              data-aos-delay={`${i * 100}`}
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-58 object-cover rounded"
              />
              <h2 className="text-xl font-semibold py-1">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.desc}</p>
              <div className="flex gap-4">
                <div className="text-sm text-gray-500">
                  <TimelapseIcon fontSize="25" className="text-gray-800" />{" "}
                  {course.duration}
                </div>
                <div className="text-sm text-gray-500">
                  <SellOutlinedIcon
                    className="transform rotate-90 text-gray-800"
                    fontSize="25"
                  />{" "}
                  {course.fees}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                  {course.Morebutton}
                </button>
                <button className="cursor-pointer text-sm bg-button text-white px-3 py-1 rounded hover:bg-pink-700">
                  {course.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {courseCard.slice(3, 5).map((course, i) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow p-4 w-full md:w-[350px] space-y-4"
              data-aos="fade-up"
              data-aos-delay={`${(i + 1) * 150}`}
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-58 object-cover rounded"
              />
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.desc}</p>
              <div className="flex gap-4">
                <div className="text-sm text-gray-500">
                  <TimelapseIcon fontSize="25" className="text-gray-800" />{" "}
                  {course.duration}
                </div>
                <div className="text-sm text-gray-500">
                  <SellOutlinedIcon
                    className="transform rotate-90 text-gray-800"
                    fontSize="25"
                  />{" "}
                  {course.fees}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                  {course.Morebutton}
                </button>
                <button className="cursor-pointer text-sm bg-button text-white px-3 py-1 rounded hover:bg-pink-700">
                  {course.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOffering;
