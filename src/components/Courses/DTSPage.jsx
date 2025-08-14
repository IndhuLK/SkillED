// DTS Course Detail Page UI - React + Tailwind CSS
import React, { useState, useEffect } from "react";
import AOS from "aos";
import { CheckCircle } from "lucide-react";
import DP from "../../assets/Dp.jpg";
import programImage from "../../assets/ProgramImage.jpg";
import girlImage from "../../assets/Professiongirl.png";
import { Helmet } from "react-helmet";

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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const topics = [
    {
      title: "Pedagogy / Child Psychology",
      description:
        "Appreciate cognitive, emotional, and social growth of children to create age-appropriate learning experiences—one of the fundamentals of classroom and teacher preparation.",
    },
    {
      title: "Contemporary Pedagogy",
      description:
        "Learn modern teaching methods and strategies that enhance retention and encourage learning, harmonizing traditional and modern instructional tools.",
    },
    {
      title: "Skills in Classroom Management",
      description:
        "Establish measures for a positive, productive, and inclusive classroom climate—ensuring smooth day-to-day teaching.",
    },
    {
      title: "Lesson Planning / Curriculum Design",
      description:
        "Discover how to create detailed lesson plans and flexible curriculum structures aligned with learning outcomes and standards.",
    },
    {
      title: "Evaluation & Methods",
      description:
        "Develop skills to design equitable, diverse, and empowering assessment tools that measure student knowledge and foster continuous growth.",
    },
    {
      title: "Effective Communication / Presentation",
      description:
        "Improve verbal and non-verbal communication skills to deliver engaging lessons and interact confidently with students, parents, and colleagues.",
    },
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
    <div className="font-family overflow-hidden">
      <Helmet>
        <title>Diploma in Teaching Skills - Innovating Educators</title>
        <meta
          name="description"
          content="Explore our recent projects and case studies."
        />
        <meta name="keywords" content="projects, portfolio, work" />
        <meta property="og:title" content="Projects | My Website" />
        <meta
          property="og:description"
          content="Explore our recent projects and case studies."
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
            <h1
              className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Diploma in Teaching Skills – Develop a Good Foundation toward a
              Lifelong Career as a Teacher
            </h1>

            {/* Flex Info Row */}
            <div
              className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
            <div
              className="mt-6 flex justify-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <button
                className="shadow-xl cursor-pointer bg-button hover:bg-pink-700 
              text-white px-6 py-2 rounded-md"
                data-aos="fade-down"
              >
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
          <h2 className="text-3xl font-semibold mb-4" data-aos="fade-top">
            Course Overview
          </h2>
          <p
            className="text-gray-700 leading-relaxed text-sm md:text-lg"
            data-aos="fade-right"
          >
            The Diploma in Teaching Skills is an organized, hands-on,
            career-oriented course in teacher training that aims at candidates
            who desire to leave a permanent mark in the education sector. This
            course is generated due to real-life requirements in classrooms and
            its training program enables instructors to learn the core and most
            relevant teaching skills which include preparation of lesson plans,
            classroom management, child psychology, and current teaching
            techniques. Whether you are new to the field or you just want to
            build upon your skills, the curricula will take you to the next
            level due to flexible modules and digital learning materials.
          </p>
          <p
            className="text-gray-700 leading-relaxed text-sm md:text-lg"
            data-aos="fade-right"
          >
            This teacher training program is in line with the international
            practices and the program equips the teaching participants to work
            in a variety of teaching settings- infant teaching to secondary
            teaching. Designed to be both theory based and practical, the
            Diploma in Teaching Skills will ensure you are prepared to enter the
            classroom as an independent and student-focused educator ready to
            face any classroom in the modern-day education system.
          </p>
          <div className="flex " data-aos="fade-up" data-aos-delay="400">
            <button
              className="cursor-pointer px-8 py-2 bg-pink-600 hover:bg-pink-700 transition 
          rounded-lg text-white text-sm md:text-base"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            src="https://www.totaljobs.com/advice/wp-content/uploads/teacher-job-description-1024x576.jpg"
            alt="Teaching Skills"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ================= Course Modules ================= */}
      <div className="px-6">
        <section
          className="bg-gradient-to-b from-secondary to-gray-200 p-8 rounded-xl shadow mb-16"
          data-aos="fade-up"
        >
          <h3
            className="text-2xl font-semibold text-center mb-6"
            data-aos="fade-down"
          >
            Course Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md "
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
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
      <section
        className="relative bg-[#f9fafb] py-10 px-4 sm:px-6 lg:px-12"
        data-aos="fade-up"
      >
        {/* Heading */}
        <div className="relative z-10 mb-10" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            What You Will Learn
          </h2>
          <p className="text-xl sm:text-lg text-center text-gray-800 mt-2">
            The study modules that have been well selected in the Diploma in
            Teaching Skills study course to meet the demands of contemporary
            classrooms and to provide a practical/skilled based teacher training
            that would reflect in instant classroom achievement.
          </p>
        </div>

        {/* Grid Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {topics.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl 
        shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-tr from-primary to-button text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Title + Icon */}
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Who This Program Is Made For ================= */}
      <section className="bg-white px-6 py-12 md:py-20">
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/2" data-aos="fade-right">
            <img
              src={programImage}
              alt="Program Participants"
              className="relative rounded-xl shadow-xl w-full z-10"
            />
            {/* Decorative border effect */}
            <div className="absolute top-3 left-3 w-full h-full bg-green-300 rounded-xl shadow-md z-0"></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-5" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who This Program Is Made For
            </h2>

            {/* Bullet Item */}
            <div
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">Aspiring Educators:</strong> Whether
                you are new in education, doing this diploma in teaching skills
                program will provide you with the basic teacher training. You
                will learn all that including instructional design to behavior
                management so you can walk into your very first class
                confidently.
              </p>
            </div>

            {/* Bullet Item */}
            <div
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  In-Service Teachers & Facilitators:
                </strong>{" "}
                In the profession already? This course will modernize your
                teaching strategy with the inclusion of new strategies,
                technology and international norms. Advanced teacher training
                will provide you with the boost of confidence and certified
                advantage in your career.
              </p>
            </div>

            {/* Bullet Item */}
            <div
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CheckCircle className="text-green-500 mt-1 w-10 h-6" />
              <p className="md:text-lg text-sm">
                <strong className="text-xl">
                  Career Shifters & Fresh Graduates:
                </strong>{" "}
                Consider becoming a switcher or a post-graduation in the
                teaching profession? This teaching skills diploma will help fill
                the gap between experience and structured learning. It is fluid
                and applied and designed to accelerate you, into education.
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
      <section className="py-10 px-4">
        <div
          className="max-w-3xl shadow-md  mx-auto text-center bg-gray-50 px-10 py-5"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Assessment and Certification
          </h2>

          <div
            className="bg-white rounded-lg shadow p-6 space-y-4 text-left"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            {assessments.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-delay={`${300 + index * 100}`}
              >
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
        <div
          className="max-w-4xl"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
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
          <button className="cursor-pointer shadow-xl bg-button hover:bg-pink-700 text-white px-6 py-2 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-[400px]"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src={girlImage}
            alt="Student"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* ================= Frequently Asked Questions ================= */}
      <div className="bg-gray-50 mb-2" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            FAQs – Diploma in Teaching Skills
          </h2>

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded mb-4 bg-white shadow"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`} // delays each item
            >
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

export default DTSPage;
