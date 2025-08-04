import React from "react";
import { Users, FileText, Monitor, Handshake } from 'lucide-react';

const WhatWeOffer = () => {
  const offerCards = [
    {
      icon: (
        // Using Lucide-React Users icon
        <Users className="h-8 w-8 text-green-600" /> // Customize color and size here
      ),
      title: '10+ years of excellence',
      description:
        'Our commitment to quality training and meaningful partnerships has helped thousands of teachers grow, lead, and inspire in classrooms across the country.',
    },
    {
      icon: (
        // Using Lucide-React FileText icon (for documents/classes)
        <FileText className="h-8 w-8 text-green-600" /> // Customize color and size here
      ),
      title: 'In Class & Online Class',
      description:
        'Whether you prefer hands-on in-class sessions or the convenience of online learning, SkillEd offers both formats to suit your needs—without compromising on quality or engagement.',
    },
    {
      icon: (
        // Using Lucide-React Monitor icon (for career monitoring)
        <Monitor className="h-8 w-8 text-green-600" /> // Customize color and size here
      ),
      title: 'Career Monitoring',
      description:
        'Our career monitoring services provide continuous support, feedback, and personalized growth plans to help educators achieve their professional goals with confidence.',
    },
    {
      icon: (
        // Using Lucide-React Handshake icon (for partnerships)
        <Handshake className="h-8 w-8 text-green-600" /> // Customize color and size here
      ),
      title: '400+ Academic Partnerships',
      description:
        'SkillEd proudly collaborates with schools, colleges, and training centers to deliver impactful programs that uplift educators and enhance learning environments.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white font-family">
      <div className="container mx-auto text-center">
        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-2">What We Offer</p>
        {/* Main Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-12">
          For Your Future Learning
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerCards.map((card, index) => (
            <div
              key={index}
              // Removed items-center and text-center from here to allow left alignment
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col transform 
              transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              {/* Added self-start to align icon to the left */}
              <div className="bg-green-100 p-3 rounded-full mb-4 self-start">
                {card.icon}
              </div>
              {/* Title - Aligned to left */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
                {card.title}
              </h3>
              {/* Description - Aligned to left */}
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