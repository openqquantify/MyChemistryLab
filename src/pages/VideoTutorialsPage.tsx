import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, Play, Search, Filter, BookOpen, Download, ChevronRight, Star } from 'lucide-react';

const VideoTutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Video Tutorials | MyChemistryLab</title>
        <meta name="description" content="Access our comprehensive library of chemistry video tutorials, lectures, and demonstrations." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Tutorial Library</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Access our extensive collection of high-quality video tutorials covering everything from 
                basic concepts to advanced topics in chemistry.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Featured Videos
                </button>
                <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Offline
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Students watching chemistry video tutorials"
                className="rounded- xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search videos by topic, concept, or keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Videos
                </button>
              </div>
            </div>
          </div>

          {/* Video Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">General Chemistry</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Atomic Structure</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">12 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Chemical Bonding</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">15 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Stoichiometry</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">10 videos</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all videos <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Organic Chemistry</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Functional Groups</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">18 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Reaction Mechanisms</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">20 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Synthesis</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">16 videos</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all videos <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lab Techniques</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Safety Procedures</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">8 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Equipment Usage</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">14 videos</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Experiment Demos</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">22 videos</span>
                </li>
              </ul>
              <a href="#" className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all videos <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Featured Videos */}
          <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Introduction to Atomic Structure"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Introduction to Atomic Structure</h3>
                <p className="text-gray-600 text-sm mb-2">Learn about the fundamental building blocks of matter.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>15:32</span>
                  <span className="mx-2">•</span>
                  <span>Beginner</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Chemical Bonding Basics"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Chemical Bonding Basics</h3>
                <p className="text-gray-600 text-sm mb-2">Understanding different types of chemical bonds.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>20:15</span>
                  <span className="mx-2">•</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Advanced Lab Techniques"
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Advanced Lab Techniques</h3>
                <p className="text-gray-600 text-sm mb-2">Master essential laboratory procedures.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>25:48</span>
                  <span className="mx-2">•</span>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Series */}
          <h2 className="text-2xl font-bold mb-6">Popular Video Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                AP Chemistry Prep Series
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive video series covering all AP Chemistry topics and exam preparation strategies.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Unit 1: Atomic Structure (8 videos)</span>
                </li>
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Unit 2: Molecular Structure (10 videos)</span>
                </li>
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Unit 3: Intermolecular Forces (6 videos)</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View full series <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Video className="w-6 h-6 mr-2 text-purple-500" />
                Organic Chemistry Mastery
              </h3>
              <p className="text-gray-600 mb-4">
                In-depth video tutorials on organic chemistry concepts, reactions, and mechanisms.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Fundamentals of Organic Chemistry (12 videos)</span>
                </li>
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Reaction Mechanisms (15 videos)</span>
                </li>
                <li className="flex items-center">
                  <Play className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Synthesis Strategies (10 videos)</span>
                </li>
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View full series <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Reviews</h2>

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
                "The video tutorials helped me understand complex concepts that I struggled with in class. 
                The visual explanations make everything clearer!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Jessica Chen</h4>
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
                "Being able to pause and rewatch sections of the videos helps me learn at my own pace. 
                The practice problems after each video reinforce the concepts."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">David Martinez</h4>
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
                "The lab technique videos were incredibly helpful before doing actual experiments. 
                They helped me feel more confident in the lab."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emma Thompson</h4>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Access our complete video library and transform how you learn chemistry. 
            New videos added regularly!
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

export default VideoTutorialsPage;