export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "viewer"
  status: "active" | "inactive"
  lastActive: string
  avatar?: string
}

export interface StatsCard {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: string
}

export interface ActivityItem {
  id: string
  user: string
  action: string
  target: string
  timestamp: string
}

export interface NavItem {
  title: string
  href: string
  icon: string
  badge?: string
}

export interface NotificationPreference {
  id: string
  title: string
  description: string
  enabled: boolean
}
