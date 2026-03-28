import { Skeleton } from "@/components/ui/skeleton"

export default function SettingsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 h-16" />

      <div className="flex flex-1">
        {/* Sidebar skeleton */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-card p-4 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full rounded-md" />
          ))}
        </aside>

        <main className="flex-1 p-6">
          {/* Breadcrumb skeleton */}
          <Skeleton className="h-4 w-32 mb-4" />

          <div className="space-y-6">
            {/* Page title */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-36" />
              <Skeleton className="h-4 w-72" />
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-28 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>

            {/* Form card */}
            <div className="rounded-xl border bg-card p-6 space-y-4">
              <Skeleton className="h-5 w-40" />
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-9 w-full rounded-md" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
