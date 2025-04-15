'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CompAnalysisPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call to get comps
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock data for demonstration
      setResults({
        address: address,
        score: 96,
        arv: 485000,
        comps: [
          {
            id: 1,
            address: '3621 S Cushman Ave',
            sold: 'Jan 2023',
            price: 256000,
            distance: 0.4,
            type: 'FLIP',
            adjustments: [
              { name: 'Has Garage (1 Car)', value: 19000, included: true },
              { name: 'Smaller Structure (65 Sqft)', value: -11000, included: true },
              { name: 'More Baths (0.75 Bath)', value: 8000, included: true }
            ],
            adjustedValue: 238000
          },
          {
            id: 2,
            address: '4128 E Portland Ave',
            sold: 'Mar 2023',
            price: 315000,
            distance: 0.7,
            type: 'RETAIL',
            adjustments: [
              { name: 'Larger Lot (1200 Sqft)', value: 15000, included: true },
              { name: 'Updated Kitchen', value: 25000, included: true },
              { name: 'Older Roof (5 years)', value: -8000, included: true }
            ],
            adjustedValue: 297000
          },
          {
            id: 3,
            address: '2910 N Madison St',
            sold: 'Dec 2022',
            price: 275000,
            distance: 0.9,
            type: 'FLIP',
            adjustments: [
              { name: 'No Basement', value: -35000, included: false },
              { name: 'Better Location', value: 22000, included: true },
              { name: 'Similar Condition', value: 0, included: true }
            ],
            adjustedValue: 297000
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching comps:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Comparable Property Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get accurate ARV estimates based on recently sold comparable properties
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="address" className="sr-only">Property Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter a property address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-md font-medium text-white ${
                  loading ? 'bg-primary-light' : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                {loading ? 'Finding Comps...' : 'Find Comps'}
              </button>
            </form>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : results ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{results.address}</h2>
                    <p className="text-sm text-gray-500">Estimated ARV: {formatCurrency(results.arv)}</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full">
                    <span className="text-xl font-bold text-primary">{results.score}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Comp Legend</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-2 text-xs text-gray-600">Included in ARV</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="ml-2 text-xs text-gray-600">Excluded from ARV</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.comps.map((comp: any) => (
                    <div key={comp.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <h4 className="font-medium text-gray-900">{comp.address}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500">Sold {comp.sold}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm text-gray-500">{comp.distance} miles away</span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="mb-3">
                          <span className="text-2xl font-bold text-gray-900">{formatCurrency(comp.price)}</span>
                        </div>
                        
                        {comp.type && (
                          <div className="mb-4 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            This comp was a {comp.type}
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          {comp.adjustments.map((adj: any, index: number) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-gray-700">{adj.name}</span>
                              <span className={`font-medium ${adj.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {adj.value >= 0 ? '+ ' : ''}{formatCurrency(adj.value)}
                              </span>
                            </div>
                          ))}
                          
                          <div className="pt-3 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700">Adjusted Value</span>
                              <span className="font-bold text-gray-900">{formatCurrency(comp.adjustedValue)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4">
                <h3 className="font-medium text-gray-900 mb-4">ARV Calculation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Average of Comps</p>
                      <p className="font-medium">{formatCurrency(277000)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price / Sqft</p>
                      <p className="font-medium">$215</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Confidence Score</p>
                      <p className="font-medium">{results.score}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ARV Range</p>
                      <p className="font-medium">{formatCurrency(450000)} - {formatCurrency(520000)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Recommended ARV</span>
                      <span className="text-xl font-bold text-primary">{formatCurrency(results.arv)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No comps available</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Enter a property address to find and analyze comparable properties.
                </p>
                <div className="mt-6">
                  <p className="text-sm text-gray-500">Try these example addresses:</p>
                  <div className="mt-2 flex flex-col space-y-2">
                    <button 
                      type="button" 
                      className="text-primary hover:text-primary-dark text-sm"
                      onClick={() => setAddress('123 Main St, Seattle, WA 98101')}
                    >
                      123 Main St, Seattle, WA 98101
                    </button>
                    <button 
                      type="button" 
                      className="text-primary hover:text-primary-dark text-sm"
                      onClick={() => setAddress('456 Park Ave, Bellevue, WA 98004')}
                    >
                      456 Park Ave, Bellevue, WA 98004
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 