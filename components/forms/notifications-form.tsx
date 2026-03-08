"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { LiveRegion } from "@/components/a11y/live-region"
import { useAnnounce } from "@/hooks/use-announce"

export function NotificationsForm() {
  const { message, announce } = useAnnounce()
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [securityEmails, setSecurityEmails] = useState(true)
  const [pushPreference, setPushPreference] = useState("mentions")

  const handleSave = () => {
    announce("Notification preferences saved successfully")
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
          <legend className="text-lg font-semibold">Email Notifications</legend>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-emails" className="text-sm font-medium">
                Marketing emails
              </Label>
              <p id="marketing-emails-desc" className="text-xs text-muted-foreground">
                Receive emails about new products, features, and more.
              </p>
            </div>
            <Switch
              id="marketing-emails"
              checked={marketingEmails}
              onCheckedChange={setMarketingEmails}
              aria-describedby="marketing-emails-desc"
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="security-emails" className="text-sm font-medium">
                Security emails
              </Label>
              <p id="security-emails-desc" className="text-xs text-muted-foreground">
                Receive emails about your account security.
              </p>
            </div>
            <Switch
              id="security-emails"
              checked={securityEmails}
              onCheckedChange={setSecurityEmails}
              aria-describedby="security-emails-desc"
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold">Push Notifications</legend>

          <RadioGroup
            value={pushPreference}
            onValueChange={setPushPreference}
            aria-label="Push notification preference"
          >
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="everything" id="push-everything" />
              <div>
                <Label htmlFor="push-everything" className="text-sm font-medium cursor-pointer">
                  Everything
                </Label>
                <p className="text-xs text-muted-foreground">
                  Push notifications for all activity.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="mentions" id="push-mentions" />
              <div>
                <Label htmlFor="push-mentions" className="text-sm font-medium cursor-pointer">
                  Mentions only
                </Label>
                <p className="text-xs text-muted-foreground">
                  Push notifications only when someone mentions you.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="nothing" id="push-nothing" />
              <div>
                <Label htmlFor="push-nothing" className="text-sm font-medium cursor-pointer">
                  Nothing
                </Label>
                <p className="text-xs text-muted-foreground">
                  No push notifications.
                </p>
              </div>
            </div>
          </RadioGroup>
        </fieldset>

        <Button type="submit" className="touch-target">
          Save Preferences
        </Button>
      </div>
    </form>
  )
}
