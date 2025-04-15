import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">개인정보 보호정책</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">1. 수집하는 정보</h3>
          <p className="text-gray-700 mb-2">
            결혼인성 앱은 다음과 같은 제한된 정보만을 수집합니다:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>설문 응답 데이터</li>
            <li>사용 통계 (페이지 방문, 앱 사용 시간)</li>
          </ul>
          <p className="text-gray-700 mt-2">
            <strong>중요:</strong> 귀하의 모든 설문 응답은 오직 귀하의 기기에만 로컬로 저장되며, 
            당사 서버로 전송되지 않습니다.
          </p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">2. 정보 사용 방법</h3>
          <p className="text-gray-700 mb-2">
            수집된 정보는 다음과 같은 목적으로만 사용됩니다:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>결혼 호환성 및 인성 평가 결과 제공</li>
            <li>앱 기능 개선</li>
            <li>사용자 경험 향상</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">3. 정보 보호</h3>
          <p className="text-gray-700">
            귀하의 설문 응답은 로컬 스토리지(localStorage)에 저장되며, 이는 귀하의 기기에만 
            저장됩니다. 당사는 이 데이터에 접근할 수 없으며, 어떠한 제3자와도 공유하지 않습니다.
            앱 사용 통계는 익명화되어 수집됩니다.
          </p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">4. 쿠키 사용</h3>
          <p className="text-gray-700">
            본 앱은 필수적인 쿠키만을 사용하여 앱의 기본 기능을 제공합니다. 
            분석용 쿠키는 앱 개선을 위해 익명화된 데이터를 수집할 수 있으며, 
            이는 언제든지 브라우저 설정에서 비활성화할 수 있습니다.
          </p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">5. 데이터 삭제 요청</h3>
          <p className="text-gray-700">
            로컬 스토리지에 저장된 데이터는 브라우저 설정에서 직접 삭제할 수 있습니다. 
            추가적인 데이터 삭제 요청은 아래 이메일로 문의해주세요.
          </p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium mb-3">6. 연락처</h3>
          <p className="text-gray-700">
            개인정보 보호정책과 관련하여 문의사항이 있으시면, 다음 이메일로 연락주시기 바랍니다: 
            <a href="mailto:privacy@gyeolhoninseong.kr" className="text-blue-600 hover:underline">
              privacy@gyeolhoninseong.kr
            </a>
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-medium mb-3">7. 정책 변경</h3>
          <p className="text-gray-700">
            본 개인정보 보호정책은 필요에 따라 업데이트될 수 있습니다. 
            변경사항은 이 페이지에 게시되며, 중요한 변경이 있을 경우 앱 내 알림을 통해 공지됩니다.
          </p>
          <p className="text-gray-700 mt-2">
            마지막 업데이트: 2024년 5월
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