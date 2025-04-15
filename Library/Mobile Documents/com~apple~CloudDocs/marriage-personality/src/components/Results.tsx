"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { PersonalityResult } from "@/lib/types";
import Link from "next/link";
import ShareResults from "./ShareResults";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Results() {
  const [results, setResults] = useState<PersonalityResult[]>([]);
  const [compatibilityScore, setCompatibilityScore] = useState(0);

  useEffect(() => {
    // Process the answers from localStorage
    const answers = JSON.parse(localStorage.getItem("quizAnswers") || "[]");
    
    const mockResults: PersonalityResult[] = [
      {
        trait: "가족 중심",
        score: answers[0] ? answers[0] * 20 : 60,
        description: "가족과의 시간을 중시하며 안정적인 관계를 선호합니다.",
        suggestion: "상대방과 가족 계획에 대해 깊이 논의하세요.",
      },
      {
        trait: "갈등 해결",
        score: answers[1] ? answers[1] * 20 : 70,
        description: "갈등에서 타협과 협력을 추구하는 성향입니다.",
        suggestion: "상대방의 감정 표현 방식을 미리 알아두세요.",
      },
      {
        trait: "재정 관리",
        score: answers[2] ? answers[2] * 20 : 65,
        description: "계획적이고 균형 잡힌 재정 관리를 선호합니다.",
        suggestion: "결혼 전 재정 계획과 목표에 대해 대화하세요.",
      },
      {
        trait: "의사소통",
        score: answers[3] ? answers[3] * 20 : 75,
        description: "의견 차이를 존중하고 타협점을 찾는 성향입니다.",
        suggestion: "상대방의 의사소통 스타일을 이해하고 존중하세요.",
      },
      {
        trait: "독립성",
        score: answers[4] ? answers[4] * 20 : 70,
        description: "개인 시간과 공간을 중요시하는 성향입니다.",
        suggestion: "파트너와 개인 시간의 균형에 대해 논의하세요.",
      },
    ];
    
    setResults(mockResults);
    
    // Calculate overall compatibility score (average of all scores)
    const total = mockResults.reduce((sum, item) => sum + item.score, 0);
    const avg = mockResults.length > 0 ? total / mockResults.length : 0;
    setCompatibilityScore(Math.round(avg));
  }, []);

  const chartData = {
    labels: results.map((r) => r.trait),
    datasets: [
      {
        label: "점수 (%)",
        data: results.map((r) => r.score),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">당신의 인성 결과</h3>
      
      <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-semibold">전체 호환성 점수</p>
        <p className="text-3xl font-bold text-blue-600">{compatibilityScore}%</p>
        <ShareResults score={compatibilityScore} />
      </div>
      
      <div className="mb-6">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100 } },
          }}
        />
      </div>
      
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
            <h4 className="font-medium text-lg">{result.trait}: {result.score}%</h4>
            <p className="text-gray-700">{result.description}</p>
            <p className="text-blue-600 mt-2 font-medium">제안: {result.suggestion}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-t pt-6">
        <h4 className="font-medium text-lg mb-4">다음 단계 (준비 중)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h5 className="font-medium">결혼 상담 연결</h5>
            <p className="text-sm text-gray-600">전문 상담사와 더 깊은 대화를 나눠보세요.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h5 className="font-medium">데이트 코스 추천</h5>
            <p className="text-sm text-gray-600">인성 결과에 맞는 맞춤형 데이트 제안.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 