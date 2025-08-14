import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import furture from "/src/assets/furture.jpg";
import Ev1 from "../../assets/Ev1.jpg";
import Ev2 from "../../assets/Ev2.jpg";
import Ev3 from "../../assets/Ev3.jpg";

const pointsLeft = [
  {
    title: "Impactful Educator Development-Accredited",
    desc: "The major educational institutions acknowledge the involvement of SkillED in the trusted educator training. Our qualifications such as the graduate diploma in teaching give solid bases to the success of teachers on local and international fronts.",
  },
  {
    title: "Enlightening Educators, All Around",
    desc: "SkillED addresses the pedagog into the classroom practices and international best practices through certificate program in ECCE course Trichy and advanced training in classroom leadership. We support educators in their development wherever and whenever and assist them in learning easy information.",
  },
  {
    title: "World-Wide Endorsed Certification Which You Can Rely On",
    desc: "Our courses, among which is the diploma in teaching, are benchmarked world over to make a difference in the world. With SkillED the credentials you receive speak the language of current classrooms and future education systems.",
  },
];

const pointsRight = [
  {
    title: "Around Learning to Employmen",
    desc: "SkillED does not only help with certification. Our sustained mentorship and job-placement support take educators out of the classroom and into their first workplace--and onto the next one--and this makes us a leader in trusted educator preparation.",
  },
  {
    title: "The Success of Yours Begins with Our Masters",
    desc: "Our training curriculum is a synthesis of both theoretically and practically oriented methods under the supervision of expert trainers. No matter what degree you choose to work toward--the diploma in teaching or one of the special tracks in teaching--you will be taught by people who have created classrooms of their own.",
  },
  {
    title: "Proven Impact. Real Results.",
    desc: "Over 25000 teachers have furthered their career paths with SkillED. Our alumni network, coupled with reliable educator training means that each teacher is graduate equipped, confident, and ready to work.",
  },
];

const eventData = [
  {
    id: 1,
    img: Ev1,
    title: "Modern Classroom Strategies",
    date: "Date: July 25, 2025",
    time: "Time: 5:00 PM - 6:00 PM",
    mode: "Online",
  },
  {
    id: 2,
    img: Ev2,
    title: "SKIILED Orientation for New Learners",
    date: "Date: July 28, 2025",
    time: "Time: 10:00 AM - 12:00 PM",
    mode: "Online",
  },
  {
    id: 3,
    img: Ev3,
    title: "Early Childhood Education Essentials",
    date: "Date: August 3, 2025",
    time: "Time: 9:00 AM - 10:30 AM",
    mode: "Online",
  },
];

const FurtureED = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-4 bg-white font-family">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
          Empower your teaching with Skilled & shape the future
        </h1>
        <p className="text-gray-600 text-lg">
          SkillED provides credible educator training to both the budding and
          established teachers. Our programs (including the diploma in teaching,
          graduate diploma in teaching and the certificate in ECCE course
          Trichy) are structured to offer you maximum flexibility with
          sector-recognized credentials that will allow you to lead confidently
          in contemporary classrooms. Regardless of whether you are new or
          upskilling, SkillED equips you to flourish in a world that requires
          ever changing educational needs.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Points */}
        <div className="space-y-5" data-aos="fade-right">
          {pointsLeft.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <ForwardOutlinedIcon className="text-green-500 mt-1 rotate-270" />
              <div>
                <h4 className="font-semibold text-md md:text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center" data-aos="zoom-in">
          <img
            src={furture}
            alt="Graduates"
            className="rounded-md w-[280px] md:w-[400px]"
          />
        </div>

        {/* Right Points */}
        <div className="space-y-5" data-aos="fade-left">
          {pointsRight.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <ForwardOutlinedIcon className="text-green-500 mt-1 rotate-270" />
              <div>
                <h4 className="font-semibold text-md md:text-xl mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Left Text Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
              Skilled Course -Stay Updated. Stay Inspired.
            </h2>
            <p className="text-gray-600 text-lg">
              Do not fail to come to SkillED workshops, trainings, and webinars
              that will assist in continuous improvement. Whether you are
              looking to update your knowledge on early childhood education, or
              stay up to date on changes in trends in inclusive education, our
              events will enable you to stay up to date on the latest in
              teaching and empower life-long learning.
            </p>
          </div>

          {/* Event Cards */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventData.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={event.id * 100}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold text-md">{event.title}</h3>
                  <p className="text-xs text-gray-700 flex items-center gap-1">
                    <EventOutlinedIcon
                      fontSize="small"
                      className="text-red-800"
                    />
                    {event.date} |{" "}
                    <AccessTimeOutlinedIcon
                      fontSize="small"
                      className="text-red-800"
                    />{" "}
                    {event.time}
                  </p>
                  <p className="text-xs text-gray-500">{event.mode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtureED;
