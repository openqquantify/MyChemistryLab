import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  // Function to scroll to a section by ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Chemistry Learning with Interactive Experiences
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover a revolutionary platform that makes chemistry engaging, accessible, and effective through virtual labs, AI-guided practice, and interactive content.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Free Trial
              </button>
              <button 
                className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Trusted by 500+ educational institutions worldwide</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Student using MyChemistryLab platform" 
                className="rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl z-20">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    98%
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-semibold">Student Satisfaction</p>
                    <p className="text-gray-500 text-sm">Based on 10,000+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;