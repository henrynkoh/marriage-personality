const Testimonials = () => {
  const testimonials = [
    {
      quote: "I have been using Pellego since I was introduce to it and it has been amazing so far to my experience. From running comps to finding out my estimated profit with all expenses accounted for at closing… I've flipped 23 houses last year.",
      author: "TJ Ruizo",
      title: "CEO, Ruizo Homes"
    },
    {
      quote: "We use Pellego all the time. Recently we bought a great property that a Pellego agent identified for us. The buying process with Pellego was a breeze and it was great pleasure working with them. We will definitely buy more with their help!",
      author: "Tatiana Gershanov",
      title: "CFO, Sound Housing"
    },
    {
      quote: "We were floored... I highly recommend Pellego to anyone who likes immediate gratification and who does not have hours in their day to spend look at each and every home on the market.",
      author: "Ian Morell",
      title: "CEO, Caliber Real Estate"
    },
    {
      quote: "I expect we will see Pellego as the standard by which great companies are compared in the near future. Thank you Pellego for all you do to make Real Estate Investing better than it used to be.",
      author: "Gary Pryde",
      title: "Broker + Property Manager"
    },
    {
      quote: "Pellego!!! That should be the first website any wholesaler checks when evaluating a deal. It is literally the fastest way to perform due diligence on a rehab... No I was not paid to say this, I seriously love and use the website almost daily.",
      author: "Jan Wanot",
      title: "WA Real Estate Investing"
    },
    {
      quote: "There are so many cool functions on the site that many people might not know about... We recommend all the investors to use this site to find and to analyze deals.",
      author: "Christine Kwon",
      title: "Manager at ROCK PI"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Don't just take our word for it
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 