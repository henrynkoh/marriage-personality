'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Types for listings
type Listing = {
  listingId: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  lotSize: number;
  propertyType: string;
  listedDate: string;
  description: string;
  analysis?: string;
};

export default function NWMLSAnalyzerPage() {
  const [days, setDays] = useState(1);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  // For email notifications
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [savedSearches, setSavedSearches] = useState<{name: string, days: number}[]>([
    { name: "Daily New Listings", days: 1 },
    { name: "Weekly Hot Properties", days: 7 },
  ]);
  const [schedule, setSchedule] = useState("daily");
  const [matrixUrl, setMatrixUrl] = useState('');

  const fetchListings = async (daysToFetch: number) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/nwmls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          days: daysToFetch,
          matrixUrl: matrixUrl.trim() || undefined
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }

      const data = await response.json();
      setListings(data.listings || []);
      
      // If authentication failed, show warning
      if (data.authenticated === false) {
        setError('Warning: NWMLS authentication failed. Using mock data instead.');
      }
    } catch (err) {
      console.error('Error fetching listings:', err);
      setError('Failed to fetch listings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchListings = () => {
    fetchListings(days);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const addSavedSearch = () => {
    setSavedSearches([...savedSearches, { name: `New Search ${savedSearches.length + 1}`, days }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">NWMLS New Listing Analyzer</h1>
          <p className="text-lg text-gray-600 mb-8">
            Automatically analyze new real estate listings from NWMLS Matrix for investment potential
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Controls */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Search Settings</h2>
                
                <div className="mb-4">
                  <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">
                    Days since listing
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      id="days"
                      value={days}
                      onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      min="1"
                      max="30"
                    />
                    <button
                      onClick={handleFetchListings}
                      disabled={loading}
                      className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                    >
                      {loading ? 'Loading...' : 'Fetch Listings'}
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-medium mb-3">Saved Searches</h3>
                  <ul className="space-y-2 mb-4">
                    {savedSearches.map((search, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-sm">{search.name} ({search.days} days)</span>
                        <button 
                          onClick={() => {setDays(search.days); fetchListings(search.days);}}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Run
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={addSavedSearch}
                    className="text-sm px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                  >
                    + Save Current Search
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Automated Analysis</h2>
                <div className="flex items-center mb-4">
                  <input
                    id="notifications"
                    type="checkbox"
                    checked={notificationsEnabled}
                    onChange={toggleNotifications}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                    Enable automated analysis
                  </label>
                </div>
                
                {notificationsEnabled && (
                  <>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address for reports
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-1">
                        Analysis schedule
                      </label>
                      <select
                        id="schedule"
                        value={schedule}
                        onChange={(e) => setSchedule(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option value="daily">Daily (9:00 AM)</option>
                        <option value="twice-daily">Twice Daily (9:00 AM, 4:00 PM)</option>
                        <option value="weekly">Weekly (Monday 9:00 AM)</option>
                      </select>
                    </div>
                    
                    <button
                      className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Save Automation Settings
                    </button>
                  </>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">NWMLS Matrix Connection</h2>
                <div className="flex items-center mb-4">
                  <div className={`h-3 w-3 rounded-full mr-2 ${process.env.NWMLS_USERNAME && process.env.NWMLS_PASSWORD ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <p className="text-sm text-gray-600">
                    Status: {process.env.NWMLS_USERNAME && process.env.NWMLS_PASSWORD ? 'Connected' : 'Not connected'}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Using NWMLS Matrix subscription with username: {process.env.NWMLS_USERNAME ? `${process.env.NWMLS_USERNAME.substring(0, 2)}****` : 'not set'}
                </p>
                
                <div className="mt-4 border-t pt-4">
                  <label htmlFor="matrixUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    NWMLS Matrix URL (Optional)
                  </label>
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      id="matrixUrl"
                      value={matrixUrl}
                      onChange={(e) => setMatrixUrl(e.target.value)}
                      placeholder="https://www.matrix.nwmls.com/Matrix/Results.aspx?c=..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm"
                    />
                    <p className="text-xs text-gray-500">
                      Paste a saved search URL from NWMLS Matrix to use those search parameters
                    </p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <a 
                    href="https://www.nwmls.com/contact/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Need NWMLS credentials? Contact NWMLS
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Results */}
            <div className="lg:col-span-2">
              {error && (
                <div className="bg-red-50 p-4 rounded-md mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {loading ? (
                <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-2 text-gray-600">Analyzing listings from NWMLS...</p>
                </div>
              ) : (
                <>
                  {selectedListing ? (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <h2 className="text-2xl font-bold text-gray-900">{selectedListing.address}</h2>
                          <button 
                            onClick={() => setSelectedListing(null)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-primary">{formatCurrency(selectedListing.price)}</p>
                            <p className="mt-2">
                              <span className="text-gray-700">{selectedListing.bedrooms} bd</span> | 
                              <span className="text-gray-700"> {selectedListing.bathrooms} ba</span> | 
                              <span className="text-gray-700"> {selectedListing.sqft.toLocaleString()} sqft</span>
                            </p>
                            <p className="text-gray-600">Listed on {formatDate(selectedListing.listedDate)}</p>
                            <p className="mt-4 text-gray-700">{selectedListing.description}</p>
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              <div>
                                <p className="text-sm text-gray-500">Property Type</p>
                                <p className="font-medium">{selectedListing.propertyType}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Year Built</p>
                                <p className="font-medium">{selectedListing.yearBuilt}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Lot Size</p>
                                <p className="font-medium">{selectedListing.lotSize.toLocaleString()} sqft</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">MLS #</p>
                                <p className="font-medium">{selectedListing.listingId}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">AI Investment Analysis</h3>
                            <div className="text-sm text-gray-800 whitespace-pre-line overflow-y-auto max-h-96">
                              {selectedListing.analysis}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end space-x-3">
                          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Save to Favorites
                          </button>
                          <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
                            Contact Agent
                          </button>
                          <a 
                            href={`https://www.matrix.nwmls.com/Matrix/PublicRecords/Results.aspx?ID=${selectedListing.listingId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark"
                          >
                            View on NWMLS
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {listings.length > 0 ? (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">
                              New Listings ({listings.length})
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Showing properties listed in the past {days} day{days !== 1 ? 's' : ''}
                            </p>
                          </div>
                          
                          <ul className="divide-y divide-gray-200">
                            {listings.map((listing) => (
                              <li key={listing.listingId} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedListing(listing)}>
                                <div className="flex items-center justify-between">
                                  <div className="truncate">
                                    <p className="text-lg font-medium text-primary truncate">{listing.address}</p>
                                    <p className="flex text-sm text-gray-500">
                                      <span>{listing.bedrooms} bd</span>
                                      <span className="mx-1">•</span>
                                      <span>{listing.bathrooms} ba</span>
                                      <span className="mx-1">•</span>
                                      <span>{listing.sqft.toLocaleString()} sqft</span>
                                      <span className="mx-1">•</span>
                                      <span>Listed: {formatDate(listing.listedDate)}</span>
                                    </p>
                                  </div>
                                  <div className="ml-2 flex-shrink-0 flex">
                                    <p className="text-lg font-semibold text-gray-900">{formatCurrency(listing.price)}</p>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <div className="flex justify-between">
                                    <p className="text-sm text-gray-700 truncate max-w-md">{listing.description}</p>
                                    <button className="text-xs text-blue-600 hover:text-blue-800">
                                      View Analysis ›
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">No listings found</h3>
                          <p className="mt-1 text-gray-500">
                            Use the search controls to fetch and analyze new property listings.
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 