"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Table2, Settings, Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/data-table", label: "Data Table", icon: Table2 },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/notifications", label: "Notifications", icon: Bell },
]

export function Sidebar() {
  const pathname = usePathname()
  const { containerRef, handleKeyDown } = useKeyboardNavigation({
    orientation: "vertical",
    itemSelector: "a",
  })

  return (
    <aside
      className="hidden md:flex w-64 flex-col border-r bg-card"
      aria-label="Main navigation"
    >
      <nav className="flex-1 py-4">
        <ul
          ref={containerRef as React.RefObject<HTMLUListElement>}
          onKeyDown={handleKeyDown}
          role="menubar"
          aria-orientation="vertical"
          className="flex flex-col gap-1 px-3"
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 touch-target focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
