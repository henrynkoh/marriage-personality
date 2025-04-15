"use client";

import { useState } from 'react';

interface PersonalityTrait {
  trait: string;
  score: number;
  description: string;
}

export default function PersonalityResults() {
  const [selectedTrait, setSelectedTrait] = useState<string | null>(null);
  
  const personalityResults: PersonalityTrait[] = [
    {
      trait: "Openness",
      score: 75,
      description: "You score high in openness, suggesting you're curious, imaginative, and open to new experiences. You likely enjoy exploring new ideas and have a rich inner world."
    },
    {
      trait: "Conscientiousness",
      score: 68,
      description: "Your conscientiousness score indicates you're organized, reliable, and goal-oriented. You tend to plan ahead and consider how your actions affect others."
    },
    {
      trait: "Extraversion",
      score: 45,
      description: "Your balanced extraversion score suggests you can enjoy social interactions but also value time alone. You're neither extremely outgoing nor particularly reserved."
    },
    {
      trait: "Agreeableness",
      score: 82,
      description: "You score high in agreeableness, indicating you're cooperative, compassionate, and considerate. You typically place others' needs before your own and avoid conflict."
    },
    {
      trait: "Neuroticism",
      score: 38,
      description: "Your low neuroticism score suggests emotional stability. You typically handle stress well and don't often experience negative emotions like anxiety or anger."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Personality Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Trait Scores</h3>
          {personalityResults.map((result) => (
            <div 
              key={result.trait}
              onClick={() => setSelectedTrait(result.trait)}
              className={`cursor-pointer p-3 rounded-md transition-colors ${selectedTrait === result.trait ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-gray-800">{result.trait}</h4>
                <span className="text-sm font-semibold bg-blue-500 text-white px-2 py-1 rounded-full">
                  {result.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Trait Analysis</h3>
          {selectedTrait ? (
            <div>
              <h4 className="font-medium text-gray-800 mb-2">{selectedTrait}</h4>
              <p className="text-gray-600">
                {personalityResults.find(r => r.trait === selectedTrait)?.description}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 italic">Select a trait to see detailed analysis</p>
          )}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">What This Means For Your Relationship</h3>
        <p className="text-gray-600 mb-4">
          Your personality profile indicates you're likely a thoughtful and reliable partner who values harmony in relationships.
          Your high agreeableness suggests you're naturally supportive and understanding, while your openness to experience
          means you're willing to try new things with your partner.
        </p>
        <p className="text-gray-600">
          To strengthen your relationship, consider using your conscientiousness to establish healthy routines together,
          and leverage your emotional stability when navigating conflicts. Remember that understanding both your personality
          and your partner's can help build a stronger foundation for communication and mutual growth.
        </p>
      </div>
    </div>
  );
} 