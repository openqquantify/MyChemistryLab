import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, CheckCircle, Settings, Database, Shield, ChevronRight, Star } from 'lucide-react';

const LMSIntegrationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>LMS Integration | MyChemistryLab</title>
        <meta name="description" content="Seamlessly integrate MyChemistryLab with your Learning Management System for streamlined chemistry education." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">LMS Integration</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Seamlessly connect MyChemistryLab with your existing Learning Management System for 
                streamlined course management and grade synchronization.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Request Integration
                </Link>
                <a href="#supported-platforms" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                  View Supported Platforms
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="LMS Integration Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section id="supported-platforms" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Learning Management Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Canvas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Full grade synchronization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Single sign-on support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Deep linking to content</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Blackboard</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Automated roster sync</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Assignment integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Gradebook integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Moodle</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">LTI tool integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Custom activity modules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-600">Real-time grade sync</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integration Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Layers className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect your LMS with MyChemistryLab in minutes using our simple setup wizard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Grade Sync</h3>
              <p className="text-gray-600">
                Automatic grade synchronization between MyChemistryLab and your LMS gradebook.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-600">
                Single sign-on (SSO) support for seamless and secure student access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Settings className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Configuration</h3>
              <p className="text-gray-600">
                Flexible settings to match your institution's specific needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integration Process</h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-blue-200"></div>

              <div className="relative mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-semibold ml-4">Request Integration</h3>
                </div>
                <div className="ml-20">
                  <p className="text-gray-600">
                    Contact our integration team to begin the process and receive your integration credentials.
                  </p>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-semibold ml-4">Configure Your LMS</h3>
                </div>
                <div className="ml-20">
                  <p className="text-gray-600">
                    Follow our step-by-step guide to set up the integration in your Learning Management System.
                  </p>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-semibold ml-4">Test Integration</h3>
                </div>
                <div className="ml-20">
                  <p className="text-gray-600">
                    Verify the integration is working correctly with our testing tools and support team.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                  <h3 className="text-xl font-semibold ml-4">Go Live</h3>
                </div>
                <div className="ml-20">
                  <p className="text-gray-600">
                    Launch the integration for your students and begin using MyChemistryLab within your LMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Educators Say</h2>

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
                "The LMS integration has streamlined our entire chemistry program. Grade syncing saves hours of administrative work."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Educator testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Dr. Sarah Chen</h4>
                  <p className="text-gray-500 text-sm">Chemistry Department Chair</p>
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
                "Single sign-on integration means our students can access all their chemistry resources seamlessly."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Educator testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Prof. James Wilson</h4>
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
                "The integration process was smooth and the support team was incredibly helpful throughout setup."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q =80"
                  alt="Educator testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Dr. Emily Rodriguez</h4>
                  <p className="text-gray-500 text-sm">IT Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Integrate?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Connect MyChemistryLab with your LMS today and streamline your chemistry education workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Request Integration
            </Link>
            <a href="#supported-platforms" className="px-8 py-4 border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LMSIntegrationPage;