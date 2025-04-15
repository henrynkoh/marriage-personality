'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AgentSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pellego for Real Estate Agents</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI tools to help you close more deals, serve clients better, and save time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600">
                Get detailed market analyses for any neighborhood with predicted price trends, supply/demand metrics, and competitive insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Listing Descriptions</h3>
              <p className="text-gray-600">
                Generate professional, compelling listing descriptions in seconds with our AI copywriting tool.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving Automation</h3>
              <p className="text-gray-600">
                Automate follow-ups, schedule showings, and manage your client pipeline with our smart CRM integration.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">NWMLS Matrix Integration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Pellego connects directly with your NWMLS Matrix account to automatically analyze new listings, identify investment opportunities, and provide detailed property insights.
                </p>
                <ul className="space-y-3">
                  {[
                    "Instant notifications for high-opportunity listings",
                    "AI-powered property analysis and valuation",
                    "Automated comps and investment metrics",
                    "Client-ready property reports"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a 
                    href="/nwmls-analyzer"
                    className="px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
                  >
                    Try NWMLS Analyzer
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Demo Video: Agent Dashboard</h3>
                    <p className="text-gray-500 text-sm">Click to watch how Pellego helps agents close more deals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans for Agents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Starter",
                price: "$29",
                features: [
                  "NWMLS Matrix Integration",
                  "10 AI Property Analyses/mo",
                  "Client Portal (3 active clients)",
                  "Basic Reports",
                  "Email Support"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Professional",
                price: "$79",
                features: [
                  "NWMLS Matrix Integration",
                  "50 AI Property Analyses/mo",
                  "Client Portal (15 active clients)",
                  "Advanced Reports & CMA",
                  "Marketing Content Generator",
                  "Priority Support"
                ],
                cta: "Most Popular",
                popular: true
              },
              {
                name: "Team",
                price: "$199",
                features: [
                  "NWMLS Matrix Integration",
                  "Unlimited AI Property Analyses",
                  "Client Portal (Unlimited clients)",
                  "Premium Reports & CMA",
                  "Marketing Content Generator",
                  "Team Dashboard",
                  "24/7 Support"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md relative ${plan.popular ? 'ring-2 ring-primary' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/plans"
                    className={`block w-full text-center py-2 px-4 rounded-md font-medium ${
                      plan.popular 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 