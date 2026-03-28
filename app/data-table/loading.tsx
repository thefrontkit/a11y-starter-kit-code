import { Skeleton } from "@/components/ui/skeleton"

export default function DataTableLoading() {
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
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-64" />
            </div>

            {/* Toolbar */}
            <div className="flex gap-4">
              <Skeleton className="h-9 flex-1 max-w-sm" />
              <Skeleton className="h-9 w-[150px]" />
            </div>

            {/* Table */}
            <div className="rounded-md border">
              {/* Header row */}
              <div className="border-b p-2 flex items-center gap-4">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
              {/* Body rows */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="border-b p-2 flex items-center gap-4">
                  <Skeleton className="h-4 w-4" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-36" />
                    </div>
                  </div>
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-14 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-40" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
