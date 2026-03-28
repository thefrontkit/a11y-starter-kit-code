import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Sidebar } from "@/components/layout/sidebar"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { statsCards, activityItems } from "@/lib/data"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Accessible dashboard demonstrating skip links, ARIA landmarks, and keyboard navigation.",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main id="main-content" className="flex-1 p-6 animate-page-enter">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Dashboard" },
            ]}
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight leading-tight">Dashboard</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Overview of your application metrics.
              </p>
            </div>

            <section aria-labelledby="stats-heading">
              <h2 id="stats-heading" className="sr-only">
                Statistics
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {statsCards.map((stat) => (
                  <StatsCard key={stat.title} stat={stat} />
                ))}
              </div>
            </section>

            <section aria-labelledby="activity-heading">
              <h2 id="activity-heading" className="sr-only">
                Recent Activity
              </h2>
              <ActivityFeed items={activityItems} />
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
