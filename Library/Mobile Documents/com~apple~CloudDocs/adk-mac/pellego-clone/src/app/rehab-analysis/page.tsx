'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type RehabCategory = {
  name: string;
  items: RehabItem[];
  total: number;
};

type RehabItem = {
  id: string;
  name: string;
  cost: number;
  selected: boolean;
};

export default function RehabAnalysisPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  
  // Initial rehab categories and items
  const initialCategories: RehabCategory[] = [
    {
      name: 'Exterior',
      items: [
        { id: 'ext1', name: 'Roof Replacement', cost: 8000, selected: false },
        { id: 'ext2', name: 'Siding Repair/Replacement', cost: 5500, selected: false },
        { id: 'ext3', name: 'Exterior Paint', cost: 3500, selected: false },
        { id: 'ext4', name: 'Landscaping', cost: 2500, selected: false },
        { id: 'ext5', name: 'Driveway Repair', cost: 2200, selected: false },
        { id: 'ext6', name: 'Garage Door Replacement', cost: 1800, selected: false },
      ],
      total: 0
    },
    {
      name: 'Interior',
      items: [
        { id: 'int1', name: 'Flooring Replacement', cost: 4500, selected: false },
        { id: 'int2', name: 'Interior Paint', cost: 3000, selected: false },
        { id: 'int3', name: 'Drywall Repair', cost: 1500, selected: false },
        { id: 'int4', name: 'Interior Doors', cost: 1200, selected: false },
        { id: 'int5', name: 'Trim/Baseboards', cost: 1000, selected: false },
        { id: 'int6', name: 'Light Fixtures', cost: 800, selected: false },
      ],
      total: 0
    },
    {
      name: 'Kitchen',
      items: [
        { id: 'kit1', name: 'Full Kitchen Remodel', cost: 15000, selected: false },
        { id: 'kit2', name: 'Cabinets Only', cost: 6000, selected: false },
        { id: 'kit3', name: 'Countertops Only', cost: 3500, selected: false },
        { id: 'kit4', name: 'Appliance Package', cost: 4000, selected: false },
        { id: 'kit5', name: 'Kitchen Backsplash', cost: 1000, selected: false },
        { id: 'kit6', name: 'Kitchen Sink/Faucet', cost: 600, selected: false },
      ],
      total: 0
    },
    {
      name: 'Bathroom',
      items: [
        { id: 'bath1', name: 'Full Bathroom Remodel', cost: 8500, selected: false },
        { id: 'bath2', name: 'Shower/Tub Replacement', cost: 3000, selected: false },
        { id: 'bath3', name: 'Vanity/Sink', cost: 1200, selected: false },
        { id: 'bath4', name: 'Toilet Replacement', cost: 400, selected: false },
        { id: 'bath5', name: 'Bathroom Fixtures', cost: 500, selected: false },
        { id: 'bath6', name: 'Bathroom Tile', cost: 1800, selected: false },
      ],
      total: 0
    },
    {
      name: 'Systems',
      items: [
        { id: 'sys1', name: 'HVAC Replacement', cost: 7000, selected: false },
        { id: 'sys2', name: 'Electrical Panel Upgrade', cost: 2500, selected: false },
        { id: 'sys3', name: 'Plumbing Repairs', cost: 3000, selected: false },
        { id: 'sys4', name: 'Water Heater', cost: 1200, selected: false },
        { id: 'sys5', name: 'Windows Replacement', cost: 6000, selected: false },
        { id: 'sys6', name: 'Insulation', cost: 1800, selected: false },
      ],
      total: 0
    }
  ];
  
  const [rehabCategories, setRehabCategories] = useState(initialCategories);
  const [customItems, setCustomItems] = useState<RehabItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCost, setNewItemCost] = useState('');
  
  const handleItemToggle = (categoryIndex: number, itemIndex: number) => {
    const updatedCategories = [...rehabCategories];
    const item = updatedCategories[categoryIndex].items[itemIndex];
    item.selected = !item.selected;
    
    // Recalculate category total
    updatedCategories[categoryIndex].total = updatedCategories[categoryIndex].items
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.cost, 0);
    
    setRehabCategories(updatedCategories);
  };
  
  const handleCustomItemToggle = (itemIndex: number) => {
    const updatedItems = [...customItems];
    updatedItems[itemIndex].selected = !updatedItems[itemIndex].selected;
    setCustomItems(updatedItems);
  };
  
  const addCustomItem = () => {
    if (!newItemName.trim() || !newItemCost.trim()) return;
    
    const cost = parseFloat(newItemCost);
    if (isNaN(cost)) return;
    
    setCustomItems([
      ...customItems,
      {
        id: `custom-${Date.now()}`,
        name: newItemName,
        cost: cost,
        selected: true,
      }
    ]);
    
    setNewItemName('');
    setNewItemCost('');
  };
  
  const calculateTotalRehabCost = () => {
    const categoriesTotal = rehabCategories.reduce((sum, category) => {
      return sum + category.items
        .filter(item => item.selected)
        .reduce((itemSum, item) => itemSum + item.cost, 0);
    }, 0);
    
    const customTotal = customItems
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.cost, 0);
    
    return categoriesTotal + customTotal;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const totalRehabCost = calculateTotalRehabCost();
      
      // Get selected items for the report
      const selectedItems = rehabCategories.flatMap(category => 
        category.items.filter(item => item.selected)
      ).concat(customItems.filter(item => item.selected));
      
      setResults({
        address: address,
        totalRehabCost: totalRehabCost,
        selectedItems: selectedItems,
        estimatedTimeToComplete: Math.round(totalRehabCost / 5000) + 1, // Rough estimate
        contingencyAmount: totalRehabCost * 0.1,
        laborCost: totalRehabCost * 0.4,
        materialsCost: totalRehabCost * 0.6,
        recommendedContractors: [
          { name: "Quality Home Renovations", specialty: "General Contractor", rating: 4.8 },
          { name: "Modern Kitchen & Bath", specialty: "Kitchen/Bath Specialist", rating: 4.9 },
          { name: "Reliable Roofing", specialty: "Roofing", rating: 4.7 },
          { name: "Pacific Northwest HVAC", specialty: "HVAC Systems", rating: 4.6 }
        ]
      });
    } catch (error) {
      console.error('Error analyzing rehab:', error);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Rehab Cost Analysis</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimate renovation costs for your property
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Rehab Calculator</h2>
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
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Selected Items</h3>
                      <div className="text-sm mb-4">
                        {calculateTotalRehabCost() > 0 ? (
                          <p>Total: <span className="font-bold">{formatCurrency(calculateTotalRehabCost())}</span></p>
                        ) : (
                          <p className="text-gray-500">No items selected yet</p>
                        )}
                      </div>
                      
                      <div className="space-y-2 max-h-40 overflow-y-auto mb-4">
                        {rehabCategories.map((category) => (
                          category.items.some(item => item.selected) && (
                            <div key={category.name} className="text-sm">
                              <p className="font-medium">{category.name}:</p>
                              <ul className="pl-4">
                                {category.items.filter(item => item.selected).map((item) => (
                                  <li key={item.id} className="flex justify-between">
                                    <span>{item.name}</span>
                                    <span>{formatCurrency(item.cost)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        ))}
                        
                        {customItems.some(item => item.selected) && (
                          <div className="text-sm">
                            <p className="font-medium">Custom Items:</p>
                            <ul className="pl-4">
                              {customItems.filter(item => item.selected).map((item) => (
                                <li key={item.id} className="flex justify-between">
                                  <span>{item.name}</span>
                                  <span>{formatCurrency(item.cost)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-md font-medium text-white ${
                          loading ? 'bg-primary-light' : 'bg-primary hover:bg-primary-dark'
                        }`}
                      >
                        {loading ? 'Analyzing...' : 'Generate Rehab Report'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Add Custom Item</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="newItemName" className="block text-sm font-medium text-gray-700 mb-1">
                        Item Description
                      </label>
                      <input
                        type="text"
                        id="newItemName"
                        placeholder="E.g., Basement finishing"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="newItemCost" className="block text-sm font-medium text-gray-700 mb-1">
                        Cost ($)
                      </label>
                      <input
                        type="text"
                        id="newItemCost"
                        placeholder="Enter cost"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                        value={newItemCost}
                        onChange={(e) => setNewItemCost(e.target.value)}
                      />
                    </div>
                    
                    <button
                      type="button"
                      onClick={addCustomItem}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Add Custom Item
                    </button>
                  </div>
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
                      <h2 className="text-lg font-medium text-gray-900">Rehab Cost Report</h2>
                      <p className="text-sm text-gray-500">{results.address}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Total Rehab Budget</p>
                          <p className="text-2xl font-bold text-primary">
                            {formatCurrency(results.totalRehabCost)}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-sm font-medium text-gray-500">Estimated Timeline</p>
                          <p className="text-2xl font-bold text-primary">
                            {results.estimatedTimeToComplete} {results.estimatedTimeToComplete === 1 ? 'week' : 'weeks'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Breakdown</h3>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Materials</p>
                              <p className="font-medium">{formatCurrency(results.materialsCost)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Labor</p>
                              <p className="font-medium">{formatCurrency(results.laborCost)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Contingency (10%)</p>
                              <p className="font-medium">{formatCurrency(results.contingencyAmount)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Total Budget</p>
                              <p className="font-bold">{formatCurrency(results.totalRehabCost + results.contingencyAmount)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Rehab Items</h3>
                        
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Item
                                </th>
                                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Cost
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {results.selectedItems.map((item: RehabItem) => (
                                <tr key={item.id}>
                                  <td className="px-4 py-4 text-sm text-gray-900">
                                    {item.name}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-gray-900 text-right">
                                    {formatCurrency(item.cost)}
                                  </td>
                                </tr>
                              ))}
                              
                              <tr className="bg-gray-50">
                                <td className="px-4 py-4 text-sm font-medium text-gray-900">
                                  Contingency (10%)
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-900 text-right">
                                  {formatCurrency(results.contingencyAmount)}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-4 text-sm font-bold text-gray-900">
                                  Total
                                </td>
                                <td className="px-4 py-4 text-sm font-bold text-gray-900 text-right">
                                  {formatCurrency(results.totalRehabCost + results.contingencyAmount)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended Contractors</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {results.recommendedContractors.map((contractor: any, index: number) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                              <h4 className="font-medium">{contractor.name}</h4>
                              <p className="text-sm text-gray-500">{contractor.specialty}</p>
                              <div className="mt-2 flex items-center">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <svg 
                                      key={i} 
                                      className={`h-4 w-4 ${i < Math.floor(contractor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                      fill="currentColor" 
                                      viewBox="0 0 20 20"
                                    >
                                      <path fillRule="evenodd" d="M10 15.934l-6.18 3.243 1.179-6.879L.999 7.398l6.9-1.002L10 0l2.101 6.396 6.9 1.002-5 4.9 1.179 6.879z" clipRule="evenodd" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="ml-1 text-sm text-gray-500">{contractor.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {rehabCategories.map((category, categoryIndex) => (
                    <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h2 className="text-lg font-medium text-gray-900">{category.name}</h2>
                          {category.total > 0 && (
                            <span className="text-sm font-medium text-primary">
                              Selected: {formatCurrency(category.total)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.items.map((item, itemIndex) => (
                            <div 
                              key={item.id} 
                              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                                item.selected ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                              }`}
                              onClick={() => handleItemToggle(categoryIndex, itemIndex)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                  <input 
                                    type="checkbox" 
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                    checked={item.selected}
                                    onChange={() => handleItemToggle(categoryIndex, itemIndex)}
                                  />
                                  <span className="ml-2 font-medium">{item.name}</span>
                                </div>
                                <span className="font-medium">{formatCurrency(item.cost)}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {customItems.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h2 className="text-lg font-medium text-gray-900">Custom Items</h2>
                          {customItems.filter(item => item.selected).length > 0 && (
                            <span className="text-sm font-medium text-primary">
                              Selected: {formatCurrency(customItems.filter(item => item.selected).reduce((sum, item) => sum + item.cost, 0))}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {customItems.map((item, index) => (
                            <div 
                              key={item.id} 
                              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                                item.selected ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                              }`}
                              onClick={() => handleCustomItemToggle(index)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                  <input 
                                    type="checkbox" 
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                    checked={item.selected}
                                    onChange={() => handleCustomItemToggle(index)}
                                  />
                                  <span className="ml-2 font-medium">{item.name}</span>
                                </div>
                                <span className="font-medium">{formatCurrency(item.cost)}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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