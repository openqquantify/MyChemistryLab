import React, { useState } from 'react';
import { Info, Search, ChevronRight } from 'lucide-react';

// Sample data for a few elements
const elements = [
  { id: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', atomicWeight: '1.008', group: 1, period: 1 },
  { id: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', atomicWeight: '4.0026', group: 18, period: 1 },
  { id: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', atomicWeight: '6.94', group: 1, period: 2 },
  { id: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', atomicWeight: '9.0122', group: 2, period: 2 },
  { id: 5, symbol: 'B', name: 'Boron', category: 'metalloid', atomicWeight: '10.81', group: 13, period: 2 },
  { id: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', atomicWeight: '12.011', group: 14, period: 2 },
  { id: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', atomicWeight: '14.007', group: 15, period: 2 },
  { id: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', atomicWeight: '15.999', group: 16, period: 2 },
  { id: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', atomicWeight: '18.998', group: 17, period: 2 },
  { id: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', atomicWeight: '20.180', group: 18, period: 2 },
  { id: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', atomicWeight: '22.990', group: 1, period: 3 },
  { id: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth', atomicWeight: '24.305', group: 2, period: 3 },
];

const categoryColors = {
  'nonmetal': 'bg-green-100 border-green-500 text-green-800',
  'noble-gas': 'bg-purple-100 border-purple-500 text-purple-800',
  'alkali-metal': 'bg-red-100 border-red-500 text-red-800',
  'alkaline-earth': 'bg-orange-100 border-orange-500 text-orange-800',
  'metalloid': 'bg-teal-100 border-teal-500 text-teal-800',
  'halogen': 'bg-yellow-100 border-yellow-500 text-yellow-800',
};

const PeriodicTableSection = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredElements = elements.filter(element => 
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    element.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Interactive Periodic Table</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Explore the elements and discover their properties, structures, and applications in our interactive periodic table.
        </p>
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search elements..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
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
        
        {selectedElement && (
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-800">{selectedElement.name}</h3>
                <p className="text-gray-600">Element {selectedElement.id}</p>
              </div>
              <div className={`text-5xl font-bold p-4 rounded-lg ${categoryColors[selectedElement.category]}`}>
                {selectedElement.symbol}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-500" />
                  Basic Information
                </h4>
                <ul className="space-y-2">
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
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Electron Configuration</h4>
                <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                  <p className="text-center text-gray-800">
                    Interactive electron configuration visualization would appear here
                  </p>
                </div>
                
                <div className="mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    View 3D atomic structure
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Properties and Applications</h4>
              <p className="text-gray-600">
                Detailed information about {selectedElement.name}'s physical properties, chemical behavior, 
                common compounds, and real-world applications would be displayed here.
              </p>
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
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Explore Full Periodic Table
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PeriodicTableSection;