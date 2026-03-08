import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Sidebar } from "@/components/layout/sidebar"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ProfileForm } from "@/components/forms/profile-form"
import { NotificationsForm } from "@/components/forms/notifications-form"
import { PrivacyForm } from "@/components/forms/privacy-form"

export const metadata: Metadata = {
  title: "Settings",
  description: "Accessible settings page demonstrating fieldset/legend, toggles, radio groups, and live regions.",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main id="main-content" className="flex-1 p-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Settings" },
            ]}
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <ProfileForm />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <NotificationsForm />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="privacy" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <PrivacyForm />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
