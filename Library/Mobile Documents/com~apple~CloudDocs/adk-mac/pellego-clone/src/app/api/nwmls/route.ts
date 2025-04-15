import { NextRequest, NextResponse } from 'next/server';
import { adkConfig } from '@/lib/agent';
import { getNewListings, parseMatrixUrl, authenticate } from '@/lib/nwmls';

// Analyze a single listing using AI
async function analyzeListing(listing: any) {
  try {
    const prompt = `Analyze this real estate listing as an investment property:
      Address: ${listing.address}
      Price: $${listing.price}
      Bedrooms: ${listing.bedrooms}
      Bathrooms: ${listing.bathrooms}
      Square Feet: ${listing.sqft}
      Year Built: ${listing.yearBuilt}
      Lot Size: ${listing.lotSize} sq ft
      Property Type: ${listing.propertyType}
      Description: ${listing.description}
      
      Provide a detailed investment analysis including:
      1. Estimated monthly rental income
      2. Potential cash flow
      3. Estimated cap rate
      4. Comparable properties in the area
      5. Renovation potential and estimated ROI
      6. Market trends for this location
      7. Overall investment recommendation (buy, hold, avoid)`;

    const analysis = await adkConfig.agentRun(prompt);
    return {
      ...listing,
      analysis
    };
  } catch (error) {
    console.error(`Error analyzing listing ${listing.listingId}:`, error);
    return {
      ...listing,
      analysis: "Error analyzing this listing. Please try again later."
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { days, matrixUrl } = await request.json();
    
    // Check authentication status
    const authResult = await authenticate();
    
    // Parse Matrix URL if provided
    let searchParams = {};
    if (matrixUrl) {
      searchParams = parseMatrixUrl(matrixUrl);
    }
    
    // Fetch new listings using the NWMLS utility
    const newListings = await getNewListings(days, searchParams);
    
    // Only analyze listings less than the specified days old
    const today = new Date();
    const filteredListings = newListings.filter(listing => {
      const listedDate = new Date(listing.listedDate);
      const diffTime = Math.abs(today.getTime() - listedDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= days;
    });
    
    // Analyze each listing (in a real implementation, we might want to do this in batches)
    const analyzedListings = await Promise.all(
      filteredListings.map(listing => analyzeListing(listing))
    );
    
    return NextResponse.json({ 
      success: true,
      authenticated: authResult.authenticated,
      listings: analyzedListings,
      count: analyzedListings.length,
      usedCredentials: {
        username: process.env.NWMLS_USERNAME ? `${process.env.NWMLS_USERNAME.substring(0, 2)}****` : 'not set',
        password: process.env.NWMLS_PASSWORD ? '********' : 'not set'
      }
    });
  } catch (error) {
    console.error('Error processing NWMLS data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process NWMLS data',
        details: error instanceof Error ? error.message : String(error),
        authStatus: {
          username: process.env.NWMLS_USERNAME ? 'set' : 'not set',
          password: process.env.NWMLS_PASSWORD ? 'set' : 'not set'
        }
      },
      { status: 500 }
    );
  }
} 