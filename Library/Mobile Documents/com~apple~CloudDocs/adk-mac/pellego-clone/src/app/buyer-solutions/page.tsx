'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BuyerSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pellego for Home Buyers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered tools to help you find your perfect home and make smarter investment decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Property Search</h3>
              <p className="text-gray-600">
                Our AI understands your preferences and budget to match you with properties that fit your unique needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment Analysis</h3>
              <p className="text-gray-600">
                Get detailed financial analysis for any property including estimated ROI, cash flow, and appreciation potential.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduling Assistant</h3>
              <p className="text-gray-600">
                Easily schedule property viewings, coordinate with agents, and manage your home buying timeline.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pellego makes finding and analyzing properties simple, so you can make confident decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Search & Discover",
                  description: "Use our advanced search to find properties that match your criteria, or get AI-powered recommendations."
                },
                {
                  step: "2",
                  title: "Analyze & Compare",
                  description: "Get detailed investment analysis for each property, with side-by-side comparisons to help you decide."
                },
                {
                  step: "3",
                  title: "Act & Invest",
                  description: "Schedule viewings, make offers, and close deals with confidence based on data-driven insights."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 pt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Your Dream Home</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered search engine helps you find properties that match your exact criteria, even if you can't describe them perfectly.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Personalized property recommendations",
                  "Neighborhood insights and safety scores",
                  "School district quality metrics",
                  "Commute time calculations",
                  "Future value projections"
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
                href="/search" 
                className="px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
              >
                Start Your Search
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Property Search Interface</h3>
                  <p className="text-gray-500 text-sm">Interactive search with AI-powered filters</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Next Home?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create a free account to save searches, get personalized recommendations, and receive alerts for new listings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/create-account" 
                  className="px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition text-center"
                >
                  Create Free Account
                </a>
                <a 
                  href="/search" 
                  className="px-5 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition text-center"
                >
                  Try Property Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 