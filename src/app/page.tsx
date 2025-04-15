"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <section className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">결혼인성으로 호환성 확인</h2>
        <p className="mb-6 text-lg text-gray-700">
          간단한 설문으로 당신과 상대방의 인성을 알아보세요. 결혼 전 미리 확인하는 성격 호환성 테스트입니다.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/quiz"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            설문 시작하기
          </Link>
          {deferredPrompt && (
            <button
              onClick={handleInstall}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              앱 설치하기
            </button>
          )}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">앱 특징</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>과학적 기반의 정확한 인성 평가</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>결혼 중심의 맞춤형 호환성 분석</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>개인정보 보호 (데이터는 기기에만 저장)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>직관적이고 구체적인 결과 제공</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>실제 행동 제안과 개선 방법 안내</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-3">커뮤니티 (준비 중)</h3>
          <p className="text-gray-700 mb-4">
            곧 사용자 후기와 조언을 공유할 수 있는 커뮤니티가 오픈됩니다.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              "이 앱으로 파트너와 대화를 시작했어요. 결혼 전에 몰랐던 부분을 미리 알게 되어 정말 도움이 됐습니다." - 김서연, 29세
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-3">사용 방법</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>5분 설문에 솔직하게 답변하세요.</li>
          <li>인성 및 호환성 점수를 확인하세요.</li>
          <li>결과를 파트너와 공유하고 대화를 시작하세요.</li>
          <li>제안된 개선점에 대해 함께 논의하세요.</li>
        </ol>
      </section>
    </div>
  );
}
