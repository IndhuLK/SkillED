import React from 'react';
import hero from '/src/assets/Hero.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full font-family">
      {/* ✅ Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-[500px] md:h-[650px] object-cover"
      />

      {/* ✅ Overlay Content with AOS */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center">
        <div
          className="px-4 md:px-20 text-white max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            className="text-2xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Empowering Educators,<br />
            Inspiring Generations
          </h1>

          <p
            className="mb-6 text-sm md:text-lg"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Join SKillED’s dynamic community of educators transforming
            the way the world learns—one classroom at a time.
          </p>

          <button
            className="bg-button text-white px-5 py-2 rounded hover:bg-pink-600 cursor-pointer transition"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Explore Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
