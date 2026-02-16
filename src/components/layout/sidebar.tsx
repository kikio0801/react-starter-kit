import { ChartColumn, Home } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores'

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { title: '홈', href: '/', icon: Home },
  { title: '대시보드', href: '/dashboard', icon: ChartColumn },
]

export function Sidebar() {
  const { isOpen, isCollapsed } = useSidebarStore()
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-100 flex flex-col transition-all duration-300',
        'bg-background border-r-4',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        isCollapsed ? 'w-16' : 'w-64',
        'lg:translate-x-0'
      )}
      style={{ borderColor: 'rgba(201, 176, 132, 0.4)' }}
    >
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-3 font-bold">
          <img
            src="/service-logo.png"
            alt="Logo"
            className="h-14 w-14 object-contain"
          />
          {!isCollapsed && (
            <span className="text-xl tracking-tight text-[#744638]">
              꿀한스푼
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.href
            return (
              <Button
                key={item.href}
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'group relative justify-start transition-all duration-200',
                  isCollapsed && 'justify-center px-2',
                  isActive && 'font-medium shadow-sm'
                )}
                asChild
              >
                <Link to={item.href}>
                  <item.icon
                    className={cn(
                      'h-4 w-4 transition-transform duration-200 group-hover:scale-110',
                      !isCollapsed && 'mr-2',
                      isActive && 'text-[#c4a46d]'
                    )}
                  />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              </Button>
            )
          })}
        </nav>
      </ScrollArea>
    </aside>
  )
}
