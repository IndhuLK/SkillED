import React from "react";
import heroImg from "../../assets/blog.jpg"; // Replace with your image path

const SkillBlogs = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] font-family">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="SkillED Blog Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-4xl px-4 md:px-16 text-white">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            SkillEd Blog – Knowledge That Empower
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg max-w-2xl">
            Explore expert tips, success stories, and the latest trends in teaching and
            skill development. Our blog is here to inspire, guide, and keep you informed
            every step of your learning journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillBlogs;
