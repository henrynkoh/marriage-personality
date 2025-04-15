'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RentalAnalysisPage() {
  const [address, setAddress] = useState('');
  const [formState, setFormState] = useState({
    purchasePrice: 300000,
    downPayment: 20,
    interestRate: 5.5,
    loanTerm: 30,
    monthlyRent: 2000,
    propertyTax: 3600,
    insurance: 1200,
    maintainance: 1800,
    propertyMgmt: 8,
    vacancy: 5,
    utilities: 0
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Parse numeric inputs
    let parsedValue: string | number = value;
    if (name === 'purchasePrice' || name === 'propertyTax' || name === 'insurance' || 
        name === 'maintainance' || name === 'utilities' || name === 'monthlyRent') {
      parsedValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    } else if (name === 'downPayment' || name === 'interestRate' || name === 'propertyMgmt' || name === 'vacancy') {
      parsedValue = parseFloat(value) || 0;
    } else if (name === 'loanTerm') {
      parsedValue = parseInt(value) || 30;
    }
    
    setFormState(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Calculate mortgage
      const loanAmount = formState.purchasePrice * (1 - formState.downPayment / 100);
      const monthlyInterest = formState.interestRate / 100 / 12;
      const payments = formState.loanTerm * 12;
      const x = Math.pow(1 + monthlyInterest, payments);
      const monthlyPayment = (loanAmount * x * monthlyInterest) / (x - 1);
      
      // Calculate expenses
      const propertyTaxMonthly = formState.propertyTax / 12;
      const insuranceMonthly = formState.insurance / 12;
      const maintainanceMonthly = formState.maintainance / 12;
      const propertyMgmtFee = formState.monthlyRent * (formState.propertyMgmt / 100);
      const vacancyAllowance = formState.monthlyRent * (formState.vacancy / 100);
      const utilitiesMonthly = formState.utilities / 12;
      
      const totalMonthlyExpenses = monthlyPayment + propertyTaxMonthly + insuranceMonthly + 
                                  maintainanceMonthly + propertyMgmtFee + vacancyAllowance + utilitiesMonthly;
      
      const monthlyCashFlow = formState.monthlyRent - totalMonthlyExpenses;
      const annualCashFlow = monthlyCashFlow * 12;
      const cashOnCash = (annualCashFlow / (formState.purchasePrice * (formState.downPayment / 100))) * 100;
      const capRate = ((formState.monthlyRent * 12) - (formState.propertyTax + formState.insurance + formState.maintainance)) / formState.purchasePrice * 100;
      
      setResults({
        address,
        monthlyRent: formState.monthlyRent,
        expenses: {
          mortgage: monthlyPayment,
          propertyTax: propertyTaxMonthly,
          insurance: insuranceMonthly,
          maintainance: maintainanceMonthly,
          propertyMgmt: propertyMgmtFee,
          vacancy: vacancyAllowance,
          utilities: utilitiesMonthly,
          total: totalMonthlyExpenses
        },
        income: {
          monthlyCashFlow,
          annualCashFlow,
          cashOnCash,
          capRate,
          breakEvenOccupancy: (totalMonthlyExpenses / formState.monthlyRent) * 100,
          grossRentMultiplier: formState.purchasePrice / (formState.monthlyRent * 12)
        },
        comparableRentals: [
          {
            address: "123 Nearby St",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1650,
            rent: 1950,
            distance: 0.5
          },
          {
            address: "456 Local Ave",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1800,
            rent: 2100,
            distance: 0.7
          },
          {
            address: "789 Close Blvd",
            bedrooms: 3, 
            bathrooms: 1.5,
            sqft: 1600,
            rent: 1850,
            distance: 0.9
          }
        ]
      });
    } catch (error) {
      console.error('Error analyzing rental property:', error);
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
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value / 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Rental Property Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate cash flow and ROI for your rental property investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Rental Calculator</h2>
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
                        <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700 mb-1">
                          Monthly Rent
                        </label>
                        <input
                          type="text"
                          id="monthlyRent"
                          name="monthlyRent"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formatCurrency(formState.monthlyRent)}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-1">
                            Down Payment (%)
                          </label>
                          <input
                            type="number"
                            id="downPayment"
                            name="downPayment"
                            min="0"
                            max="100"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.downPayment}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                            Interest Rate (%)
                          </label>
                          <input
                            type="number"
                            id="interestRate"
                            name="interestRate"
                            step="0.01"
                            min="0"
                            max="20"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.interestRate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-1">
                          Loan Term (years)
                        </label>
                        <select
                          id="loanTerm"
                          name="loanTerm"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          value={formState.loanTerm}
                          onChange={handleChange as any}
                        >
                          <option value="15">15 years</option>
                          <option value="20">20 years</option>
                          <option value="30">30 years</option>
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700 mb-1">
                            Annual Property Tax
                          </label>
                          <input
                            type="text"
                            id="propertyTax"
                            name="propertyTax"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formatCurrency(formState.propertyTax)}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                            Annual Insurance
                          </label>
                          <input
                            type="text"
                            id="insurance"
                            name="insurance"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formatCurrency(formState.insurance)}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="maintainance" className="block text-sm font-medium text-gray-700 mb-1">
                            Annual Maintenance
                          </label>
                          <input
                            type="text"
                            id="maintainance"
                            name="maintainance"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formatCurrency(formState.maintainance)}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="utilities" className="block text-sm font-medium text-gray-700 mb-1">
                            Annual Utilities
                          </label>
                          <input
                            type="text"
                            id="utilities"
                            name="utilities"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formatCurrency(formState.utilities)}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="propertyMgmt" className="block text-sm font-medium text-gray-700 mb-1">
                            Property Mgmt (%)
                          </label>
                          <input
                            type="number"
                            id="propertyMgmt"
                            name="propertyMgmt"
                            min="0"
                            max="20"
                            step="0.1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.propertyMgmt}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="vacancy" className="block text-sm font-medium text-gray-700 mb-1">
                            Vacancy Rate (%)
                          </label>
                          <input
                            type="number"
                            id="vacancy"
                            name="vacancy"
                            min="0"
                            max="20"
                            step="0.1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            value={formState.vacancy}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-md font-medium text-white ${
                          loading ? 'bg-primary-light' : 'bg-primary hover:bg-primary-dark'
                        }`}
                      >
                        {loading ? 'Analyzing...' : 'Analyze Rental Property'}
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
                      <h2 className="text-lg font-medium text-gray-900">Rental Analysis Results</h2>
                      <p className="text-sm text-gray-500">{results.address}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Monthly Cash Flow</p>
                          <p className={`text-2xl font-bold ${results.income.monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(results.income.monthlyCashFlow)}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Cash-on-Cash Return</p>
                          <p className={`text-2xl font-bold ${results.income.cashOnCash >= 8 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {formatPercent(results.income.cashOnCash)}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Cap Rate</p>
                          <p className={`text-2xl font-bold ${results.income.capRate >= 5 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {formatPercent(results.income.capRate)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Expenses</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Mortgage Payment</span>
                              <span className="font-medium">{formatCurrency(results.expenses.mortgage)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Property Tax</span>
                              <span className="font-medium">{formatCurrency(results.expenses.propertyTax)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Insurance</span>
                              <span className="font-medium">{formatCurrency(results.expenses.insurance)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Maintenance</span>
                              <span className="font-medium">{formatCurrency(results.expenses.maintainance)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Property Management</span>
                              <span className="font-medium">{formatCurrency(results.expenses.propertyMgmt)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Vacancy Allowance</span>
                              <span className="font-medium">{formatCurrency(results.expenses.vacancy)}</span>
                            </div>
                            {results.expenses.utilities > 0 && (
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Utilities</span>
                                <span className="font-medium">{formatCurrency(results.expenses.utilities)}</span>
                              </div>
                            )}
                            <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                              <span className="font-medium text-gray-900">Total Expenses</span>
                              <span className="font-bold">{formatCurrency(results.expenses.total)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-4">Investment Metrics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Monthly Rent</span>
                              <span className="font-medium">{formatCurrency(results.monthlyRent)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Annual Rental Income</span>
                              <span className="font-medium">{formatCurrency(results.monthlyRent * 12)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Annual Cash Flow</span>
                              <span className={`font-medium ${results.income.annualCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {formatCurrency(results.income.annualCashFlow)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Break-even Occupancy</span>
                              <span className="font-medium">{formatPercent(results.income.breakEvenOccupancy)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Gross Rent Multiplier</span>
                              <span className="font-medium">{results.income.grossRentMultiplier.toFixed(2)}</span>
                            </div>
                            <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                              <span className="font-medium text-gray-900">Return Rating</span>
                              <span className={`font-bold ${
                                results.income.cashOnCash >= 10 ? 'text-green-600' : 
                                results.income.cashOnCash >= 8 ? 'text-blue-600' : 
                                results.income.cashOnCash >= 5 ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {results.income.cashOnCash >= 10 ? 'Excellent' : 
                                 results.income.cashOnCash >= 8 ? 'Good' : 
                                 results.income.cashOnCash >= 5 ? 'Fair' : 'Poor'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                      <h2 className="text-lg font-medium text-gray-900">Comparable Rentals</h2>
                      <p className="text-sm text-gray-500">Recent rentals in the area</p>
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
                                Details
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Monthly Rent
                              </th>
                              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Distance
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {results.comparableRentals.map((rental: any, index: number) => (
                              <tr key={index}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {rental.address}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {rental.bedrooms} bd | {rental.bathrooms} ba | {rental.sqft} sqft
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {formatCurrency(rental.rent)}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {rental.distance} miles
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Rental Market Summary</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Based on comparable properties, the average rent in this area is {formatCurrency(1967)} per month.
                          Your estimated rent of {formatCurrency(results.monthlyRent)} is {
                            results.monthlyRent > 1967 ? 'above' : 'below'
                          } the market average.
                        </p>
                        <p className="text-sm text-gray-600">
                          The local rental market shows a {results.monthlyRent > 1967 ? 'strong' : 'moderate'} demand
                          for rental properties with a vacancy rate of approximately {formatPercent(5)}.
                        </p>
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
                      Enter property details and click 'Analyze Rental Property' to calculate ROI.
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