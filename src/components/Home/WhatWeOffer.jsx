import React from "react";
import { Users, FileText, Monitor, Handshake } from 'lucide-react';

const WhatWeOffer = () => {
  const offerCards = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Ways to Be a Teacher',
      description:
        'We have a wide range of offerings such as Bachelor of Education (B.Ed), Master of Education (M.Ed) whereby potential teachers are given a good theoretical and practical background in teaching. We ensure our courses track with a diploma in teaching and graduate diploma in teaching and are academically and career ready.',
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: 'ECE Programs',
      description:
        'Formal education in the form of specialized courses such as certificate in ECCE programme Trichy, nursery teacher training NTT Trichy course, diploma in Montessori teacher training Trichy varieties guarantee quality care and early learning to young minds. The programs will prepare the educators to possess contemporary, kid-centric pedagogies.',
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-600" />,
      title: 'Skill-Enhancement and Personality enrichment',
      description:
        'Our learning paths incorporate learning approaches course Trichy and personality development training of teachers course Trichy into the entire learning paths. They aid personal improvement, classroom management- which are ingredients of effective teaching.',
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-600" />,
      title: 'Career/ Placement Support',
      description:
        'Our guidance and growth planning are guided by practice in the real world through continuing career monitoring of the teacher training graduates, as well as the online teacher training placement assistance Trichy. We have programs that help you explore the prospect of having a sustainable career as a teacher through an in-class and online diploma in teaching.',
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
           Extensive training of 21st century educators

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
