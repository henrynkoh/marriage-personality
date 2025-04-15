// This file contains the integration with AI services for property analysis
import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only for client-side use in demo
});

export type PropertyData = {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  lotSize: number;
  propertyType: string;
  estimatedARV: number;
  estimatedRehab: number;
  estimatedProfit: number;
};

// Real property search function that uses AI to generate realistic property data
export async function searchProperties(query: string): Promise<PropertyData[]> {
  try {
    console.log(`Searching for properties with query: ${query}`);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use a model that's widely available
      messages: [
        {
          role: "system",
          content: `You are a real estate investment analysis expert. Generate realistic property data based on the search query.
          Return ONLY a JSON array of properties with the following structure:
          [
            {
              "address": "123 Main St, City, State",
              "price": 450000,
              "bedrooms": 3,
              "bathrooms": 2,
              "sqft": 1800,
              "yearBuilt": 1995,
              "lotSize": 5000,
              "propertyType": "Single Family",
              "estimatedARV": 500000,
              "estimatedRehab": 25000,
              "estimatedProfit": 50000
            },
            ...additional properties
          ]
          Include 3-5 properties that match the query. Be realistic with the numbers.`
        },
        {
          role: "user",
          content: `Search for investment properties matching this criteria: ${query}`
        }
      ]
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No content in the response");
    }

    try {
      // The content might contain explanatory text, so we need to extract just the JSON part
      const jsonStr = content.match(/\[[\s\S]*\]/)?.[0] || content;
      return JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      console.log("Raw response:", content);
      return [];
    }
  } catch (error) {
    console.error("Error searching properties:", error);
    // Return empty array on error
    return [];
  }
}

// Real ADK configuration using OpenAI API
export const adkConfig = {
  version: '1.0.0',
  name: 'property-analysis-agent',
  
  // Real implementation for agent that processes user requests
  agentRun: async (userInput: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a sophisticated real estate investment analyst assistant. 
            You help users analyze properties, identify investment opportunities, and understand market trends.
            Provide detailed, data-driven analysis and recommendations based on the user's query.
            Include specific numbers, calculations, and insights that would be valuable for real estate investors.
            Format your response in a clear, structured way that's easy to read.`
          },
          {
            role: "user",
            content: userInput
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      });

      return response.choices[0].message.content || "I couldn't analyze that request. Please try again with more details.";
    } catch (error) {
      console.error("Error running agent:", error);
      return "Sorry, I encountered an error while processing your request. Please try again later.";
    }
  },
  
  // For backward compatibility
  mockAgentRun: async (userInput: string) => {
    return adkConfig.agentRun(userInput);
  }
}; 