'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function QuickstartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Quick Start Guide
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Get up and running with Pellego in just 5 minutes
            </p>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4 flex-shrink-0">
                    1
                  </span>
                  Create Your Account
                </h2>
                <div className="mt-5 pl-14">
                  <p className="text-lg text-gray-600 mb-4">
                    Sign up for a free account to access all basic features of Pellego. You can upgrade to a premium plan anytime.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">To create your account:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Click the "Create Account" button in the top navigation</li>
                      <li>Enter your name, email address, and create a password</li>
                      <li>Agree to the terms of service</li>
                      <li>Click "Create Account" to complete registration</li>
                    </ol>
                    <div className="mt-4">
                      <Link href="/create-account" className="text-primary hover:text-primary-dark font-medium">
                        Create your account now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4 flex-shrink-0">
                    2
                  </span>
                  Search for Properties
                </h2>
                <div className="mt-5 pl-14">
                  <p className="text-lg text-gray-600 mb-4">
                    Use our powerful search tool to find properties that match your investment criteria.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">To search for properties:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Navigate to the "Search" page</li>
                      <li>Enter your location or criteria (e.g., "3 bedroom homes in Austin under $400k")</li>
                      <li>Use filters to refine your search (price range, property type, etc.)</li>
                      <li>View the results and click on any property for more details</li>
                    </ol>
                    <div className="mt-4">
                      <Link href="/search" className="text-primary hover:text-primary-dark font-medium">
                        Try property search now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4 flex-shrink-0">
                    3
                  </span>
                  Analyze Investment Potential
                </h2>
                <div className="mt-5 pl-14">
                  <p className="text-lg text-gray-600 mb-4">
                    Evaluate properties with our comprehensive analysis tools designed for different investment strategies.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Choose your analysis type:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <Link href="/rental-analysis" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h5 className="font-medium text-primary">Rental Analysis</h5>
                        <p className="text-sm text-gray-600 mt-1">Calculate potential rental income, expenses, and ROI</p>
                      </Link>
                      <Link href="/flip-analysis" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h5 className="font-medium text-primary">Flip Analysis</h5>
                        <p className="text-sm text-gray-600 mt-1">Estimate rehab costs, potential profit, and timelines</p>
                      </Link>
                      <Link href="/comp-analysis" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h5 className="font-medium text-primary">Comp Analysis</h5>
                        <p className="text-sm text-gray-600 mt-1">Find comparable properties and estimate accurate values</p>
                      </Link>
                      <Link href="/rehab-analysis" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h5 className="font-medium text-primary">Rehab Calculator</h5>
                        <p className="text-sm text-gray-600 mt-1">Itemize renovation costs and estimate ARV</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4 flex-shrink-0">
                    4
                  </span>
                  Save & Monitor Properties
                </h2>
                <div className="mt-5 pl-14">
                  <p className="text-lg text-gray-600 mb-4">
                    Save properties for later and set up notifications for market changes.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">To save and monitor properties:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>Click the "Save" button on any property listing</li>
                      <li>Access saved properties from your dashboard</li>
                      <li>Set up email alerts for price changes or new similar properties</li>
                      <li>Create watchlists for different investment strategies or locations</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4 flex-shrink-0">
                    5
                  </span>
                  Get Help & Learn More
                </h2>
                <div className="mt-5 pl-14">
                  <p className="text-lg text-gray-600 mb-4">
                    Explore our educational resources and get support when you need it.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link href="/manual" className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100">
                      <h4 className="font-medium text-gray-900 mb-2">User Manual</h4>
                      <p className="text-sm text-gray-600">Detailed instructions for all features</p>
                    </Link>
                    <Link href="/tutorial" className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100">
                      <h4 className="font-medium text-gray-900 mb-2">Video Tutorials</h4>
                      <p className="text-sm text-gray-600">Step-by-step video guides</p>
                    </Link>
                    <Link href="/contact" className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100">
                      <h4 className="font-medium text-gray-900 mb-2">Support</h4>
                      <p className="text-sm text-gray-600">Contact our team for help</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900">Ready to start analyzing properties?</h3>
              <div className="mt-6">
                <Link 
                  href="/create-account" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
                >
                  Create Your Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 