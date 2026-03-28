import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Sidebar } from "@/components/layout/sidebar"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { DataTable } from "@/components/data-table/data-table"
import { users } from "@/lib/data"

export const metadata: Metadata = {
  title: "Data Table",
  description: "Accessible data table demonstrating aria-sort, screen reader announcements, and keyboard navigation.",
}

export default function DataTablePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main id="main-content" className="flex-1 p-6 animate-page-enter">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Data Table" },
            ]}
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight leading-tight">Users</h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manage your team members and their roles.
              </p>
            </div>

            <DataTable data={users} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
