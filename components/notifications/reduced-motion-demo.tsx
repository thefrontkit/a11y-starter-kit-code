"use client"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export function ReducedMotionDemo() {
  const prefersReducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, prefersReducedMotion ? 10 : 50)

    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Reduced Motion</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        This demo respects the <code>prefers-reduced-motion</code> media query.
        When enabled, animations are minimized or removed entirely.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Motion preference:</span>
        <Badge variant={prefersReducedMotion ? "destructive" : "default"}>
          {prefersReducedMotion ? "Reduced motion enabled" : "Motion allowed"}
        </Badge>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Animated progress bar ({prefersReducedMotion ? "instant updates" : "smooth transitions"}):
        </p>
        <Progress
          value={progress}
          className={prefersReducedMotion ? "" : "transition-all duration-500"}
          aria-label={`Progress: ${progress}%`}
        />
      </div>

      <div className="rounded-lg border p-4 bg-muted/50 transition-colors duration-150">
        <h3 className="text-sm font-medium mb-2">Accessibility Features</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>CSS: <code>prefers-reduced-motion: reduce</code> disables all transitions</li>
          <li>JS: <code>useReducedMotion()</code> hook adapts behavior programmatically</li>
          <li>Animations are decorative — content remains accessible without them</li>
          <li>Enable via OS settings: System Preferences → Accessibility → Display</li>
        </ul>
      </div>
    </div>
  )
}
