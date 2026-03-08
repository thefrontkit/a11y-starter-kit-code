"use client"

import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { PasswordInput } from "./password-input"
import { LiveRegion } from "@/components/a11y/live-region"

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })

  const errorMessages = Object.values(errors)
    .map((e) => e?.message)
    .filter(Boolean)
    .join(". ")

  const onSubmit = async (data: LoginValues) => {
    await new Promise((r) => setTimeout(r, 1000))
    alert(`Login submitted for ${data.email}`)
  }

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(onSubmit, () => {
        const firstError = e.currentTarget.querySelector<HTMLElement>(
          "[aria-invalid='true']"
        )
        firstError?.focus()
      })(e)
    },
    [handleSubmit]
  )

  return (
    <form
      onSubmit={onFormSubmit}
      noValidate
      className="space-y-4"
      aria-label="Login form"
    >
      <LiveRegion message={errorMessages} politeness="assertive" />

      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <Input
          id="login-email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "login-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="login-email-error" role="alert" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <PasswordInput
          id="login-password"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          {...register("password")}
        />
        {errors.password && (
          <p id="login-password-error" role="alert" className="text-sm text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="login-remember" {...register("rememberMe")} />
        <Label htmlFor="login-remember" className="text-sm font-normal cursor-pointer">
          Remember me
        </Label>
      </div>

      <Button type="submit" className="w-full touch-target" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  )
}
