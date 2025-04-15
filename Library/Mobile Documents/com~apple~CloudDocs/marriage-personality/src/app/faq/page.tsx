"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs: FAQ[] = [
    {
      question: "결혼인성 앱은 어떤 정보를 제공하나요?",
      answer: "결혼인성 앱은 개인의 성격, 가치관, 생활 습관에 대한 질문을 통해 결혼 호환성을 분석합니다. 가족 중심, 갈등 해결, 재정 관리, 의사소통, 독립성과 같은 5가지 핵심 영역에 대한 성향과 전체적인 호환성 점수를 제공합니다. 또한 각 영역에 대한 설명과 관계 개선을 위한 실질적인 제안도 포함됩니다."
    },
    {
      question: "테스트 결과는 얼마나 정확한가요?",
      answer: "결혼인성 앱의 테스트는 심리학적 연구와 결혼 관련 연구를 기반으로 설계되었습니다. 그러나 모든 심리 테스트와 마찬가지로, 결과는 참고용으로만 활용하시는 것이 좋습니다. 테스트는 사용자의 응답을 기반으로 하므로, 솔직하고 정확한 답변이 더 정확한 결과로 이어집니다. 테스트 결과는 전문적인 상담을 대체할 수 없으며, 심각한 관계 문제가 있다면 전문가의 도움을 받으시기 바랍니다."
    },
    {
      question: "제 데이터는 어떻게 보호되나요?",
      answer: "결혼인성 앱은 사용자의 개인정보 보호를 매우 중요하게 생각합니다. 모든 테스트 응답은 사용자의 기기에만 로컬로 저장되며(localStorage), 당사 서버로 전송되지 않습니다. 이는 귀하의 데이터가 기기 밖으로 나가지 않음을 의미합니다. 앱 사용 통계는 익명화되어 수집될 수 있으나, 개인 식별 정보는 포함되지 않습니다. 자세한 정보는 개인정보 보호정책 페이지에서 확인하실 수 있습니다."
    },
    {
      question: "파트너와 함께 테스트해야 하나요?",
      answer: "파트너와 함께 테스트하면 결과를 비교할 수 있어 더 유용할 수 있습니다. 하지만 반드시 함께 해야 하는 것은 아닙니다. 혼자 테스트해도 자신의 성향을 이해하는 데 도움이 됩니다. 파트너가 테스트에 참여하기를 원치 않는다면, 귀하의 결과를 바탕으로 대화를 시작할 수도 있습니다. 중요한 것은 테스트 결과를 비난이나 판단의 도구가 아닌, 서로를 더 이해하는 기회로 활용하는 것입니다."
    },
    {
      question: "결과가 좋지 않다면 관계에 문제가 있는 건가요?",
      answer: "호환성 점수가 낮다고 해서 반드시 관계에 문제가 있거나 결혼 생활이 어려울 것이라는 의미는 아닙니다. 이는 단지 잠재적으로 더 주의를 기울여야 할 영역이 있다는 것을 의미합니다. 차이점이 있는 커플도 효과적인 의사소통, 상호 존중, 타협을 통해 매우 성공적인 관계를 유지할 수 있습니다. 테스트 결과는 대화의 시작점으로 활용하고, 서로의 차이점을 이해하고 존중하는 기회로 삼으세요."
    },
    {
      question: "테스트 결과는 어떻게 활용하는 것이 좋나요?",
      answer: "테스트 결과는 다음과 같이 활용하는 것이 좋습니다: 1) 파트너와 함께 결과를 검토하고 각 영역에 대해 솔직한 대화를 나누세요. 2) 점수가 낮은 영역에 대해서는 구체적인 예시를 들어 서로의 기대치를 이해하려고 노력하세요. 3) 제안된 행동 팁을 실천해 보세요. 4) 정기적으로 테스트를 다시 하여 시간에 따른 변화를 확인하세요. 5) 필요하다면 커플 상담사나 결혼 준비 교육 프로그램에 참여하는 것을 고려해보세요."
    },
    {
      question: "앱을 사용하는 데 비용이 드나요?",
      answer: "결혼인성 앱은 기본적인 테스트와 결과 확인이 무료로 제공됩니다. 추후 더 자세한 분석이나 추가 기능이 개발될 경우, 일부 프리미엄 기능은 유료로 제공될 수 있습니다. 하지만 현재는 모든 핵심 기능을 무료로 이용하실 수 있습니다."
    },
    {
      question: "오프라인에서도 앱을 사용할 수 있나요?",
      answer: "네, 결혼인성 앱은 프로그레시브 웹 앱(PWA)으로 설계되어 있어 오프라인에서도 사용이 가능합니다. 한 번 앱을 로드한 후에는 인터넷 연결 없이도 테스트 진행과 결과 확인이 가능합니다. 또한 홈 화면에 앱을 설치하면 일반 앱처럼 접근하기도 편리합니다."
    },
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">자주 묻는 질문</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`mt-2 text-gray-700 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-medium text-lg mb-3">아직 질문이 있으신가요?</h3>
        <p className="text-gray-700 mb-4">
          더 궁금한 점이 있으시면 이메일로 문의해주세요. 최대한 빠르게 답변 드리겠습니다.
        </p>
        <a
          href="mailto:contact@gyeolhoninseong.kr"
          className="text-blue-600 hover:underline font-medium"
        >
          contact@gyeolhoninseong.kr
        </a>
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