import React from 'react';
import { ArrowLeft, BookOpen, Beaker, Brain, FileQuestion, BarChart3, ChevronRight, CheckCircle, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const StudentsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>For Students | MyChemistryLab</title>
        <meta name="description" content="Enhance your chemistry learning with interactive tools, virtual labs, and personalized practice." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Chemistry at Your Own Pace</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Access interactive learning tools, virtual labs, and personalized practice sessions designed 
                to help you understand and excel in chemistry.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Start Free Trial
                </Link>
                <a href="/#features" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Explore Features
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Student using MyChemistryLab" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Paths */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Learning Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">General Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Master fundamental concepts, atomic structure, chemical bonding, and reactions through 
                interactive lessons and practice problems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Atomic structure and periodic trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Chemical bonding and molecular geometry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Stoichiometry and chemical equations</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Start learning <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Organic Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Explore organic compounds, reaction mechanisms, and synthesis through virtual labs 
                and molecular modeling tools.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Functional groups and nomenclature</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Reaction mechanisms and kinetics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Synthesis and retrosynthetic analysis</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Start learning <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Topics</h3>
              <p className="text-gray-600 mb-4">
                Dive deep into advanced chemistry concepts with specialized modules and 
                challenging problem sets.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Quantum mechanics and spectroscopy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Advanced reaction kinetics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Computational chemistry methods</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Start learning <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Study Tools */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Essential Study Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileQuestion className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practice Problems</h3>
              <p className="text-gray-600">
                Access thousands of practice problems with step-by-step solutions and explanations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Beaker className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Virtual Labs</h3>
              <p className="text-gray-600">
                Conduct experiments safely in our virtual laboratory environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your learning progress and identify areas for improvement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Tutor</h3>
              <p className="text-gray-600">
                Get personalized help and explanations from our AI tutoring system.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Student Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "MyChemistryLab helped me ace my AP Chemistry exam! The practice problems and virtual labs 
                made complex concepts much easier to understand."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Student testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Sarah Chen</h4>
                  <p className="text-gray-500 text-sm">AP Chemistry Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "The AI tutor is like having a personal chemistry teacher available 24/7. It's helped me 
                work through challenging problems step by step."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Student testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Michael Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Undergraduate Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "The virtual labs gave me confidence before doing real lab experiments. It's a great way 
                to practice techniques and understand procedures."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Student testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emily Thompson</h4>
                  <p className="text-gray-500 text-sm">Chemistry Major</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Chemistry?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of students who have improved their understanding of chemistry with our 
            interactive learning platform. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <a href="#" className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;