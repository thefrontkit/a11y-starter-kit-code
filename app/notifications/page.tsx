import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Sidebar } from "@/components/layout/sidebar"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ModalDemo } from "@/components/notifications/modal-demo"
import { AlertDialogDemo } from "@/components/notifications/alert-dialog-demo"
import { ToastDemo } from "@/components/notifications/toast-demo"
import { ReducedMotionDemo } from "@/components/notifications/reduced-motion-demo"

export const metadata: Metadata = {
  title: "Notifications",
  description: "Accessible notifications page demonstrating focus trapping, escape handling, and reduced motion.",
}

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main id="main-content" className="flex-1 p-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Notifications" },
            ]}
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Notifications & Dialogs
              </h1>
              <p className="text-muted-foreground">
                Accessible modal dialogs, alert dialogs, and toast notifications.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-8">
                <ModalDemo />

                <Separator />

                <AlertDialogDemo />

                <Separator />

                <ToastDemo />

                <Separator />

                <ReducedMotionDemo />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
