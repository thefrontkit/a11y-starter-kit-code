interface VisuallyHiddenProps {
  children: React.ReactNode
  as?: "span" | "div" | "h2" | "h3" | "p"
}

export function VisuallyHidden({ children, as: Tag = "span" }: VisuallyHiddenProps) {
  return <Tag className="sr-only">{children}</Tag>
}
