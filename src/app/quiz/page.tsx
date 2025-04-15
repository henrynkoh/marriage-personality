"use client";

import Quiz from "@/components/Quiz";
import Results from "@/components/Results";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Check for hash in URL to determine if we should show results
    if (window.location.hash === "#results") {
      setShowResults(true);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setShowResults(window.location.hash === "#results");
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {showResults ? "인성 결과" : "인성 설문"}
      </h2>
      {showResults ? <Results /> : <Quiz />}
    </div>
  );
} 