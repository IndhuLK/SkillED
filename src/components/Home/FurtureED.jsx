import React from "react";
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import furture from '/src/assets/furture.jpg'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Ev1 from '../../assets/Ev1.jpg';
import Ev2 from '../../assets/Ev2.jpg';
import Ev3 from '../../assets/Ev3.jpg';

const pointsLeft = [
  {
    title: "Accredited for Impactful Educator Development",
    desc: "Recognized by top institutions, SKIILED stands for quality and credibility in educator development.",
  },
  {
    title: "Empowering Teachers, Everywhere",
    desc: "SKIILED bridges global best practices with the needs of Indian educators.",
  },
  {
    title: "Globally Aligned Certifications You Can Trust",
    desc: "SKIILED empowers you with recognized certifications designed for real classroom impact.",
  },
];

const pointsRight = [
  {
    title: "From Learning to Employment",
    desc: "SKIILED supports your teaching journey from training to placement, both locally and globally.",
  },
  {
    title: "Your Success Starts with Our Experts",
    desc: "Led by seasoned educators, SKIILED offers training that's insightful, practical, and growth-focused.",
  },
  {
    title: "Proven Impact. Real Results.",
    desc: "Over 25,000 teachers trust SKIILED to build successful, impactful careers in education.",
  },
];


const eventData = [
  {
    id: 1,
    img: Ev1,
    title: 'Modern Classroom Strategies',
    date: 'Date: July 25, 2025',
    time: 'Time: 5:00 PM - 6:00 PM',
    mode: 'Online',
  },
  {
    id: 2,
    img: Ev2,
    title: 'SKIILED Orientation for New Learners',
    date: 'Date: July 28, 2025',
    time: 'Time: 10:00 AM - 12:00 PM',
    mode: 'Online',
  },
  {
    id: 3,
    img: Ev3,
    title: 'Early Childhood Education Essentials',
    date: 'Date: August 3, 2025',
    time: 'Time: 9:00 AM - 10:30 AM',
    mode: 'Online',
  },
];

const FurtureED = () => {
  return (
    <section className="py-16 px-4 bg-white font-family">
      <div className="container mx-auto text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">
          Build a Future in Education with SkillED
        </h1>
        <p className="text-gray-600 text-lg ">
          SkillED offers future-ready teacher training programs designed to
          equip aspiring and working educators with the skills they need to
          succeed. With flexible course options and industry-recognized
          certifications, we help you take the first step—or the next big
          leap—in your teaching career.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      
      {/* Left Points */}
      <div className="space-y-10">
        {pointsLeft.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <ForwardOutlinedIcon className="text-green-500 mt-1 rotate-270" />
            <div>
              <h4 className="font-semibold text-md md:text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Image */}
      <div className="flex justify-center">
        <img src={furture} alt="Graduates" className="rounded-md w-[280px] md:w-[400px]" />
      </div>

      {/* Right Points */}
      <div className="space-y-13">
        {pointsRight.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <ForwardOutlinedIcon className="text-green-500 mt-1 rotate-270" />
            <div>
              <h4 className="font-semibold text-md md:text-xl mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>

    {/*Upcoming Event */}

    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        
        {/* Left Text Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2">Upcoming Events</h2>
          <p className="text-gray-600 text-lg ">
            Stay informed about SKIILED's latest <br />
            workshops, webinars, and training programs.
          </p>
        </div>

        {/* Event Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {eventData.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-1">
                <h3 className="font-semibold text-md">{event.title}</h3>
                <p className="text-xs text-gray-700">
                    <EventOutlinedIcon fontSize="30" 
                    className="mr-2 text-red-800 mb-1"/>{event.date} | <AccessTimeOutlinedIcon fontSize="30" className="text-red-800"/> {event.time}</p>
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
