import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Target, ChevronRight, BarChart3, BookOpen, CheckCircle, Star } from 'lucide-react';

const AIPracticePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>AI-Guided Practice System | MyChemistryLab</title>
        <meta name="description" content="Experience personalized chemistry learning with our advanced AI-guided practice system." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Guided Practice System</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Experience a revolutionary approach to chemistry learning with our advanced AI system that adapts to your 
                unique learning style and pace.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Try Free Demo
                </Link>
                <a href="#features" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Explore Features
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="AI-guided learning system interface"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How AI Enhances Your Learning</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Adaptive Learning</h3>
              <p className="text-gray-600 mb-4">
                Our AI system analyzes your performance and adjusts content difficulty in real-time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Personalized learning paths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Dynamic difficulty adjustment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Progress-based recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Knowledge Gap Analysis</h3>
              <p className="text-gray-600 mb-4">
                Identify and address weak areas with targeted practice sessions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Detailed skill assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Concept mastery tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Personalized review sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track your progress with detailed analytics and insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Visual progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Detailed performance reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Learning pattern analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Assessment</h3>
              <p className="text-gray-600">Complete a comprehensive assessment to determine your current knowledge level.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes your performance and creates a personalized learning plan.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Targeted Practice</h3>
              <p className="text-gray-600">Engage with customized practice sessions focused on your learning needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your improvement and receive ongoing adjustments to your learning path.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
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
                "The AI system helped me identify my weak areas in organic chemistry and provided targeted practice that really improved my understanding."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emily Chen</h4>
                  <p className="text-gray-500 text-sm">Chemistry Major, Stanford</p>
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
                "The personalized practice sessions helped me prepare for my AP Chemistry exam. I improved my score significantly!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">David Martinez</h4>
                  <p className="text-gray-500 text-sm">High School Senior</p>
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
                "The AI tutor's ability to adapt to my learning style made complex concepts much easier to understand."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Undergraduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience the power of AI-guided learning and take your chemistry understanding to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start Free Trial
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

export default AIPracticePage;
