import React from 'react';
import { Beaker, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  // Function to scroll to a section by ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Beaker className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">MyChemistryLab</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming chemistry education through interactive learning experiences, virtual labs, and AI-guided practice.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="ml-3 text-gray-400">contact@mychemistrylab.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="ml-3 text-gray-400">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="ml-3 text-gray-400">123 Science Way, Boston, MA 02115</span>
              </div>
            </div>
          </div>
          

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="/virtual-lab" className="text-gray-400 hover:text-white transition-colors">Virtual Labs</a></li>
              <li><a href="learning-modules" className="text-gray-400 hover:text-white transition-colors">Interactive Modules</a></li>
              <li><a href="/question-bank" className="text-gray-400 hover:text-white transition-colors">Question Bank</a></li>
              <li><a href="/analytics-dashboard" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="/mobile-app" className="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 MyChemistryLab. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;