'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function WholesalerSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pellego for Wholesalers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered tools to find motivated sellers, analyze deals, and build your buyer list
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Distressed Property Finder</h3>
              <p className="text-gray-600">
                Our AI scans millions of data points to identify potential distressed properties with motivated sellers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deal Analyzer</h3>
              <p className="text-gray-600">
                Instantly analyze deals with accurate ARV calculations, repair estimates, and profit potential.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buyer List Management</h3>
              <p className="text-gray-600">
                Build and manage your buyer list with AI-powered matching to connect the right properties with the right investors.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find More Deals, Faster</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI-powered property finder helps you identify distressed properties and motivated sellers before your competition.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Pre-foreclosure and distressed property tracking",
                    "Tax delinquent property identification",
                    "Vacant property detection",
                    "Skip tracing and owner contact information",
                    "Automated direct mail and SMS campaigns"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="/nwmls-analyzer" 
                  className="px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
                >
                  Try Property Finder
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Property Deal Analyzer</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="123 Main St, Anytown, USA" disabled />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="$125,000" disabled />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated ARV</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="$225,000" disabled />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Repair Costs</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="$35,000" disabled />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Wholesale Fee</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="$15,000" disabled />
                      </div>
                    </div>
                    <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Profit Potential:</span>
                        <span className="text-xl font-bold text-green-600">$15,000</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-medium text-gray-700">ROI:</span>
                        <span className="text-lg font-bold text-green-600">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Faster, Earn More</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our all-in-one platform streamlines your wholesaling business from finding deals to closing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  title: "Find Deals",
                  description: "Discover motivated sellers with our AI-powered property finder."
                },
                {
                  icon: (
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Analyze Quickly",
                  description: "Get instant ARV, repair estimates, and profit potential."
                },
                {
                  icon: (
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Match Buyers",
                  description: "Connect properties to the right buyers in your network."
                },
                {
                  icon: (
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Close Deals",
                  description: "Generate contracts and close deals with ease."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing & Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select the plan that fits your wholesaling business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  features: [
                    "50 Property Lookups/mo",
                    "10 Skip Traces/mo",
                    "Basic Deal Calculator",
                    "Email Support",
                    "2 Marketing Campaigns/mo"
                  ],
                  cta: "Get Started",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$99",
                  features: [
                    "250 Property Lookups/mo",
                    "100 Skip Traces/mo",
                    "Advanced Deal Analyzer",
                    "Buyer List Management",
                    "Email & SMS Marketing",
                    "Priority Support"
                  ],
                  cta: "Most Popular",
                  popular: true
                },
                {
                  name: "Unlimited",
                  price: "$199",
                  features: [
                    "Unlimited Property Lookups",
                    "Unlimited Skip Traces",
                    "Premium Deal Analyzer",
                    "Advanced Buyer Matching",
                    "Full Marketing Suite",
                    "API Access",
                    "Dedicated Account Manager"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md relative ${plan.popular ? 'ring-2 ring-primary' : 'border border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/plans"
                      className={`block w-full text-center py-2 px-4 rounded-md font-medium ${
                        plan.popular 
                          ? 'bg-primary text-white hover:bg-primary-dark' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 