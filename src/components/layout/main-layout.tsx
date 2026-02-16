import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores'
import { Header } from './header'
import { Sidebar } from './sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isOpen, isCollapsed, setOpen } = useSidebarStore()

  return (
    <div className="relative min-h-screen">
      <div
        className={cn(
          'flex min-h-screen flex-col transition-all duration-300',
          isCollapsed ? 'lg:pl-16' : 'lg:pl-64'
        )}
      >
        <Header />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>

      {/* Sidebar Overlay - Only visible on mobile/tablet when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-90 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <Sidebar />
    </div>
  )
}
