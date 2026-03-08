"use client"

import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { type Column } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  onSortChange?: (description: string) => void
}

export function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
  onSortChange,
}: ColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  const sorted = column.getIsSorted()

  const handleSort = () => {
    column.toggleSorting(sorted === "asc")
    const newDirection = sorted === "asc" ? "descending" : "ascending"
    onSortChange?.(`Sorted by ${title} ${newDirection}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("-ml-3 h-8", className)}
      onClick={handleSort}
      aria-label={`Sort by ${title}`}
    >
      {title}
      {sorted === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" aria-hidden="true" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  )
}
