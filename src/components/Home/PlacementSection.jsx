import React, { useState } from 'react';
import explore1 from '/src/assets/Explore.jpg';
import explore2 from '/src/assets/short.png';
import explore3 from '/src/assets/furture.jpg';

const images = [explore1, explore2, explore3];

const PlacementSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-10 px-4 bg-white font-family">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Image Section (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
          <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-100 object-cover object-center border-gray-400 px-5 py-10 
              transition-all duration-500"
            />
            
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section (Right) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6">
            Shaping Careers with 100% Placement Assistance
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            At our teacher training institute, we go beyond just delivering certifications—we build strong, confident educators ready to make an impact worldwide. Our curriculum blends academic theory with real-world classroom practice, guided by expert trainers and global teaching standards. From day one, you'll receive personalized mentorship, hands-on experience, and continuous support to help you grow into a skilled, adaptable professional. With a proven track record of successful alumni placements, we don't just prepare you for the job—we guide you into it, ensuring every graduate walks into their career with clarity, confidence, and opportunity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlacementSection;
