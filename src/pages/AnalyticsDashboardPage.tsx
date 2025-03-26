import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, PieChart, LineChart, TrendingUp, Target, Users, ChevronRight, Star } from 'lucide-react';

const AnalyticsDashboardPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Analytics Dashboard | MyChemistryLab</title>
        <meta name="description" content="Track learning progress and gain insights with our comprehensive analytics dashboard." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Real-time Analytics Dashboard</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Gain valuable insights into learning patterns with comprehensive analytics that help both 
                students and educators track progress and identify areas for improvement.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Try Demo Dashboard
                </Link>
                <a href="/#features" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Explore Features
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Analytics Dashboard Interface"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dashboard Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-gray-600 mb-4">
                Monitor progress across all learning modules and assignments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Grade analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Progress indicators</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Achievement tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learning Patterns</h3>
              <p className="text-gray-600 mb-4">
                Identify strengths and areas needing improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Topic mastery analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Time management insights</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Learning style indicators</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Get insights into future performance and recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Performance predictions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Study recommendations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Success probability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Views */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customized Dashboard Views</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Students</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <PieChart className="w-6 h-6 text-blue-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Personal Progress Tracking</h4>
                    <p className="text-gray-600">Monitor your individual performance and progress</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LineChart className="w-6 h-6 text-blue-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Learning Analytics</h4>
                    <p className="text-gray-600">Understand your learning patterns and habits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-blue-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Goal Setting</h4>
                    <p className="text-gray-600">Set and track personal learning objectives</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">For Educators</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Class Performance Overview</h4>
                    <p className="text-gray-600">Monitor entire class progress and trends</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Assessment Analytics</h4>
                    <p className="text-gray-600">Analyze test results and assignment performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Intervention Indicators</h4>
                    <p className="text-gray-600">Identify students needing additional support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Interactive Data Visualization</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <PieChart className="w-24 h-24 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Topic Distribution</h3>
              <p className="text-gray-600">
                Visual breakdown of time spent and performance across different chemistry topics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <LineChart className="w-24 h-24 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Trends</h3>
              <p className="text-gray-600">
                Track improvement over time with interactive trend analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
              <p className="text-gray-600">
                Detailed breakdown of assessment scores and learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">User Testimonials</h2>

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
                "The analytics dashboard helped me identify my weak areas and focus my study time more effectively."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Lisa Chen</h4>
                  <p className="text-gray-500 text-sm">Chemistry Student</p>
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
                "As an educator, the class performance insights help me adjust my teaching strategy in real-time."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Educator testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Dr. Michael Brown</h4>
                  <p className="text-gray-500 text-sm">Chemistry Professor</p>
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
                "The predictive analytics have helped us identify and support struggling students early on."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Administrator testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Sarah Thompson</h4>
                  <p className="text-gray-500 text-sm">Department Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Gain Insights?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Start tracking progress and improving outcomes with our comprehensive analytics dashboard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Try Demo Dashboard
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

export default AnalyticsDashboardPage;