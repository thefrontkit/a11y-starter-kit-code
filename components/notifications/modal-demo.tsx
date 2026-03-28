"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ModalDemo() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Standard Dialog</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">
        A dialog with <code>role=&quot;dialog&quot;</code>, focus trapping, Escape to close, and focus
        restoration. Built on Radix UI Dialog.
      </p>

      <Dialog>
        <DialogTrigger render={<Button className="touch-target" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="dialog-name">Name</Label>
              <Input id="dialog-name" defaultValue="Alice Johnson" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialog-username">Username</Label>
              <Input id="dialog-username" defaultValue="@alice" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="touch-target">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="rounded-lg border p-4 bg-muted/50 transition-colors duration-150">
        <h3 className="text-sm font-medium mb-2">Accessibility Features</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>Focus is trapped within the dialog when open</li>
          <li>Escape key closes the dialog</li>
          <li>Focus returns to the trigger button on close</li>
          <li>Background content is hidden from screen readers via aria-hidden</li>
        </ul>
      </div>
    </div>
  )
}
