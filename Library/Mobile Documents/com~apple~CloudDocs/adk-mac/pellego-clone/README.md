# Pellego Real Estate AI

A Next.js application that uses AI to help users analyze real estate investments.

## Features

- AI-powered property search and analysis
- Real estate investment insights and recommendations
- NWMLS Matrix integration for analyzing new listings
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key
- NWMLS Matrix account (for NWMLS Analyzer feature)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pellego-clone.git
cd pellego-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Set up environment variables:
Copy the `.env.local.example` file to `.env.local` and add your API keys:
```
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
NWMLS_USERNAME=your_nwmls_username
NWMLS_PASSWORD=your_nwmls_password
NWMLS_API_KEY=your_nwmls_api_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Obtaining NWMLS API Access

To use the NWMLS integration with real data instead of mock data, you'll need:

1. **NWMLS Account Credentials**: Your NWMLS username and password (these are the same credentials you use to log into the NWMLS Matrix system).

2. **NWMLS API/RETS Access**:
   - Contact NWMLS directly at their [contact page](https://www.nwmls.com/contact/) or call their help desk at (425) 820-9200
   - Request RETS API access for your account
   - Specify that you need access for property search and listing data
   - Once approved, they will provide you with:
     - RETS login URL
     - API credentials (may be the same as your regular account)
     - Documentation for accessing their RETS server

3. **For Development Testing**:
   - While waiting for API access, you can still test the application with your regular NWMLS login credentials
   - The application will use mock data but will show authentication status
   - You can also paste Matrix search URLs from your NWMLS account to test parameter parsing

Note: NWMLS typically requires that you are a licensed real estate professional to obtain API access. The approval process may take several business days.

## Key Pages

- `/` - Home page with overview of the platform
- `/search` - AI-powered property search
- `/nwmls-analyzer` - NWMLS Matrix integration to analyze new listings
- `/adk-integration` - AI property analysis assistant

## NWMLS Matrix Integration

The NWMLS Analyzer feature allows real estate professionals to:

- Connect to their NWMLS Matrix account
- Automatically fetch and analyze new listings
- Receive AI-powered investment analysis for each property
- Set up scheduled analysis with email reports
- Save and categorize properties of interest

To use this feature:
1. Navigate to the NWMLS Analyzer page
2. Enter your search criteria and timeframe
3. Click "Fetch Listings" to analyze properties
4. Enable automated analysis to receive daily/weekly reports

## AI Integration

This project uses OpenAI's GPT models to:
- Generate realistic property data based on search criteria
- Analyze properties and provide investment insights
- Answer real estate investment questions
- Analyze NWMLS listings for investment potential

## Technology Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- OpenAI API
- NWMLS Matrix API integration

## License

This project is licensed under the ISC License. 