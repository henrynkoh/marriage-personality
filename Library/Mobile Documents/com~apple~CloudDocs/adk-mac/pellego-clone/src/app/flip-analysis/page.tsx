'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function FlipAnalysisPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  
  // Form state for flip analysis inputs
  const [formState, setFormState] = useState({
    purchasePrice: 300000,
    estARV: 450000,
    rehabCost: 75000,
    holdingTime: 6,
    closingCosts: 15000,
    realtorFees: 6,
    loanType: 'hard-money',
    loanAmount: 300000,
    interestRate: 9.5,
    lenderFees: 3,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let parsedValue: string | number = value;
    
    // Convert numeric values
    if (name === 'purchasePrice' || name === 'estARV' || name === 'rehabCost' || 
        name === 'closingCosts' || name === 'loanAmount') {
      parsedValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    } else if (name === 'holdingTime') {
      parsedValue = parseInt(value) || 0;
    } else if (name === 'realtorFees' || name === 'interestRate' || name === 'lenderFees') {
      parsedValue = parseFloat(value) || 0;
    }
    
    setFormState((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call to analyze flip
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Calculate flip metrics
      const purchaseCosts = formState.purchasePrice * 0.02 + formState.loanAmount * (formState.lenderFees / 100);
      const sellCosts = formState.estARV * (formState.realtorFees / 100) + formState.closingCosts;
      const holdingCosts = (formState.loanAmount * (formState.interestRate / 100) / 12) * formState.holdingTime;
      const totalCosts = formState.purchasePrice + formState.rehabCost + purchaseCosts + sellCosts + holdingCosts;
      const profit = formState.estARV - totalCosts;
      const roi = (profit / totalCosts) * 100;
      
      setResults({
        address: address,
        purchasePrice: formState.purchasePrice,
        estARV: formState.estARV,
        rehabCost: formState.rehabCost,
        purchaseCosts,
        sellCosts,
        holdingCosts,
        totalCosts,
        profit,
        roi,
        dealScore: roi > 20 ? 'Great' : roi > 15 ? 'Good' : roi > 10 ? 'Fair' : 'Poor',
        comparables: [
          {
            address: '3621 S Cushman Ave',
            soldDate: 'Jan 2023',
            purchasePrice: 256000,
            soldPrice: 410000,
            rehabCost: 65000,
            profit: 410000 - 256000 - 65000 - 40000,
            daysToFlip: 120
          },
          {
            address: '4128 E Portland Ave',
            soldDate: 'Mar 2023',
            purchasePrice: 315000,
            soldPrice: 490000,
            rehabCost: 85000,
            profit: 490000 - 315000 - 85000 - 45000,
            daysToFlip: 105
          }
        ]
      });
    } catch (error) {
      console.error('Error analyzing flip:', error);
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
  
  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Fix and Flip Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate potential profits and ROI for your next house flip
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Flip Calculator</h2>
                </div>
                
                <div className="p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter property address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-1">
                          Purchase Price
                        </label>
                        <input
                          type="text"
                          id="purchasePrice"
                          name="purchasePrice"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formatCurrency(formState.purchasePrice)}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="estARV" className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated ARV
                        </label>
                        <input
                          type="text"
                          id="estARV"
                          name="estARV"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formatCurrency(formState.estARV)}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="rehabCost" className="block text-sm font-medium text-gray-700 mb-1">
                          Rehab Cost
                        </label>
                        <input
                          type="text"
                          id="rehabCost"
                          name="rehabCost"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formatCurrency(formState.rehabCost)}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="holdingTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Holding Time (months)
                          </label>
                          <input
                            type="number"
                            id="holdingTime"
                            name="holdingTime"
                            min="1"
                            max="24"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.holdingTime}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="realtorFees" className="block text-sm font-medium text-gray-700 mb-1">
                            Realtor Fees (%)
                          </label>
                          <input
                            type="number"
                            id="realtorFees"
                            name="realtorFees"
                            step="0.1"
                            min="0"
                            max="10"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.realtorFees}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="closingCosts" className="block text-sm font-medium text-gray-700 mb-1">
                          Closing Costs
                        </label>
                        <input
                          type="text"
                          id="closingCosts"
                          name="closingCosts"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formatCurrency(formState.closingCosts)}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                          Loan Type
                        </label>
                        <select
                          id="loanType"
                          name="loanType"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formState.loanType}
                          onChange={handleChange}
                        >
                          <option value="cash">Cash</option>
                          <option value="hard-money">Hard Money</option>
                          <option value="conventional">Conventional</option>
                          <option value="private">Private Money</option>
                        </select>
                      </div>
                      
                      {formState.loanType !== 'cash' && (
                        <>
                          <div>
                            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                              Loan Amount
                            </label>
                            <input
                              type="text"
                              id="loanAmount"
                              name="loanAmount"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                              value={formatCurrency(formState.loanAmount)}
                              onChange={handleChange}
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                                Interest Rate (%)
                              </label>
                              <input
                                type="number"
                                id="interestRate"
                                name="interestRate"
                                step="0.1"
                                min="0"
                                max="30"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                value={formState.interestRate}
                                onChange={handleChange}
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="lenderFees" className="block text-sm font-medium text-gray-700 mb-1">
                                Lender Fees (%)
                              </label>
                              <input
                                type="number"
                                id="lenderFees"
                                name="lenderFees"
                                step="0.1"
                                min="0"
                                max="10"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                value={formState.lenderFees}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-md font-medium text-white ${
                          loading ? 'bg-primary-light' : 'bg-primary hover:bg-primary-dark'
                        }`}
                      >
                        {loading ? 'Analyzing...' : 'Analyze Flip'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {loading ? (
                <div className="flex justify-center items-center h-full py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : results ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">Flip Analysis Results</h2>
                      <p className="text-sm text-gray-500">{results.address}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Estimated Profit</p>
                          <p className={`text-2xl font-bold ${results.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(results.profit)}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Return on Investment</p>
                          <p className={`text-2xl font-bold ${results.roi > 10 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {formatPercent(results.roi)}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Deal Score</p>
                          <p className={`text-2xl font-bold ${
                            results.dealScore === 'Great' ? 'text-green-600' : 
                            results.dealScore === 'Good' ? 'text-blue-600' : 
                            results.dealScore === 'Fair' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {results.dealScore}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Breakdown</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Purchase Price</span>
                              <span className="font-medium">{formatCurrency(results.purchasePrice)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Rehab Costs</span>
                              <span className="font-medium">{formatCurrency(results.rehabCost)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Purchase Closing Costs</span>
                              <span className="font-medium">{formatCurrency(results.purchaseCosts)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Selling Costs</span>
                              <span className="font-medium">{formatCurrency(results.sellCosts)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Holding Costs</span>
                              <span className="font-medium">{formatCurrency(results.holdingCosts)}</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                              <span className="font-medium text-gray-900">Total Costs</span>
                              <span className="font-bold">{formatCurrency(results.totalCosts)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Profit Analysis</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">After Repair Value</span>
                              <span className="font-medium">{formatCurrency(results.estARV)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Total Investment</span>
                              <span className="font-medium">{formatCurrency(results.totalCosts)}</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                              <span className="font-medium text-gray-900">Profit</span>
                              <span className={`font-bold ${results.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatCurrency(results.profit)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-900">ROI</span>
                              <span className={`font-bold ${results.roi > 10 ? 'text-green-600' : 'text-yellow-600'}`}>
                                {formatPercent(results.roi)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">Comparable Flips</h2>
                      <p className="text-sm text-gray-500">Recent flips in the area</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Address
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Purchase Price
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Rehab Cost
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sold Price
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Profit
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Days to Flip
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {results.comparables.map((comp: any, index: number) => (
                              <tr key={index}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {comp.address}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatCurrency(comp.purchasePrice)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatCurrency(comp.rehabCost)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatCurrency(comp.soldPrice)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                                  {formatCurrency(comp.profit)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {comp.daysToFlip}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Recommendations</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          <li>Consider negotiating the purchase price down to increase profit margin.</li>
                          <li>Based on comparable flips, target a rehab budget of around {formatCurrency(70000)}.</li>
                          <li>Expected time to complete the flip: 3-4 months based on local comps.</li>
                          <li>Current market conditions favor quick flips with moderate renovations.</li>
                        </ul>
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
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No analysis results</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Enter property details and click 'Analyze Flip' to calculate potential profit.
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 