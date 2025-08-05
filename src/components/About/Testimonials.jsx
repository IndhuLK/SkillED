import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import meenaImg from "../../assets/meena.jpg";
import rahulImg from "../../assets/rahul.jpg";
import anithaImg from "../../assets/anitha.jpg";
import saraImg from "../../assets/sara.jpg";

const testimonials = [
  {
    name: "Meena S",
    text: "The teaching methods I learned at Skill Ed completely changed the way I approach my classroom. The trainers were supportive, and the lessons were practical and easy to apply.",
    image: meenaImg,
  },
  {
    name: "Rahul K",
    text: "As a working professional, I needed a flexible course. Skill Ed’s hybrid format allowed me to learn at my pace while still getting expert guidance. Highly recommended.",
    image: rahulImg,
  },
  {
    name: "Anitha R",
    text: "The Certificate in Modern Teaching Methodologies gave me the confidence to switch careers. Today, I’m successfully teaching at a reputed institution.",
    image: anithaImg,
  },
  {
    name: "Sara F",
    text: "What I loved about Skill Ed is the real-world application of everything taught. The micro-teaching sessions, resources, and assessments were extremely valuable.",
    image: saraImg,
  },
];

const Testimonials = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
  return (
    <section
      className="bg-white px-4 py-16 font-family max-w-7xl mx-auto text-center"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        What Our Learners Say
      </h2>

      <p
        className="text-gray-600 max-w-3xl mx-auto mb-12 text-md md:text-lg leading-loose"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        At SkillEd, our learners are at the heart of everything we do. From aspiring
        teachers to experienced professionals, thousands have trusted us to help
        them upskill, transform their careers, and grow with confidence. Here's
        what some of them have to say about their journey with us.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="text-center px-4"
            data-aos="zoom-in"
            data-aos-delay={300 + index * 100}
          >
            <img
              src={t.image}
              alt={t.name}
              className="mx-auto mb-4 w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
            />
            <p className="text-gray-700 text-sm md:text-base mb-3">"{t.text}"</p>
            <p className="font-semibold text-sm md:text-base text-gray-900">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
