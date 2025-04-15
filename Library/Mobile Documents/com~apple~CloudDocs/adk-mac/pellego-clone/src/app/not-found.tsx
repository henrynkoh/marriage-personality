'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-white px-4">
        <div className="max-w-lg w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h2>
            <p className="mt-6 text-base text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
            <div className="mt-10 flex justify-center items-center space-x-4">
              <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
                Go back home
              </Link>
              <Link href="/search" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                Search properties
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Need help? <Link href="/contact" className="font-medium text-primary hover:text-primary-dark">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 