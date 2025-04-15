'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { adkConfig } from '@/lib/agent';

export default function AnalyzePropertiesPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [analysisResults, setAnalysisResults] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setResults(null);
    setAnalysisResults(null);
    
    try {
      // Call the search API
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to search properties');
      }

      const data = await response.json();
      setResults(data.results);
      
      // Get AI analysis
      if (data.results && data.results.length > 0) {
        // Format the properties for analysis
        const propertyText = data.results.map((property: any, index: number) => {
          return `Property ${index + 1}:
          Address: ${property.address}
          Price: $${property.price.toLocaleString()}
          Bedrooms: ${property.bedrooms}
          Bathrooms: ${property.bathrooms}
          Sqft: ${property.sqft.toLocaleString()}
          Year Built: ${property.yearBuilt}
          Property Type: ${property.propertyType}
          Estimated ARV: $${property.estimatedARV.toLocaleString()}
          Estimated Rehab: $${property.estimatedRehab.toLocaleString()}`;
        }).join('\n\n');
        
        const analysisPrompt = `Analyze these investment properties:
        
        ${propertyText}
        
        For the analysis, please provide:
        1. A summary of each property's investment potential
        2. Comparison of the properties against each other
        3. Current market conditions and trends for these locations
        4. Recommendations for the best investment strategy (buy and hold, flip, BRRRR, etc.)
        5. Potential risks and considerations
        
        Format your response in a clear, structured way with headings and bullet points where appropriate.`;
        
        const analysis = await adkConfig.agentRun(analysisPrompt);
        setAnalysisResults(analysis);
      }
    } catch (error) {
      console.error('Error searching properties:', error);
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
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Analyze Investment Properties</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search for properties and get AI-powered investment analysis
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="query" className="sr-only">Search Query</label>
                <input
                  type="text"
                  id="query"
                  placeholder="Enter your property search criteria (e.g., '3 bedroom homes in Seattle under $700,000')"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                {loading ? 'Searching...' : 'Find & Analyze'}
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Try searching for: "Properties in Seattle with good rental potential" or "Fix and flip opportunities in Bellevue under $800,000"
              </p>
            </div>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p className="text-gray-600">Searching and analyzing properties...</p>
            </div>
          ) : (
            <>
              {results && results.length > 0 ? (
                <div className="space-y-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">Search Results</h2>
                      <p className="text-sm text-gray-500">Found {results.length} properties matching your criteria</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((property: any, index: number) => (
                          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 h-48 flex items-center justify-center">
                              <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </div>
                            
                            <div className="p-4">
                              <p className="font-medium text-gray-900 mb-1 truncate">{property.address}</p>
                              <p className="text-lg font-bold text-primary mb-2">{formatCurrency(property.price)}</p>
                              
                              <div className="flex text-sm text-gray-500 mb-3">
                                <span>{property.bedrooms} bd</span>
                                <span className="mx-1">•</span>
                                <span>{property.bathrooms} ba</span>
                                <span className="mx-1">•</span>
                                <span>{property.sqft.toLocaleString()} sqft</span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-gray-500">Year Built</p>
                                  <p className="font-medium">{property.yearBuilt}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Property Type</p>
                                  <p className="font-medium">{property.propertyType}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Est. ARV</p>
                                  <p className="font-medium">{formatCurrency(property.estimatedARV)}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Est. Rehab</p>
                                  <p className="font-medium">{formatCurrency(property.estimatedRehab)}</p>
                                </div>
                              </div>
                              
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-sm text-gray-500">Estimated Profit</p>
                                <p className="font-bold text-green-600">{formatCurrency(property.estimatedProfit)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {analysisResults && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">AI Investment Analysis</h2>
                      </div>
                      
                      <div className="p-6">
                        <div className="prose max-w-none">
                          {analysisResults.split('\n').map((line, index) => {
                            // Check if line is a heading
                            if (line.startsWith('# ')) {
                              return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('# ', '')}</h2>;
                            } else if (line.startsWith('## ')) {
                              return <h3 key={index} className="text-lg font-bold mt-5 mb-2">{line.replace('## ', '')}</h3>;
                            } else if (line.startsWith('### ')) {
                              return <h4 key={index} className="text-base font-bold mt-4 mb-2">{line.replace('### ', '')}</h4>;
                            } else if (line.startsWith('- ')) {
                              return <li key={index} className="ml-6">{line.replace('- ', '')}</li>;
                            } else if (line.trim() === '') {
                              return <div key={index} className="my-2"></div>;
                            } else {
                              return <p key={index} className="my-2">{line}</p>;
                            }
                          })}
                        </div>
                        
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Note:</span> This analysis is generated by AI based on the property data and market trends. 
                            Always conduct your own due diligence and consult with real estate professionals before making investment decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : results && results.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any properties matching your search criteria. Try broadening your search or using different keywords.
                  </p>
                  <button
                    onClick={() => setQuery('')}
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Clear search and try again
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 