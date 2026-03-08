import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            A11y Starter Kit — Built with accessibility in mind.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors touch-target inline-flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/WCAG21/quickref/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors touch-target inline-flex items-center"
                >
                  WCAG 2.1 Reference
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
