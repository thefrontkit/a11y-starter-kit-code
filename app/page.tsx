import Link from "next/link"
import {
  Accessibility,
  KeyRound,
  LayoutDashboard,
  Table2,
  Settings,
  Bell,
  Eye,
  Keyboard,
  Monitor,
  MousePointerClick,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Full keyboard support with skip links, focus trapping, and arrow key navigation.",
  },
  {
    icon: Eye,
    title: "Screen Reader Ready",
    description: "ARIA landmarks, live regions, and semantic HTML for assistive technology.",
  },
  {
    icon: Monitor,
    title: "Responsive & Adaptive",
    description: "Works at every viewport with reduced motion support and high contrast.",
  },
  {
    icon: MousePointerClick,
    title: "Touch Accessible",
    description: "Minimum 44px touch targets and proper spacing for motor accessibility.",
  },
]

const demos = [
  {
    href: "/login",
    icon: KeyRound,
    title: "Login Page",
    description: "Accessible forms, error announcements, focus management, and password toggles.",
    patterns: ["Form Labels", "Error Alerts", "Focus Management"],
  },
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Skip links, ARIA landmarks, keyboard sidebar navigation, and breadcrumbs.",
    patterns: ["Skip Links", "Landmarks", "Keyboard Nav"],
  },
  {
    href: "/data-table",
    icon: Table2,
    title: "Data Table",
    description: "Sortable headers with aria-sort, screen reader announcements, and pagination.",
    patterns: ["aria-sort", "Live Regions", "Table Semantics"],
  },
  {
    href: "/settings",
    icon: Settings,
    title: "Settings",
    description: "Fieldset/legend grouping, toggles, radio groups, and save confirmations.",
    patterns: ["Fieldset/Legend", "aria-describedby", "Live Regions"],
  },
  {
    href: "/notifications",
    icon: Bell,
    title: "Notifications",
    description: "Focus trapping, escape handling, toast notifications, and reduced motion.",
    patterns: ["Focus Trap", "Dialogs", "Reduced Motion"],
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1 animate-page-enter">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="container mx-auto px-4 py-16 md:py-24 text-center"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-sm px-4 py-1 transition-colors duration-150">
                WCAG 2.1 AA Compliant
              </Badge>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Build Accessible UIs{" "}
              <span className="text-primary">From Day One</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
              A starter kit demonstrating WCAG 2.1 AA accessibility patterns
              with Next.js 15, Tailwind CSS 4, and shadcn/ui. Explore 5 demo
              pages showcasing real-world accessible components.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground h-11 px-6 text-sm font-medium transition-all duration-200 hover:bg-primary/85 touch-target focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Accessibility className="mr-2 h-5 w-5" aria-hidden="true" />
                Explore Demos
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary h-11 px-6 text-sm font-medium transition-all duration-200 hover:bg-primary/10 touch-target focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Login Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          aria-labelledby="features-heading"
          className="border-t bg-muted/50 py-16"
        >
          <div className="container mx-auto px-4">
            <h2
              id="features-heading"
              className="text-3xl font-bold text-center mb-12"
            >
              Accessibility Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <Icon
                        className="h-8 w-8 text-primary mb-2"
                        aria-hidden="true"
                      />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Demo Pages Section */}
        <section
          aria-labelledby="demos-heading"
          className="container mx-auto px-4 py-16"
        >
          <h2
            id="demos-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Demo Pages
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => {
              const Icon = demo.icon
              return (
                <Card key={demo.href} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-lg">{demo.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <CardDescription>{demo.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {demo.patterns.map((pattern) => (
                        <Badge key={pattern} variant="outline" className="text-xs transition-colors duration-150 hover:bg-muted">
                          {pattern}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Link
                      href={demo.href}
                      className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background h-8 px-3 text-sm font-medium transition-all duration-150 hover:bg-muted touch-target focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      View Demo
                      <span className="sr-only">: {demo.title}</span>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
