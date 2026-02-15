# 🚀 React Project Starter

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](#-라이선스-license)

현대적인 개발 환경과 견고한 아키텍처를 지향하는 **React 보일러플레이트**입니다.

## 🚀 프로젝트 목적

> **"설정의 번거로움은 최소화하고, 비즈니스 가치는 최대화합니다."**
>
> 본 프로젝트는 현대적인 프론트엔드 개발에 필요한 최적의 기술 스택을 통합하여 **초기 구축의 수고를 덜어주고**, **엔터프라이즈급 애플리케이션 개발을 위한 견고하고 표준화된 가이드라인**을 제시합니다.
>
> 개발자가 복잡한 환경 설정 대신 핵심 로직 구현에만 집중할 수 있는 최상의 개발 경험을 제공하는 것이 목표입니다.

## ✨ 핵심 기능

- **유형 안전성 (Type Safety)**:
  - TypeScript 5와 Zod를 통한 완벽한 런타임 및 컴파일 타임 타입 검사.
- **최신 스택**:
  - React 19의 최신 기능과 Vite 6의 압도적인 빌드 속도 활용.
- **선언적 라우팅**:
  - TanStack Router를 이용한 유형 안전한 파일 기반 라우팅.
- **효율적인 데이터 관리**:
  - TanStack Query를 통한 선진적인 캐싱 및 상태 동기화.
- **모던 디자인 시스템**:
  - TailwindCSS 4와 Shadcn UI를 결합한 빠르고 아름다운 UI 구축.
- **품질 보증**:
  - ESLint, Prettier, Husky를 활용한 자동화된 코드 품질 관리 및 컨벤션 유지.

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

- **CSS Framework**: TailwindCSS 4
- **UI Components**: Shadcn UI (Radix UI 기반)
- **Icons**: Lucide React
- **Toast**: Sonner

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
├── features/             # 도메인 기반의 기능별 모듈 가이드
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

## 📞 연락처 (Contact)

- **Phone**: 010-2835-7421
- **Email**: sadkop00@gmail.com

## 📄 라이선스 (License)

Copyright (c) 2026 **Yoon SangHwan** All Rights Reserved.

### ⚠️ 저작권 및 이용 안내

본 프로젝트의 `package.json`에 명시된 `"license": "UNLICENSED"`는 별도의 오픈소스 라이선스가 부여되지 않았음을 의미합니다. 이는 라이선스가 없어 자유롭게 이용 가능하다는 뜻이 아니라, **해당 소프트웨어에 대한 모든 권리가 저작권자에게 귀속되어 있음**을 나타냅니다.

- **무단 복제 및 배포 금지**: 저작권자의 서면 동의 없이 본 코드의 전체 또는 일부를 무단으로 복제, 배포, 수정하는 행위는 엄격히 금지됩니다.
- **학습 목적의 참조**: 교육 및 학습 목적의 단순 코드 참조는 환영하나, 이를 활용한 상업적 이용이나 2차 저작물 생성은 불가능합니다.
- **이용 문의**: 상업적 활용 또는 프로젝트 협업에 관한 문의는 아래의 연락처를 통해 협의해 주시기 바랍니다.

> **Note**: 본 프로젝트는 저작권법의 보호를 받는 독자적인 저작물이며, 무단 사용 시 법적 책임을 물을 수 있습니다.
