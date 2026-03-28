"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Alert Dialog</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        An alert dialog with <code>role=&quot;alertdialog&quot;</code> for destructive confirmations.
        Cannot be dismissed by clicking outside — the user must choose an action.
      </p>

      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" className="touch-target" />}>
          Delete Account
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="touch-target">Cancel</AlertDialogCancel>
            <AlertDialogAction className="touch-target">
              Yes, delete account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="rounded-lg border p-4 bg-muted/50 transition-colors duration-150">
        <h3 className="text-sm font-medium mb-2">Accessibility Features</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>Uses role=&quot;alertdialog&quot; instead of role=&quot;dialog&quot;</li>
          <li>Cannot be dismissed by clicking outside</li>
          <li>Focus is trapped — user must take an action</li>
          <li>Cancel button is focused by default for safety</li>
        </ul>
      </div>
    </div>
  )
}
