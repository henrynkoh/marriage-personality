"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: 1,
    text: "가족과의 시간을 얼마나 중요하게 생각하나요?",
    options: [
      { value: 1, label: "전혀 중요하지 않음" },
      { value: 2, label: "약간 중요" },
      { value: 3, label: "보통" },
      { value: 4, label: "매우 중요" },
      { value: 5, label: "가장 중요" },
    ],
  },
  {
    id: 2,
    text: "갈등 상황에서 주로 어떤 태도를 보이나요?",
    options: [
      { value: 1, label: "회피" },
      { value: 2, label: "경쟁적" },
      { value: 3, label: "타협적" },
      { value: 4, label: "협력적" },
      { value: 5, label: "감정적" },
    ],
  },
  {
    id: 3,
    text: "재정 관리에 대해 어떤 태도를 가지고 있나요?",
    options: [
      { value: 1, label: "매우 절약적" },
      { value: 2, label: "계획적 소비" },
      { value: 3, label: "균형적 관리" },
      { value: 4, label: "여유로운 소비" },
      { value: 5, label: "자유로운 소비" },
    ],
  },
  {
    id: 4,
    text: "상대방의 의견에 동의하지 않을 때 어떻게 대응하나요?",
    options: [
      { value: 1, label: "즉시 반대 의견 표현" },
      { value: 2, label: "논리적으로 설득" },
      { value: 3, label: "타협점 모색" },
      { value: 4, label: "일단 수용 후 차후 논의" },
      { value: 5, label: "대부분 수용함" },
    ],
  },
  {
    id: 5,
    text: "결혼 생활에서 개인 시간은 얼마나 중요하다고 생각하나요?",
    options: [
      { value: 1, label: "거의 필요 없음" },
      { value: 2, label: "가끔 필요함" },
      { value: 3, label: "적당히 필요함" },
      { value: 4, label: "상당히 중요함" },
      { value: 5, label: "매우 중요함" },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isOffline, setIsOffline] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load saved answers
    const saved = localStorage.getItem("quizAnswers");
    if (saved) setAnswers(JSON.parse(saved));

    // Check offline status
    const handleOffline = () => setIsOffline(!navigator.onLine);
    window.addEventListener("online", handleOffline);
    window.addEventListener("offline", handleOffline);
    setIsOffline(!navigator.onLine);
    
    return () => {
      window.removeEventListener("online", handleOffline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push("/quiz#results");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isOffline && (
        <p className="text-red-500 mb-4">오프라인 모드: 데이터는 로컬에 저장됩니다.</p>
      )}
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].text}</h3>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left p-3 border rounded-lg hover:bg-blue-100 transition"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
} 