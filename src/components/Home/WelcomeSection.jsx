import React from "react";
import Long from "/src/assets/Long.jpg";
import Short from "/src/assets/short.png";
import vector1 from "/src/assets/Vector1.png";
import vector2 from "/src/assets/Vector2.png";

const WelcomeSection = () => {
  return (
    <div className="font-family">
      <section className="relative py-16 px-4 bg-white overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-20">
          {/* Image Section (Left) */}
          <div
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-right"
          >
            {/* Large Image with Rounded Bottom */}
            <div className="relative w-full max-w-lg h-96 sm:h-[450px] lg:h-[500px] bg-gray-200 rounded-bl-[100px] rounded-br-[100px] rounded-tl-xl rounded-tr-xl shadow-lg overflow-hidden">
              <img
                src={Long}
                alt="Main person working on laptop"
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x500/E0F2F7/000?text=Large+Image";
                }}
              />
            </div>

            {/* Small Overlapping Image */}
            <div className="absolute bottom-[-20px] right-4 sm:-bottom-8 sm:-right-8 lg:bottom-30 lg:-right-10 w-40 h-40 sm:w-48 sm:h-48 rounded-lg shadow-xl overflow-hidden">
              <img
                src={Short}
                alt="Smaller overlapping person"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/200x200/D1E7DD/000?text=Small+Image";
                }}
              />
            </div>

            {/* Decorative Image Icons */}
            <img
              src={vector1}
              alt="Decoration 1"
              className="absolute top-0 right-0 w-24 h-24 transform translate-x-1/4 -translate-y-1/4 z-0 opacity-70"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/96x96/E0F2F7/000?text=V1";
              }}
            />
            <img
              src={vector2}
              alt="Decoration 2"
              className="absolute top-6 right-4 w-20 h-20 transform translate-x-1/4 -translate-y-1/4 z-0 opacity-70"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/80x80/E0F2F7/000?text=V2";
              }}
            />
            <img
              src={vector1}
              alt="Decoration 1"
              className="absolute md:top-40 md:left-20 top-40 left-0 w-24 h-24 transform -translate-x-1/4 translate-y-1/4 z-0 opacity-70"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/96x96/E0F2F7/000?text=V1";
              }}
            />
            <img
              src={vector2}
              alt="Decoration 2"
              className="absolute md:top-44 md:left-30 top-40 left-5 w-20 h-20 transform -translate-x-1/2 translate-y-1/ z-0 opacity-70"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/80x80/E0F2F7/000?text=V2";
              }}
            />
          </div>

          {/* Content Section (Right) */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
            data-aos="fade-left"
          >
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6">
              Welcome to SkillED
            </h2>
            <p className="text-gray-600 leading-relaxed md:text-lg text-md">
              SkillED is an internationally and nationally known trusted system
              of educator preparation. Being registered with the Ministry of
              Corporate Affairs, Government of India, SkillED works in
              partnership with international organizations and other academic
              centers to uphold the level of strictest quality in the field of
              teaching and learning. Through our vibrant programs in the diploma
              in teaching skills Trichy and graduate diploma in teaching (early
              childhood education) we continue to develop competent and
              confident educators who will be the teachers of the future school.
              SkillED provides the appropriate atmosphere whether you want to
              pursue a 1 year diploma in teaching or a postgraduate diploma in
              teaching.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="bg-secondary py-16 px-10" data-aos="fade-up">
        <h1 className="font-bold text-3xl mb-2">
          Quality meets Trust in Teaching
        </h1>
        <p className="mt-3 text-md md:text-lg text-md">
          SkillED remains to be a benchmark in teacher training as one of the
          most well-known names in trusted educator training in India. We are
          there to help you through all the stages including diploma in teaching
          course selection to career achievement. Our market-oriented and
          targeted solutions include Cambridge international diploma in teaching
          and learning, pg diploma in teaching english and online teacher
          training placement support Trichy to make teachers shine in the
          international educational market. Thousands of talented practitioners
          are carving out the classrooms across the globe through the production
          of the same under our programs in graduate diploma in teaching (early
          childhood education level 7) and othm level 6 diploma in teaching and
          learning.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
