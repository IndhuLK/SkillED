import React from "react";
import { Users, FileText, Monitor, Handshake } from 'lucide-react';

const WhatWeOffer = () => {
  const offerCards = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: '10+ years of excellence',
      description:
        'Our commitment to quality training and meaningful partnerships has helped thousands of teachers grow, lead, and inspire in classrooms across the country.',
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: 'In Class & Online Class',
      description:
        'Whether you prefer hands-on in-class sessions or the convenience of online learning, SkillEd offers both formats to suit your needs—without compromising on quality or engagement.',
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      title: 'Career Monitoring',
      description:
        'Our career monitoring services provide continuous support, feedback, and personalized growth plans to help educators achieve their professional goals with confidence.',
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-600" />,
      title: '400+ Academic Partnerships',
      description:
        'SkillEd proudly collaborates with schools, colleges, and training centers to deliver impactful programs that uplift educators and enhance learning environments.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white font-family" id="what-we-offer">
      <div className="container mx-auto text-center">
        {/* Subtitle with fade-down */}
        <p
          className="text-gray-600 text-lg mb-2"
          data-aos="fade-down"
        >
          What We Offer
        </p>

        {/* Main Title with fade-up */}
        <h2
          className="text-xl sm:text-3xl font-bold text-gray-800 mb-12"
          data-aos="fade-up"
        >
          For Your Future Learning
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerCards.map((card, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Adds staggered effect
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col transform 
              transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="bg-green-100 p-3 rounded-full mb-4 self-start">
                {card.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-md leading-relaxed text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
