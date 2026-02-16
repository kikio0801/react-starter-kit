import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from 'recharts'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: DashboardPage,
})

const activityData = [
  { name: '월', active: 4000, passive: 2400 },
  { name: '화', active: 3000, passive: 1398 },
  { name: '수', active: 2000, passive: 9800 },
  { name: '목', active: 2780, passive: 3908 },
  { name: '금', active: 1890, passive: 4800 },
  { name: '토', active: 2390, passive: 3800 },
  { name: '일', active: 3490, passive: 4300 },
]

const categoryData = [
  { name: '직접 접속', value: 400, color: '#f0c419' },
  { name: '관련 검색', value: 300, color: '#c9b084' },
  { name: '소셜 미디어', value: 300, color: '#5D4037' },
  { name: '이메일/기타', value: 200, color: '#fff5cc' },
]

function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 md:p-6">
      <div className="animate-fade-in text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-[#c4a46d]">대시보드</span> 📊
        </h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">
          프로젝트의 주요 지표와 현황을 한눈에 확인하세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              전체 방문자
            </CardTitle>
            <span className="text-xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#5D4037]">12,840</div>
            <p className="mt-1 text-xs font-medium text-green-600">
              +12% 전월 대비
            </p>
          </CardContent>
        </Card>
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              활성 사용자
            </CardTitle>
            <span className="text-xl">🔥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#5D4037]">2,450</div>
            <p className="mt-1 text-xs font-medium text-green-600">
              +5% 전주 대비
            </p>
          </CardContent>
        </Card>
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              전환율
            </CardTitle>
            <span className="text-xl">💎</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#5D4037]">18.5%</div>
            <p className="mt-1 text-xs font-medium text-green-600">
              +2.4% 전월 대비
            </p>
          </CardContent>
        </Card>
        <Card className="animate-fade-in-delay-1 border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              평균 체류 시간
            </CardTitle>
            <span className="text-xl">🕒</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#5D4037]">4m 32s</div>
            <p className="mt-1 text-xs font-medium text-amber-500">
              -2% 전일 대비
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="animate-fade-in-delay-2 border-border shadow-sm lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">활동 추이</CardTitle>
            <CardDescription>최근 7일간의 활성 및 비활성 추세</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={activityData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f0c419" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f0c419" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#8c7b6d', fontSize: 12 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #c9b084',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="active"
                  name="활성 사용자"
                  stroke="#f0c419"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorActive)"
                  animationDuration={1500}
                />
                <Area
                  type="monotone"
                  dataKey="passive"
                  name="비활성 사용자"
                  stroke="#c9b084"
                  strokeWidth={2}
                  fillOpacity={0.1}
                  fill="#c9b084"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-2 border-border shadow-sm lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg text-[#5D4037]">방문 경로</CardTitle>
            <CardDescription>유입 출처별 가중치</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#E5E7EB"
                />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#4a3b2a', fontSize: 12, fontWeight: 500 }}
                />
                <Tooltip
                  cursor={{ fill: '#f7f2e8' }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid #c9b084',
                  }}
                />
                <Bar
                  dataKey="value"
                  name="방문자 수"
                  radius={[0, 4, 4, 0]}
                  animationDuration={1500}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
