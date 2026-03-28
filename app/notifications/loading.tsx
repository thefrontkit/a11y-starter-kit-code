import { Skeleton } from "@/components/ui/skeleton"

export default function NotificationsLoading() {
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
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-4 w-80" />
            </div>

            {/* Card with demo sections */}
            <div className="rounded-xl border bg-card p-6 space-y-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-9 w-32 rounded-md" />
                  <div className="rounded-lg border p-4 space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                  {i < 3 && <Skeleton className="h-px w-full" />}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
