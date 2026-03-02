# 🍯 꿀한스푼

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](#-라이선스-license)

<br />
<div align="center">
  <img src="public/service-logo.png" alt="꿀한스푼 로고" width="200" />
  <br />

**🔗 [데모 페이지 바로가기](https://charming-quokka-b95a3a.netlify.app/)**

</div>

## 🚀 프로젝트 목적

현대적인 개발 환경과 직관적인 개발 경험을 지향하는 **React 보일러플레이트**로, 설정의 번거로움은 최소화하고 제품 핵심 구현의 가치는 최대화합니다.

- **초기 구축 가속화**: 현대적인 프론트엔드 개발에 필요한 최적의 기술 스택을 통합하여 프로젝트 시작 단계를 단축합니다.
- **표준 가이드라인 제시**: 유연하고 확장 가능한 애플리케이션 개발을 위한 일관된 코드 품질과 구조를 지향합니다.
- **개발 경험(DX) 최우선**: 복잡한 환경 설정 대신 제품의 핵심 로직 구현에만 집중할 수 있는 최상의 환경을 제공합니다.

## ✨ 핵심 기능

- **실무형 모던 기술 스택**: Zustand, Tailwind 4, TanStack Router 등 최적 조합
- **Zero-Config**: 설정의 수고 없이 즉시 시작하는 개발 환경
- **Type-safe 개발**: 선언적 라우팅 및 직관적인 전역 상태 관리
- **허니 톤 디자인**: Shadcn UI 기반의 독창적이고 아름다운 UI
- **반응형 프레임워크**: 기기별 최적화된 유동적 레이아웃 시스템
- **품질 관리**: Lint, Formatting, Git Hooks 자동화
- **SEO & PWA**: 동적 메타 태그 및 웹 앱 최적화 가이드 적용

👉 [핵심 기능 상세 보기](./document/features.md)

## 🛠 기술 스택

### 프론트엔드 코어

| 분류                 | 기술                   |
| :------------------- | :--------------------- |
| **Core Stack**       | React 19 + TypeScript  |
| **Build Tool**       | Vite 6                 |
| **Routing**          | TanStack Router        |
| **State Management** | Zustand                |
| **Data Fetching**    | TanStack Query + Axios |

### UI & Styling

- **CSS Framework**: Tailwind CSS 4
- **UI Components**: Shadcn UI (Radix UI 기반)
- **Icons**: Lucide React
- **Toast**: Sonner

### 🎨 타이포그래피 (Typography)

본 프로젝트는 **'A2z' (에이투지체)** 폰트를 기본 서체로 사용합니다. <br/> 👉 [자세히 보기](./document/typography.md)

### 가드레일 (Lint & Tooling)

- **Validation**: Zod
- **Form**: React Hook Form
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged

## 📂 프로젝트 구조

```text
document/                 # 상세 기술 문서
src/
├── components/           # 재사용 가능한 공용 컴포넌트
│   ├── ui/               # Shadcn UI 기본 아토믹 컴포넌트
│   └── layout/           # 애플리케이션 프레임워크 (Sidebar, Header 등)
├── features/             # (선택 사항) 도메인 기반의 기능별 모듈 가이드
├── hooks/                # 전역에서 사용되는 커스텀 React 훅
├── lib/                  # 외부 라이브러리 설정 (axios, queryClient 등)
├── routes/               # 페이지 및 라우트 정의 (TanStack Router 기반)
├── stores/               # 전역 상태 관리를 위한 Zustand 스토어
└── styles/               # 전역 CSS 변수 및 스타일 정의
```

## 🚀 시작하기

### 사전 요구사항

- **Node.js**: 20.x 이상
- **Package Manager**: pnpm 9.x 이상

### 설치 및 로컬 개발

```bash
# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.example .env

# 개발 서버 실행
pnpm dev
```

## 📄 라이선스 (License)

Copyright (c) 2026 **Yoon SangHwan** All Rights Reserved.

### ⚠️ 저작권 및 이용 안내

👉 [자세히 보기](./document/license.md)

## 📞 연락처 (Contact)

- **Phone**: 010-2835-7421
- **Email**: sadkop00@gmail.com
