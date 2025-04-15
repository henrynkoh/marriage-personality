'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { adkConfig } from '@/lib/agent';

export default function ADKIntegrationPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      // Using the real agent implementation
      const result = await adkConfig.agentRun(prompt);
      setResponse(result);
    } catch (error) {
      console.error('Error calling property analysis agent:', error);
      setResponse('Error: Failed to get response from the AI agent.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Property Analysis Assistant</h1>
            <p className="mt-2 text-lg text-gray-600">
              Get professional-grade property analysis and investment insights powered by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Ask the Property Agent</h2>
              <p className="text-gray-600 mb-4">
                Our AI-powered property analysis agent can analyze properties, 
                provide investment insights, and answer questions about real estate trends.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                    Your question or request
                  </label>
                  <textarea
                    id="prompt"
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: Find investment properties in Seattle with a cap rate above 5% and potential for value-add improvements"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Submit to AI Assistant'}
                </button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Agent Response</h2>
              
              {response ? (
                <div className="bg-white p-4 rounded border border-gray-200 min-h-[200px] overflow-y-auto max-h-[500px]">
                  <p className="whitespace-pre-line">{response}</p>
                </div>
              ) : (
                <div className="bg-white p-4 rounded border border-gray-200 min-h-[200px] flex items-center justify-center text-gray-400">
                  Agent responses will appear here...
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">How Our AI Works</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Uses advanced language models to understand complex property queries</li>
                  <li>Analyzes market trends and property characteristics</li>
                  <li>Provides investment recommendations based on your criteria</li>
                  <li>Offers detailed financial analysis including cap rates, ROI, and cash flow projections</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold mb-2">Example Queries</h2>
            <p className="text-gray-600 mb-4">
              Here are some examples of queries you can ask our AI property assistant:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={() => setPrompt("What's the potential ROI for a 3-bedroom house in Austin, TX with a purchase price of $450,000 and $50,000 in renovations?")}
              >
                <p className="text-sm font-medium">ROI Analysis</p>
                <p className="text-xs text-gray-600">What's the potential ROI for a 3-bedroom house in Austin, TX with a purchase price of $450,000 and $50,000 in renovations?</p>
              </div>
              
              <div 
                className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={() => setPrompt("Compare the investment potential of multi-family properties in Chicago versus single-family homes in the suburbs.")}
              >
                <p className="text-sm font-medium">Market Comparison</p>
                <p className="text-xs text-gray-600">Compare the investment potential of multi-family properties in Chicago versus single-family homes in the suburbs.</p>
              </div>
              
              <div 
                className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={() => setPrompt("What are the key factors I should consider when evaluating a potential fix-and-flip property?")}
              >
                <p className="text-sm font-medium">Investment Strategy</p>
                <p className="text-xs text-gray-600">What are the key factors I should consider when evaluating a potential fix-and-flip property?</p>
              </div>
              
              <div 
                className="bg-white p-3 rounded border border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={() => setPrompt("Analyze the current real estate market trends in Miami, FL and predict how they might change in the next 12 months.")}
              >
                <p className="text-sm font-medium">Market Analysis</p>
                <p className="text-xs text-gray-600">Analyze the current real estate market trends in Miami, FL and predict how they might change in the next 12 months.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 