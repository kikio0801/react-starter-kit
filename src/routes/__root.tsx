import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Helmet>
        <title>꿀한스푼 - 달콤하고 견고한 React 보일러플레이트</title>
        <meta
          name="description"
          content="현대적인 개발 환경과 직관적인 개발 경험을 지향하는 React 보일러플레이트, 꿀한스푼입니다. 복잡한 설정의 쓴맛은 덜어내고, 제품 핵심 구현의 달콤함만 남겼습니다."
        />
        <meta
          name="keywords"
          content="꿀한스푼, honey-spoon, react boilerplate, vite, typescript, tailwindcss"
        />
        <meta name="author" content="꿀한스푼" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://honey-starter-kit.netlify.app/" />
      </Helmet>
      <Outlet />
    </>
  )
}
