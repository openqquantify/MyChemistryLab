import React from 'react';

const testimonials = [
  {
    quote: "MyChemistryLab transformed how I teach organic chemistry. The virtual labs allow students to practice techniques before entering the actual lab, significantly improving their confidence and performance.",
    author: "Dr. Sarah Johnson",
    title: "Professor of Chemistry, Stanford University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The interactive periodic table and molecular visualization tools helped me understand atomic structure in ways textbooks never could. I went from struggling with chemistry to majoring in it!",
    author: "Michael Chen",
    title: "Undergraduate Student, MIT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a high school chemistry teacher, the analytics dashboard has been invaluable. I can quickly identify which concepts my students are struggling with and adjust my teaching accordingly.",
    author: "Emily Rodriguez",
    title: "Chemistry Teacher, Lincoln High School",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-gray-800">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Trusted by Leading Educational Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="w-32 h-12 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-400">HARVARD</span>
            </div>
            <div className="w-32 h-12 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-400">STANFORD</span>
            </div>
            <div className="w-32 h-12 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-400">MIT</span>
            </div>
            <div className="w-32 h-12 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-400">OXFORD</span>
            </div>
            <div className="w-32 h-12 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-400">BERKELEY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;