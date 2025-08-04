import React, { useState } from "react";
import { CheckCircle, BookOpen, Users, CalendarDays } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Teaching from "../../assets/TeachingSkill.jpg";
import learnImage from "../../assets/learnImage.jpg";
import Vector5 from "../../assets/Vector5.png";
import bgImg from "../../assets/bgImg.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";

const learningPoints = [
  "Understand the basic principles of effective teaching and learning.",
  "Plan and deliver structured, engaging lessons.",
  "Manage classrooms with confidence and positive discipline strategies.",
  "Build professional confidence as a new or returning educator.",
  "Communicate effectively with students and colleagues.",
  "Identify different learning styles and adapt your teaching accordingly.",
];

const CTSModules = [
  {
    title: "Module 1: Essentials of a Good Teacher",
    topics: [
      "Roles and Responsibilities of a Teacher",
      "Professional Conduct and Ethics",
      "Building Teacher Identity and Confidence",
      "Growth Mindset and Reflective Practice",
    ],
  },
  {
    title: "Module 2: Understanding the Learner",
    topics: [
      "Age-wise Characteristics of Learners",
      "Diversity in Learning Needs",
      "Social and Emotional Development",
      "Motivation and Engagement Techniques",
    ],
  },
  {
    title: "Module 3: Planning and Preparing Lessons",
    topics: [
      "Lesson Objectives (SMART Goals)",
      "Structuring a Lesson (Introduction, Delivery, Closure)",
      "Integrating NEP 2020 Competencies into Lesson Planning",
      "Using Worksheets, Charts, and TLMs",
    ],
  },
  {
    title: "Module 4: Teaching Methodologies",
    topics: [
      "Direct, Inquiry-Based, and Collaborative Methods",
      "Activity-Based Learning (ABL)",
      "Storytelling and Role Play",
      "Multisensory and Experiential Approaches",
    ],
  },
  {
    title: "Module 5: Managing the Classroom",
    topics: [
      "Establishing Routines and Rules",
      "Managing Mixed-Ability Classrooms",
      "Positive Behaviour Techniques",
      "Dealing with Disruptions",
    ],
  },
  {
    title: "Module 6: Communication Skills for Teachers",
    topics: [
      "Clear Instruction and Feedback",
      "Body Language and Voice Modulation",
      "Building Rapport with Students",
      "Parent-Teacher Communication",
    ],
  },
  {
    title: "Module 7: Basics of Assessment",
    topics: [
      "Types of Assessment (Oral, Written, Observational)",
      "Formative vs. Summative Assessment",
      "Designing Simple Assessments",
      "Giving Constructive Feedback",
    ],
  },
  {
    title: "Module 8: EdTech and Digital Tools",
    topics: [
      "Basics of Using Technology in Teaching",
      "Simple Tools: PPT, Google Forms, YouTube, PDFs",
      "Online Teaching Etiquette",
      "Screen-Time Management for Students",
    ],
  },
  {
    title: "Module 9: Microteaching and Practicum",
    topics: [
      "Practice Teaching Sessions",
      "Peer Feedback and Reflection",
      "Video Recordings and Self-Review",
      "Final Lesson Presentation",
    ],
  },
];

const assessments = [
  {
    title: "Short Quizzes",
    content:
      "Quick assessments after modules to test conceptual understanding.",
  },
  {
    title: "Practical Demonstrations",
    content: "Real-time teaching demos to evaluate your classroom skills.",
  },
  {
    title: "Lesson Plan Submission",
    content: "Design and submit effective lesson plans for evaluation.",
  },
  {
    title: "Final Viva or Teaching Demo",
    content:
      "Comprehensive final assessment through viva or teaching demonstration.",
  },
  {
    title: "Certificate Issued on Completion",
    content:
      "Diploma awarded with grade report upon successful completion of all criteria.",
  },
];

const TeachingCertificate = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  const faqData = [
  {
    question: "What is the Certification in Teaching Skills?",
    answer:
      "It’s a short-term professional program designed to equip aspiring and in-service teachers with essential teaching methods, classroom strategies, and soft skills needed to succeed in educational settings.",
  },
  {
    question: "Who can apply for this course?",
    answer:
      "Anyone who has completed 10+2 or holds a graduation degree can apply. It's ideal for aspiring teachers, NGO educators, career changers, and fresh graduates.",
  },
  {
    question: "What does the course cover?",
    answer:
      "The course includes modules on modern pedagogy, classroom management, child development, learning styles, and digital teaching tools to prepare educators for dynamic classrooms.",
  },
  {
    question: "Is this course available online?",
    answer:
      "Yes, the Certification in Teaching Skills is available in Online, Offline, and Blended formats, allowing flexible learning based on your convenience.",
  },
  {
    question: "Will I receive a recognized certificate?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate accredited by reputed educational boards and recognized by institutions nationally and internationally.",
  },
  {
    question: "Are there any job opportunities after this course?",
    answer:
      "Yes, learners can pursue opportunities in schools, learning centers, NGOs, and online teaching platforms. Internship and placement support is also available.",
  },
];


  return (
    <div className=" font-family">
     <div className="bg-gray-50 text-gray-800">
  {/* 🔹 Hero Section with Background Image and Overlay Content */}
  <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
    {/* Background Image */}
    <img
      src={Teaching} // Replace with your image import
      alt="Diploma in Teaching Skills"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 py-8">
      {/* Heading + Description */}
      <div className="mb-8 max-w-2xl space-y-4">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
          Certification in Teaching Skills (CTS)
        </h1>
        <p className="text-sm md:text-lg leading-relaxed">
          A dynamic short-term program for aspiring and in-service
          teachers to enhance practical classroom teaching and
          communication skills.
        </p>
      </div>

      {/* 🔹 Course Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl px-2 md:px-4 mb-6">
        {[
          { icon: "📅", title: "Duration", desc: "1–3 Months" },
          { icon: "🎓", title: "Eligibility", desc: "10, +2 / Any Graduate" },
          { icon: "🖥️", title: "Mode", desc: "Online / Offline / Blended" },
          {
            icon: "👥",
            title: "Ideal For",
            desc: "Aspiring teachers, NGOs, aides",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-90 shadow p-4 rounded text-gray-800"
          >
            <h3 className="font-bold text-base md:text-lg text-green-600 flex 
            items-center justify-center gap-2">
              <span>{item.icon}</span> {item.title}
            </h3>
            <p className="text-sm md:text-base mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔹 Centered Enroll Button */}
      <div className="flex justify-center">
        <button className="cursor-pointer px-8 py-2 bg-pink-600 hover:bg-pink-700 transition 
        rounded-full text-white text-sm md:text-base">
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
            The Certificate in Teaching Skills is a foundational program
            designed to equip aspiring and current educators with essential
            teaching techniques and classroom strategies. This short-term{" "}
            <span className="font-semibold text-black">course</span> focuses on
            practical knowledge that prepares learners to confidently manage a
            classroom, design engaging lessons, and support student learning
            effectively.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
            Whether you're stepping into the teaching profession or looking to
            strengthen your existing skills, this program provides the tools and
            understanding needed to deliver meaningful learning experiences
            across different educational settings.
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
            {CTSModules.slice(0, 9).map((mod, idx) => (
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
              src={learnImage}
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
          src={bgImg}
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
                <strong className="text-xl">
                  Future Teachers Ready to Begin:
                </strong>{" "}
                Step into the world of teaching with confidence. Master
                essential instructional techniques and effective classroom
                management to kick-start a rewarding teaching journey.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Experienced Educators Seeking Growth:
                </strong>{" "}
                Strengthen your existing teaching skills with updated
                methodologies, innovative pedagogical tools, and earn a
                recognized certification to move ahead in your teaching career.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  New Career Explorers & Recent Graduates:
                </strong>{" "}
                Switching fields or just graduated? This program provides
                practical training, flexible learning, and a smooth entry into
                the education sector.
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
            Whether you're starting your teaching journey or looking to enhance
            your skills, SkillEd’s Diploma in Teaching Skills equips you with
            the tools to thrive in modern classrooms.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mb-6">
            Join thousands of passionate individuals who have shaped their
            futures through professional training. With SkillEd, you're not just
            learning — you're preparing to inspire the next generation.
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
      <h2 className="text-3xl font-bold mb-8 text-center">FAQs – Certification in Teaching Skills</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="border rounded mb-4 bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center"
          >
            <span className="font-medium md:text-xl text-md">{faq.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 md:text-lg text-md">{faq.answer}</div>
          )}
        </div>
      ))}
      
    </div>
    </div>
    </div>
  );
};

export default TeachingCertificate;

{
  /* Modules Section 
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Course Modules
          </h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-green-100 hover:bg-green-200 transition font-semibold text-left text-green-800 text-lg"
                >
                  <span>
                    ✅ Module {index + 1}: {module.title}
                  </span>
                  {openModule === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openModule === index && (
                  <ul className="px-6 py-4 list-disc text-gray-700 space-y-2">
                    {module.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>*/
}

{
  /* Assessment Section
        <div className="bg-white shadow-xl p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Assessment & Certification
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>Short Quizzes</li>
              <li>Practical Demonstrations</li>
              <li>Lesson Plan Submission</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Final Viva or Teaching Demo</li>
              <li>Certificate Issued on Completion</li>
            </ul>
          </div>
        </div> */
}
