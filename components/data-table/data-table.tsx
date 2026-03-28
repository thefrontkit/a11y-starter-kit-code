"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type RowSelectionState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ColumnHeader } from "./column-header"
import { RowActions } from "./row-actions"
import { Toolbar } from "./toolbar"
import { Pagination } from "./pagination"
import { LiveRegion } from "@/components/a11y/live-region"
import { useAnnounce } from "@/hooks/use-announce"
import { Users } from "lucide-react"
import type { User } from "@/types"

interface DataTableProps {
  data: User[]
}

export function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const { message, announce } = useAnnounce()

  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all rows"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={`Select ${row.original.name}`}
        />
      ),
      enableSorting: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <ColumnHeader column={column} title="Name" onSortChange={announce} />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">
              {row.original.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.original.name}</div>
            <div className="text-xs text-muted-foreground">
              {row.original.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: ({ column }) => (
        <ColumnHeader column={column} title="Role" onSortChange={announce} />
      ),
      cell: ({ row }) => {
        const roleColors: Record<string, string> = {
          admin: "bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20",
          editor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20",
          viewer: "bg-muted text-muted-foreground hover:bg-muted/80",
        }
        return (
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize transition-colors duration-150 ${roleColors[row.original.role] ?? roleColors.viewer}`}
          >
            {row.original.role}
          </span>
        )
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <ColumnHeader column={column} title="Status" onSortChange={announce} />
      ),
      cell: ({ row }) => (
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors duration-150 ${
            row.original.status === "active"
              ? "bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "lastActive",
      header: ({ column }) => (
        <ColumnHeader
          column={column}
          title="Last Active"
          onSortChange={announce}
        />
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => <RowActions user={row.original} />,
    },
  ]

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  })

  const getSortIndicator = (columnId: string): "ascending" | "descending" | "none" => {
    const sort = sorting.find((s) => s.id === columnId)
    if (!sort) return "none"
    return sort.desc ? "descending" : "ascending"
  }

  return (
    <div className="space-y-4">
      <LiveRegion message={message} />

      <Toolbar table={table} onFilterChange={announce} />

      <div
        className="rounded-md border focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        role="region"
        aria-label="Users data table"
        tabIndex={0}
      >
        <Table>
          <caption className="sr-only">
            Users table. Use column headers to sort. {table.getFilteredRowModel().rows.length} rows displayed.
          </caption>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    scope="col"
                    aria-sort={
                      header.column.getCanSort()
                        ? getSortIndicator(header.id)
                        : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-48"
                >
                  <div className="flex flex-col items-center justify-center gap-3 py-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Users className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-base font-medium">No users found</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria.</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination table={table} />
    </div>
  )
}
