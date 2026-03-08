# A11y Starter Kit

A free, production-ready accessibility starter kit by [TheFrontKit](https://thefrontkit.com). Build WCAG 2.1 AA compliant interfaces from day one with Next.js 16, Tailwind CSS 4, and shadcn/ui.

## Why This Kit?

Most starter kits treat accessibility as an afterthought. This one bakes it in from the start. Every component, page, and interaction has been built with keyboard users, screen readers, and assistive technologies in mind.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **TypeScript**
- **React Hook Form** + **Zod** validation
- **TanStack Table** for data tables

## Demo Pages

| Page | What It Demonstrates |
|------|---------------------|
| **Login** | Accessible forms, error announcements, focus management, password visibility toggles |
| **Dashboard** | Skip links, ARIA landmarks, keyboard sidebar navigation, breadcrumbs |
| **Data Table** | Sortable headers with `aria-sort`, screen reader announcements, pagination |
| **Settings** | Fieldset/legend grouping, toggle switches, radio groups, save confirmations |
| **Notifications** | Focus trapping, escape key handling, toast notifications, reduced motion support |

## Accessibility Features

- **Keyboard Navigation** - Full keyboard support with skip links, focus trapping, and arrow key navigation
- **Screen Reader Support** - ARIA landmarks, live regions, and semantic HTML throughout
- **Reduced Motion** - Respects `prefers-reduced-motion` for users with motion sensitivities
- **Touch Accessible** - Minimum 44px touch targets and proper spacing
- **Dark Mode** - System-aware theme switching with proper contrast ratios
- **Focus Management** - Visible focus indicators and logical focus order on every page

## Custom Hooks

| Hook | Purpose |
|------|---------|
| `useAnnounce` | Screen reader announcements via ARIA live regions |
| `useFocusTrap` | Trap focus within modals and dialogs |
| `useKeyboardNavigation` | Arrow key navigation for menus and lists |
| `useReducedMotion` | Detect and respect reduced motion preferences |

## Components

**A11y Utilities**
- `LiveRegion` - Dynamic screen reader announcements
- `VisuallyHidden` - Content visible only to assistive technology

**Layout**
- `SkipLink` - Jump to main content for keyboard users
- `Header`, `Footer`, `Sidebar`, `Breadcrumbs`
- `MobileNav` - Accessible mobile navigation
- `ThemeToggle` - Dark/light mode switcher

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the demos.

## Project Structure

```
app/
  login/          # Accessible login & signup forms
  dashboard/      # Dashboard with landmarks & navigation
  data-table/     # Sortable, screen-reader-friendly table
  settings/       # Form controls & grouped settings
  notifications/  # Modals, toasts & focus trapping

components/
  a11y/           # Accessibility utility components
  forms/          # Form components with validation
  layout/         # Page layout components
  ui/             # shadcn/ui base components
  dashboard/      # Dashboard-specific components
  data-table/     # Table-specific components
  notifications/  # Notification & dialog components

hooks/            # Custom accessibility hooks
```

## License

Free to use for personal and commercial projects. Built and maintained by [TheFrontKit](https://thefrontkit.com).
