import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { ActivityItem } from "@/types"

interface ActivityFeedProps {
  items: ActivityItem[]
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4" aria-label="Recent activity">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {item.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{item.user}</span>{" "}
                  {item.action}{" "}
                  <span className="font-medium">{item.target}</span>
                </p>
                <time className="text-xs text-muted-foreground" dateTime="">
                  {item.timestamp}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
