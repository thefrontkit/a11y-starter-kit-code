"use client"

interface LiveRegionProps {
  message: string
  politeness?: "polite" | "assertive"
  className?: string
}

export function LiveRegion({
  message,
  politeness = "polite",
  className,
}: LiveRegionProps) {
  return (
    <div
      aria-live={politeness}
      aria-atomic="true"
      role={politeness === "assertive" ? "alert" : "status"}
      className={className ?? "sr-only"}
    >
      {message}
    </div>
  )
}
