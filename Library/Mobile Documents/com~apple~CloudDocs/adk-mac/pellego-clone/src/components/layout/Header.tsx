'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Pellego
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Agent Solutions
                  </Link>
                  <Link href="/buyer-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Buyer Solutions
                  </Link>
                  <Link href="/wholesaler-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Wholesaler Solutions
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary">
                Features
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Property Search
                  </Link>
                  <Link href="/nwmls-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded mr-1.5">NEW</span>
                    NWMLS Analyzer
                  </Link>
                  <Link href="/adk-integration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    ADK Demo
                  </Link>
                  <Link href="/analyze-properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Analyze Properties
                  </Link>
                  <Link href="/comp-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Comp Analysis
                  </Link>
                  <Link href="/rehab-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Rehab Analysis
                  </Link>
                  <Link href="/flip-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Flip Analysis
                  </Link>
                  <Link href="/rental-analysis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Rental Analysis
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="text-gray-700 hover:text-primary">
              Company
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/create-account" className="hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark">
              Create Account
            </Link>
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-gray-50">
              Log In
            </Link>
            
            <button onClick={toggleMobileMenu} className="md:hidden">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</p>
                <Link href="/" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Agent Solutions
                </Link>
                <Link href="/buyer-solutions" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Buyer Solutions
                </Link>
                <Link href="/wholesaler-solutions" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Wholesaler Solutions
                </Link>
              </div>
              
              <div className="py-2">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Features</p>
                <Link href="/search" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Property Search
                </Link>
                <Link href="/nwmls-analyzer" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100 flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded mr-1.5">NEW</span>
                  NWMLS Analyzer
                </Link>
                <Link href="/adk-integration" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  ADK Demo
                </Link>
                <Link href="/analyze-properties" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Analyze Properties
                </Link>
                <Link href="/comp-analysis" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Comp Analysis
                </Link>
              </div>
              
              <div className="py-2">
                <Link href="/about" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Company
                </Link>
                <Link href="/create-account" className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 