# Pellego Real Estate AI - Usage Guide

This guide will help you understand how to use and test the AI-powered features of the Pellego Real Estate application.

## Demo Script (Command Line)

To see a quick demonstration of the AI capabilities through the command line:

```bash
npm run demo
```

This will run a demonstration that:
1. Searches for properties in Austin, TX based on specific criteria
2. Displays the AI-generated property data
3. Shows an AI-powered market analysis

## Web Application

The web application has two main AI-powered features:

### 1. Property Search (http://localhost:3000/search)

This page allows you to search for properties based on your criteria:

1. Enter your search query in the search box (e.g., "Properties in Seattle with 3 bedrooms under $700,000")
2. Click "Search Properties"
3. The application will use AI to:
   - Generate a list of properties matching your criteria
   - Provide an AI analysis of the search results with market insights

### 2. AI Property Assistant (http://localhost:3000/adk-integration)

This page provides a more conversational interface to the AI:

1. Type a question or request about real estate investments
2. Click "Submit to AI Assistant"
3. The AI will provide a detailed response with analysis and recommendations

Example queries you can try:
- "What's the potential ROI for a 3-bedroom house in Austin, TX with a purchase price of $450,000 and $50,000 in renovations?"
- "Compare the investment potential of multi-family properties in Chicago versus single-family homes in the suburbs."
- "What are the key factors I should consider when evaluating a potential fix-and-flip property?"
- "Analyze the current real estate market trends in Miami, FL and predict how they might change in the next 12 months."

## How It Works

The application uses the OpenAI API to power its AI features:

1. **Property Search**: When you submit a search query, the application sends a request to the OpenAI API, which generates realistic property data based on your criteria.

2. **Property Analysis**: The AI analyzes market conditions, calculates potential ROI, and provides investment recommendations.

3. **Property Assistant**: The conversational interface allows you to ask specific questions about real estate investments and receive detailed responses.

## Troubleshooting

If you encounter any issues:

1. Make sure your OpenAI API key is correctly set in the `.env.local` file.
2. Check that the server is running (`npm run dev`).
3. If you see errors in the console, they may provide more information about what's happening.

## Limitations

- The property data is AI-generated and not based on real listings.
- The market analysis is based on the AI's knowledge, not real-time market data.
- The application requires an internet connection to send requests to the OpenAI API. 