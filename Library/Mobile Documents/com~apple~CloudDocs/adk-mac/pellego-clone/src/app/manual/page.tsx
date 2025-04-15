'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ManualPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'account', title: 'Account Management' },
    { id: 'search', title: 'Property Search' },
    { id: 'rental', title: 'Rental Analysis' },
    { id: 'flip', title: 'Flip Analysis' },
    { id: 'comp', title: 'Comp Analysis' },
    { id: 'rehab', title: 'Rehab Calculator' },
    { id: 'nwmls', title: 'NWMLS Analyzer' },
    { id: 'saved', title: 'Saved Properties' },
    { id: 'notifications', title: 'Notifications' },
    { id: 'api', title: 'API Access' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Pellego User Manual
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Comprehensive guide to using all Pellego features and tools
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row">
            <aside className="lg:w-64 lg:flex-shrink-0 mb-8 lg:mb-0 lg:pr-8">
              <nav className="sticky top-8">
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                          activeSection === section.id
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Need more help?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    If you can't find what you're looking for in the manual, our support team is ready to help.
                  </p>
                  <Link href="/contact" className="text-sm text-primary hover:text-primary-dark font-medium">
                    Contact Support →
                  </Link>
                </div>
              </nav>
            </aside>
            
            <div className="lg:flex-1 lg:pl-8 lg:border-l lg:border-gray-200">
              {activeSection === 'introduction' && (
                <div id="introduction">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction to Pellego</h2>
                  
                  <div className="prose max-w-none text-gray-600">
                    <p>
                      Welcome to Pellego, your comprehensive real estate analysis platform. This user manual will guide you through all the features and tools available to help you make smarter property investment decisions.
                    </p>
                    
                    <h3>What is Pellego?</h3>
                    <p>
                      Pellego is an AI-powered real estate analysis platform designed for investors, agents, and wholesalers. Our suite of tools helps you search for properties, analyze investment potential, estimate rehab costs, and monitor market changes.
                    </p>
                    
                    <h3>Getting Started</h3>
                    <p>
                      To get the most out of Pellego, we recommend starting with these steps:
                    </p>
                    <ol>
                      <li>Create your account and set up your profile</li>
                      <li>Explore the property search functionality</li>
                      <li>Try analyzing a property using one of our analysis tools</li>
                      <li>Save properties of interest to your dashboard</li>
                      <li>Set up notifications for market changes</li>
                    </ol>
                    
                    <h3>System Requirements</h3>
                    <p>
                      Pellego is a web-based platform that works on all modern browsers, including:
                    </p>
                    <ul>
                      <li>Google Chrome (recommended)</li>
                      <li>Mozilla Firefox</li>
                      <li>Safari</li>
                      <li>Microsoft Edge</li>
                    </ul>
                    <p>
                      For the best experience, we recommend using a desktop or laptop computer, although our platform is also optimized for mobile devices.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 my-6">
                      <h4 className="text-blue-800 font-medium mb-2">Pro Tip</h4>
                      <p className="text-blue-700 text-sm">
                        If you&apos;re new to real estate investing, check out our <Link href="/tutorial" className="text-blue-600 underline">tutorial videos</Link> before diving into the platform. They provide a great introduction to both real estate concepts and how to use Pellego effectively.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'account' && (
                <div id="account">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Management</h2>
                  
                  <div className="prose max-w-none text-gray-600">
                    <h3>Creating Your Account</h3>
                    <p>
                      To create a Pellego account, click on the "Create Account" button in the top navigation bar. You'll need to provide:
                    </p>
                    <ul>
                      <li>Your full name</li>
                      <li>Email address</li>
                      <li>Password (must be at least 8 characters with a mix of letters, numbers, and symbols)</li>
                    </ul>
                    
                    <h3>Account Settings</h3>
                    <p>
                      After logging in, you can access your account settings by clicking on your profile picture in the top-right corner and selecting "Settings." From here, you can:
                    </p>
                    <ul>
                      <li>Update your profile information</li>
                      <li>Change your password</li>
                      <li>Manage notification preferences</li>
                      <li>Update payment information (for premium users)</li>
                      <li>Download your data</li>
                      <li>Delete your account</li>
                    </ul>
                    
                    <h3>Subscription Plans</h3>
                    <p>
                      Pellego offers multiple subscription tiers to meet different needs:
                    </p>
                    <ul>
                      <li><strong>Free:</strong> Basic property search and limited analysis</li>
                      <li><strong>Standard ($29/month):</strong> Full analysis tools and up to 20 saved properties</li>
                      <li><strong>Professional ($79/month):</strong> Advanced analysis, unlimited saved properties, and API access</li>
                      <li><strong>Enterprise:</strong> Custom solutions for teams and brokerages</li>
                    </ul>
                    
                    <h3>Managing Your Subscription</h3>
                    <p>
                      To manage your subscription, go to Account Settings {`>`} Billing. From there, you can:
                    </p>
                    <ul>
                      <li>Upgrade or downgrade your plan</li>
                      <li>Update payment methods</li>
                      <li>View billing history</li>
                      <li>Cancel your subscription</li>
                    </ul>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 my-6">
                      <h4 className="text-yellow-800 font-medium mb-2">Important Note</h4>
                      <p className="text-yellow-700 text-sm">
                        All subscriptions are automatically renewed until canceled. To avoid being charged for the next billing cycle, cancel at least 24 hours before your renewal date.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'search' && (
                <div id="search">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Search</h2>
                  
                  <div className="prose max-w-none text-gray-600">
                    <h3>Basic Search</h3>
                    <p>
                      Pellego's search tool allows you to find properties using natural language queries or specific filters. To start a search:
                    </p>
                    <ol>
                      <li>Navigate to the Search page</li>
                      <li>Enter a location or specific property address in the search bar</li>
                      <li>Optionally, add details like "3 bedroom houses in Dallas under $300k"</li>
                      <li>Press Enter or click the Search button</li>
                    </ol>
                    
                    <h3>Advanced Filters</h3>
                    <p>
                      For more precise searches, use the advanced filters:
                    </p>
                    <ul>
                      <li><strong>Property Type:</strong> Single-family, multi-family, condo, etc.</li>
                      <li><strong>Price Range:</strong> Set minimum and maximum price</li>
                      <li><strong>Bedrooms/Bathrooms:</strong> Specify the number of bedrooms and bathrooms</li>
                      <li><strong>Square Footage:</strong> Set minimum and maximum square footage</li>
                      <li><strong>Lot Size:</strong> Filter by property lot size</li>
                      <li><strong>Year Built:</strong> Search for properties built within a specific timeframe</li>
                      <li><strong>Days on Market:</strong> Find newly listed or long-standing properties</li>
                      <li><strong>Investment Criteria:</strong> Filter by potential cash flow, cap rate, or ROI</li>
                    </ul>
                    
                    <h3>Saving Searches</h3>
                    <p>
                      To save a search for future use:
                    </p>
                    <ol>
                      <li>Conduct your search with desired parameters</li>
                      <li>Click the "Save This Search" button</li>
                      <li>Give your search a name</li>
                      <li>Choose notification preferences (optional)</li>
                      <li>Click Save</li>
                    </ol>
                    <p>
                      Saved searches can be accessed from your dashboard and can be used to set up notifications for new properties that match your criteria.
                    </p>
                    
                    <h3>Search Results</h3>
                    <p>
                      Search results can be viewed in a list or map view:
                    </p>
                    <ul>
                      <li><strong>List View:</strong> Shows properties in a vertical list with key details</li>
                      <li><strong>Map View:</strong> Displays properties on an interactive map</li>
                    </ul>
                    <p>
                      Results can be sorted by price, date listed, potential ROI, cap rate, and other criteria.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 my-6">
                      <h4 className="text-blue-800 font-medium mb-2">Pro Tip</h4>
                      <p className="text-blue-700 text-sm">
                        Use the "Draw on Map" feature to define specific neighborhoods or areas for your search. This is particularly useful for targeting specific school districts or up-and-coming neighborhoods.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Note: I'm showing only a few sections for brevity, but in a real application, each section would be implemented */}
              
              {activeSection !== 'introduction' && activeSection !== 'account' && activeSection !== 'search' && (
                <div className="text-center py-16">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Documentation in progress</h3>
                  <p className="mt-1 text-gray-500">
                    This section of the manual is currently being updated. Please check back soon for detailed information about this feature.
                  </p>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary-50 hover:bg-primary-100">
                      Contact Support
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 