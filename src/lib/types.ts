export interface Question {
  id: number;
  text: string;
  options: { value: number; label: string }[];
}

export interface PersonalityResult {
  trait: string;
  score: number;
  description: string;
  suggestion: string;
} 