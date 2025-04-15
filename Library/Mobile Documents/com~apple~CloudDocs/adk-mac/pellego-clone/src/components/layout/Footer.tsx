import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-gray-600 hover:text-primary">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com/pellego" className="text-gray-600 hover:text-primary">
                  Follow Pellego
                </Link>
              </li>
              <li>
                <Link href="/how-to-use" className="text-gray-600 hover:text-primary">
                  How to Use Pellego
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">(425) 441-3800</li>
              <li>
                <a href="mailto:contact@pellego.com" className="text-gray-600 hover:text-primary">
                  contact@pellego.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Copyright 2024 Pellego, Inc
          </p>
          <p className="text-gray-500 text-xs mt-4">
            DISCLOSURE: Pellego is a licensed real estate brokerage in the states of California, Florida, and Washington, and is a member of the Northwest Multiple Listing Service, MLS Listings, and the Sacramento Association of Realtors. Pellego uses data from Multiple Listing Services (MLSes) and public sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 