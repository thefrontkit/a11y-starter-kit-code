"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LiveRegion } from "@/components/a11y/live-region"
import { useAnnounce } from "@/hooks/use-announce"

export function PrivacyForm() {
  const { message, announce } = useAnnounce()
  const [profileVisibility, setProfileVisibility] = useState("public")
  const [activityStatus, setActivityStatus] = useState(true)
  const [readReceipts, setReadReceipts] = useState(true)

  const handleSave = () => {
    announce("Privacy settings saved successfully")
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSave()
      }}
    >
      <div className="space-y-6">
        <LiveRegion message={message} />

        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold">Privacy Settings</legend>

          <div className="space-y-2 rounded-lg border p-4">
            <Label htmlFor="profile-visibility">Profile Visibility</Label>
            <Select value={profileVisibility} onValueChange={(v) => v && setProfileVisibility(v)}>
              <SelectTrigger id="profile-visibility">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="team-only">Team Only</SelectItem>
              </SelectContent>
            </Select>
            <p id="profile-visibility-desc" className="text-xs text-muted-foreground">
              Controls who can see your profile information.
            </p>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="activity-status" className="text-sm font-medium">
                Show activity status
              </Label>
              <p id="activity-status-desc" className="text-xs text-muted-foreground">
                Let others see when you are online.
              </p>
            </div>
            <Switch
              id="activity-status"
              checked={activityStatus}
              onCheckedChange={setActivityStatus}
              aria-describedby="activity-status-desc"
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="read-receipts" className="text-sm font-medium">
                Read receipts
              </Label>
              <p id="read-receipts-desc" className="text-xs text-muted-foreground">
                Let others know when you have read their messages.
              </p>
            </div>
            <Switch
              id="read-receipts"
              checked={readReceipts}
              onCheckedChange={setReadReceipts}
              aria-describedby="read-receipts-desc"
            />
          </div>
        </fieldset>

        <Button type="submit" className="touch-target">
          Save Settings
        </Button>
      </div>
    </form>
  )
}
