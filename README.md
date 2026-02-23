# 🍯 꿀한스푼

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](#-라이선스-license)

<br />
<div align="center">
  <img src="public/service-logo.png" alt="꿀한스푼 로고" width="200" />
  <br />

**🔗 [데모 페이지 바로가기](https://honey-starter-kit.netlify.app/)**

</div>

<br />
현대적인 개발 환경과 직관적인 개발 경험을 지향하는 **React 보일러플레이트**, 꿀한스푼입니다. 복잡한 설정의 쓴맛은 덜어내고, 제품 핵심 구현의 달콤함만 남겼습니다.

<br />

## 🚀 프로젝트 목적

> **"설정의 번거로움은 최소화하고, 제품 핵심 구현의 가치는 최대화합니다."**
>
> 본 프로젝트는 현대적인 프론트엔드 개발에 필요한 최적의 기술 스택을 통합하여 **초기 구축의 수고를 덜어주고**, **유연하고 확장 가능한 애플리케이션 개발을 위한 표준 가이드라인**을 제시합니다.
>
> 개발자가 복잡한 환경 설정 대신 핵심 로직 구현에만 집중할 수 있는 최상의 개발 경험을 제공하는 것이 목표입니다.

## ✨ 핵심 기능

- **실무형 모던 기술 스택**:
  - Zustand, Tailwind CSS, TanStack Router 등 실제 현업에서 가장 선호되는 도구들의 최적 조합.
- **즉각적인 개발 시작 (Zero-Config)**:
  - 개발 환경 설정의 번거로움은 덜어내고, 제품의 핵심 가치 구현에만 집중할 수 있습니다.
- **선언적 라우팅 & 상태 관리**:
  - TanStack Router와 Zustand를 활용한 직관적이고 유형 안전한 개발 경험.
- **모던 디자인 시스템**:
  - Tailwind CSS 4와 Shadcn UI를 결합한 빠르고 아름다운 UI 구축.
  - **'꿀한스푼'**만의 독창적이고 따뜻한 허니 톤 테마 적용.
- **반응형 레이아웃**:
  - 모바일, 태블릿, 데스크탑 등 모든 환경에 최적화된 유동적인 사이드바 및 오버레이 시스템.
- **품질 보증**:
  - ESLint, Prettier, Husky를 활용한 자동화된 코드 품질 관리 및 컨벤션 유지.
- **SEO 및 웹 앱 최적화**:
  - `react-helmet-async`를 활용한 페이지별 동적 메타 태그 및 기술 메타 데이터 주입.
  - **웹 앱 최적화**: `mobile-web-app-capable`, 테마 컬러 등 PWA 환경 최적화 반영.
  - **검색 효율 극대화**: `robots.txt`, `Canonical URL`, `notranslate` 설정을 통한 수집 정밀도 향상.

## 🛠 기술 스택

### 프론트엔드 코어

| 분류                 | 기술                                                                            |
| :------------------- | :------------------------------------------------------------------------------ |
| **Framework**        | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  |
| **Build Tool**       | [Vite 6](https://vitejs.dev/)                                                   |
| **Routing**          | [TanStack Router](https://tanstack.com/router)                                  |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/)                                        |
| **Data Fetching**    | [TanStack Query](https://tanstack.com/query) + [Axios](https://axios-http.com/) |

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
- **Package Manager**: [pnpm](https://pnpm.io/) 9.x 이상

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

👉 [자세히 보기](./LICENSE)

## 📞 연락처 (Contact)

- **Phone**: 010-2835-7421
- **Email**: sadkop00@gmail.com
