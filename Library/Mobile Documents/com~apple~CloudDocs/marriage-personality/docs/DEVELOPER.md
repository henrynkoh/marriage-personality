# 결혼인성 개발자 가이드 (Developer Guide)

이 문서는 결혼인성 앱의 개발자를 위한 기술 문서입니다. 앱의 구조, 주요 기능, 확장 방법 등을 설명합니다.

## 목차 (Table of Contents)

1. [기술 스택 (Tech Stack)](#기술-스택-tech-stack)
2. [프로젝트 구조 (Project Structure)](#프로젝트-구조-project-structure)
3. [설치 및 실행 (Installation and Running)](#설치-및-실행-installation-and-running)
4. [주요 컴포넌트 (Key Components)](#주요-컴포넌트-key-components)
5. [데이터 모델 (Data Models)](#데이터-모델-data-models)
6. [상태 관리 (State Management)](#상태-관리-state-management)
7. [오프라인 기능 (Offline Functionality)](#오프라인-기능-offline-functionality)
8. [다국어 지원 (Internationalization)](#다국어-지원-internationalization)
9. [테스트 (Testing)](#테스트-testing)
10. [배포 (Deployment)](#배포-deployment)
11. [확장 가이드 (Extension Guide)](#확장-가이드-extension-guide)

## 기술 스택 (Tech Stack)

결혼인성 앱은 다음 기술을 사용합니다:

- **프론트엔드 프레임워크**: Next.js 15.3.0 (App Router)
- **UI 라이브러리**: React 18
- **스타일링**: Tailwind CSS
- **언어**: TypeScript
- **상태 관리**: React Hooks (useState, useEffect)
- **오프라인 지원**: PWA (Progressive Web App)
- **차트 및 데이터 시각화**: Chart.js
- **패키지 관리**: npm
- **빌드 도구**: Turbopack

## 프로젝트 구조 (Project Structure)

```
marriage-personality/
├── docs/                 # 문서
├── public/               # 정적 파일
│   ├── images/          # 이미지
│   ├── icon-192x192.png # PWA 아이콘
│   ├── icon-512x512.png # PWA 아이콘
│   └── manifest.json    # PWA 매니페스트
├── src/                  # 소스 코드
│   ├── app/             # 앱 라우터 페이지
│   │   ├── about/       # 소개 페이지
│   │   ├── faq/         # 자주 묻는 질문 페이지
│   │   ├── privacy/     # 개인정보 보호 페이지
│   │   ├── quiz/        # 퀴즈 페이지
│   │   ├── results/     # 결과 페이지
│   │   ├── layout.tsx   # 루트 레이아웃
│   │   └── page.tsx     # 홈 페이지
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── PersonalityResults.tsx # 인성 결과 컴포넌트
│   │   ├── PersonalityTips.tsx    # 인성 팁 컴포넌트
│   │   ├── ProgressBar.tsx        # 진행 바 컴포넌트
│   │   ├── Quiz.tsx               # 퀴즈 컴포넌트
│   │   ├── Results.tsx            # 결과 컴포넌트
│   │   └── ShareResults.tsx       # 결과 공유 컴포넌트
│   └── lib/             # 유틸리티 및 헬퍼 함수
│       └── types.ts     # 타입 정의
├── .gitignore           # Git 무시 파일
├── next.config.js       # Next.js 설정
├── package.json         # 패키지 설정
├── postcss.config.mjs   # PostCSS 설정
├── README.md            # 프로젝트 README
├── tailwind.config.js   # Tailwind CSS 설정
└── tsconfig.json        # TypeScript 설정
```

## 설치 및 실행 (Installation and Running)

### 사전 요구 사항 (Prerequisites)

- Node.js 18.17.0 이상
- npm 9.6.7 이상

### 설치 (Installation)

1. 저장소 클론:
   ```bash
   git clone https://github.com/henrynkoh/marriage-personality.git
   cd marriage-personality
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

### 개발 서버 실행 (Running Development Server)

```bash
npm run dev
```

브라우저에서 http://localhost:3000 을 열어 앱을 확인하세요.

### 프로덕션 빌드 (Production Build)

```bash
npm run build
npm start
```

## 주요 컴포넌트 (Key Components)

### Quiz.tsx

퀴즈 컴포넌트는 사용자의 답변을 수집하고 결과 페이지로 리디렉션합니다.

주요 기능:
- 질문 렌더링
- 사용자 답변 저장
- 진행 상태 표시
- 오프라인 모드 감지

### Results.tsx

사용자의 답변을 처리하고 호환성 점수와 세부 결과를 표시합니다.

주요 기능:
- 답변 분석
- 호환성 점수 계산
- 차트 렌더링
- 결과 저장 및 공유

### PersonalityResults.tsx

빅 파이브 성격 특성 분석 결과를 표시합니다.

주요 기능:
- 성격 특성 점수 표시
- 특성별 상세 설명
- 관계에 대한 의미 분석

### PersonalityTips.tsx

사용자의 결과에 기반한 관계 개선 팁을 제공합니다.

주요 기능:
- 카테고리별 팁 분류
- 실용적인 조언 제공
- 카테고리 간 전환 인터페이스

## 데이터 모델 (Data Models)

### Question

```typescript
export interface Question {
  id: number;
  text: string;
  options: { value: number; label: string }[];
}
```

### PersonalityResult

```typescript
export interface PersonalityResult {
  trait: string;
  score: number;
  description: string;
  suggestion: string;
}
```

### Tip

```typescript
interface Tip {
  category: string;
  title: string;
  content: string[];
}
```

### PersonalityTrait

```typescript
interface PersonalityTrait {
  trait: string;
  score: number;
  description: string;
}
```

## 상태 관리 (State Management)

앱은 주로 React Hooks를 사용하여 상태를 관리합니다:

- **로컬 상태**: `useState` 훅을 사용하여 컴포넌트 내 상태 관리
- **부수 효과**: `useEffect` 훅을 사용하여 데이터 로딩 및 저장
- **지속성**: `localStorage`를 사용하여 사용자 데이터 유지

예제 코드:
```typescript
// Quiz.tsx에서 답변 상태 관리
const [answers, setAnswers] = useState<number[]>([]);

// LocalStorage에 답변 저장
useEffect(() => {
  const saved = localStorage.getItem("quizAnswers");
  if (saved) setAnswers(JSON.parse(saved));
}, []);

const handleAnswer = (value: number) => {
  const newAnswers = [...answers];
  newAnswers[currentQuestion] = value;
  setAnswers(newAnswers);
  localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
  // ...
};
```

## 오프라인 기능 (Offline Functionality)

앱은 PWA(Progressive Web App) 기능을 사용하여 오프라인 지원을 제공합니다:

- **Service Worker**: 앱 자산 캐싱
- **Manifest.json**: 앱 설치 속성 정의
- **오프라인 감지**: `navigator.onLine` 상태 모니터링
- **로컬 데이터 저장**: `localStorage`를 사용한 사용자 데이터 유지

PWA 설정 (next.config.js):
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
```

## 다국어 지원 (Internationalization)

현재 앱은 한국어와 영어를 지원합니다. 다국어 지원을 위해 다음 구조를 사용합니다:

- 인터페이스 텍스트는 컴포넌트 내에 하드코딩되어 있음
- 추후 업데이트에서 `next-intl`이나 `react-i18next`와 같은 라이브러리를 통합할 계획

## 테스트 (Testing)

테스트 프레임워크는 아직 통합되지 않았습니다. 추후 다음 도구를 추가할 계획입니다:

- **단위 테스트**: Jest + React Testing Library
- **컴포넌트 테스트**: Storybook
- **E2E 테스트**: Cypress

## 배포 (Deployment)

앱은 다음 플랫폼에 배포할 수 있습니다:

- **Vercel**: Next.js 앱을 위한 최적의 플랫폼
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify**: 정적 사이트 호스팅
  ```bash
  npm i -g netlify-cli
  netlify deploy
  ```

- **Docker**: 컨테이너화된 배포
  ```dockerfile
  FROM node:18-alpine
  WORKDIR /app
  COPY . .
  RUN npm install
  RUN npm run build
  CMD ["npm", "start"]
  ```

## 확장 가이드 (Extension Guide)

### 새 질문 추가하기

1. `src/components/Quiz.tsx` 파일의 `questions` 배열에 새 질문 객체 추가:
   ```typescript
   {
     id: 6,
     text: "새로운 질문 내용",
     options: [
       { value: 1, label: "옵션 1" },
       { value: 2, label: "옵션 2" },
       // ...
     ],
   }
   ```

2. 필요한 경우 `src/components/Results.tsx`의 결과 처리 로직 업데이트

### 새 카테고리 추가하기

`src/components/PersonalityTips.tsx` 파일의 `tips` 객체에 새 카테고리 추가:
```typescript
newCategory: {
  category: "새 카테고리",
  title: "새 카테고리 제목",
  content: [
    "1. 첫 번째 팁",
    "2. 두 번째 팁",
    // ...
  ]
}
```

### UI 테마 변경하기

Tailwind 설정 파일(`tailwind.config.js`)에서 테마 색상을 수정하세요:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#3b82f6', // 기본 파란색
        dark: '#2563eb',    // 어두운 파란색
        light: '#93c5fd',   // 밝은 파란색
      },
      // 기타 색상...
    },
  },
},
```

---

## 기여 (Contributing)

기여를 환영합니다! 풀 리퀘스트를 보내기 전에 다음 사항을 확인하세요:

1. 코드 스타일 가이드라인 준수
2. 기존 테스트 통과 확인
3. 새로운 기능에 대한 테스트 추가
4. 문서 업데이트

## 라이선스 (License)

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 