# Portfolio

Personal portfolio site of Mohammed Bashir Bobboi. Built with Next.js 16 App Router, React 19, and Tailwind v4.

## Stack

- **Next.js 16.2.5** (App Router)
- **React 19.2.4** with React Compiler enabled
- **Tailwind CSS v4** via `@tailwindcss/postcss` — theme tokens inline in `src/app/globals.css`, no `tailwind.config`
- **TypeScript**, ESLint flat config (`eslint.config.mjs`)
- **Motion** for animations
- **shadcn/ui** + Radix Slot + Base UI primitives
- **Geist Sans / Geist Mono** via `next/font/google`
- `@vercel/analytics`

## Scripts

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

No test runner configured.

## Layout

```
src/
  app/
    layout.tsx       # root layout, fonts, metadata
    page.tsx         # home page
    globals.css      # Tailwind import + @theme tokens + dark mode
  components/        # feature components
    ui/              # shadcn primitives
    animate-ui/      # animation helpers
  lib/utils.ts
public/              # static assets
```

Path alias: `@/*` → `src/*`.

## Notable components

- `radial-nav-wrapper` — draggable radial nav, mobile flashing label
- `project-tech-stack` — animated tech tile grid with tooltips
- `github-chart`, `watercolor-card`, `lazy-video`, `tappable-video`, `skill-tile`, `tech-icon`

## Deploy

Deployed on Vercel. Push to `main` triggers production build.
