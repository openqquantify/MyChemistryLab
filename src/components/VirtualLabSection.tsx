import React, { useState } from 'react';
import { Beaker, FlaskRound as Flask, Thermometer, Droplets, AlertTriangle, Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';

const VirtualLabSection = () => {
  const [activeTab, setActiveTab] = useState('titration');
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  
  const experiments = [
    { id: 'titration', name: 'Acid-Base Titration', icon: <Droplets className="w-5 h-5" /> },
    { id: 'calorimetry', name: 'Calorimetry', icon: <Thermometer className="w-5 h-5" /> },
    { id: 'spectroscopy', name: 'Spectroscopy', icon: <Flask className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Virtual Chemistry Lab</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Experience hands-on chemistry experiments in our safe, interactive virtual laboratory environment.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
              </div>
              
              {/* Lab Instructions and Controls */}
              <div className="lg:w-1/3">
                <div className="bg-gray-100 rounded-lg p-4 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    {activeTab === 'titration' && "Acid-Base Titration"}
                    {activeTab === 'calorimetry' && "Calorimetry Experiment"}
                    {activeTab === 'spectroscopy' && "Spectroscopy Analysis"}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Objective</h4>
                    <p className="text-gray-700">
                      {activeTab === 'titration' && "Determine the concentration of an unknown acid solution using a standardized base solution and pH indicator."}
                      {activeTab === 'calorimetry' && "Measure the heat of reaction and calculate enthalpy changes in chemical processes."}
                      {activeTab === 'spectroscopy' && "Identify unknown compounds by analyzing their absorption or emission spectra."}
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
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Explore All Virtual Labs
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VirtualLabSection;