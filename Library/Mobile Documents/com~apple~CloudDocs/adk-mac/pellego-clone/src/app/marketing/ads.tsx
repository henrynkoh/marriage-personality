'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Facebook Ad Template
export const FacebookAd = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Facebook Ad</h2>
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Headline:</p>
        <p className="text-lg font-bold text-gray-900">Make Smarter Real Estate Investment Decisions with AI</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Primary Text:</p>
        <p className="text-gray-700">Stop guessing. Start analyzing. Pellego's AI-powered tools help investors find properties with the highest ROI potential. Try it free today and see how data-driven decisions can transform your real estate portfolio.</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Description:</p>
        <p className="text-gray-700">Analyze properties in seconds • Find cash-flowing rentals • Estimate rehab costs • Get instant comps</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Call to Action:</p>
        <p className="text-blue-600 font-semibold">Try Free</p>
      </div>
    </div>
  </div>
);

// Instagram Ad Template
export const InstagramAd = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Instagram Ad</h2>
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Caption:</p>
        <p className="text-gray-700">
          Real estate investing made smarter. 🏠📊<br /><br />
          Our AI-powered platform helps you:<br />
          ✅ Find high-ROI properties<br />
          ✅ Analyze rental potential<br />
          ✅ Calculate rehab costs<br />
          ✅ Compare market values<br /><br />
          Join thousands of investors who are making data-driven decisions with Pellego. Try it free today (link in bio).<br /><br />
          #RealEstateInvesting #PropertyAnalysis #InvestmentStrategy #RealEstateAI #PropertyTech
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Suggested Image:</p>
        <p className="text-gray-700">Laptop showing property analysis dashboard with charts/graphs overlaid on property photos</p>
      </div>
    </div>
  </div>
);

// Twitter/Threads Ad Template
export const TwitterThreadsAd = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Twitter/Threads Ad</h2>
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Tweet/Post:</p>
        <p className="text-gray-700">
          Stop guessing if a property is a good investment. Pellego analyzes thousands of data points to give you accurate insights in seconds. <br /><br />
          Try our AI-powered platform free today and make your next real estate decision with confidence. <br /><br />
          [Link] #RealEstate #PropTech
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Suggested Image:</p>
        <p className="text-gray-700">Mobile device showing property search with AI analyzing comps in real-time</p>
      </div>
    </div>
  </div>
);

// Blog Ad Templates (WordPress, Blogger, Naver, Tistory)
export const BlogAd = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Blog Ad Content</h2>
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Blog Post Title:</p>
        <p className="text-xl font-bold text-gray-900">5 Ways AI is Revolutionizing Real Estate Investment Analysis</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Introduction:</p>
        <p className="text-gray-700">
          Real estate investing has always been as much art as science. Investors rely on instinct, experience, and often incomplete data to make decisions that involve hundreds of thousands or even millions of dollars. But what if you could analyze properties with the precision of a data scientist and the speed of modern computing? That's exactly what AI-powered platforms like Pellego are bringing to the real estate industry...
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Call to Action:</p>
        <p className="text-gray-700">Ready to experience the future of real estate analysis? Try Pellego free today and see how AI can transform your investment strategy. [Sign up link]</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Promotional Banner Text:</p>
        <p className="text-gray-700">SPECIAL OFFER: Use code BLOG25 for 25% off your first 3 months of Pellego Professional</p>
      </div>
    </div>
  </div>
);

// Email Newsletter Template
export const EmailNewsletter = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-gray-900 mb-2">Email Newsletter</h2>
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Subject Line:</p>
        <p className="text-lg font-semibold text-gray-900">Discover Properties with 20%+ ROI Using AI Analysis</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Preview Text:</p>
        <p className="text-gray-700">See how top investors are using Pellego to find hidden gems in today's market</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Email Body (Excerpt):</p>
        <div className="text-gray-700">
          <p className="mb-3">Hi [Name],</p>
          <p className="mb-3">Finding investment properties with strong returns is getting harder. Rising prices, increased competition, and market volatility have made it challenging to identify properties with genuine potential.</p>
          <p className="mb-3">That's why successful investors are turning to AI-powered analysis tools like Pellego.</p>
          <p className="mb-3">With Pellego, you can:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Analyze thousands of properties in minutes</li>
            <li>Get accurate rental income estimates</li>
            <li>Calculate all expenses and cash flow</li>
            <li>Estimate rehab costs with precision</li>
            <li>Find comparable properties for accurate valuations</li>
          </ul>
          <p className="mb-3">Don't leave your investment decisions to chance. Try Pellego free for 14 days and see why thousands of investors trust our platform.</p>
          <p className="text-center my-5 font-bold">[TRY PELLEGO FREE BUTTON]</p>
        </div>
      </div>
    </div>
  </div>
);

export default function MarketingAdsPage() {
  const [activeAd, setActiveAd] = useState('facebook');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Marketing Ad Templates
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Pre-designed ad content for various marketing platforms
            </p>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveAd('facebook')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeAd === 'facebook' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Facebook
            </button>
            <button
              onClick={() => setActiveAd('instagram')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeAd === 'instagram' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Instagram
            </button>
            <button
              onClick={() => setActiveAd('twitter')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeAd === 'twitter' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Twitter/Threads
            </button>
            <button
              onClick={() => setActiveAd('blog')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeAd === 'blog' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Blog Platforms
            </button>
            <button
              onClick={() => setActiveAd('email')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeAd === 'email' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Email Newsletter
            </button>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {activeAd === 'facebook' && <FacebookAd />}
            {activeAd === 'instagram' && <InstagramAd />}
            {activeAd === 'twitter' && <TwitterThreadsAd />}
            {activeAd === 'blog' && <BlogAd />}
            {activeAd === 'email' && <EmailNewsletter />}
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Guidelines</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>These templates can be customized to match your specific marketing campaign goals.</li>
                <li>Always adhere to each platform's advertising policies and guidelines.</li>
                <li>A/B test different headlines and images to optimize performance.</li>
                <li>Update offers and promotional codes regularly.</li>
                <li>Include tracking parameters in all links to measure campaign effectiveness.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 