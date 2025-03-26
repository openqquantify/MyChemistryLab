import React, { useState } from 'react';
import { Info, Search, ArrowLeft, Download, Filter, ChevronRight, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Sample data for elements
const elements = [
  { id: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', atomicWeight: '1.008', group: 1, period: 1, electronConfig: '1s¹', meltingPoint: '-259.16', boilingPoint: '-252.87', density: '0.00008988', discovered: 1766, discoverer: 'Henry Cavendish' },
  { id: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', atomicWeight: '4.0026', group: 18, period: 1, electronConfig: '1s²', meltingPoint: '-272.2', boilingPoint: '-268.93', density: '0.0001785', discovered: 1868, discoverer: 'Pierre Janssen' },
  { id: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', atomicWeight: '6.94', group: 1, period: 2, electronConfig: '1s² 2s¹', meltingPoint: '180.54', boilingPoint: '1342', density: '0.534', discovered: 1817, discoverer: 'Johan August Arfwedson' },
  { id: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', atomicWeight: '9.0122', group: 2, period: 2, electronConfig: '1s² 2s²', meltingPoint: '1287', boilingPoint: '2470', density: '1.85', discovered: 1798, discoverer: 'Louis Nicolas Vauquelin' },
  { id: 5, symbol: 'B', name: 'Boron', category: 'metalloid', atomicWeight: '10.81', group: 13, period: 2, electronConfig: '1s² 2s² 2p¹', meltingPoint: '2075', boilingPoint: '4000', density: '2.34', discovered: 1808, discoverer: 'Joseph Louis Gay-Lussac' },
  { id: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', atomicWeight: '12.011', group: 14, period: 2, electronConfig: '1s² 2s² 2p²', meltingPoint: '3550', boilingPoint: '4027', density: '2.267', discovered: 'Ancient', discoverer: 'Known to prehistoric humans' },
  { id: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', atomicWeight: '14.007', group: 15, period: 2, electronConfig: '1s² 2s² 2p³', meltingPoint: '-210.1', boilingPoint: '-195.79', density: '0.0012506', discovered: 1772, discoverer: 'Daniel Rutherford' },
  { id: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', atomicWeight: '15.999', group: 16, period: 2, electronConfig: '1s² 2s² 2p⁴', meltingPoint: '-218.79', boilingPoint: '-182.95', density: '0.001429', discovered: 1774, discoverer: 'Joseph Priestley' },
  { id: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', atomicWeight: '18.998', group: 17, period: 2, electronConfig: '1s² 2s² 2p⁵', meltingPoint: '-219.67', boilingPoint: '-188.11', density: '0.001696', discovered: 1886, discoverer: 'Henri Moissan' },
  { id: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', atomicWeight: '20.180', group: 18, period: 2, electronConfig: '1s² 2s² 2p⁶', meltingPoint: '-248.59', boilingPoint: '-246.08', density: '0.0008999', discovered: 1898, discoverer: 'William Ramsay' },
  { id: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', atomicWeight: '22.990', group: 1, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s¹', meltingPoint: '97.72', boilingPoint: '883', density: '0.971', discovered: 1807, discoverer: 'Humphry Davy' },
  { id: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', atomicWeight: '24.305', group: 2, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s²', meltingPoint: '650', boilingPoint: '1090', density: '1.738', discovered: 1755, discoverer: 'Joseph Black' },
  { id: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition-metal', atomicWeight: '26.982', group: 13, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p¹', meltingPoint: '660.32', boilingPoint: '2519', density: '2.698', discovered: 1825, discoverer: 'Hans Christian Ørsted' },
  { id: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', atomicWeight: '28.085', group: 14, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p²', meltingPoint: '1414', boilingPoint: '3265', density: '2.3296', discovered: 1824, discoverer: 'Jöns Jacob Berzelius' },
  { id: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', atomicWeight: '30.974', group: 15, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p³', meltingPoint: '44.15', boilingPoint: '280.5', density: '1.82', discovered: 1669, discoverer: 'Hennig Brand' },
  { id: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', atomicWeight: '32.06', group: 16, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁴', meltingPoint: '115.21', boilingPoint: '444.72', density: '2.067', discovered: 'Ancient', discoverer: 'Known to prehistoric humans' },
  { id: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', atomicWeight: '35.45', group: 17, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁵', meltingPoint: '-101.5', boilingPoint: '-34.04', density: '0.003214', discovered: 1774, discoverer: 'Carl Wilhelm Scheele' },
  { id: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', atomicWeight: '39.948', group: 18, period: 3, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶', meltingPoint: '-189.34', boilingPoint: '-185.85', density: '0.0017837', discovered: 1894, discoverer: 'Lord Rayleigh' },
  { id: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', atomicWeight: '39.098', group: 1, period: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹', meltingPoint: '63.38', boilingPoint: '759', density: '0.862', discovered: 1807, discoverer: 'Humphry Davy' },
  { id: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth', atomicWeight: '40.078', group: 2, period: 4, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', meltingPoint: '842', boilingPoint: '1484', density: '1.54', discovered: 1808, discoverer: 'Humphry Davy' },
];

const categoryColors = {
  'nonmetal': 'bg-green-100 border-green-500 text-green-800',
  'noble-gas': 'bg-purple-100 border-purple-500 text-purple-800',
  'alkali-metal': 'bg-red-100 border-red-500 text-red-800',
  'alkaline-earth': 'bg-orange-100 border-orange-500 text-orange-800',
  'metalloid': 'bg-teal-100 border-teal-500 text-teal-800',
  'halogen': 'bg-yellow-100 border-yellow-500 text-yellow-800',
  'post-transition-metal': 'bg-blue-100 border-blue-500 text-blue-800'
};

const PeriodicTablePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredElements = elements.filter(element => 
    (searchTerm === '' || 
     element.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     element.symbol.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeCategory === 'all' || element.category === activeCategory)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Interactive Periodic Table | MyChemistryLab</title>
        <meta name="description" content="Explore the elements and discover their properties, structures, and applications in our interactive periodic table." />
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Periodic Table</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Explore the elements and discover their properties, structures, and applications in our 
            comprehensive interactive periodic table designed for chemistry students and enthusiasts.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Printable Version
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              View 3D Element Models
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search elements by name or symbol..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              <button 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeCategory === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                All Elements
              </button>
              {Object.keys(categoryColors).map(category => (
                <button
                  key={category}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
          
          {/* Periodic Table Grid */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Periodic Table of Elements</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-18 gap-2">
              {filteredElements.map(element => (
                <button
                  key={element.id}
                  className={`aspect-square border-2 rounded-lg p-2 flex flex-col items-center justify-center transition-transform hover:scale-105 ${categoryColors[element.category]}`}
                  onClick={() => setSelectedElement(element)}
                >
                  <div className="text-xs">{element.id}</div>
                  <div className="text-2xl font-bold">{element.symbol}</div>
                  <div className="text-xs truncate w-full text-center">{element.name}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {Object.entries(categoryColors).map(([category, color]) => (
                <div key={category} className="flex items-center">
                  <div className={`w-4 h-4 rounded ${color.split(' ')[0]}`}></div>
                  <span className="ml-2 text-sm capitalize">{category.replace('-', ' ')}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Element Details */}
          {selectedElement && (
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">{selectedElement.name}</h3>
                  <p className="text-gray-600">Element {selectedElement.id}</p>
                </div>
                <div className={`text-5xl font-bold p-4 rounded-lg ${categoryColors[selectedElement.category]}`}>
                  {selectedElement.symbol}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-500" />
                    Basic Information
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Atomic Number:</span>
                        <span className="font-medium">{selectedElement.id}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Symbol:</span>
                        <span className="font-medium">{selectedElement.symbol}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Atomic Weight:</span>
                        <span className="font-medium">{selectedElement.atomicWeight} u</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Group:</span>
                        <span className="font-medium">{selectedElement.group}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Period:</span>
                        <span className="font-medium">{selectedElement.period}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium capitalize">{selectedElement.category.replace('-', ' ')}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Electron Configuration:</span>
                        <span className="font-medium">{selectedElement.electronConfig}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Discovered:</span>
                        <span className="font-medium">{selectedElement.discovered}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Discoverer:</span>
                        <span className="font-medium">{selectedElement.discoverer}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Physical Properties</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Melting Point:</span>
                        <span className="font-medium">{selectedElement.meltingPoint} °C</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Boiling Point:</span>
                        <span className="font-medium">{selectedElement.boilingPoint} °C</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Density:</span>
                        <span className="font-medium">{selectedElement.density} g/cm³</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h4 className="text-lg font-semibold mt-6 mb-4">Electron Configuration</h4>
                  <div className="bg-gray-50 rounded-lg p-4 h-32 flex items-center justify-center">
                    <p className="text-center text-gray-800">
                      Interactive electron configuration visualization would appear here
                    </p>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      View 3D atomic structure
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Common Applications and Compounds</h4>
                <p className="text-gray-600 mb-4">
                  Detailed information about {selectedElement.name}'s common applications, compounds, 
                  and role in chemistry and industry would be displayed here.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Industrial Uses</h5>
                    <p className="text-sm text-gray-600">
                      Information about industrial applications would appear here.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Common Compounds</h5>
                    <p className="text-sm text-gray-600">
                      List of common compounds would appear here.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Biological Role</h5>
                    <p className="text-sm text-gray-600">
                      Information about biological significance would appear here.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors"
                  onClick={() => setSelectedElement(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          
          {/* Educational Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Element Videos</h3>
                <p className="text-gray-600 mb-4">Watch fascinating videos about each element, including demonstrations of their properties and reactions.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Browse videos <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Element Worksheets</h3>
                <p className="text-gray-600 mb-4">Download printable worksheets to test your knowledge of the elements and their properties.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Download worksheets <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Element Quizzes</h3>
                <p className="text-gray-600 mb-4">Test your knowledge with interactive quizzes covering the periodic table and element properties.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Take a quiz <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How are elements organized in the periodic table?</h3>
                <p className="text-gray-600">
                  Elements in the periodic table are arranged by atomic number (number of protons) from left to right and top to bottom. 
                  Elements in the same column (group) have similar chemical properties, while elements in the same row (period) have the 
                  same number of electron shells.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">What do the different colors represent?</h3>
                <p className="text-gray-600">
                  The colors in our periodic table represent different element categories: metals, nonmetals, metalloids, noble gases, 
                  halogens, alkali metals, alkaline earth metals, transition metals, lanthanides, and actinides. Each category shares 
                  similar properties and behaviors.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How many elements are there in the periodic table?</h3>
                <p className="text-gray-600">
                  As of 2025, there are 118 confirmed elements in the periodic table. Elements 1-94 occur naturally on Earth 
                  (though some only in trace amounts), while elements 95-118 have been synthesized in laboratories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeriodicTablePage;