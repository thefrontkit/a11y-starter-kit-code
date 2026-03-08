"use client"

import { useCallback, useState } from "react"

export function useAnnounce() {
  const [message, setMessage] = useState("")

  const announce = useCallback((text: string) => {
    // Clear first to ensure repeated identical messages are announced
    setMessage("")
    requestAnimationFrame(() => {
      setMessage(text)
    })
  }, [])

  const clear = useCallback(() => {
    setMessage("")
  }, [])

  return { message, announce, clear }
}
