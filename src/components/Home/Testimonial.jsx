import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS stylesheet
import Stud1 from '../../assets/Stu1.jpg';
import Stud2 from '../../assets/Stu2.jpg';
import Stud3 from '../../assets/Stu3.jpg';
import Stud4 from '../../assets/Stu4.jpg';
import Stud5 from '../../assets/Stu5.jpg';

const Testimonial = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      image: Stud1,
      name: "Rohini",
      role: "Student at College",
      rating: 4,
      text: "This program completely transformed my teaching approach. The trainers were supportive, and the content was practical and up-to-date. Thanks to their guidance, I got placed in an international school within a month of completing my certification!",
    },
    {
      id: 2,
      image: Stud2,
      name: "Priya",
      role: "Aspiring Educator",
      rating: 5,
      text: "SkillED provided an invaluable learning experience. The practical sessions and mentorship helped me gain confidence. I highly recommend it to anyone looking to excel in teaching.",
    },
    {
      id: 3,
      image: Stud3,
      name: "Anjali",
      role: "Experienced Teacher",
      rating: 4,
      text: "Even as an experienced teacher, I found the modern teaching methodologies covered by SkillED to be incredibly insightful. It's a great platform for continuous professional development.",
    },
    {
      id: 4,
      image: Stud4,
      name: "Rahul",
      role: "Online Learner",
      rating: 5,
      text: "The online class format was perfect for my schedule. The content was engaging, and the instructors were always available to clarify doubts. Truly a transformative program!",
    },
    {
      id: 5,
      image: Stud5,
      name: "Deepa",
      role: "Career Changer",
      rating: 4,
      text: "Making a career switch into education felt daunting, but SkillED's comprehensive support and practical training made it smooth. I'm now confidently pursuing my passion.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 5; i++) {
      displayed.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return displayed;
  };

  const displayedTestimonials = getDisplayedTestimonials();
  const activeTestimonial = testimonials[currentIndex];

  const StarIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
    </svg>
  );

  return (
    <section className="py-16 px-4 bg-white font-family overflow-hidden">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <p className="text-gray-600 text-lg mb-2">Our Testimonial</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          What Our Students Say About Us
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center mb-12" data-aos="zoom-in">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:left-40 p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Images */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                  index === 0
                    ? 'scale-75 opacity-50'
                    : index === 1
                    ? 'scale-90 opacity-75'
                    : index === 2
                    ? 'scale-100 opacity-100 z-10'
                    : index === 3
                    ? 'scale-90 opacity-75'
                    : 'scale-75 opacity-50'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`rounded-full object-cover object-center border-4 ${
                    index === 2 ? 'border-green-500' : 'border-transparent'
                  }`}
                  style={{
                    width: index === 2 ? '120px' : '90px',
                    height: index === 2 ? '120px' : '90px',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/100x100/E0F2F7/000?text=User';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 lg:right-40 p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Active Testimonial Content */}
        {activeTestimonial && (
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{activeTestimonial.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{activeTestimonial.role}</p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={
                    i < activeTestimonial.rating
                      ? 'text-green-500 w-5 h-5'
                      : 'text-gray-300 w-5 h-5'
                  }
                />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-base italic">
              "{activeTestimonial.text}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
