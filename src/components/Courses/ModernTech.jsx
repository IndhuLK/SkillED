import React, { useState } from "react";
import { CheckCircle, BookOpen, Users, CalendarDays } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import BgModern from "../../assets/BgModern.jpg";
import LearnMD from "../../assets/LearnMD.jpg";
import Vector5 from "../../assets/Vector5.png";
import MD from "../../assets/MD.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";

const learningPoints = [
  "Master innovative and learner-centered teaching strategies tailored for 21st-century classrooms.",
  "Gain expertise in integrating digital tools, gamification, and blended learning in your lesson plans.",
  "Understand classroom management techniques to foster a positive and inclusive environment",
  "Develop skills to assess learning outcomes effectively using modern evaluation tools.",
  "Enhance your ability to design engaging curriculum content aligned with NEP 2020 goals.",
];

const ModernTeachModules = [
  {
    title: "Module 1: Foundations of Modern Pedagogy",
    topics: [
      "Core principles of contemporary education",
      "Student-centered and constructivist approaches",
      "Role of teacher as facilitator",
      "Understanding learning theories",
      "Aligning pedagogy with NEP 2020",
    ],
  },
  {
    title: "Module 2: 21st Century Skills in Education",
    topics: [
      "Critical Thinking and Problem Solving",
      "Creativity and Innovation in the classroom",
      "Collaboration and Communication skills",
      "Embedding skills into subject teaching",
      "Real-world application of 21st-century skills",
    ],
  },
  {
    title: "Module 3: Digital & Blended Learning Strategies",
    topics: [
      "Using digital tools for instruction",
      "Designing blended and flipped classrooms",
      "Effective use of LMS platforms",
      "Gamification and interactive content",
      "Tech integration with NEP guidelines",
    ],
  },
  {
    title: "Module 4: Innovative Classroom Practices",
    topics: [
      "Project-Based and Inquiry-Based Learning",
      "Experiential and Activity-Based Teaching",
      "Design Thinking in Education",
      "Real-life learning and contextualization",
      "Student-led learning practices",
    ],
  },
  {
    title: "Module 5: Assessment for Learning",
    topics: [
      "Types of assessment: formative vs summative",
      "Continuous and comprehensive evaluation (CCE)",
      "Feedback for student growth",
      "Rubrics and performance-based assessments",
      "Assessment tools and digital platforms",
    ],
  },
  {
    title: "Module 6: Inclusive & Differentiated Instruction",
    topics: [
      "Understanding learner diversity",
      "Differentiating content, process, and product",
      "Supporting children with special needs",
      "Creating inclusive lesson plans",
      "Universal Design for Learning (UDL)",
    ],
  },
  {
    title: "Module 7: Student Engagement & Motivation",
    topics: [
      "Techniques to improve student attention",
      "Using gamification and storytelling",
      "Intrinsic vs extrinsic motivation",
      "Building a positive classroom culture",
      "Using rewards and recognition effectively",
    ],
  },
  {
    title: "Module 8: Classroom Management & Discipline",
    topics: [
      "Establishing rules and routines",
      "Positive behavior reinforcement",
      "Conflict resolution strategies",
      "Time and space management",
      "Managing large classrooms effectively",
    ],
  },
  {
    title: "Module 9: Reflective Teaching & Professional Growth",
    topics: [
      "Importance of reflective practices",
      "Maintaining a teaching journal or portfolio",
      "Peer learning and mentoring",
      "Setting professional goals",
      "Building a growth mindset",
    ],
  },
];

const assessments = [
  {
    title: "Continuous Assessment:",
    content:
      "Regular evaluation through assignments, lesson planning exercises, and peer reflections to monitor ongoing learning and skill development.",
  },
  {
    title: "Classroom Demonstration:",
    content:
      "Hands-on teaching sessions where learners demonstrate modern methodologies in mock or real classroom setups to showcase practical understanding.",
  },
  {
    title: "Final Project Submission:",
    content:
      "A comprehensive final project involving the integration of digital tools, innovative strategies, and NEP-aligned approaches into a lesson plan or teaching module.",
  },
  {
    title: "Certificate Awarded:",
    content:
      "Upon successful completion of all modules and evaluations, participants receive a Certificate in Modern Teaching Methodologies along with performance feedback.",
  },
];

const ModernTech = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
  {
    question: "What is the Certificate in Modern Teaching Methodologies?",
    answer:
      "It is a professional development course designed to equip educators with innovative, learner-centered, and NEP 2020-aligned teaching strategies for modern classrooms.",
  },
  {
    question: "Who can enroll in this course?",
    answer:
      "Aspiring and in-service teachers, educators, curriculum developers, and education professionals with at least 10+2 qualification or a graduate degree can enroll.",
  },
  {
    question: "Is the course aligned with NEP 2020?",
    answer:
      "Yes, the course content is fully aligned with the National Education Policy (NEP) 2020 and includes global best practices in teaching and assessment.",
  },
  {
    question: "What is the mode and duration of the course?",
    answer:
      "The course is available in Online, Offline, and Blended formats and can be completed within 1 to 3 months based on your pace.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, learners will receive a Certificate in Modern Teaching Methodologies upon successful completion of all assessments and course requirements.",
  },
  {
    question: "What are the career benefits of this course?",
    answer:
      "It enhances your teaching skills, boosts your employability, supports career growth in academic institutions, and strengthens your resume with NEP-based qualifications.",
  },
];


  return (
    <div className=" font-family">
      <div className="bg-gray-50 text-gray-800">
        {/* 🔹 Hero Section with Background Image and Overlay Content */}
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          {/* Background Image */}
          <img
            src={BgModern} // Replace with your image import
            alt="Diploma in Teaching Skills"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 py-8">
            {/* Heading + Description */}
            <div className="mb-8 max-w-2xl space-y-4">
              <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
                Digital-First Teaching Strategies for Dynamic Classrooms
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                SDigital-First Teaching Strategies empower educators to create
                engaging, tech-integrated classrooms that support interactive,
                student-centered learning. These methods enhance participation,
                personalize instruction, and build essential 21st-century
                skills.
              </p>
            </div>

            {/* 🔹 Centered Enroll Button */}
            <div className="flex justify-center">
              <button
                className="cursor-pointer px-8 py-2 bg-pink-600 hover:bg-pink-700 transition 
        rounded-full text-white text-sm md:text-base"
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
          <h1 className="font-bold text-2xl md:text-3xl">Course Overview</h1>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
            The Certificate in Modern Teaching Methodologies is a comprehensive
            program designed to equip educators with the latest tools,
            techniques, and strategies for effective 21st-century teaching. This
            course blends theory with hands-on practice, empowering teachers to
            create engaging, inclusive, and learner-centric classrooms.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
            Participants will explore innovative pedagogical approaches, digital
            teaching aids, classroom management strategies, and assessment
            techniques aligned with NEP 2020. Whether you're a new teacher or an
            experienced educator, this course will enhance your ability to
            inspire and educate diverse learners in dynamic and evolving
            educational environments.
          </p>
        </div>
      </div>

      {/* ================= Course Modules ================= */}
      <div className="px-6">
        <section className="bg-gradient-to-b from-secondary to-gray-200 p-8 rounded-xl shadow mb-16">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ModernTeachModules.slice(0, 9).map((mod, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow flex flex-col justify-between  w-full"
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
      <div className="bg-white py-10 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={Vector5}
            alt=""
            className="absolute bottom-0 md:h-120 h-100"
          />
          <div className="relative w-[300px] h-[340px] md:w-[380px] md:h-[420px] overflow-hidden  rounded-tr-[180px] rounded-br-[180px]">
            <img
              src={LearnMD}
              alt="Learning Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
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
          src={MD}
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
          <div className="max-w-md bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md">
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
        self-end mt-10 md:mt-0"
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
          <div className="flex justify-end mt-4 md:pr-80">
            <button className="cursor-pointer mt-4 px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Who This Program Is Made For ================= */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src={programImage}
              alt="Program Participants"
              className="relative rounded-xl shadow-xl w-full z-10"
            />
            {/* Decorative border effect */}
            <div className="absolute top-3 left-3 w-full h-full  bg-green-300 rounded-xl shadow-md z-0 "></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who This Program Is Made For
            </h2>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">Aspiring Educators:</strong> who
                want to build a strong foundation in modern classroom practices.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">In-Service Teachers:</strong> Aiming
                to upgrade their skills with contemporary teaching techniques
                and NEP 2020 guidelines.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  School Leaders and Coordinators:
                </strong>{" "}
                Seeking to implement innovative and learner-centric approaches
                in their institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CourseInfoSection ================= */}
      <div className="bg-white md:px-34 px-4 py-10 flex flex-col lg:flex-row items-center lg:items-start gap-5">
        {/* Left Side */}
        <div className="flex-1 space-y-8 lg:px-10 w-full">
          {/* Eligibility */}
          <div>
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
          <div>
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
        <div className="flex-1 lg:max-w-sm w-full">
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
      <section className="py-10 px-4 ">
        <div className="max-w-3xl mx-auto text-center bg-gray-50 px-10 py-5">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Assessment and Certification
          </h2>

          <div className="bg-white rounded-lg shadow p-6 space-y-4 text-left">
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
        <div className="max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Step Into a Rewarding Career in Education
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4 leading-loose">
            The Certificate in Modern Teaching Methodologies equips aspiring and
            in-service educators with the tools, techniques, and insights needed
            to thrive in today’s dynamic classrooms. By aligning with NEP 2020
            and incorporating global best practices, this course ensures you
            stay ahead with contemporary approaches in pedagogy, child
            engagement, and curriculum design.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mb-6">
            Whether you’re entering the teaching profession or upgrading your
            skills, this program opens doors to diverse opportunities in
            schools, educational institutions, and digital learning platforms.
            With a strong foundation in both theoretical knowledge and practical
            strategies, you’ll be empowered to make a real difference in the
            lives of your learners.
          </p>
          <button className="bg-button hover:bg-pink-700 text-white px-6 py-2 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[400px]">
          <img
            src={girlImage}
            alt="Student"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* ================= Frequently Asked Questions ================= */}
      <div className="bg-gray-50 mb-2">
        <div className="max-w-4xl mx-auto px-4 py-10 ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            FAQs – Certification in Teaching Skills
          </h2>
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded mb-4 bg-white">
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

export default ModernTech;
