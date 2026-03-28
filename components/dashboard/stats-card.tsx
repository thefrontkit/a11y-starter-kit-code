import { Users, Activity, TrendingDown, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { StatsCard as StatsCardType } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  activity: Activity,
  "trending-down": TrendingDown,
  clock: Clock,
}

interface StatsCardProps {
  stat: StatsCardType
}

export function StatsCard({ stat }: StatsCardProps) {
  const Icon = iconMap[stat.icon] || Activity

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat.value}</div>
        <p
          className={`text-xs font-medium ${
            stat.changeType === "positive"
              ? "text-green-700 dark:text-green-400"
              : stat.changeType === "negative"
                ? "text-red-700 dark:text-red-400"
                : "text-muted-foreground"
          }`}
        >
          {stat.change} from last month
        </p>
      </CardContent>
    </Card>
  )
}
