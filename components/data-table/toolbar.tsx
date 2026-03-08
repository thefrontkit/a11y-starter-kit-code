"use client"

import { Search, X } from "lucide-react"
import { type Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface ToolbarProps<TData> {
  table: Table<TData>
  onFilterChange?: (description: string) => void
}

export function Toolbar<TData>({ table, onFilterChange }: ToolbarProps<TData>) {
  const nameFilter = (table.getColumn("name")?.getFilterValue() as string) ?? ""
  const roleFilter = (table.getColumn("role")?.getFilterValue() as string) ?? ""

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="flex-1 space-y-1">
        <Label htmlFor="table-search">Search by name</Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Input
            id="table-search"
            placeholder="Filter names..."
            value={nameFilter}
            onChange={(e) => {
              table.getColumn("name")?.setFilterValue(e.target.value)
              if (e.target.value) {
                onFilterChange?.(`Filtered by name: ${e.target.value}`)
              } else {
                onFilterChange?.("Filter cleared")
              }
            }}
            className="pl-8"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="role-filter">Filter by role</Label>
        <Select
          value={roleFilter}
          onValueChange={(value) => {
            table.getColumn("role")?.setFilterValue(value === "all" ? "" : value)
            onFilterChange?.(value === "all" ? "Role filter cleared" : `Filtered by role: ${value}`)
          }}
        >
          <SelectTrigger id="role-filter" className="w-[150px]">
            <SelectValue placeholder="All roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(nameFilter || roleFilter) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            table.resetColumnFilters()
            onFilterChange?.("All filters cleared")
          }}
          className="h-9"
        >
          Reset
          <X className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  )
}
