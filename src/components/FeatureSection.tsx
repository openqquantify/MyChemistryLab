import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  reversed?: boolean;
  link: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  features, 
  reversed = false,
  link,
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl transform translate-x-3 translate-y-3 opacity-20"></div>
              <img 
                src={image} 
                alt={imageAlt} 
                className="rounded-xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
          
          <div className={`lg:w-1/2 ${reversed ? 'lg:pr-16' : 'lg:pl-16'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{title}</h2>
            <p className="text-xl text-gray-600 mb-8">{description}</p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              
              <Link 
                to={link} 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Explore This Feature
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
