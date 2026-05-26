## Commands

- `bun dev` — start dev server (uses Turbopack)
- `bun run build` — production build
- `bun run lint` — run Biome check (lint + format)
- `bun run lint:fix` — auto-fix lint and format issues
- `bun run format` — format all files with Biome
- `bun start` — serve production build

Pre-commit hook runs Biome check on staged files via lint-staged/husky.

## Tech Stack

- **Next.js 16** (App Router, React 19, RSC enabled)
- **Tailwind CSS v4** with `@tailwindcss/postcss` and `tailwindcss-animate`
- **shadcn/ui** (new-york style, aliases: `@/components/ui`, `@/lib/utils`)
- **Framer Motion** for animations
- **next-themes** for dark/light mode (default: dark)
- **Vercel Analytics** integrated in root layout
- **Biome** (lint + format)
- **bun** (package manager + runtime)

## Architecture

Single-page app — `src/app/page.tsx` composes all sections (Header, About, Projects, Blog) wrapped in `AnimatedFadeUp` for staggered entrance animations.

- `src/app/` — root layout, page, not-found
- `src/components/` — section components (about, projects, blog, header, footer) and shared UI
- `src/components/ui/` — shadcn primitives (button, badge, card, grid-pattern)
- `src/components/icons/` — custom icon components
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/styles/globals.css` — theme tokens (OKLCH variables active via `@theme inline`)

## File & Code Limits

- Max **250 lines** per file
- Max **120 lines** per component
- Max **50 lines** per function
- If a file exceeds limits — split it

## Naming Conventions

- **Files**: `kebab-case.ts` / `kebab-case.tsx`
- **Components**: `PascalCase` (`export function UserCard`)
- **Functions**: `camelCase` (`formatDate`)
- **Constants**: `UPPER_SNAKE_CASE` (`MAX_RETRY_COUNT`)
- **Types/Interfaces**: `PascalCase` (`interface UserProps`)
- **Folders**: `kebab-case`

## Components

- Always `export function` — no default exports
- Props defined as `interface XProps` in same file
- One component per file
- Extract to `components/shared/` if used 2+ times

## TypeScript

- No `any` — use `unknown` + type guards
- No `as` type casting — use proper types
- Prefer `interface` over `type` for object shapes

## Imports

- Absolute paths only: `@/components/...`, `@/lib/...`
- No relative imports outside the same folder

## Styling Notes

- Colors use OKLCH CSS custom properties in `globals.css`, active via `@theme inline`
- Dark mode via class strategy (`.dark` on `<html>`)
- Remote images allowed from `dg324oe28w.ufs.sh` (configured in `next.config.mjs`)

## Git

- No `Co-Authored-By` line in commits
- No `Co-Authored-By` or AI attribution in PRs

## Code Quality

- No `console.log` in committed code (use Biome `noConsoleLog` rule)
- No commented-out code
- No unused variables or imports (Biome enforces this)
- Run `bun run lint:fix` before committing

## Brainstorming Preferences

- **No visual companion** — do not offer the browser-based visual companion during brainstorming sessions. The user has declined this feature.