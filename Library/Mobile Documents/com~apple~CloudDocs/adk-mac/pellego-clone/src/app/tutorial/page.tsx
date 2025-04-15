'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface TutorialItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
}

interface TutorialsData {
  [key: string]: TutorialItem[];
}

export default function TutorialPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'property-search', name: 'Property Search' },
    { id: 'analysis-tools', name: 'Analysis Tools' },
    { id: 'advanced-features', name: 'Advanced Features' },
  ];

  const tutorials: TutorialsData = {
    'getting-started': [
      {
        id: 'account-setup',
        title: 'Account Setup and Configuration',
        duration: '3:25',
        description: 'Learn how to create your account, set up your profile, and configure your preferences.',
        thumbnail: '/images/tutorials/account-setup.jpg',
      },
      {
        id: 'platform-overview',
        title: 'Platform Overview',
        duration: '5:12',
        description: 'Take a tour of the Pellego platform and discover all the key features and tools.',
        thumbnail: '/images/tutorials/platform-overview.jpg',
      },
      {
        id: 'navigation',
        title: 'Navigating the Dashboard',
        duration: '2:47',
        description: 'Learn how to navigate the dashboard and access all the tools and features.',
        thumbnail: '/images/tutorials/dashboard-navigation.jpg',
      },
    ],
    'property-search': [
      {
        id: 'basic-search',
        title: 'Basic Property Search',
        duration: '4:18',
        description: 'Learn how to search for properties using various criteria and filters.',
        thumbnail: '/images/tutorials/basic-search.jpg',
      },
      {
        id: 'advanced-search',
        title: 'Advanced Search Techniques',
        duration: '6:34',
        description: 'Master advanced search features like drawing on maps, saving searches, and setting up alerts.',
        thumbnail: '/images/tutorials/advanced-search.jpg',
      },
      {
        id: 'search-results',
        title: 'Understanding Search Results',
        duration: '3:52',
        description: 'Learn how to interpret search results, view property details, and compare listings.',
        thumbnail: '/images/tutorials/search-results.jpg',
      },
    ],
    'analysis-tools': [
      {
        id: 'rental-analysis',
        title: 'Rental Property Analysis',
        duration: '7:16',
        description: 'Learn how to analyze rental properties, calculate cash flow, and estimate returns.',
        thumbnail: '/images/tutorials/rental-analysis.jpg',
      },
      {
        id: 'flip-analysis',
        title: 'Fix and Flip Analysis',
        duration: '8:05',
        description: 'Learn how to analyze fix and flip opportunities, estimate rehab costs, and calculate profit.',
        thumbnail: '/images/tutorials/flip-analysis.jpg',
      },
      {
        id: 'comp-analysis',
        title: 'Comparative Market Analysis',
        duration: '5:43',
        description: 'Learn how to find comparable properties and estimate accurate property values.',
        thumbnail: '/images/tutorials/comp-analysis.jpg',
      },
      {
        id: 'rehab-calculator',
        title: 'Using the Rehab Calculator',
        duration: '6:29',
        description: 'Learn how to estimate renovation costs and create detailed rehab budgets.',
        thumbnail: '/images/tutorials/rehab-calculator.jpg',
      },
    ],
    'advanced-features': [
      {
        id: 'nwmls-analyzer',
        title: 'NWMLS Analyzer',
        duration: '9:14',
        description: 'Learn how to use the NWMLS Analyzer to find new listings and opportunities.',
        thumbnail: '/images/tutorials/nwmls-analyzer.jpg',
      },
      {
        id: 'saved-properties',
        title: 'Managing Saved Properties',
        duration: '4:37',
        description: 'Learn how to save, organize, and monitor properties of interest.',
        thumbnail: '/images/tutorials/saved-properties.jpg',
      },
      {
        id: 'notifications',
        title: 'Setting Up Notifications',
        duration: '3:49',
        description: 'Learn how to configure notifications for market changes and new opportunities.',
        thumbnail: '/images/tutorials/notifications.jpg',
      },
      {
        id: 'api-access',
        title: 'API Integration (Pro Users)',
        duration: '10:22',
        description: 'Learn how to use the Pellego API to integrate with other tools and services.',
        thumbnail: '/images/tutorials/api-access.jpg',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Video Tutorials
              </h1>
              <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                Step-by-step video guides to help you master every feature of Pellego
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials[activeCategory].map((tutorial: TutorialItem) => (
                <div key={tutorial.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative pb-[56.25%] bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Replace with actual thumbnail images in production */}
                      <svg className="h-16 w-16 text-primary opacity-80" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">{tutorial.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{tutorial.description}</p>
                    <div className="mt-4">
                      <Link href={`/tutorial/${tutorial.id}`} className="text-primary hover:text-primary-dark font-medium text-sm">
                        Watch Tutorial →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need personalized guidance?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team offers one-on-one training sessions to help you get the most out of Pellego. Whether you're just starting out or want to master advanced features, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact?subject=Training" 
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
                  >
                    Schedule a Training Session
                  </Link>
                  <Link 
                    href="/manual" 
                    className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View User Manual
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 