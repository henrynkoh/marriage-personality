import PersonalityResults from "@/components/PersonalityResults";

export default function ResultsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Personality Assessment Results</h1>
      <PersonalityResults />
    </main>
  );
} 