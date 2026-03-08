"use client"

import { useCallback, useRef, type RefObject } from "react"

interface UseKeyboardNavigationOptions {
  orientation?: "vertical" | "horizontal"
  loop?: boolean
  itemSelector?: string
}

export function useKeyboardNavigation({
  orientation = "vertical",
  loop = true,
  itemSelector = '[role="menuitem"], [role="option"], a, button',
}: UseKeyboardNavigationOptions = {}): {
  containerRef: RefObject<HTMLElement | null>
  handleKeyDown: (e: React.KeyboardEvent) => void
} {
  const containerRef = useRef<HTMLElement>(null)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!containerRef.current) return

      const items = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(itemSelector)
      ).filter((el) => !el.hasAttribute("disabled"))

      if (items.length === 0) return

      const currentIndex = items.indexOf(document.activeElement as HTMLElement)
      let nextIndex = currentIndex

      const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft"
      const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight"

      switch (e.key) {
        case nextKey:
          e.preventDefault()
          nextIndex = currentIndex + 1
          if (nextIndex >= items.length) {
            nextIndex = loop ? 0 : items.length - 1
          }
          break
        case prevKey:
          e.preventDefault()
          nextIndex = currentIndex - 1
          if (nextIndex < 0) {
            nextIndex = loop ? items.length - 1 : 0
          }
          break
        case "Home":
          e.preventDefault()
          nextIndex = 0
          break
        case "End":
          e.preventDefault()
          nextIndex = items.length - 1
          break
      }

      if (nextIndex !== currentIndex && items[nextIndex]) {
        items[nextIndex].focus()
      }
    },
    [orientation, loop, itemSelector]
  )

  return { containerRef, handleKeyDown }
}
