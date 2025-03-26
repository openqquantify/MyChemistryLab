import React, { useState } from 'react';
import { Beaker, FlaskRound as Flask, Thermometer, Droplets, AlertTriangle, Play, Pause, RotateCcw, ChevronRight, ArrowLeft, Download, Share2, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const VirtualLabPage = () => {
  const [activeTab, setActiveTab] = useState('titration');
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  
  const experiments = [
    { id: 'titration', name: 'Acid-Base Titration', icon: <Droplets className="w-5 h-5" /> },
    { id: 'calorimetry', name: 'Calorimetry', icon: <Thermometer className="w-5 h-5" /> },
    { id: 'spectroscopy', name: 'Spectroscopy', icon: <Flask className="w-5 h-5" /> },
    { id: 'electrochem', name: 'Electrochemistry', icon: <Beaker className="w-5 h-5" /> },
    { id: 'kinetics', name: 'Reaction Kinetics', icon: <Beaker className="w-5 h-5" /> },
  ];

  const equipment = [
    { id: 'burette', name: 'Burette', description: 'Used for precise dispensing of liquids in titrations' },
    { id: 'flask', name: 'Erlenmeyer Flask', description: 'Conical flask used for mixing and heating solutions' },
    { id: 'pipette', name: 'Pipette', description: 'Used for transferring precise volumes of liquids' },
    { id: 'thermometer', name: 'Digital Thermometer', description: 'Measures temperature changes during reactions' },
    { id: 'stirrer', name: 'Magnetic Stirrer', description: 'Provides consistent mixing of solutions' },
    { id: 'indicator', name: 'pH Indicator', description: 'Changes color at specific pH values' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Virtual Chemistry Lab | MyChemistryLab</title>
        <meta name="description" content="Experience hands-on chemistry experiments in our safe, interactive virtual laboratory environment." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <a href="/" className="text-white hover:text-blue-200 transition-colors flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Virtual Chemistry Laboratory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Experience hands-on chemistry experiments in a safe, interactive virtual environment. 
            Perfect for learning lab techniques, understanding chemical reactions, and preparing for real lab work.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/signup" className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center">
              View Lab Manual
            </Link>

            <Link to="/signup" className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
              Download Worksheets
            </Link>

            {/* FUTURE DOWNLOAD BUTTON
            <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Worksheets
            </button> */}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            {/* Lab Navigation */}
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <div className="flex overflow-x-auto space-x-4 pb-2">
                {experiments.map(experiment => (
                  <button
                    key={experiment.id}
                    className={`px-4 py-2 rounded-md flex items-center whitespace-nowrap ${
                      activeTab === experiment.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveTab(experiment.id)}
                  >
                    {experiment.icon}
                    <span className="ml-2">{experiment.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Lab Simulation Area */}
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Simulation Viewport */}
                <div className="lg:w-2/3">
                  <div className="bg-gray-100 rounded-lg aspect-video relative overflow-hidden">
                    {/* Placeholder for the actual simulation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeTab === 'titration' && (
                        <div className="text-center">
                          <Beaker className="w-24 h-24 mx-auto text-blue-500 mb-4" />
                          <p className="text-gray-700 text-lg">
                            {isSimulationRunning 
                              ? "Acid-Base Titration Simulation Running..." 
                              : "Acid-Base Titration Simulation"}
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'calorimetry' && (
                        <div className="text-center">
                          <Thermometer className="w-24 h-24 mx-auto text-red-500 mb-4" />
                          <p className="text-gray-700 text-lg">
                            {isSimulationRunning 
                              ? "Calorimetry Simulation Running..." 
                              : "Calorimetry Simulation"}
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'spectroscopy' && (
                        <div className="text-center">
                          <Flask className="w-24 h-24 mx-auto text-purple-500 mb-4" />
                          <p className="text-gray-700 text-lg">
                            {isSimulationRunning 
                              ? "Spectroscopy Simulation Running..." 
                              : "Spectroscopy Simulation"}
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'electrochem' && (
                        <div className="text-center">
                          <Beaker className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
                          <p className="text-gray-700 text-lg">
                            {isSimulationRunning 
                              ? "Electrochemistry Simulation Running..." 
                              : "Electrochemistry Simulation"}
                          </p>
                        </div>
                      )}
                      
                      {activeTab === 'kinetics' && (
                        <div className="text-center">
                          <Beaker className="w-24 h-24 mx-auto text-green-500 mb-4" />
                          <p className="text-gray-700 text-lg">
                            {isSimulationRunning 
                              ? "Reaction Kinetics Simulation Running..." 
                              : "Reaction Kinetics Simulation"}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Simulation Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 flex justify-center space-x-4">
                      <button 
                        className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200"
                        onClick={() => setIsSimulationRunning(!isSimulationRunning)}
                      >
                        {isSimulationRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                      <button 
                        className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200"
                        onClick={() => setIsSimulationRunning(false)}
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                      <button 
                        className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Data Visualization */}
                  <div className="mt-6 bg-gray-100 rounded-lg p-4 h-48">
                    <h4 className="text-lg font-semibold mb-2">Real-time Data</h4>
                    <div className="h-32 bg-white rounded border border-gray-300 p-2">
                      <p className="text-center text-gray-500 h-full flex items-center justify-center">
                        {isSimulationRunning 
                          ? "Data visualization would appear here during the simulation" 
                          : "Start the simulation to see data visualization"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Equipment Selection */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-4">Laboratory Equipment</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {equipment.map(item => (
                        <button
                          key={item.id}
                          className={`p-3 border rounded-lg flex flex-col items-center text-center transition-colors ${
                            selectedEquipment === item.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                          onClick={() => setSelectedEquipment(item.id)}
                        >
                          <Beaker className="w-8 h-8 mb-2 text-gray-700" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </button>
                      ))}
                    </div>
                    
                    {selectedEquipment && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h5 className="font-medium mb-1">
                          {equipment.find(e => e.id === selectedEquipment)?.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {equipment.find(e => e.id === selectedEquipment)?.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Lab Instructions and Controls */}
                <div className="lg:w-1/3">
                  <div className="bg-gray-100 rounded-lg p-4 h-full">
                    <h3 className="text-xl font-bold mb-4">
                      {activeTab === 'titration' && "Acid-Base Titration"}
                      {activeTab === 'calorimetry' && "Calorimetry Experiment"}
                      {activeTab === 'spectroscopy' && "Spectroscopy Analysis"}
                      {activeTab === 'electrochem' && "Electrochemistry Lab"}
                      {activeTab === 'kinetics' && "Reaction Kinetics Study"}
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Objective</h4>
                      <p className="text-gray-700">
                        {activeTab === 'titration' && "Determine the concentration of an unknown acid solution using a standardized base solution and pH indicator."}
                        {activeTab === 'calorimetry' && "Measure the heat of reaction and calculate enthalpy changes in chemical processes."}
                        {activeTab === 'spectroscopy' && "Identify unknown compounds by analyzing their absorption or emission spectra."}
                        {activeTab === 'electrochem' && "Investigate redox reactions and measure electrode potentials in electrochemical cells."}
                        {activeTab === 'kinetics' && "Determine the rate law and activation energy for a chemical reaction."}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Equipment</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {activeTab === 'titration' && (
                          <>
                            <li>Burette with standardized NaOH solution</li>
                            <li>Erlenmeyer flask with unknown acid</li>
                            <li>pH indicator (phenolphthalein)</li>
                            <li>Magnetic stirrer</li>
                          </>
                        )}
                        {activeTab === 'calorimetry' && (
                          <>
                            <li>Calorimeter</li>
                            <li>Thermometer</li>
                            <li>Reactant solutions</li>
                            <li>Stirring rod</li>
                          </>
                        )}
                        {activeTab === 'spectroscopy' && (
                          <>
                            <li>Spectrophotometer</li>
                            <li>Sample cuvettes</li>
                            <li>Unknown solution samples</li>
                            <li>Reference solutions</li>
                          </>
                        )}
                        {activeTab === 'electrochem' && (
                          <>
                            <li>Voltmeter</li>
                            <li>Electrodes (zinc, copper)</li>
                            <li>Salt bridge</li>
                            <li>Electrolyte solutions</li>
                          </>
                        )}
                        {activeTab === 'kinetics' && (
                          <>
                            <li>Stopwatch</li>
                            <li>Colorimeter</li>
                            <li>Reactant solutions</li>
                            <li>Water bath (various temperatures)</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Procedure</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        <li>Prepare your equipment and solutions</li>
                        <li>Calibrate instruments as needed</li>
                        <li>Run the experiment following safety protocols</li>
                        <li>Collect and analyze data</li>
                        <li>Draw conclusions from your results</li>
                      </ol>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-yellow-800">Safety Notice</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            {activeTab === 'titration' && "Handle all chemicals with care. Wear appropriate PPE including gloves and safety goggles."}
                            {activeTab === 'calorimetry' && "Be cautious with hot solutions and equipment. Some reactions may be exothermic."}
                            {activeTab === 'spectroscopy' && "Some solvents may be flammable. Keep away from open flames and heat sources."}
                            {activeTab === 'electrochem' && "Avoid contact with electrolyte solutions. Some may be corrosive or toxic."}
                            {activeTab === 'kinetics' && "Follow proper disposal procedures for all chemicals used in this experiment."}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        View pre-lab tutorial
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Lab Techniques Videos</h3>
                <p className="text-gray-600 mb-4">Watch step-by-step demonstrations of proper laboratory techniques.</p>
                <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Browse videos <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Experiment Worksheets</h3>
                <p className="text-gray-600 mb-4">Download printable worksheets to record and analyze your experimental data.</p>
                <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Download worksheets <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Theory Background</h3>
                <p className="text-gray-600 mb-4">Review the theoretical concepts behind each experiment.</p>
                <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">How accurate are these virtual simulations?</h3>
                <p className="text-gray-600">
                  Our virtual lab simulations are designed to closely mimic real-world laboratory conditions and chemical behaviors. 
                  While they can't replace hands-on experience, they provide a highly accurate representation of chemical principles and reactions.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I save my experiment results?</h3>
                <p className="text-gray-600">
                  Yes, all experiment data can be saved to your account. You can download results as CSV files, 
                  generate lab reports, and even share your findings with classmates or instructors.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Are these experiments aligned with standard curricula?</h3>
                <p className="text-gray-600">
                  Absolutely. Our virtual labs are designed to align with high school AP Chemistry, IB Chemistry, 
                  and first-year undergraduate chemistry curricula. Each experiment includes learning objectives 
                  that map to common educational standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualLabPage;