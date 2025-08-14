import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import blog1 from "../../assets/Blog1.jpg";
import blog2 from "../../assets/Blog2.jpg";
import blog3 from "../../assets/Blog3.jpg";
import blog4 from "../../assets/Blog4.jpg";
import blog5 from "../../assets/Blog5.jpg";
import blog6 from "../../assets/Blog6.jpg";
import blog7 from "../../assets/Blog7.jpg";


// 📝 Blog Data with direct links
const blogs = [
  {
    id: 1,
    img: blog1,
    title:
      "How Modern Business Expansion is Fuelled by Progressive Web Apps Development",
    desc: "For 2025, Progressive Web Apps (PWAs) are set to be an absolute trend setter in web development. Businesses are looking for speed, reliability, mobile-responsive features...",
    date: "August 5, 2025",
    link: "/blog1",
  },
  {
    id: 2,
    img: blog2,
    title:
      "Starting from Qubits to Solutions: How Applied Quantum Computing is Sculpting the Real World",
    desc: "We’re entering a new time where bits are not “enough”! Welcome to the world of applied quantum computing...",
    date: "August 11, 2025",
    link: "/blog2",
  },
  {
    id:3,
    img:blog3,
    title:"Top 5 Trending Technologies Used by Leading Website Development Company in Trichy",
    desc:"In this fast-moving, digital, competitive environment, businesses must utilise innovative web solutions. A website development company in Trichy is not only developing websites, but also offering a unique user experience using robust, modern technology..........",
    date:"August 27, 2025",
    link: "/blog3",
  },
  {
    id:4,
    img:blog4,
    title:"Why AI-Powered Dynamic Websites Are the Future of Web Development in 2025",
    desc:"The age of static, generic websites is over. By 2025, websites will have become intelligent, responsive, and hyper-personalised, all thanks to artificial intelligence. For small businesses, this is no longer a trend, but rather a market opportunity. The best custom website development company in Trichy...........",
    date:"August 31, 2025",
    link: "/blog4",
  },
  {
    id:5,
    img:blog5,
    title:"Mobile App Development: A Comprehensive Beginner's Guide ",
    desc:"If you're discovering mobile app development and want a comprehensive beginner's guide to the process — plus selecting and working with the best mobile app development company in Trichy — you're in the right place.....",
    date:"Sep 01, 2025",
    link: "/blog5",
  },
  {
    id:6,
    img:blog6,
    title:"How AI Is Writing Code: What It Means for the Future of Web Development",
    desc:"Artificial Intelligence is sweeping industries all over the world, but arguably, the most innovative impact of AI is in the world of web development. AI is not just utilities anymore, it is writing code, creating interfaces and automating entire workflows.....",
    date:"Sep 01, 2025",
    link: "/blog6",
  },
  {
    id:7,
    img:blog7,
    title:"Build Smarter, Faster, Better: Why Dynamic Website Development  Leads the Tech Revolution",
    desc:"Discover why the best dynamic website development company in Trichy leads in custom website development with AI, PWAs, JAMstack & responsive design.....",
    date:"Sep 01, 2025",
    link: "/blog7",
  },
 
];

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-10 font-family">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          {/* Image */}
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full md:w-1/2 h-56 md:h-64 object-cover rounded-lg"
          />

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">{blog.desc}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">{blog.date}</span>
              <button
                onClick={() => navigate(blog.link)}
                className="text-pink-500 font-medium hover:underline flex items-center gap-1 cursor-pointer"
              >
                Read more
                <FiArrowUpRight className="inline-block" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogList;
