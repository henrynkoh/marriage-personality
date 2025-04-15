'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="relative py-16 overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">About Us</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Empowering Real Estate Professionals
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                Pellego is a cutting-edge real estate analysis platform designed to help investors, agents, and wholesalers make data-driven decisions with confidence. Our AI-powered tools analyze properties, markets, and investment opportunities to give you the edge in today's competitive real estate landscape.
              </p>
            </div>
            
            <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p>
                Our mission is to democratize access to sophisticated real estate analysis tools that were previously only available to large institutions. We believe that by providing accurate, comprehensive data and intelligent analysis, we can help real estate professionals of all backgrounds make better investment decisions and achieve their financial goals.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p>
                Pellego was founded in 2023 by a team of real estate investors and technology experts who were frustrated by the lack of accessible, powerful analysis tools in the market. After years of manually crunching numbers and struggling with outdated software, we decided to build the solution we wished we had.
              </p>
              <p>
                What started as a simple tool for analyzing rental properties has grown into a comprehensive platform that covers all aspects of real estate investment analysis, from flips and rehabs to long-term rentals and comparative market analyses.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900">Our Technology</h2>
              <p>
                At the heart of Pellego is our proprietary AI engine that combines machine learning with traditional financial models to deliver insights that are both innovative and reliable. Our technology can:
              </p>
              <ul className="list-disc pl-5">
                <li>Analyze thousands of comparable properties in seconds</li>
                <li>Predict market trends and property value appreciation</li>
                <li>Estimate rehab costs with remarkable accuracy</li>
                <li>Calculate potential returns on various investment strategies</li>
                <li>Monitor new listings in real-time for investment opportunities</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
              <p>
                Our diverse team brings together expertise in real estate investment, data science, software engineering, and user experience design. We're passionate about creating tools that make a real difference in how real estate professionals operate and succeed.
              </p>
              
              <div className="mt-12 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Ready to transform your real estate analysis?</h2>
                <div className="mt-8 flex justify-center space-x-4">
                  <Link href="/create-account" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                    Get Started
                  </Link>
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                    Contact Us
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