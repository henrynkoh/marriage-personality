const CompAnalysis = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Leapfrog Busy Work
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-500">
              Pull property details, renovated comps, and pre-filled flip and rentals models with one search.
            </p>
            
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Start with renovated comps</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Review renovated comps and an estimated after repair value (ARV), based on modeling tens of thousands of historical flips.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Edit and Save Numbers</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Customize and save your analysis with your own assumptions. Track rehab costs, holding costs, and profit projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase">Comp Legend</span>
                  </div>
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
              </div>
              
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Comparable Analysis</h3>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full">
                    <span className="text-xl font-bold text-primary">96</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900">3621 S Cushman Ave</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500">Comp 1</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">Sold Jan 2018</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-900">$ 256,000</span>
                  </div>
                  <div className="mt-1 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    This comp was a FLIP
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Has Garage (1 Car)</span>
                    <span className="font-medium text-green-600">+ $19,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Smaller Structure (65 Sqft)</span>
                    <span className="font-medium text-red-600">- $11,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">More Baths (0.75 Bath)</span>
                    <span className="font-medium text-green-600">+ $8,000</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Adjusted Value</span>
                      <span className="font-bold text-gray-900">$ 238,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompAnalysis; 