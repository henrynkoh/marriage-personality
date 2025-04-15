// Demo script to show how the AI property search works
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

async function searchProperties(query) {
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
    return [];
  }
}

async function analyzeProperties(query) {
  try {
    console.log(`Analyzing properties for: ${query}`);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use a model that's widely available
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
          content: `Analyze these investment properties: ${query}. Provide insights on market conditions, potential ROI, and investment recommendations.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0].message.content || "I couldn't analyze that request. Please try again with more details.";
  } catch (error) {
    console.error("Error analyzing properties:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
}

// Demo the functionality
async function runDemo() {
  const searchQuery = "Properties in Austin, TX suitable for long-term rental income with at least 3 bedrooms and a budget of $500,000";
  
  console.log("DEMO: AI-Powered Property Search\n");
  console.log(`Search query: "${searchQuery}"\n`);
  
  console.log("Searching for properties...");
  const properties = await searchProperties(searchQuery);
  
  console.log("\n=== SEARCH RESULTS ===\n");
  if (properties.length === 0) {
    console.log("No properties found.");
  } else {
    console.log(`Found ${properties.length} properties:\n`);
    properties.forEach((property, index) => {
      console.log(`Property #${index + 1}:`);
      console.log(`Address: ${property.address}`);
      console.log(`Price: $${property.price.toLocaleString()}`);
      console.log(`Specs: ${property.bedrooms} bed, ${property.bathrooms} bath, ${property.sqft.toLocaleString()} sqft`);
      console.log(`Property Type: ${property.propertyType}`);
      console.log(`Year Built: ${property.yearBuilt}`);
      console.log(`Estimated ARV: $${property.estimatedARV.toLocaleString()}`);
      console.log(`Estimated Rehab: $${property.estimatedRehab.toLocaleString()}`);
      console.log(`Estimated Profit: $${property.estimatedProfit.toLocaleString()}`);
      console.log("-------------------");
    });
  }
  
  console.log("\n=== AI ANALYSIS ===\n");
  const analysis = await analyzeProperties(searchQuery);
  console.log(analysis);
}

runDemo().catch(console.error); 