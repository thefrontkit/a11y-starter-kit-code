"use client"

import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { LiveRegion } from "@/components/a11y/live-region"
import { useAnnounce } from "@/hooks/use-announce"

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  bio: z.string().max(160, "Bio must be 160 characters or less").optional(),
})

type ProfileValues = z.infer<typeof profileSchema>

export function ProfileForm() {
  const { message, announce } = useAnnounce()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Alice Johnson",
      email: "alice@example.com",
      bio: "Product designer and accessibility advocate.",
    },
  })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500))
    announce("Profile updated successfully")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold mb-4">Profile Information</legend>

        <LiveRegion message={message} />

        <div className="space-y-2">
          <Label htmlFor="profile-name">Name</Label>
          <Input
            id="profile-name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "profile-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="profile-name-error" role="alert" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="profile-email">Email</Label>
          <Input
            id="profile-email"
            type="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "profile-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="profile-email-error" role="alert" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="profile-bio">Bio</Label>
          <Textarea
            id="profile-bio"
            aria-invalid={!!errors.bio}
            aria-describedby="profile-bio-desc"
            {...register("bio")}
          />
          <p id="profile-bio-desc" className="text-xs text-muted-foreground">
            Brief description for your profile. Max 160 characters.
          </p>
          {errors.bio && (
            <p role="alert" className="text-sm text-destructive">
              {errors.bio.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="touch-target">
          {isSubmitting ? "Saving..." : "Save Profile"}
        </Button>
      </fieldset>
    </form>
  )
}
