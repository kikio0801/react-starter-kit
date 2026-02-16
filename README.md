# 🚀 React Project Starter

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](#-라이선스-license)

현대적인 개발 환경과 직관적인 개발 경험을 지향하는 **React 보일러플레이트**인 꿀한스푼입니다.

## 🚀 프로젝트 목적

> **"설정의 번거로움은 최소화하고, 비즈니스 가치는 최대화합니다."**
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

본 프로젝트는 **'A2z' (에이투지체)** 폰트를 기본 서체로 사용합니다.

- **Licensing**: 상업적 이용이 가능한 무료 폰트입니다. (출처: [눈누 A2z](https://noonnu.cc/font_page/1778))
- **Design Philosophy**: 한글은 현대적이고 도회적인 인상의 **A2z**를, 영문과 숫자는 기하학적 산세리프 서체인 **Outfit**을 사용하여 완벽한 조화를 이룹니다.
  > **Note**: A2z 폰트는 Outfit 폰트를 기반으로 설계되었으며, 두 서체를 혼용해도 이질감 없이 하나의 서체처럼 자연스러운 시각적 흐름을 제공합니다.
- **Switching**: `src/styles/globals.css` 파일에서 주석을 해제하여 **Pretendard**로 손쉽게 전환할 수 있습니다.

```css
/* src/styles/globals.css - :root 블록에서 --root-font-sans 변수를 수정하여 폰트를 전환하세요 */
:root {
  --root-font-sans: 'A2z', 'Pretendard', sans-serif; /* 기본 서체 (Default) */
  /* --root-font-sans: 'Pretendard', sans-serif; */ /* 주석 해제 시 프리텐다드로 전환 */
}
```

> [!TIP]
> **폰트 전환 방법**: `src/styles/globals.css` 파일의 `:root` 블록 내에 정의된 `--root-font-sans` 변수에서 원하는 설정의 주석을 해제하거나 수정하여 프로젝트 전체의 폰트를 손쉽게 변경할 수 있습니다. `@theme` 블록은 이 변수를 참조하여 시스템 서체를 결정합니다.

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

본 프로젝트의 `package.json`에 명시된 `"license": "UNLICENSED"`는 별도의 오픈소스 라이선스가 부여되지 않았음을 의미합니다. 이는 라이선스가 없어 자유롭게 이용 가능하다는 뜻이 아니라, **해당 소프트웨어에 대한 모든 권리가 저작권자에게 귀속되어 있음**을 나타냅니다.

- **무단 복제 및 배포 금지**: 저작권자의 서면 동의 없이 본 코드의 전체 또는 일부를 무단으로 복제, 배포, 수정하는 행위는 엄격히 금지됩니다.
- **브랜드 자산 보호**: 서비스 명칭인 **'꿀한스푼'** 및 관련 **로고(이미지, 아이콘)** 는 저작권자의 독자적인 브랜드 자산입니다. 소스 코드의 이용 여부와 관계없이 서비스 명칭 및 로고의 무단 도용, 복제, 배포 및 유사 명칭 사용은 엄격히 금지됩니다.
- **학습 목적의 참조**: 교육 및 학습 목적의 단순 코드 참조는 환영하나, 이를 활용한 상업적 이용이나 2차 저작물 생성은 불가능합니다.
- **이용 문의**: 상업적 활용 또는 프로젝트 협업에 관한 문의는 아래의 연락처를 통해 협의해 주시기 바랍니다.

> **Note**: 본 프로젝트는 저작권법 및 브랜드 보호 규정의 지원을 받는 독자적인 저작물이며, 무단 사용 시 법적 책임을 물을 수 있습니다.

## 📞 연락처 (Contact)

- **Phone**: 010-2835-7421
- **Email**: sadkop00@gmail.com
