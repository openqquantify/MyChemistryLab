import React from 'react';
import { ArrowLeft, Users, BookOpen, Beaker, BarChart3, Layers, FileCheck, Settings, ChevronRight, CheckCircle, Star, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EducatorsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>For Educators | MyChemistryLab</title>
        <meta name="description" content="Empower your chemistry teaching with our comprehensive suite of tools designed specifically for educators at all levels." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Chemistry Teaching</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Empower your teaching with our comprehensive suite of tools designed specifically for 
                chemistry educators at all levels, from high school to university.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Request Demo
                </Link>
                <a href="#features" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  Explore Educator Tools
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Chemistry teacher using educator tools" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Educator Tools & Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Customizable Curriculum</h3>
              <p className="text-gray-600 mb-4">
                Create custom courses by selecting from our extensive library of learning modules, 
                or upload your own content to align with your specific curriculum requirements.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                See curriculum options <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Assignment Creator</h3>
              <p className="text-gray-600 mb-4">
                Build custom assignments with our question bank featuring thousands of chemistry problems, 
                or create your own questions with our easy-to-use authoring tools.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Try assignment creator <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Gain insights into student performance with detailed analytics that identify knowledge gaps, 
                track progress, and help you tailor your teaching to student needs.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View analytics demo <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Beaker className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Virtual Lab Management</h3>
              <p className="text-gray-600 mb-4">
                Assign virtual lab experiments to your students, monitor their progress, and assess their 
                understanding with pre-lab and post-lab assignments.
              </p>
              <Link to="/virtual-lab" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Explore virtual labs <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">LMS Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate with popular Learning Management Systems like Canvas, Blackboard, and 
                Moodle for easy grade syncing and course management.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View integration options <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Classroom Management</h3>
              <p className="text-gray-600 mb-4">
                Manage student accounts, track attendance, form groups for collaborative work, and 
                communicate with your class through our integrated messaging system.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                See management tools <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Curriculum Alignment */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Aligned with Educational Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-3 bg-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">High School Standards</h3>
                <p className="text-gray-600 mb-4">
                  Our content aligns with AP Chemistry, IB Chemistry, and Next Generation Science Standards (NGSS) 
                  to ensure your students are prepared for standardized tests and college-level work.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">AP Chemistry Big Ideas and Learning Objectives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">IB Chemistry Assessment Statements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">NGSS Performance Expectations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">State-specific standards mapping</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  View standards alignment <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-3 bg-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Undergraduate Curriculum</h3>
                <p className="text-gray-600 mb-4">
                  Our undergraduate content covers general chemistry, organic chemistry, and biochemistry 
                  topics typically found in first and second-year college courses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">ACS Guidelines for Chemistry Programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Common general chemistry textbook alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Laboratory safety and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Preparation for ACS standardized exams</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  View undergraduate content <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-3 bg-green-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Customization Options</h3>
                <p className="text-gray-600 mb-4">
                  Tailor our content to meet your specific teaching needs with our flexible 
                  customization tools and content creation options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Reorder and customize modules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Create custom questions and assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Upload your own content and materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="ml-2 text-gray-600">Adjust difficulty levels for different classes</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Explore customization <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Educators Say</h2>
          
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
                "MyChemistryLab transformed how I teach organic chemistry. The virtual labs allow students to practice techniques 
                before entering the actual lab, significantly improving their confidence and performance."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Educator testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Dr. Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Professor of Chemistry, Stanford University</p>
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
                "As a high school chemistry teacher, the analytics dashboard has been invaluable. I can quickly identify which 
                concepts my students are struggling with and adjust my teaching accordingly."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Educator testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Chemistry Teacher, Lincoln High School</p>
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
                "The LMS integration and automatic grading features have saved me countless hours of administrative work. 
                Now I can focus more on actual teaching and less on paperwork."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Educator testimonial" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Dr. James Wilson</h4>
                  <p className="text-gray-500 text-sm">Associate Professor, University of Michigan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Development */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Development for Educators</h2>
              <p className="text-xl text-gray-600 mb-6">
                Enhance your chemistry teaching skills with our professional development resources designed 
                specifically for chemistry educators at all levels.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">Webinars and Workshops</h3>
                    <p className="text-gray-600">Participate in live and recorded sessions on teaching strategies and tools</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">Educator Community</h3>
                    <p className="text-gray-600">Connect with fellow chemistry teachers to share resources and best practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Download className="h-6 w-6 text-blue-500 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">Teaching Resources</h3>
                    <p className="text-gray-600">Access lesson plans, activities, and assessment tools created by expert educators</p>
                  </div>
                </li>
              </ul>
              <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors inline-block">
                Explore Professional Development
              </a>
            </div>
            
            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Chemistry teacher professional development" 
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Chemistry Teaching?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of educators who have enhanced their teaching and improved student outcomes with MyChemistryLab.
            Request a demo today to see how our platform can work for your classroom.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Request Demo
            </Link>
            <a href="#" className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducatorsPage;