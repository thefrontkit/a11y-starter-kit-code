"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react"

export function ToastDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Toast Notifications</h2>
      <p className="text-sm text-muted-foreground">
        Toast notifications powered by Sonner with <code>aria-live</code> regions
        for screen reader announcements.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="touch-target"
          onClick={() =>
            toast.success("Changes saved successfully", {
              description: "Your profile has been updated.",
            })
          }
        >
          <CheckCircle className="mr-2 h-4 w-4" aria-hidden="true" />
          Success Toast
        </Button>

        <Button
          variant="outline"
          className="touch-target"
          onClick={() =>
            toast.error("Something went wrong", {
              description: "Please try again later.",
            })
          }
        >
          <XCircle className="mr-2 h-4 w-4" aria-hidden="true" />
          Error Toast
        </Button>

        <Button
          variant="outline"
          className="touch-target"
          onClick={() =>
            toast.warning("Unsaved changes", {
              description: "You have unsaved changes that will be lost.",
            })
          }
        >
          <AlertTriangle className="mr-2 h-4 w-4" aria-hidden="true" />
          Warning Toast
        </Button>

        <Button
          variant="outline"
          className="touch-target"
          onClick={() =>
            toast.info("New update available", {
              description: "Version 2.0 is ready to install.",
            })
          }
        >
          <Info className="mr-2 h-4 w-4" aria-hidden="true" />
          Info Toast
        </Button>
      </div>

      <div className="rounded-md border p-4 bg-muted/50">
        <h3 className="text-sm font-medium mb-2">Accessibility Features</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Toasts are announced via aria-live regions</li>
          <li>Each toast has a close button accessible via keyboard</li>
          <li>Toasts auto-dismiss but can be paused on hover</li>
          <li>Screen readers announce the toast message and description</li>
        </ul>
      </div>
    </div>
  )
}
