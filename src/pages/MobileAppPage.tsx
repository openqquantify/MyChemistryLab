import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Download, Globe, Wifi, WifiOff, Zap, Shield, ChevronRight, Star } from 'lucide-react';

const MobileAppPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Mobile App | MyChemistryLab</title>
        <meta name="description" content="Access MyChemistryLab's features on the go with our mobile app. Study chemistry anywhere, anytime." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Chemistry Learning On The Go</h1>
              <p className="text-xl text-blue-100 max-w-3xl mb-8">
                Access all your chemistry learning resources anytime, anywhere with our mobile app. 
                Study, practice, and track your progress from your smartphone or tablet.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </button>
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Student using MyChemistryLab mobile app"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile App Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Access</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly sync your progress across all devices - desktop, tablet, and mobile.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Real-time synchronization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Continue where you left off</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Consistent experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <WifiOff className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Offline Access</h3>
              <p className="text-gray-600 mb-4">
                Download content for offline study when you don't have internet access.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Downloadable lessons</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Practice problems offline</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Auto-sync when online</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-Optimized</h3>
              <p className="text-gray-600 mb-4">
                Interface designed specifically for mobile devices with touch-friendly controls.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Touch-friendly interface</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Fast loading times</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Battery efficient</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">App Screenshots</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Mobile app dashboard"
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-600">Track your progress and access recent content</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Mobile app practice problems"
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Practice Problems</h3>
              <p className="text-gray-600">Solve chemistry problems on the go</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Mobile app virtual lab"
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Virtual Lab</h3>
              <p className="text-gray-600">Access virtual lab simulations</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Mobile app analytics"
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">View your performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>

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
                "The mobile app is perfect for studying during my commute. I can review concepts and 
                practice problems anywhere!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Emily Chen</h4>
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
                "Being able to download content for offline use is a game-changer. I can study even 
                without internet access."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Michael Rodriguez</h4>
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
                "The touch-friendly interface makes it easy to use virtual lab simulations on my tablet. 
                It's like having a chemistry lab in my pocket!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Sarah Thompson</h4>
                  <p className="text-gray-500 text-sm">Undergraduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Now</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get started with MyChemistryLab's mobile app and transform how you learn chemistry. 
            Available for both iOS and Android devices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center">
              <Download className="w-6 h-6 mr-2" />
              Download for iOS
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center">
              <Download className="w-6 h-6 mr-2" />
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;