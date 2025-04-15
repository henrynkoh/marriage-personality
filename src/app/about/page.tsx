import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">소개</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h3 className="text-xl font-medium mb-3">결혼인성 앱이란?</h3>
          <p className="text-gray-700 mb-4">
            결혼인성은 결혼을 앞둔 커플이 서로의 성격, 가치관, 생활 습관의 호환성을 
            확인할 수 있도록 도와주는 앱입니다. 간단한 설문을 통해 결혼 생활에 중요한 여러 
            측면의 인성을 평가하고, 잠재적인 차이점과 강점을 이해하는 데 도움을 줍니다.
          </p>
          <p className="text-gray-700">
            결혼 전 인성 확인은 미래의 갈등을 예방하고, 더 건강한 의사소통의 기반을 마련하는 데 
            중요한 역할을 합니다. 본 앱은 과학적 근거에 기반한 설문과 분석을 통해 객관적인 
            정보를 제공합니다.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-medium mb-3">평가 방법</h3>
          <p className="text-gray-700 mb-4">
            결혼인성 앱은 다음 5가지 핵심 영역을 평가합니다:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-blue-600">가족 중심:</strong> 가족과의 관계, 
              시간 분배, 가족 가치관에 대한 태도
            </li>
            <li>
              <strong className="text-blue-600">갈등 해결:</strong> 의견 충돌이나 
              문제 상황에서의 대처 방식
            </li>
            <li>
              <strong className="text-blue-600">재정 관리:</strong> 돈에 대한 태도, 
              저축과 소비 습관, 재정 계획
            </li>
            <li>
              <strong className="text-blue-600">의사소통:</strong> 감정 표현 방식, 
              의견 교환, 대화 스타일
            </li>
            <li>
              <strong className="text-blue-600">독립성:</strong> 개인 공간과 시간에 
              대한 필요성, 자율성의 중요도
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            각 질문에 대한 답변은 1-5점 척도로 평가되며, 이를 바탕으로 각 영역의 성향과 
            전체적인 호환성 점수를 계산합니다.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-medium mb-3">과학적 근거</h3>
          <p className="text-gray-700 mb-2">
            본 앱의 설문과 분석 시스템은 다음과 같은 과학적 연구와 심리학적 모델을 기반으로 합니다:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>성격 심리학 (Big Five 성격 특성 모델)</li>
            <li>결혼 만족도 연구</li>
            <li>커플 상호작용 및 의사소통 패턴 연구</li>
            <li>갈등 해결 이론</li>
          </ul>
          <p className="text-gray-700 mt-4">
            이러한 연구를 바탕으로 개발된 질문은 결혼 생활의 만족도와 안정성에 
            영향을 미치는 주요 요소를 평가합니다.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-medium mb-3">결과 활용 방법</h3>
          <p className="text-gray-700 mb-4">
            결혼인성 앱의 결과는 다음과 같이 활용할 수 있습니다:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              <strong>대화의 시작점:</strong> 결과를 파트너와 공유하고, 
              서로의 차이점과 공통점에 대해 대화를 시작하세요.
            </li>
            <li>
              <strong>잠재적 갈등 예방:</strong> 차이가 큰 영역을 미리 파악하여 
              향후 발생할 수 있는 갈등을 예방하세요.
            </li>
            <li>
              <strong>관계 강화:</strong> 제안된 개선점을 함께 실천하며 관계를 강화하세요.
            </li>
            <li>
              <strong>자기 인식 향상:</strong> 자신의 성향과 가치관을 더 깊이 이해하세요.
            </li>
          </ol>
          <p className="text-gray-700 mt-4 font-medium">
            중요: 본 앱의 결과는 참고용이며, 전문적인 상담을 대체할 수 없습니다. 
            심각한 관계 문제가 있다면 전문 상담사의 도움을 받으시기 바랍니다.
          </p>
        </section>
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