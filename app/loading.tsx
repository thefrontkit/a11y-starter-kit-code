import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 h-16" />

      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="mx-auto max-w-3xl space-y-6 flex flex-col items-center">
            <Skeleton className="h-6 w-48 rounded-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-6 w-1/2" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-11 w-40 rounded-lg" />
              <Skeleton className="h-11 w-40 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-64 mx-auto mb-12" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl border bg-card p-6 space-y-3">
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo pages section */}
        <section className="container mx-auto px-4 py-16">
          <Skeleton className="h-8 w-48 mx-auto mb-12" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <Skeleton className="h-5 w-28" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
                <Skeleton className="h-8 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
