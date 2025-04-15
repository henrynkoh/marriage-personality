const Features = () => {
  const features = [
    {
      title: "Comps and Calculators",
      description: "Pull renovated comps and editable calculators for any address, on or off market. Track your assumptions without leaving the page."
    },
    {
      title: "Investor Search Filters",
      description: "Use Pellego's pro forma calculations to filter active listings by investment criteria, updated hourly with comps and estimates."
    },
    {
      title: "Analyze like an appraiser",
      description: "Breakdown the value of differences between the subject house and its comps. Account for an extra garage, different market conditions, etc."
    },
    {
      title: "Explore value adds",
      description: "Explore the ARV potential of a finished basement or an extra bathroom. Or get new construction comps, optimized for your lot size."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Free Software
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Research and analyze properties at the same time.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/create-account"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Create an account
            </a>
            <a
              href="/adk-integration"
              className="inline-flex items-center ml-4 px-6 py-3 border border-primary text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Try ADK Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 