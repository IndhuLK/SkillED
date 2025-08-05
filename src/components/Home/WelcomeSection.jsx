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
              SkillED is a trusted name in educator development, recognized and
              supported by reputed national and international organizations. We
              are proudly registered under the Ministry of Corporate Affairs,
              Government of India. SkillED collaborates with globally recognized
              bodies to maintain high standards in teaching excellence. Our
              affiliations reflect our dedication to quality training, helping
              educators and institutions make informed choices. Whether in
              schools or professional training centers, SkillED stands as a
              symbol of innovation, empowerment, and educational impact.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="bg-secondary py-16 px-10" data-aos="fade-up">
        <h1 className="font-bold text-3xl mb-2">
          One of the Most Recognized Teacher Training Providers
        </h1>
        <p className="mt-3 text-md md:text-lg text-md">
          SkillED has consistently been acknowledged for its excellence in
          educator training. Our commitment to quality and innovation has earned
          us recognition from leading education platforms and partners for
          multiple consecutive years—setting us apart as a trusted name in
          professional development.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
