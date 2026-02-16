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
          <span className="text-[#c4a46d]">꿀한스푼</span> 🍯
        </h1>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          달콤하고 견고한 프로젝트의 시작을 함께합니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              🎨 감각적인 테마 & 레이아웃
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">
              따뜻한 허니 톤의 커스텀 테마와 함께, 모바일·태블릿·데스크탑 모든
              환경에 최적화된 사이드바 및 레이아웃을 제공합니다.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-2 border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              🛠️ 실무형 모던 기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">
              Tailwind CSS, Zustand, TanStack Router 등 실제 현업에서 사용되는
              검증된 기술들을 최적의 조합으로 구성했습니다.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-3 border-border shadow-sm md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">
              ✨ 즉각적인 개발 시작
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">
              개발 환경 설정의 번거로움은 덜어내고, 제품의 핵심 가치 구현에만
              집중할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
