import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/_authenticated/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 px-4 py-8 md:max-w-none md:p-0">
      <div className="animate-fade-in text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-[#c4a46d]">새로운 프로젝트의 시작</span> ✨
        </h1>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          설정의 번거로움은 최소화하고, 구현의 가치는 최대화합니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              🧱 견고한 아키텍처
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">
              `src/features` 기반의 모듈화된 구조로 대규모 앱으로의 확장을
              고려했습니다. 관심사를 분리하고 유지보수성을 높여보세요.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-2 border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              ⚡ 초고속 빌드 엔진
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-foreground/90 space-y-2 text-sm leading-relaxed">
              Vite 6와 React 19를 탑재하여 즉각적인 HMR과 압도적인 빌드 속도를
              제공합니다. 개발 흐름이 끊기지 않는 경험을 즐기세요.
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-3 border-border shadow-sm md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              🛡️ 강력한 가드레일
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">
              TypeScript 5, ESLint, Prettier, 그리고 Husky가 결합되어 항상
              깨끗하고 유형 안전한 코드를 유지하도록 돕습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
