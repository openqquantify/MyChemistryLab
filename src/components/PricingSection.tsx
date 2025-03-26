import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Student",
    price: "$9.99",
    period: "per month",
    description: "Perfect for individual students looking to improve their chemistry skills.",
    features: [
      "Access to all interactive learning modules",
      "Basic virtual lab simulations",
      "AI-guided practice system",
      "Question bank (limited access)",
      "Interactive periodic table",
      "Mobile access",
      "Personal progress tracking"
    ],
    notIncluded: [
      "Advanced virtual lab simulations",
      "LMS integration",
      "Educator tools",
      "Custom course creation"
    ],
    cta: "Start Free Trial",
    popular: false,
    link: "/signup"
  },
  {
    name: "Educator",
    price: "$19.99",
    period: "per month",
    description: "Designed for teachers and professors who want to enhance their chemistry curriculum.",
    features: [
      "Everything in Student plan",
      "Advanced virtual lab simulations",
      "Full question bank access",
      "LMS integration",
      "Educator tools",
      "Class performance analytics",
      "Custom assignment creation",
      "Up to 100 student accounts"
    ],
    notIncluded: [
      "Custom course creation",
      "API access",
      "White-labeling options"
    ],
    cta: "Start Free Trial",
    popular: true,
      link: "/signup"
  },
  {
    name: "Institution",
    price: "Custom",
    period: "annual billing",
    description: "Enterprise-level solution for schools, colleges, and universities.",
    features: [
      "Everything in Educator plan",
      "Unlimited student accounts",
      "Custom course creation",
      "API access for integration",
      "White-labeling options",
      "Dedicated support team",
      "Staff training sessions",
      "Custom feature development"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
    link: "/contact"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Simple, Transparent Pricing</h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : 'border border-gray-200'}`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                

                <Link
                  to={plan.link}  // Use plan.link here
                  className={`block text-center py-3 rounded-md font-medium mb-8 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {plan.cta}
                </Link>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">Included features:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-gray-800 mt-6">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="ml-3 text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Need a custom solution for your organization?</p>
          <Link 
            to="/contact"  
            className="px-8 py-4 bg-gray-800 text-white rounded-md font-bold text-lg hover:bg-gray-700 transition-colors inline-block"
          >
            Contact Our Sales Team
          </Link>

          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;