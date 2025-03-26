import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, Beaker, Brain, ChevronRight, Star, Download, Users } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Course Offerings | MyChemistryLab</title>
        <meta name="description" content="Explore our comprehensive chemistry courses covering general, organic, and biochemistry with expert-created content." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Chemistry Courses</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Expert-created courses covering general, organic, and biochemistry. Aligned with 
                academic standards and designed for student success.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Explore Courses
                </Link>
                <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Syllabus
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Students in chemistry class"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Course Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">General Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Foundational courses covering basic principles and concepts of chemistry.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Atomic structure and bonding</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Chemical reactions and equations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Thermodynamics and kinetics</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View courses <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organic Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Advanced courses focusing on organic compounds and reactions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Functional groups and nomenclature</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Reaction mechanisms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Synthesis and retrosynthesis</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View courses <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Biochemistry</h3>
              <p className="text-gray-600 mb-4">
                Specialized courses on biological chemistry and molecular processes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Proteins and enzymes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Metabolism and energy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-600">Molecular biology</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View courses <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="AP Chemistry Preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm text-blue-500 font-medium">AP Chemistry</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AP Chemistry Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive course aligned with AP Chemistry curriculum and exam requirements.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">2,500+ students</span>
                  </div>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Organic Chemistry I"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-sm text-purple-500 font-medium">Undergraduate</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Organic Chemistry I</h3>
                <p className="text-gray-600 mb-4">
                  Introduction to organic chemistry principles and reaction mechanisms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">1,800+ students</span>
                  </div>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603126 857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Biochemistry Fundamentals"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-green-500 font-medium">Advanced</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Biochemistry Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Essential concepts in biological chemistry and molecular processes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">1,200+ students</span>
                  </div>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-gray-600 ml-1">4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Course Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert-Created Content</h3>
              <p className="text-gray-600">
                Courses designed by experienced chemistry educators and researchers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Beaker className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Hands-on exercises, virtual labs, and interactive simulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">
                Personalized learning paths based on your progress and needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with fellow students and get help when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>

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
                "The AP Chemistry course helped me score a 5 on the exam. The practice problems and 
                video explanations were incredibly helpful!"
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
                "The organic chemistry course's 3D molecular visualizations made understanding reaction 
                mechanisms much easier."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Michael Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Chemistry Major</p>
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
                "The biochemistry course's interactive simulations helped me understand complex metabolic 
                pathways clearly."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emily Thompson</h4>
                  <p className="text-gray-500 text-sm">Pre-med Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Chemistry Journey</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose from our wide range of chemistry courses and begin your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Enroll Now
            </Link>
            <Link to="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;