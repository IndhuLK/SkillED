import React, { useState, useEffect } from "react";
import AOS from "aos";
import { CheckCircle, BookOpen, Users, CalendarDays } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import PE from "../../assets/PE.jpg";
import Speak from "../../assets/Speak.jpg";
import Vector5 from "../../assets/Vector5.png";
import Dis from "../../assets/Dis.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";

const learningPoints = [
  "Boost your self-confidence, self-awareness, and positive attitude for personal and professional growth.",
  "Master verbal and non-verbal communication skills, including body language, tone, and clarity.",
  "Improve your public speaking, presentation, and group discussion abilities.",
  "Learn time management, emotional intelligence, and workplace etiquette.",
  "Prepare for interviews with resume writing, personal branding, and mock interview practice.",
];

const PDModules = [
  {
    title: "Module 1: Self-Awareness and Goal Setting",
    topics: [
      "Understanding Self-Identity and Strengths",
      "Personal and Professional Goal Setting",
      "Developing a Positive Mindset",
      "Overcoming Limiting Beliefs",
    ],
  },
  {
    title: "Module 2: Communication Essentials",
    topics: [
      "Verbal and Non-Verbal Communication",
      "Voice Modulation and Tone",
      "Barriers to Effective Communication",
      "Building Confidence in Speaking",
    ],
  },
  {
    title: "Module 3: Public Speaking and Presentation Skills",
    topics: [
      "Structuring a Powerful Speech",
      "Overcoming Stage Fear",
      "Using Visual Aids Effectively",
      "Engaging and Influencing the Audience",
    ],
  },
  {
    title: "Module 4: Body Language and First Impressions",
    topics: [
      "Posture, Eye Contact, and Gestures",
      "Personal Grooming and Etiquette",
      "Making a Strong First Impression",
      "Reading Others' Body Language",
    ],
  },
  {
    title: "Module 5: Group Discussions and Debates",
    topics: [
      "Rules and Formats of Group Discussions",
      "Constructive Arguments and Polite Disagreements",
      "Team Participation and Leadership",
      "Feedback and Self-Assessment",
    ],
  },
  {
    title: "Module 6: Interpersonal and Social Skills",
    topics: [
      "Building Rapport and Empathy",
      "Handling Criticism and Conflict",
      "Professional Email and Telephone Etiquette",
      "Networking and Relationship Building",
    ],
  },
  {
    title: "Module 7: Time Management and Work Ethics",
    topics: [
      "Prioritizing Tasks and Setting Deadlines",
      "Avoiding Procrastination",
      "Discipline and Accountability",
      "Professional Ethics and Values",
    ],
  },
  {
    title: "Module 8: Emotional Intelligence and Stress Management",
    topics: [
      "Understanding and Managing Emotions",
      "Developing Empathy and Self-Regulation",
      "Dealing with Anxiety and Pressure",
      "Work-Life Balance and Mindfulness",
    ],
  },
  {
    title: "Module 9: Mock Interviews and Career Preparation",
    topics: [
      "Resume Writing and Personal Branding",
      "Interview Etiquette and Common Questions",
      "Practice Sessions with Feedback",
      "Career Planning and Growth Strategies",
    ],
  },
];

const assessments = [
  {
    title: "Continuous Assessment:",
    content:
      "Learners will be evaluated regularly through class activities, self-reflections, and role-playing exercises that measure their personality growth and communication skills.",
  },
  {
    title: "Skill Demonstration:",
    content:
      "Participants will showcase their abilities in public speaking, group discussions, and mock interviews as part of their practical evaluation.",
  },
  {
    title: "Final Presentation or Viva:",
    content:
      "A final assessment involving a presentation or viva to evaluate overall development in confidence, clarity, and communication techniques.",
  },
  {
    title: "Certificate Issued:",
    content:
      "A Certificate of Completion will be awarded after successfully completing all modules and evaluations, demonstrating improved soft skills and communication expertise.",
  },
];

const PCTeach = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
  {
    question: "What is the Personality Development & Communication Skills course?",
    answer:
      "It is a training program aimed at enhancing your personal growth, self-confidence, and communication skills for better professional and social interactions.",
  },
  {
    question: "Who should take this course?",
    answer:
      "This course is ideal for students, job seekers, teachers, and professionals who want to improve their personality, soft skills, and public speaking abilities.",
  },
  {
    question: "What topics are covered in the course?",
    answer:
      "The course includes modules on body language, verbal & non-verbal communication, self-confidence, grooming, public speaking, interview skills, and group discussions.",
  },
  {
    question: "Is the course available in different learning formats?",
    answer:
      "Yes, the course is offered in Online, Offline, and Blended formats to provide flexibility based on your schedule and location.",
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of all sessions and assignments, you will receive a recognized certificate in Personality Development & Communication Skills.",
  },
  {
    question: "What are the benefits of taking this course?",
    answer:
      "It helps improve your confidence, communication, and professional image—making you job-ready and effective in workplace or academic environments.",
  },
];

  return (
    <div className=" font-family overflow-hidden">
      <div className="bg-gray-50 text-gray-800">
        {/* 🔹 Hero Section with Background Image and Overlay Content */}
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          {/* Background Image */}
          <img
            src={PE} // Replace with your image import
            alt="Diploma in Teaching Skills"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 py-8">
            {/* Heading + Description */}
            <div className="mb-8 max-w-2xl space-y-4"
            data-aos="fade-up"
              data-aos-delay="200">
              <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
                Power Up Your Personality & Communication for Career Success
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                Enhance your confidence, body language, and communication skills
                to stand out in any professional setting. Master effective
                speaking, active listening, and interpersonal skills to boost
                your career growth.
              </p>
            </div>

            {/* 🔹 Centered Enroll Button */}
            <div className="flex justify-center"
            data-aos="fade-up"
              data-aos-delay="400">
              <button
                className="cursor-pointer px-8 py-2 bg-pink-600 hover:bg-pink-700 transition 
        rounded-lg text-white text-sm md:text-base shadow-xl"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Course Module */}

      <div className="px-4 md:px-10 py-12">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-bold text-2xl md:text-3xl"
          data-aos="fade-up">Course Overview</h1>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg"
          data-aos="fade-right"
            data-aos-delay="200">
            This course is designed to help learners enhance their
            self-confidence, communication style, and professional presence. It
            focuses on key areas such as body language, voice modulation, public
            speaking, group discussions, and personal grooming.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg"
          data-aos="fade-left"
            data-aos-delay="300">
            Through interactive sessions and practical activities, participants
            develop strong interpersonal skills, emotional intelligence, and the
            ability to express themselves effectively in both personal and
            professional environments.
          </p>
        </div>
      </div>

      {/* ================= Course Modules ================= */}
      <div className="px-6">
        <section className="bg-gradient-to-b from-secondary to-gray-200 p-8 rounded-xl 
        shadow mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-6"  data-aos="fade-down">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PDModules.slice(0, 9).map((mod, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between  w-full"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h4 className="font-bold text-lg text-black mb-2">
                  {mod.title}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base space-y-1 overflow-y-auto">
                  {mod.topics.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/*  ================= WhatYouWillLearn ================= */}
      <div className="bg-white py-10 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row 
      items-center gap-10" data-aos="fade-up">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center ">
          <img
            src={Vector5}
            alt=""
            className="absolute bottom-0 md:h-120 h-100 "
          />
          <div className="relative w-[300px] h-[340px] md:w-[380px] md:h-[420px] overflow-hidden  
          rounded-tr-[180px] rounded-br-[180px] rounded-tl-[5px] rounded-bl-[5px] shadow-2xl">
            <img
              src={Speak}
              alt="Learning Visual"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2" data-aos="zoom-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            What You Will Learn
          </h2>

          <ul className="space-y-4">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-gray-700 text-base leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============== ClassDuration ============== */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src={Dis}
          alt="class background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-between h-full px-6 md:px-20 py-10
       text-white"
        >
          {/* Class Duration Box - Top Left */}
          <div className="max-w-md bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md"
           data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Class Duration
            </h2>
            <ul className="text-sm md:text-base list-disc pl-5 space-y-1">
              <li>
                Total Duration: 3 to 6 months (depending on the pace you choose)
              </li>
              <li>Weekly Hours: 6–10 hours</li>
              <li>Learning Modes: Online / In-Person / Hybrid</li>
              <li>
                Flexible Learning: Ideal for working professionals, students,
                and homemakers.
              </li>
            </ul>
          </div>

          {/* Eligibility Criteria Box - Bottom Right */}

          <div
            className="max-w-md bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md 
        self-end mt-10 md:mt-0"  data-aos="fade-right"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Eligibility Criteria
            </h2>
            <ul className="text-sm md:text-base list-disc pl-5 space-y-1">
              <li>Minimum qualification: 12th grade pass or equivalent</li>
              <li>
                Fresh graduates, aspiring teachers, and professionals welcome
              </li>
              <li>No prior teaching experience required</li>
              <li>Basic proficiency in English (spoken and written)</li>
            </ul>
          </div>
          <div className="flex justify-end mt-4 md:pr-80" data-aos="fade-down">
            <button className="cursor-pointer mt-4 px-5 py-2 bg-pink-500 text-white 
            shadow-2xl rounded-lg hover:bg-pink-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Who This Program Is Made For ================= */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
        data-aos="fade-up">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2" data-aos="fade-right">
            <img
              src={programImage}
              alt="Program Participants"
              className="relative rounded-xl shadow-xl w-full z-10"
            />
            {/* Decorative border effect */}
            <div className="absolute top-3 left-3 w-full h-full  bg-green-300 rounded-xl shadow-md z-0 "></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-10" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who This Program Is Made For
            </h2>

            {/* Bullet Item */}
            <div className="flex items-start gap-3"
            data-aos="fade-up"
              data-aos-delay="100">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Students and Fresh Graduates:
                </strong>{" "}
                Looking to build confidence, improve communication, and prepare
                for campus placements or job interviews.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3"
            data-aos="fade-up"
              data-aos-delay="200">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">Working Professionals:</strong>{" "}
                Seeking to enhance soft skills, leadership presence, and
                interpersonal effectiveness for career growth.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3"
            data-aos="fade-up"
              data-aos-delay="300">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Career Changers and Job Seekers:
                </strong>{" "}
                Wanting to sharpen their personality and presentation for a
                successful transition into new roles or industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CourseInfoSection ================= */}
      <div className="bg-white md:px-34 px-4 py-10 flex flex-col lg:flex-row items-center lg:items-start gap-5">
        {/* Left Side */}
        <div className="flex-1 space-y-8 lg:px-10 w-full" data-aos="fade-up">
          {/* Eligibility */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 md:text-lg text-md">
              <li>
                <span className="font-semibold md:text-lg text-md">
                  Minimum qualification:{" "}
                </span>
                10, +2 pass or Graduation (recommended for aspiring / working
                teachers)
              </li>
              <li>Graduates from any stream</li>
              <li>
                Aspiring teachers, current educators, homemakers, and career
                changers
              </li>
            </ul>
          </div>

          {/* Course Fee */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              Course Fee
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 md:text-lg text-md">
              <li>
                <span className="font-semibold">Certificate Level</span> –
                ₹9,500
              </li>
              <li>
                <span className="font-semibold">Graduate Level</span> – ₹15,500
              </li>
              <li>
                <span className="font-semibold">Post Graduate Level</span> –
                ₹25,500
              </li>
              <li>
                Installment options and merit-based scholarships are available.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Related Courses */}
        <div className="flex-1 lg:max-w-sm w-full" data-aos="zoom-in">
          <div className="bg-white shadow-lg rounded-lg border-l-4 border-green-500 p-6 text-center lg:text-left">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Related Courses
            </h3>
            <ul className="space-y-3 text-gray-700 md:text-lg text-md">
              <li>Certificate in Teaching Skills</li>
              <li>Certificate in ECCE</li>
              <li>Personality Development and Communication Skills</li>
              <li>Certificate in Modern Teaching Methodologies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= Assessment & Certification ================= */}
      <section className="py-10 px-4 " >
        <div className="max-w-3xl shadow-md mx-auto text-center bg-gray-50 px-10 py-5"
        data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Assessment and Certification
          </h2>

          <div className="bg-white rounded-lg shadow p-6 space-y-4 text-left"
          data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            {assessments.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <p className="text-gray-700">
                  <strong>{item.title}</strong> {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Turn Your Passion for Teaching Into a Profession ================= */}
      <div
        className="bg-white py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center 
                justify-center gap-10 "
      >
        {/* Left Content */}
        <div className="max-w-4xl"
        data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Step Into a Rewarding Career in Education
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4 leading-loose">
            Strong personality and communication skills are essential for anyone
            looking to make a mark in the education field. Whether you're
            speaking to students, parents, or colleagues, the ability to express
            yourself clearly and confidently builds trust and leadership.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mb-6">
            TThis course is designed to help you develop a positive attitude,
            refine your body language, and enhance verbal and non-verbal
            communication. With these skills, you'll not only perform better in
            interviews and classrooms but also grow personally and
            professionally.
          </p>
          <button className="shadow-xl cursor-pointer bg-button hover:bg-pink-700 text-white px-6 py-2 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[400px]"
        data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200">
          <img
            src={girlImage}
            alt="Student"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* ================= Frequently Asked Questions ================= */}
      <div className="bg-gray-50 mb-2" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 py-10 ">
          <h2 className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-up"
            data-aos-delay="100">
            FAQs – Certification in Teaching Skills
          </h2>
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded mb-4 bg-white shadow"
            data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center"
              >
                <span className="font-medium md:text-xl text-md">
                  {faq.question}
                </span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 md:text-lg text-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PCTeach;
