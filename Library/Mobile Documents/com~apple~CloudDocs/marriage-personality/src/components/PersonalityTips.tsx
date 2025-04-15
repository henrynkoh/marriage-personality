"use client";

import { useState } from "react";

interface Tip {
  category: string;
  title: string;
  content: string[];
}

export default function PersonalityTips() {
  const [activeCategory, setActiveCategory] = useState<string>("communication");

  const tips: Record<string, Tip> = {
    communication: {
      category: "의사소통",
      title: "효과적인 대화 방법",
      content: [
        "1. 상대방이 말할 때 중간에 끼어들지 말고 끝까지 들어주세요.",
        "2. 비판하기보다 '나'를 주어로 한 문장으로 감정을 표현하세요. (예: '네가 늦으면 답답해' 대신 '내가 기다릴 때 불안해져')",
        "3. 정기적으로 서로의 하루에 대해 대화하는 시간을 가지세요.",
        "4. 중요한 대화는 둘 다 피곤하거나 바쁘지 않을 때 하세요.",
        "5. 상대방의 말을 듣고 이해했다는 것을 확인하기 위해 들은 내용을 요약해보세요."
      ]
    },
    conflict: {
      category: "갈등 해결",
      title: "갈등을 건강하게 해결하는 방법",
      content: [
        "1. 감정이 격해졌을 때는 일단 '타임아웃'을 선언하고 나중에 대화하세요.",
        "2. 문제 해결에 집중하고 과거의 실수를 들춰내지 마세요.",
        "3. 절대 해서는 안 되는 4가지: 비난, 경멸, 방어적 태도, 대화 회피",
        "4. 타협할 수 있는 영역과 절대 양보할 수 없는 영역을 미리 구분하세요.",
        "5. 갈등 후에는 화해와 용서의 시간을 가지세요."
      ]
    },
    finances: {
      category: "재정 관리",
      title: "함께하는 돈 관리 방법",
      content: [
        "1. 정기적으로 재정 상태를 검토하고 예산을 함께 계획하세요.",
        "2. 공동 생활비와 개인 지출을 위한 별도의 계좌를 만드는 것을 고려하세요.",
        "3. 큰 금액의 지출은 항상 서로 상의 후 결정하세요.",
        "4. 각자의 재정 습관과 가치관을 이해하고 존중하세요.",
        "5. 장기적인 재정 목표(주택 구입, 자녀 교육 등)를 함께 설정하세요."
      ]
    },
    time: {
      category: "시간 균형",
      title: "함께하는 시간과 개인 시간의 균형",
      content: [
        "1. 주기적으로 데이트 시간을 가지고 새로운 경험을 함께하세요.",
        "2. 서로의 개인 취미와 사회적 관계를 존중하세요.",
        "3. 가족 및 친구들과의 시간 분배에 대해 미리 이야기하세요.",
        "4. 함께 있을 때 전자기기 사용을 줄이고 질 높은 대화에 집중하세요.",
        "5. 가정 내 책임과 집안일을 공평하게 분담하세요."
      ]
    },
    future: {
      category: "미래 계획",
      title: "함께 미래를 계획하는 방법",
      content: [
        "1. 1년, 5년, 10년 후의 모습에 대해 정기적으로 대화하세요.",
        "2. 자녀 계획, 거주지, 커리어 등 중요한 주제에 대한 기대치를 공유하세요.",
        "3. 서로의 꿈과 목표를 지지하고 돕는 방법을 찾으세요.",
        "4. 예상치 못한 상황(실직, 건강 문제 등)에 대한 대비책을 마련하세요.",
        "5. 변화에 유연하게 대응하고 계획을 함께 조정해나가세요."
      ]
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h4 className="font-medium text-lg mb-4">관계 개선을 위한 팁</h4>
      
      <div className="flex overflow-x-auto pb-2 mb-4 -mx-2 px-2">
        {Object.values(tips).map((tip) => (
          <button
            key={tip.category}
            className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap transition ${
              activeCategory === tip.category.toLowerCase()
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(tip.category.toLowerCase())}
          >
            {tip.category}
          </button>
        ))}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h5 className="font-medium text-lg mb-3">
          {tips[activeCategory].title}
        </h5>
        <ul className="space-y-2 text-gray-700">
          {tips[activeCategory].content.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">{item.split('.')[0]}.</span>
              <span>{item.substring(item.indexOf('.') + 2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 