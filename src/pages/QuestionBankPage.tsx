import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, FileQuestion, Brain, CheckCircle, Download, ChevronRight, Filter } from 'lucide-react';

const QuestionBankPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Question Bank | MyChemistryLab</title>
        <meta name="description" content="Access our comprehensive chemistry question bank with thousands of practice problems and step-by-step solutions." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Question Bank</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Access thousands of chemistry practice problems with step-by-step solutions and detailed explanations.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">Try Sample Questions</Link>

                <Link to="/signup" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                Download Practice Set
                </Link>
               
                {/* FUTURE DOWNLOAD BUTTON
                  <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Practice Set
                </button> */}
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Student solving chemistry problems"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions by topic, concept, or keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Options
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Question Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">General Chemistry</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Atomic Structure</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">250+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Chemical Bonding</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">180+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Stoichiometry</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">200+ Questions</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all topics <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Organic Chemistry</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Functional Groups</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">150+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Reaction Mechanisms</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">220+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Synthesis</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">180+ Questions</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all topics <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Topics</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Quantum Mechanics</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">120+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Spectroscopy</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">160+ Questions</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Thermodynamics</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">140+ Questions</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all topics <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Question Bank Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileQuestion className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Step-by-Step Solutions</h3>
              <p className="text-gray-600">
                Detailed explanations and problem-solving approaches for every question.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Multiple solution methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Visual explanations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Adaptive Difficulty</h3>
              <p className="text-gray-600">
                Questions adjust to your skill level as you progress.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Progressive difficulty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Personalized recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Download className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practice Sets</h3>
              <p className="text-gray-600">
                Downloadable question sets for offline practice and exam prep.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Topic-specific sets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Exam-style questions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Practice?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Access our complete question bank and start mastering chemistry concepts today.
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

export default QuestionBankPage;