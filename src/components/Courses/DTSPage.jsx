// DTS Course Detail Page UI - React + Tailwind CSS
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import DP from "../../assets/Dp.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";

const courseModules = [
  {
    title: "Module 1: Foundations of Education",
    topics: [
      "Educational Philosophy & Psychology",
      "Child Development and Learning (0–18 years)",
      "Inclusive and Equitable Education (NEP 2020 focus)",
      "Holistic Development and Lifelong Learning",
    ],
  },
  {
    title: "Module 2: Understanding Learners",
    topics: [
      "Stages of Learner Development",
      "Multiple Intelligences and Learning Styles",
      "Socio-emotional Needs of Learners",
      "Differentiated Instruction & Classroom Diversity",
    ],
  },
  {
    title: "Module 3: Pedagogy and Classroom Practices",
    topics: [
      "Constructivist & Experiential Learning",
      "Bloom’s Taxonomy and Lesson Planning",
      "Integration of Art, Sports & ICT",
      "Activity-Based and Project-Based Learning",
      "Storytelling, Role Play, Games in Teaching",
      "Using TLMs (Teaching-Learning Materials)",
    ],
  },
  {
    title: "Module 4: Curriculum and Assessment",
    topics: [
      "Competency-based Curriculum Design",
      "Continuous and Comprehensive Evaluation (CCE)",
      "Formative vs Summative Assessment",
      "Rubrics, Portfolios, and Anecdotal Records",
      "Use of Assessment Data to Support Learning",
    ],
  },
  {
    title: "Module 5: Language & Communication in Education",
    topics: [
      "Multilingualism and Mother Tongue Emphasis (NEP-aligned)",
      "Classroom Language: Clarity, Tone, Scaffolding",
      "Listening, Speaking, Reading, Writing (LSRW)",
      "Communicative English for Teachers",
      "Parent Communication & Reporting",
    ],
  },
  {
    title: "Module 6: Use of Digital Tools in Education",
    topics: [
      "Digital Literacy for Teachers",
      "EdTech Tools: Google Classroom, Zoom, Kahoot, Padlet, etc.",
      "Creating Digital Content",
      "Safe and Responsible Use of Technology",
      "AI and Technology Integration in Classrooms",
    ],
  },
  {
    title: "Module 7: Classroom Management & Professionalism",
    topics: [
      "Creating a Positive Learning Environment",
      "Time Management & Class Routines",
      "Behaviour Management & Conflict Resolution",
      "Teacher as a Reflective Practitioner",
      "Professional Ethics & CPD",
    ],
  },
  {
    title: "Module 8: Internship / Practicum",
    topics: [
      "Observations of Real Classrooms",
      "Micro Teaching & Peer Teaching",
      "Delivery of Lessons using Multiple Methods",
      "Self-Evaluation and Mentor Feedback",
      "Reflective Journal Submission",
    ],
  },
];

const assessments = [
  {
    title: "Formative:",
    content: "Lesson plans, presentations, reflections",
  },
  {
    title: "Summative:",
    content: "Final written/practical exam + teaching demonstration",
  },
  {
    title: "Internship:",
    content: "30 hours minimum with evaluation",
  },
  {
    title: "Certification:",
    content: "On successful completion, diploma is awarded with grade report",
  },
];

const DTSPage = () => {
  const topics = [
    "Child Psychology & Pedagogy",
    "Modern Teaching Methodologies",
    "Classroom Management Skills",
    "Lesson Planning & Curriculum Design",
    "Assessment & Evaluation Techniques",
    "Effective Communication & Presentation",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Career Opportunities",
      answer:
        "Graduates can explore careers in teaching, educational content development, curriculum planning, and online education platforms. Specialized certifications may also open doors to NGO and government training programs.",
    },
    {
      question: "Curriculum",
      answer:
        "Our curriculum blends modern teaching strategies, child psychology, classroom management, and subject-specific pedagogy. It is designed to develop both theoretical understanding and practical teaching skills.",
    },
    {
      question: "Admission Process",
      answer:
        "Candidates must fill out the online application form, upload the required documents, and attend an interview (if applicable). Admission is granted based on eligibility and seat availability.",
    },
    {
      question: "Job Opportunity",
      answer:
        "Upon successful completion, students will be eligible for job placements in schools, training institutes, and online teaching platforms. Internship support is also provided during the course.",
    },
    {
      question: "Accreditation",
      answer:
        "The program is accredited by reputed educational boards and organizations, ensuring quality and recognition of your certification both nationally and internationally.",
    },
  ];

  return (
    <div className="font-family ">
      {/* ================= Hero Section ================= */}
      <div className="relative w-full font-family">
        {/* ✅ Background Image */}
        <img
          src={DP}
          alt="Diploma in Teaching Skills"
          className="w-full h-[500px] md:h-[550px] object-cover"
        />

        {/* ✅ Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
  <div className="px-4 md:px-20 text-white max-w-6xl mx-auto w-full">
    {/* Heading */}
    <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-center">
      Diploma in Teaching Skills – Build a Strong Foundation for a Lifelong Teaching Career
    </h1>

    {/* Flex Info Row */}
    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-lg">
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
        <span className="font-semibold">Duration:</span>
        <span>6 Months (Online / Blended)</span>
      </div>
      <div className="hidden md:block border-l h-6 border-white"></div>
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
        <span className="font-semibold">Eligibility:</span>
        <span>
          10+2 Pass or Graduation (Ideal for Aspiring/Working Teachers)
        </span>
      </div>
    </div>

    {/* Button Row - Left Aligned */}
    <div className="mt-6 flex justify-start">
      <button className="bg-button hover:bg-pink-700 text-white px-6 py-2 rounded-md">
        Enroll Now
      </button>
    </div>
  </div>
</div>

      </div>

      {/* ================= Overview Section ================= */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white">
        {/* Left - Text Section */}
        <div className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
            The Diploma in Teaching Skills is a comprehensive training program
            designed to equip educators with practical teaching methodologies,
            effective classroom strategies, and a deep understanding of
            student-centered learning. Whether you’re beginning your teaching
            journey or seeking to upgrade your skills, this course covers
            essential areas such as lesson planning, classroom management,
            instructional techniques, assessment methods, and the use of digital
            tools in education. The program is aligned with global teaching
            standards and prepares participants to confidently teach in diverse
            educational settings, both locally and internationally.
          </p>
          <button className="bg-button text-white px-6 py-2 rounded hover:bg-pink-600 transition shadow">
            Enroll Now
          </button>
        </div>

        {/* Right - Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://www.totaljobs.com/advice/wp-content/uploads/teacher-job-description-1024x576.jpg"
            alt="Teaching Skills"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ================= Course Modules ================= */}
      <div className="px-6">
        <section className="bg-gradient-to-b from-secondary to-gray-200 p-8 rounded-xl shadow mb-16">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseModules.map((mod, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg text-black mb-2">
                  {mod.title}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base space-y-1">
                  {mod.topics.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= What You Will Learn ================= */}
      <section className="relative bg-[#f9fafb] py-10 px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="relative z-10 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            What You Will Learn
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-tr from-primary to-button text-white w-9 h-9 rounded-full 
              flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Title + Icon */}
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-secondary">
                    {item}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Gain practical and theoretical skills to excel in modern
                    classrooms.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
                <strong className="text-xl">Aspiring Educators:</strong> Begin
                your teaching career with confidence by building strong
                instructional strategies and classroom management techniques.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  In-Service Teachers & Facilitators:
                </strong>{" "}
                Enhance your existing teaching methods, learn the latest
                pedagogical tools, and gain a recognized diploma to advance your
                career.
              </p>
            </div>

            {/* Bullet Item */}
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Career Shifters & Fresh Graduates:
                </strong>{" "}
                Looking to enter the education field? This program offers a
                smooth transition with practical training and flexible learning
                modules.
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
            Turn Your Passion for Teaching Into a Profession
          </h2>
          <p className="text-gray-700 text-base lg:text-lg mb-4 leading-loose">
            Whether you're beginning your journey or aiming to enhance your
            teaching skills, SkillEd's Diploma in Teaching Skills is your
            pathway to a successful career in education.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mb-6">
            Join thousands of passionate learners who’ve transformed their
            future through quality training — let SkillEd be your trusted
            partner in shaping tomorrow’s classrooms.
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
      <h2 className="text-3xl font-bold mb-8 text-center">FAQs – Diploma in Teaching Skills</h2>
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

export default DTSPage;
