# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

No test runner is configured.

## Stack quirks that matter

- **Next.js 16.2.5** — APIs differ from older training data. Before touching framework-level code (routing, metadata, `next/*` imports, config), read the relevant page in `node_modules/next/dist/docs/` (entry points: `01-app/`, `03-architecture/`).
- **React 19.2.4** with the **React Compiler** enabled (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler` installed). Do not hand-add `useMemo`/`useCallback`/`React.memo` unless the compiler bails out — write plain components and let the compiler memoize.
- **App Router only** — code lives under `src/app/`. There is no `pages/` directory.
- **Tailwind v4** via the PostCSS plugin (`@tailwindcss/postcss`). Theme tokens are declared inline in `src/app/globals.css` with `@theme inline { ... }` and `@import "tailwindcss";` — there is no `tailwind.config.*` file. Add design tokens by editing `globals.css`, not by creating a config.
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`).
- **Fonts**: Geist Sans + Geist Mono loaded via `next/font/google` in `src/app/layout.tsx`, exposed as CSS vars `--font-geist-sans` / `--font-geist-mono` on `<html>`.

## Layout

- `src/app/layout.tsx` — root layout, sets `<html>`/`<body>` to flex column so pages can `flex-1` to fill viewport.
- `src/app/page.tsx` — home page (currently the create-next-app starter).
- `src/app/globals.css` — Tailwind import + theme tokens + dark-mode via `prefers-color-scheme`.
- `public/` — static assets served at site root.
