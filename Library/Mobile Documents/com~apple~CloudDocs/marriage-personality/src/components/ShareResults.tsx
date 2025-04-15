"use client";

import { useState } from "react";

interface ShareResultsProps {
  score: number;
}

export default function ShareResults({ score }: ShareResultsProps) {
  const [copied, setCopied] = useState(false);
  
  const shareText = `내 결혼인성 테스트 결과: ${score}% 호환성! 당신의 결과는? 결혼인성 앱에서 확인해보세요.`;
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '결혼인성 테스트 결과',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.error('공유 실패:', error);
      }
    } else {
      handleCopy();
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shareText + ' ' + window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-700 mb-2">테스트 결과 공유하기</p>
      <div className="flex space-x-2">
        <button
          onClick={handleShare}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          공유하기
        </button>
        <button
          onClick={handleCopy}
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            ></path>
          </svg>
          {copied ? "복사됨!" : "복사하기"}
        </button>
      </div>
    </div>
  );
} 