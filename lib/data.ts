import type { User, StatsCard, ActivityItem, NavItem, NotificationPreference } from "@/types"

export const users: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "admin", status: "active", lastActive: "2 min ago" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "editor", status: "active", lastActive: "5 min ago" },
  { id: "3", name: "Carol Williams", email: "carol@example.com", role: "viewer", status: "inactive", lastActive: "2 hours ago" },
  { id: "4", name: "David Brown", email: "david@example.com", role: "editor", status: "active", lastActive: "10 min ago" },
  { id: "5", name: "Eva Martinez", email: "eva@example.com", role: "admin", status: "active", lastActive: "1 hour ago" },
  { id: "6", name: "Frank Lee", email: "frank@example.com", role: "viewer", status: "active", lastActive: "30 min ago" },
  { id: "7", name: "Grace Kim", email: "grace@example.com", role: "editor", status: "inactive", lastActive: "3 hours ago" },
  { id: "8", name: "Henry Chen", email: "henry@example.com", role: "viewer", status: "active", lastActive: "15 min ago" },
  { id: "9", name: "Ivy Patel", email: "ivy@example.com", role: "admin", status: "active", lastActive: "Just now" },
  { id: "10", name: "Jack Wilson", email: "jack@example.com", role: "editor", status: "active", lastActive: "45 min ago" },
  { id: "11", name: "Karen Davis", email: "karen@example.com", role: "viewer", status: "inactive", lastActive: "1 day ago" },
  { id: "12", name: "Leo Garcia", email: "leo@example.com", role: "editor", status: "active", lastActive: "20 min ago" },
]

export const statsCards: StatsCard[] = [
  { title: "Total Users", value: "2,847", change: "+12.5%", changeType: "positive", icon: "users" },
  { title: "Active Sessions", value: "1,234", change: "+8.2%", changeType: "positive", icon: "activity" },
  { title: "Bounce Rate", value: "24.3%", change: "-3.1%", changeType: "positive", icon: "trending-down" },
  { title: "Avg. Duration", value: "4m 32s", change: "-0.8%", changeType: "negative", icon: "clock" },
]

export const activityItems: ActivityItem[] = [
  { id: "1", user: "Alice Johnson", action: "updated", target: "User Permissions", timestamp: "2 minutes ago" },
  { id: "2", user: "Bob Smith", action: "created", target: "New Dashboard Widget", timestamp: "15 minutes ago" },
  { id: "3", user: "Carol Williams", action: "deleted", target: "Archived Report Q3", timestamp: "1 hour ago" },
  { id: "4", user: "David Brown", action: "commented on", target: "Project Roadmap", timestamp: "2 hours ago" },
  { id: "5", user: "Eva Martinez", action: "deployed", target: "Production Build v2.1", timestamp: "3 hours ago" },
]

export const sidebarNavItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: "layout-dashboard" },
  { title: "Data Table", href: "/data-table", icon: "table-2" },
  { title: "Settings", href: "/settings", icon: "settings" },
  { title: "Notifications", href: "/notifications", icon: "bell" },
]

export const notificationPreferences: NotificationPreference[] = [
  { id: "email-marketing", title: "Marketing emails", description: "Receive emails about new products, features, and more.", enabled: false },
  { id: "email-security", title: "Security emails", description: "Receive emails about your account security.", enabled: true },
  { id: "push-everything", title: "Everything", description: "Push notifications for all activity.", enabled: false },
  { id: "push-mentions", title: "Mentions only", description: "Push notifications only when someone mentions you.", enabled: true },
  { id: "push-nothing", title: "Nothing", description: "No push notifications.", enabled: false },
]
