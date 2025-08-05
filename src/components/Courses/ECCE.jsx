import React, { useState, useEffect } from "react";
import AOS from "aos";
import { CheckCircle, BookOpen, Users, CalendarDays } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Teaching from "../../assets/TeachingSkill.jpg";
import Child from "../../assets/Child.jpg";
import Vector5 from "../../assets/Vector5.png";
import bgImg from "../../assets/bgImg.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";

const learningPoints = [
  "Understand child development stages (0–8 years) and how to support physical, emotional, and cognitive growth.",
  "Learn play-based and child-centered teaching methods including Montessori, storytelling, and art activities.",
  "Plan engaging daily routines, lesson plans, and theme-based curriculum for preschool levels.",
  "Create and use low-cost teaching-learning materials (TLMs) to enhance classroom learning.",
  "Assess child progress through observation, portfolios, and play-based assessment tools.",
  "Develop professional skills like classroom management, parent communication, and inclusive practices.",
];

const ECCEModules = [
  {
    title: "Module 1: Understanding Early Childhood (0–8 years)",
    topics: [
      "Domains of Development: Physical, Cognitive, Language, Socio-emotional",
      "Milestones of Development (0–3, 3–6, 6–8 years)",
      "Importance of Play in Early Learning",
      "ECCE Philosophy as per NEP 2020",
      "ECCE in Indian and Global Context",
    ],
  },
  {
    title: "Module 2: Child-Centered Pedagogy",
    topics: [
      "Activity-Based, Play-Way, and Experiential Learning",
      "Montessori and Waldorf Approaches – simplified overview",
      "Use of Puppetry, Music, Rhymes, Stories",
      "Indoor and Outdoor Play",
      "Art, Movement, and Expression in Daily Routines",
    ],
  },
  {
    title: "Module 3: Planning the Preschool Day",
    topics: [
      "Daily Routine and Time Table for Pre-Nursery, Nursery, KG",
      "Circle Time, Story Time, Free Play",
      "Weekly and Monthly Curriculum Planning",
      "Festivals, Celebrations, and Theme-based Learning",
      "Integration of Indian Culture and Values",
    ],
  },
  {
    title: "Module 4: Learning Areas in ECCE",
    topics: [
      "Language and Literacy",
      "Numeracy and Early Math",
      "Environmental Awareness and Curiosity",
      "Fine & Gross Motor Skills",
      "Socio-emotional Skills and Life Skills",
    ],
  },
  {
    title: "Module 5: Teaching-Learning Materials (TLMs)",
    topics: [
      "Development of Low-Cost / No-Cost TLMs",
      "Use of Flashcards, Manipulatives, Charts, Puzzles",
      "Toy-Based Pedagogy (as recommended in NEP 2020)",
      "Setting up Learning Corners and Activity Zones",
    ],
  },
  {
    title: "Module 6: Observation and Assessment in ECCE",
    topics: [
      "Developmental Checklists",
      "Anecdotal Records and Portfolios",
      "Child Progress Reports",
      "Conducting Assessments through Play and Activities",
      "Communicating with Parents",
    ],
  },
  {
    title: "Module 7: Inclusive and Safe Learning Environment",
    topics: [
      "Supporting Children with Special Needs",
      "Health, Hygiene and Nutrition for Young Children",
      "Safety, First Aid, and Emergency Response",
      "Creating a Safe, Nurturing, and Gender-Inclusive Space",
    ],
  },
  {
    title: "Module 8: Professional Skills for ECCE Educators",
    topics: [
      "Teacher as a Nurturer and Role Model",
      "Communication with Parents and Caregivers",
      "Classroom Management in Early Years",
      "Reflective Practices and Continuous Learning",
      "Ethics and Responsibilities of an ECCE Teacher",
    ],
  },
  {
    title: "Module 9: Practicum / Field Project",
    topics: [
      "Observation in a Preschool / Anganwadi",
      "Activity Planning and Execution",
      "Documentation of Child Progress",
      "Submission of Teaching Aids Portfolio",
      "Presentation or Viva",
    ],
  },
];

const assessments = [
  {
    title: "Continuous Assessment:",
    content:
      "Ongoing evaluations through assignments, reflections, and practical projects that help track your learning progress throughout the course.",
  },
  {
    title: "Final Evaluation:",
    content:
      "A comprehensive review through activity-based teaching demonstrations or a viva, assessing your real-world teaching skills and understanding of ECCE principles.",
  },
  {
    title: "Certificate Issued:",
    content:
      "A Certificate in ECCE will be awarded upon successful completion of all modules, fieldwork, and the final practicum, along with a performance summary.",
  },
];

const ECCE = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
  {
    question: "What is the Certificate in ECCE program?",
    answer:
      "The Certificate in ECCE is a professional course designed to train individuals in early childhood education, focusing on the development and care of children aged 0–8 years.",
  },
  {
    question: "Who can enroll in the ECCE course?",
    answer:
      "Anyone who has completed 10+2 or holds a graduation degree can enroll. It's ideal for aspiring preschool teachers, fresh graduates, and those switching careers.",
  },
  {
    question: "What topics are covered in this course?",
    answer:
      "The course covers child development, play-based learning, classroom setup, child assessment, teaching aids, and inclusive education practices based on NEP 2020.",
  },
  {
    question: "Is the ECCE course available in flexible formats?",
    answer:
      "Yes, the ECCE course is offered in Online, Offline, and Blended learning modes to suit different learning preferences and schedules.",
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer:
      "Yes, after completing all modules and practicum requirements, you will receive a Certificate in ECCE recognized by reputed institutions.",
  },
  {
    question: "What are the career options after ECCE?",
    answer:
      "You can work as a preschool teacher, daycare facilitator, curriculum planner, or assistant in early learning centers. The course also helps in qualifying for NGO or Anganwadi roles.",
  },
];


  return (
    <div className=" font-family overflow-hidden">
      <div className="bg-gray-50 text-gray-800"
      >
        {/* 🔹 Hero Section with Background Image and Overlay Content */}
        <div className="relative w-full h-[600px] md:h-[650px]">
          {/* Background Image */}
          <img
            src={Teaching} // Replace with your image import
            alt="Diploma in Teaching Skills"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center
           text-white text-center px-4 py-8">
            {/* Heading + Description */}
            <div className="mb-8 max-w-2xl space-y-4">
              <h1 className="text-2xl md:text-5xl font-extrabold leading-tight"
              data-aos="fade-up">
                Start Your Journey as an Early Childhood Educator
              </h1>
              <p className="text-sm md:text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay='100'>
                Start your journey as an Early Childhood Educator and make a
                lasting impact on young minds. Nurture creativity, curiosity,
                and confidence in children while building a fulfilling career.
              </p>
            </div>

            {/* 🔹 Centered Enroll Button */}
            <div className="flex justify-center">
              <button
                className="cursor-pointer px-8 py-2 bg-button hover:bg-pink-700 transition 
        rounded-lg text-white text-sm md:text-base shadow-xl"
        data-aos="zoom-in" data-aos-delay="200"
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
          data-aos='fade-up'>Course Overview</h1>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg"
          data-aos='fade-left'>
            The Certificate in ECCE is designed to equip aspiring educators with
            the knowledge and skills needed to support the holistic development
            of children aged 0–6 years. This program focuses on key areas such
            as child psychology, early learning principles, classroom
            management, and child health and nutrition. Through a blend of
            theoretical and practical training, learners gain the confidence to
            create engaging, age-appropriate learning experiences.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg"
           data-aos='fade-right'>
            Whether you're beginning your teaching journey or enhancing your
            existing skills, this course opens the door to meaningful careers in
            preschools, daycare centers, and early learning programs. With
            flexible learning modes and expert guidance, the Certificate in ECCE
            prepares you to become a caring, responsible, and effective early
            childhood educator.
          </p>
        </div>
      </div>

      {/* ================= Course Modules ================= */}
      <div className="px-6" data-aos="fade-up">
        <section className="bg-gradient-to-b from-secondary to-gray-200 p-8 
        rounded-xl shadow mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-6"  data-aos="fade-down">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECCEModules.slice(0, 9).map((mod, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow flex flex-col justify-between  w-full"
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
      items-center gap-10" data-aos="fade-left">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={Vector5}
            alt=""
            className="absolute bottom-0 md:h-120 h-100"
          />
          <div className="relative w-[300px] h-[340px] md:w-[380px] md:h-[420px] overflow-hidden 
           rounded-tr-[180px] rounded-br-[180px] rounded-tl-[5px] rounded-bl-[5px] shadow-xl">
            <img
              src={Child}
              alt="Learning Visual"
              className="w-full h-full object-cover"
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
      <div className="relative w-full h-[600px] overflow-hidden"
     >
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
          <div className="max-w-md bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-md"
          data-aos='fade-left'>
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
        data-aos='fade-right'
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
            <button className="cursor-pointer mt-4 px-5 py-2 bg-pink-500 text-white 
            rounded-lg shadow-xl hover:bg-pink-600 transition" data-aos='fade-down'>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Who This Program Is Made For ================= */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2"
          data-aos="zoom-in-right">
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
            <div className="flex items-start gap-3"
            data-aos="fade-left" data-aos-delay="200">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Future Teachers Ready to Begin:
                </strong>{" "}
                Step into the world of early childhood education with
                confidence. Master essential techniques in child development,
                playful learning, and classroom setup to begin a meaningful
                teaching journey.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3"
            data-aos="fade-left" data-aos-delay="300">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Experienced Educators Seeking Growth:
                </strong>{" "}
                Upgrade your teaching approach with the latest ECCE methods,
                innovative pedagogical tools, and NEP 2020-aligned practices.
                Earn a recognized certification to advance your professional
                path.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3"
            data-aos="fade-left" data-aos-delay="400">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  New Career Explorers & Recent Graduates:
                </strong>{" "}
                Whether you're switching careers or just starting out, this
                program gives you hands-on training, flexible learning options,
                and a smooth entry into preschool and early education roles.
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
      <section className="py-10 px-4 "
      data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center bg-gray-50 px-10 py-5"
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
              <div key={index} className="flex items-start gap-3"
              data-aos="fade-right"
                data-aos-delay={`${300 + index * 100}`}>
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
                data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
      >
        {/* Left Content */}
        <div className="max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Step Into a Rewarding Career in Education
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4 leading-loose">
            A career in early childhood education is more than just teaching –
            it's about shaping young minds and building the foundation for
            lifelong learning. With the Certificate in ECCE, you’ll gain the
            knowledge, practical skills, and confidence to work in preschools,
            daycare centers, and early learning programs.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mb-6">
            This program prepares you to create nurturing, engaging, and
            inclusive environments where children can grow socially,
            emotionally, and intellectually. Step into a meaningful profession
            that brings joy, purpose, and the chance to make a lasting impact.
          </p>
          <button className="cursor-pointer shadow-xl bg-button hover:bg-pink-700 text-white px-6 py-2 rounded-md">
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
      <div className="bg-gray-50 mb-2"
      data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 py-10 ">
          <h2 className="text-3xl font-bold mb-8 text-center">
            FAQs – Certification in Teaching Skills
          </h2>
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded mb-4 bg-white shadow">
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

export default ECCE;
