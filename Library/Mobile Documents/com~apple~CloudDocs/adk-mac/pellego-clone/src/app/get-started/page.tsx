import React from 'react';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get Started with Pellego
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Powerful real estate analysis tools for professionals
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12">
            <div className="relative">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Step 1: Create Your Account
                  </h2>
                </div>
              </div>
              <div className="mt-5 ml-17 pl-5 border-l-2 border-gray-200 space-y-4">
                <p className="text-gray-600">
                  Start by creating your free account to access all of Pellego's property analysis features.
                </p>
                <div className="mt-6">
                  <Link href="/create-account" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Step 2: Search for Properties
                  </h2>
                </div>
              </div>
              <div className="mt-5 ml-17 pl-5 border-l-2 border-gray-200 space-y-4">
                <p className="text-gray-600">
                  Use our powerful search tools to find properties that match your criteria. Search by address, neighborhood, or property features.
                </p>
                <div className="mt-6">
                  <Link href="/search" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Search Properties
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Step 3: Analyze Your Results
                  </h2>
                </div>
              </div>
              <div className="mt-5 ml-17 pl-5 border-l-2 border-gray-200 space-y-4">
                <p className="text-gray-600">
                  Get comprehensive property analysis including comps, rental estimates, flip potential, rehab costs, and more. Make informed investment decisions with our AI-powered analysis tools.
                </p>
                <div className="mt-6">
                  <Link href="/analyze-properties" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Try Property Analysis
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-xl font-medium text-gray-900">Ready to become a property analysis expert?</h3>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/create-account" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                  Get Started Today
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 