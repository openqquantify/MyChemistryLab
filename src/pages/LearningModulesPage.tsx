import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Brain, Beaker, Download, ChevronRight, CheckCircle } from 'lucide-react';

const LearningModulesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Interactive Learning Modules | MyChemistryLab</title>
        <meta name="description" content="Explore our interactive chemistry learning modules with multimedia-rich content and engaging animations." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Learning Modules</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Transform complex chemistry concepts into engaging, digestible content that adapts to your learning style.
              </p>

              <div className="flex flex-wrap gap-4">
                 <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                 Try Demo Module
                 </Link>

                 <Link to="/signup" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                 Download Study Guide
                 </Link>


              {/*           
                < FUTURE DOWNLOAD BUTTON
                  button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Study Guide
                </button> */}
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Student using interactive chemistry learning module"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Learning Module Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">General Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Master fundamental concepts including atomic structure, chemical bonding, and reactions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Atomic structure and periodic trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Chemical bonding basics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Stoichiometry fundamentals</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Explore modules <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Organic Chemistry</h3>
              <p className="text-gray-600 mb-4">
                Explore organic compounds, reaction mechanisms, and synthesis strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Functional groups and nomenclature</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Reaction mechanisms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Synthesis and retrosynthesis</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Explore modules <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Topics</h3>
              <p className="text-gray-600 mb-4">
                Dive deep into advanced chemistry concepts and specialized topics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Quantum mechanics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Spectroscopy and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Computational chemistry</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Explore modules <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Module Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multimedia Content</h3>
              <p className="text-gray-600">
                Rich animations, videos, and interactive simulations that bring chemistry concepts to life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">
                Content adjusts to your learning pace and style for optimal understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Beaker className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practice Problems</h3>
              <p className="text-gray-600">
                Interactive exercises with step-by-step solutions and explanations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Download className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Downloadable Resources</h3>
              <p className="text-gray-600">
                Study guides, practice sheets, and reference materials for offline learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of students who have mastered chemistry through our interactive learning modules.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <Link to="/#features" className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningModulesPage;