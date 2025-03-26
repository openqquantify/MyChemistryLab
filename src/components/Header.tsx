

import React, { useState } from 'react';
import { Menu, X, Search, LogIn, Beaker } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm(''); // Clear the input after submitting
    }
  };

  // Function to scroll to a section by ID
  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu after clicking
      }
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Beaker className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">MyChemistryLab</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 font-medium">Features</button>
            <Link to="/mobile-app" className="text-gray-600 hover:text-blue-600 font-medium">Mobile App</Link>
            <Link to="/students" className="text-gray-600 hover:text-blue-600 font-medium">For Students</Link>
            <Link to="/educators" className="text-gray-600 hover:text-blue-600 font-medium">For Educators</Link>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 font-medium">Pricing</button>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="border rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <button type="submit" className="p-2 text-gray-600 hover:text-blue-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center">
              <LogIn className="h-5 w-5 mr-1" />
              Log In
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 font-medium">Features</button>
              <Link to="/virtual-lab" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Virtual Lab</Link>
              <Link to="/students" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>For Students</Link>
              <Link to="/educators" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>For Educators</Link>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 font-medium">Pricing</button>
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              {/* Mobile Search Form */}
              <form onSubmit={handleSearchSubmit} className="mb-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button type="submit" className="p-2 text-gray-600 hover:text-blue-600">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>
              <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center" onClick={() => setIsMenuOpen(false)}>
                <LogIn className="h-5 w-5 mr-1" />
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
